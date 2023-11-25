import React, { useRef, useState, useEffect } from 'react';
import { S } from './style';
import { ReactComponent as ArrowIcon } from 'asset/arrow/downArrow.svg';
import { ReactComponent as LinkIcon } from 'asset/scrapWritePage/link.svg';
import { ReactComponent as ImageIcon } from 'asset/scrapWritePage/image.svg';
import { ReactComponent as ExitIcon } from 'asset/scrapWritePage/exit.svg';
import { ReactComponent as DeleteIcon } from 'asset/_common/smallDeleteIcon.svg';
import { ReactComponent as DeleteIconWhite } from 'asset/_common/smallDeleteIconWhite.svg';
import {
  CATEGORY_WITHOUT_ALL,
  CategoryWithoutAllKeyType
} from 'constants/Category';
import TagCreator from 'components/_common/TagCreator/TagCreator';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import LinkPreview from 'components/_common/LinkPreview/LinkPreview';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modeState } from 'atom/mode';
import { folderModalAtom } from '../../atom/modal';
import { useNewScrapMutation, usePatchScrapMutation } from 'hooks/apis/scrap';
import { OneNewScrapType } from 'apis/scraps';
import { NewTagType } from 'types/TagType';
import { LocalStorage } from 'utils/localStorage';
import { useLocation } from 'react-router-dom';
import { PrevScrapType } from 'pages/DetailPage/DetailPage';

const ScrapWritePage = () => {
  // 게시글 수정 시 기존 스크랩 내용
  const { state: prevScrap, pathname } = useLocation() as unknown as {
    state: PrevScrapType;
    pathname: string;
  };

  const [category, setCategory] = useState<CategoryWithoutAllKeyType>(
    prevScrap && prevScrap.category
  );
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState(prevScrap ? prevScrap.scrapTitle : '');
  const [link, setLink] = useState(prevScrap ? prevScrap.scrapLink : '');
  const [showLinkPreview, setShowLinkPreview] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const [content, setContent] = useState(
    prevScrap ? prevScrap.scrapContent : ''
  );
  const [newTagList, setNewTagList] = useState<NewTagType[]>(
    prevScrap ? prevScrap.tags : []
  );

  const imgRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const mode = useRecoilValue(modeState);
  const [folderModalState, setFolderModalState] =
    useRecoilState(folderModalAtom);

  const { postNewScrapMutate } = useNewScrapMutation(); //스크랩 작성 mutate
  const { patchNewScrapMutate } = usePatchScrapMutation(); //스크랩 수정 mutate

  //스크랩 생성/수정 요청
  const onSubmit = () => {
    if (
      imgRef &&
      imgRef.current &&
      imgRef.current.files &&
      title &&
      link &&
      content &&
      category &&
      folderModalState.folderId !== -1
    ) {
      // dto 가공
      const dto: OneNewScrapType = {
        writerNickname: LocalStorage.getNickname()!,
        scrapTitle: title,
        scrapLink: link,
        scrapContent: content,
        category: category as string,
        folderId: folderModalState.folderId,
        tags: newTagList.map((newTag) => {
          return { tagName: newTag.tagName };
        })
      };
      console.log('스크랩 작성/수정 body의 dto', dto);

      // 폼데이터 가공
      const formData = new FormData();

      // 폼데이터에 thumbnail 추가
      imgRef.current.files[0]
        ? formData.append('thumbnail', imgRef.current.files[0])
        : formData.append('thumbnail', new Blob([]));

      // 폼데이터에 dto 추가
      formData.append(
        'dto',
        new Blob([JSON.stringify(dto)], {
          type: 'application/json'
        })
      );
      for (const x of formData.entries()) {
        console.log(x);
      }

      // 스크랩 작성/수정 api 요청
      pathname === '/scrap-write'
        ? postNewScrapMutate(formData)
        : patchNewScrapMutate({
            scrapId: prevScrap?.scrapId,
            scrapInfo: formData
          });
    }
  };

  //스크랩 수정 시 기존에 있던 링크 미리보기
  useEffect(() => {
    prevScrap?.scrapLink && setShowLinkPreview(true);
  }, []);

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
                {category ? CATEGORY_WITHOUT_ALL[category] : '카테고리'}
              </S.CategoryText>
              <S.ArrowButton>
                <ArrowIcon />
              </S.ArrowButton>
              {categoryOpen && (
                <S.CategoryList>
                  {Object.keys(CATEGORY_WITHOUT_ALL).map((key) => (
                    <S.CategoryItem
                      onClick={() =>
                        setCategory(key as CategoryWithoutAllKeyType)
                      }
                    >
                      {CATEGORY_WITHOUT_ALL[key as CategoryWithoutAllKeyType]}
                    </S.CategoryItem>
                  ))}
                </S.CategoryList>
              )}
            </S.CategoryDropdown>
            {/*폴더 선택*/}
            <S.Button
              onClick={() => {
                setFolderModalState({
                  option: 'scrapWrite',
                  open: true,
                  scrapId: 0,
                  folderId: -1
                });
              }}
            >
              폴더 선택
            </S.Button>
            <S.Button
              onClick={() => {
                setFolderModalState({
                  option: 'edit',
                  open: true,
                  scrapId: 0,
                  folderId: -1
                });
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
          {/* 태그 생성자 */}
          <TagCreator newTagList={newTagList} setNewTagList={setNewTagList} />
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
              name="file"
              accept="image/*"
              onChange={onImageUpload}
              ref={imgRef}
              style={{ display: 'none' }}
            />
            {imgFile || prevScrap?.imgUrl ? (
              <S.LinkBoxWrapper>
                <S.ImagePreview
                  backgroundImage={imgFile ? imgFile : prevScrap?.imgUrl}
                />
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
            <BasicButton
              onClick={onSubmit}
              color="positive"
              fontSize={18}
              width={110}
              height={40}
            >
              등록하기
            </BasicButton>
          </S.Footer>
        </S.Wrapper>
      </S.Root>
    </>
  );
};

export default ScrapWritePage;
