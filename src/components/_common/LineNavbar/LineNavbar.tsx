import React, { useState } from 'react';
import { S } from './style';
import { ReactComponent as NextIcon } from 'asset/navBar/nextArrow.svg';
import { ReactComponent as PrevIcon } from 'asset/navBar/prevArrow.svg';
import { arraySlice } from 'utils/arrayHelper';
import { MyFolderMock } from 'mock/userMock';
import { MyFolderType } from 'types/FolderType';
import { useRecoilState } from 'recoil';
import { folderEditModal } from 'atom/modal';

type NavbarProps = {
  title?: string;
};
const LineNavbar = ({ title }: NavbarProps) => {
  //현재 선택된 폴더 인덱스
  const [currentIdx, setCurrentIdx] = useState(0);
  //현재 선택된 폴더 그룹 인덱스
  const [currentFolderGroup, setCurrentFolderGroup] = useState(0);

  const pagePerGroup = 6;

  const totalFolderLength = MyFolderMock.length;

  const lastGroup = Math.ceil(totalFolderLength / pagePerGroup) - 1;
  const slicedMenu: MyFolderType[][] = arraySlice(MyFolderMock);

  const onMovePrevGroup = () => {
    setCurrentFolderGroup(currentFolderGroup - 1);
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const onMoveNextGroup = () => {
    setCurrentFolderGroup(currentFolderGroup + 1);
    console.log('current', currentFolderGroup);
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const onClickFolder = (index: number) => {
    setCurrentIdx(index);
  };

  const [isEditModalOpen, setIsEditModalOpen] = useRecoilState(folderEditModal);
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        {title && <S.Title>{title}</S.Title>}
        <S.EditModalButton
          onClick={() => {
            setIsEditModalOpen(true);
          }}
        >
          폴더 편집
        </S.EditModalButton>
      </S.TitleWrapper>
      <S.FlexWrapper>
        {currentFolderGroup !== 0 && (
          <PrevIcon
            style={{ cursor: 'pointer', marginTop: '20px' }}
            onClick={onMovePrevGroup}
          />
        )}
        <S.ListWrapper>
          <div
            style={{
              display: 'flex',
              position: 'absolute'
            }}
          ></div>
          {slicedMenu[currentFolderGroup]?.map((folder, index) => {
            return (
              <S.OneMenu
                currentIdx={currentIdx}
                index={index}
                onClick={() => {
                  onClickFolder(index);
                }}
              >
                <S.Name currentIdx={currentIdx} index={index}>
                  {folder.folderName}
                </S.Name>
              </S.OneMenu>
            );
          })}
        </S.ListWrapper>
        {currentFolderGroup !== lastGroup && (
          <NextIcon
            style={{ cursor: 'pointer', marginTop: '20px' }}
            onClick={onMoveNextGroup}
          />
        )}
      </S.FlexWrapper>
    </S.Wrapper>
  );
};
export default LineNavbar;
