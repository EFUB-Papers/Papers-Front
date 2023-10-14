import React, { useState } from 'react';
import { S } from './style';
import { ReactComponent as NextIcon } from 'asset/navBar/nextArrow.svg';
import { ReactComponent as PrevIcon } from 'asset/navBar/prevArrow.svg';
import { useRef } from 'react';

type NavbarProps = {
  title?: string;
};
const LineNavbar = ({ title }: NavbarProps) => {
  const menuList = [
    '기본 폴더',
    '덕질 폴더',
    '그림 폴더',
    '강사모',
    '고앵이가 너무 좋아',
    '프랑스 한달 살기',
    '시골쥐와 서울쥐',
    '즐거운 맛집 탐방',
    '제주도 여행'
  ];

  const pagePerGroup = 6;

  const totalFolderLength = menuList.length;

  const lastGroup = totalFolderLength / pagePerGroup;

  const [currentX, setCurrentX] = useState<number>(0);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentFolderGroup, setCurrentFolderGroup] = useState(1);

  // const sliderRef = useRef<React.MutableRefObject<any>>();

  const menuWidth = 900;

  const onMovePrevGroup = () => {
    setCurrentFolderGroup(currentFolderGroup - 1);
    const newPosition = currentX + menuWidth;
    setCurrentX(newPosition);
    // sliderRef.current.style.transform = `translateX(${newPosition}px)`;
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const onMoveNextGroup = () => {
    setCurrentFolderGroup(currentFolderGroup + 1);
    const newPosition = currentX + menuWidth;
    setCurrentX(newPosition);
    // sliderRef.current.style.transform = `translateX(${newPosition}px)`;
    setCurrentIdx((currentIdx) => currentIdx - 1);
  };

  const onClickFolder = (index: number) => {
    setCurrentIdx(index);
  };

  return (
    <S.Wrapper>
      {title && <S.Title>{title}</S.Title>}
      <S.FlexWrapper>
        {currentFolderGroup !== 1 && (
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
            // ref={sliderRef}
          ></div>
          {menuList.map((menu, index) => {
            return (
              <S.OneMenu
                currentIdx={currentIdx}
                index={index}
                onClick={() => {
                  onClickFolder(index);
                }}
              >
                <S.Name currentIdx={currentIdx} index={index}>
                  {menu}
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
