import React, { useEffect, useState } from 'react';
import { S } from './style';
import { ReactComponent as NextIcon } from 'asset/navBar/nextArrow.svg';
import { ReactComponent as PrevIcon } from 'asset/navBar/prevArrow.svg';
import { arraySlice } from 'utils/arrayHelper';
import { OneFolderTypeWithoutUser } from 'types/FolderType';
import { useSetRecoilState } from 'recoil';
import { useSearchParams } from 'react-router-dom';
import BasicButton from '../BasicButton/BasicButton';
import { COLOR } from '../../../style/theme';
import { folderModalAtom } from '../../../atom/modal';
import { ReactComponent as AddIcon } from 'asset/_common/addIcon.svg';

type NavbarProps = {
  title?: string;
  folderList: OneFolderTypeWithoutUser[];
  isMine: boolean;
};

const LineNavbar = ({ isMine, title, folderList }: NavbarProps) => {
  if (!folderList) {
    return <div>폴더 없음</div>;
  }
  //현재 선택된 폴더 인덱스
  const [currentIdx, setCurrentIdx] = useState(0);
  //현재 선택된 폴더 그룹 인덱스
  const [currentFolderGroup, setCurrentFolderGroup] = useState(0);

  const pagePerGroup = 5;

  const totalFolderLength = folderList?.length;

  const lastGroup = Math.ceil(totalFolderLength / pagePerGroup) - 1;
  const slicedMenu: OneFolderTypeWithoutUser[][] =
    folderList && arraySlice(folderList);

  const [searchParams, setSearchParams] = useSearchParams();

  const onMovePrevGroup = () => {
    setCurrentFolderGroup(currentFolderGroup - 1);
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const onMoveNextGroup = () => {
    setCurrentFolderGroup(currentFolderGroup + 1);
    console.log('current', currentFolderGroup);
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  useEffect(() => {
    console.log(currentFolderGroup);
    console.log(lastGroup);
  }, []);

  const onClickFolder = (index: number, folderId: number) => {
    setCurrentIdx(index);
    searchParams.set('folderId', String(folderId));
    setSearchParams(searchParams);
  };

  const setIsEditModalOpen = useSetRecoilState(folderModalAtom);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.FlexWrapper>
          {title && <S.Title>{title}</S.Title>}
          {isMine && (
            <S.EditModalButton
              onClick={() => {
                setIsEditModalOpen((prev) => ({
                  ...prev,
                  option: 'edit',
                  open: true
                }));
              }}
            >
              폴더 편집
            </S.EditModalButton>
          )}
        </S.FlexWrapper>
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
                highlight={
                  folder.folderId === Number(searchParams.get('folderId'))
                }
              >
                <S.Name
                  currentIdx={currentIdx}
                  index={index}
                  onClick={() => {
                    onClickFolder(index, folder.folderId);
                  }}
                >
                  {!index && !currentFolderGroup
                    ? '기본 폴더'
                    : folder?.folderName}
                </S.Name>
              </S.OneMenu>
            );
          })}
          {isMine && (
            <S.AddFolderButton>
              <BasicButton
                color={'transparent'}
                textColor={COLOR.darkGrey}
                fontSize={15}
                width={80}
                height={30}
                onClick={() => {
                  setIsEditModalOpen((prev) => ({
                    ...prev,
                    option: 'add',
                    open: true
                  }));
                }}
              >
                폴더 추가
              </BasicButton>
              <AddIcon />
            </S.AddFolderButton>
          )}
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
