import React, { useRef, useState } from 'react';
import { S } from './style';
import { ReactComponent as ArrowIcon } from 'asset/arrow/downArrow.svg';
import { ReactComponent as LinkIcon } from 'asset/scrapWritePage/link.svg';
import { ReactComponent as ImageIcon } from 'asset/scrapWritePage/image.svg';
import { ReactComponent as ExitIcon } from 'asset/scrapWritePage/exit.svg';
import { ReactComponent as DeleteIcon } from 'asset/_common/smallDeleteIcon.svg';
import { ReactComponent as DeleteIconWhite } from 'asset/_common/smallDeleteIconWhite.svg';
import { CATEGORY, CategoryValuesType } from 'constants/Category';
import TagCreator from 'components/_common/TagCreator/TagCreator';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import LinkPreview from 'components/_common/LinkPreview/LinkPreview';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modeState } from 'atom/mode';
import { folderEditModal, folderSelectModal } from '../../atom/modal';

const ScrapWritePage = () => {
  const [category, setCategory] = useState<CategoryValuesType>();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [showLinkPreview, setShowLinkPreview] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const [content, setContent] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const mode = useRecoilValue(modeState);
  const setFolderEditModalOpen = useSetRecoilState(folderEditModal);
  const setFolderSelectModalOpen = useSetRecoilState(folderSelectModal);

  // 링크 업로드 이벤트 핸들러
  const onLinkUpload = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && link) {
      console.log(link, '링크 미리보기 생성');
      setShowLinkPreview(true);
    }
  };

  // 이미지 업로드 이벤트 핸들러
  const onImageUpload = () => {
    if (imgRef.current !== null && imgRef.current.files !== null) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
      };
    }
  };

  const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    // 제목의 높이 자동조절
    if (titleRef !== null && titleRef.current !== null) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = titleRef.current.scrollHeight + 'px';
    }
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    // 내용의 높이 자동조절
    if (contentRef !== null && contentRef.current !== null) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
    }
  };

  return (
    <>
      <S.Root>
        <S.Wrapper>
          <S.FolderButtonWrapper>
            {/* 카테고리 선택 */}
            <S.CategoryDropdown
              onClick={() => setCategoryOpen((prev) => !prev)}
            >
              <S.CategoryText>
                {category ? category : '카테고리'}
              </S.CategoryText>
              <S.ArrowButton>
                <ArrowIcon />
              </S.ArrowButton>
              {categoryOpen && (
                <S.CategoryList>
                  {Object.values(CATEGORY).map((value) => (
                    <S.CategoryItem onClick={() => setCategory(value)}>
                      {value}
                    </S.CategoryItem>
                  ))}
                </S.CategoryList>
              )}
            </S.CategoryDropdown>
            {/*폴더 선택*/}
            <S.Button
              onClick={() => {
                setFolderSelectModalOpen(true);
              }}
            >
              폴더 선택
            </S.Button>
            <S.Button
              onClick={() => {
                setFolderEditModalOpen(true);
              }}
            >
              폴더 편집
            </S.Button>
          </S.FolderButtonWrapper>
          {/* 제목 */}
          <S.Title
            rows={1}
            ref={titleRef}
            value={title}
            onChange={onChangeTitle}
            placeholder="제목을 입력하세요"
          />
          <TagCreator />
          {/* 링크 */}
          <S.LinkWrapper>
            <LinkIcon />
            <S.LinkColumnWrapper>
              <S.Link
                value={link}
                onChange={(e) => {
                  setLink(e.target.value);
                  setShowLinkPreview(false);
                }}
                onKeyDown={onLinkUpload}
                placeholder="링크를 입력하세요."
              />
              {showLinkPreview && (
                <S.LinkBoxWrapper>
                  <LinkPreview size={'big'} url={link} />
                  <S.DeleteButton>
                    {mode === 'light' ? <DeleteIcon /> : <DeleteIconWhite />}
                  </S.DeleteButton>
                </S.LinkBoxWrapper>
              )}
            </S.LinkColumnWrapper>
          </S.LinkWrapper>
          {/* 이미지 */}
          <S.ImageWrapper>
            <S.ImageButton htmlFor="image">
              <ImageIcon />
            </S.ImageButton>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={onImageUpload}
              ref={imgRef}
              style={{ display: 'none' }}
            />
            {imgFile ? (
              <S.LinkBoxWrapper>
                <S.ImagePreview backgroundImage={imgFile} />
                <S.DeleteButton>
                  {mode === 'light' ? <DeleteIcon /> : <DeleteIconWhite />}
                </S.DeleteButton>
              </S.LinkBoxWrapper>
            ) : (
              <S.ImageText placeholder="표지 이미지를 선택해주세요." disabled />
            )}
          </S.ImageWrapper>
          {/* 내용 */}
          <S.Content
            ref={contentRef}
            value={content}
            onChange={onChangeContent}
            placeholder="자신의 생각을 적어보세요"
          />
          {/* 푸터 */}
          <S.Footer>
            <S.ExitButton>
              <ExitIcon />
              나가기
            </S.ExitButton>
            <BasicButton color="positive" fontSize={18} width={110} height={40}>
              등록하기
            </BasicButton>
          </S.Footer>
        </S.Wrapper>
      </S.Root>
    </>
  );
};

export default ScrapWritePage;
