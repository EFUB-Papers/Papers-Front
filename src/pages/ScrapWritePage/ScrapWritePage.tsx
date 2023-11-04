import React, { useRef, useState } from 'react';
import { S } from './style';
import { ReactComponent as ArrowIcon } from 'asset/arrow/downArrow.svg';
import { ReactComponent as LinkIcon } from 'asset/scrapWritePage/link.svg';
import { ReactComponent as ImageIcon } from 'asset/scrapWritePage/image.svg';
import { CATEGORY, CategoryValuesType } from 'constants/Category';
import TagCreator from 'components/_common/TagCreator/TagCreator';

const ScrapWritePage = () => {
  const [category, setCategory] = useState<CategoryValuesType>();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef<HTMLInputElement>(null);

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    if (imgRef.current !== null && imgRef.current.files !== null) {
      const file = imgRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
      };
    }
  };

  return (
    <S.Root>
      <S.Wrapper>
        {/* 카테고리 선택 */}
        <S.CategoryDropdown onClick={() => setCategoryOpen((prev) => !prev)}>
          <S.CategoryText>{category ? category : '카테고리'}</S.CategoryText>
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
        <S.Title
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <TagCreator />
        {/* 링크 */}
        <S.LinkWrapper>
          <LinkIcon />
          <S.Link
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="링크를 입력하세요."
          />
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
            onChange={saveImgFile}
            ref={imgRef}
            style={{ display: 'none' }}
          />
          {imgFile ? (
            <S.ImgPreview src={imgFile} />
          ) : (
            <S.ImageText>표지 이미지를 선택해주세요.</S.ImageText>
          )}
        </S.ImageWrapper>
        <S.Content placeholder="자신의 생각을 적어보세요" />
      </S.Wrapper>
    </S.Root>
  );
};

export default ScrapWritePage;
