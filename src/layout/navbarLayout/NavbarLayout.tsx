import { Outlet, useParams } from 'react-router-dom';
import { ReactComponent as WriteIcon } from 'asset/_common/write.svg';
import BasicButton from 'components/_common/BasicButton/BasicButton';
import { S } from './style';
import MyMenu from 'components/FolderPage/MyMenu/MyMenu';
import Header from 'components/Header/Header/Header';
import React, { useEffect, useState } from 'react';
import { LocalStorage } from '../../utils/localStorage';
import { useUserInfoQuery } from '../../hooks/apis/member';
import ProfileBox from '../../components/FolderPage/ProfileBox/ProfileBox';
import { userModalAtom } from '../../atom/modal';
import { useRecoilState } from 'recoil';

const NavbarLayout = () => {
  const [userModalOpen, setUserModalOpen] = useRecoilState(userModalAtom);
  const [isMine, setIsMine] = useState(false);

  const params = useParams();

  useEffect(() => {
    if (LocalStorage.getNickname() == params.nickname) {
      setIsMine(true);
    }
  }, []);

  // const nickname = LocalStorage.getNickname()!;
  const userInfo = useUserInfoQuery(params.nickname!);
  console.log('userInfo', userInfo);

  return (
    <S.Wrapper>
      <Header userInfo={userInfo} />
      <S.NavBarWrapper>
        <S.FlexWrapper>
          {/*프로필 소개글*/}
          <ProfileBox
            isMine={isMine}
            nickname={params.nickname!}
            introduce={userInfo ? userInfo.introduce! : ''}
            profileImgUrl={userInfo ? userInfo.profileImgUrl! : ''}
          />
          {isMine && (
            <>
              <MyMenu />
              <S.ScrapButtonWrapper>
                <BasicButton
                  width={150}
                  height={50}
                  color="positive"
                  fontSize={22}
                >
                  <S.ButtonTextWrapper>
                    <div>스크랩</div>
                    <WriteIcon />
                  </S.ButtonTextWrapper>
                </BasicButton>
              </S.ScrapButtonWrapper>
            </>
          )}
        </S.FlexWrapper>
      </S.NavBarWrapper>

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default NavbarLayout;
