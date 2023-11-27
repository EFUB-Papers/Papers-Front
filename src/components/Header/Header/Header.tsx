import BasicButton from '../../_common/BasicButton/BasicButton';
import { ReactComponent as PencilIcon } from 'asset/_common/pencil.svg';
import { ReactComponent as BlackLogo } from 'asset/_common/logoBlack.svg';
import { ReactComponent as WhiteLogo } from 'asset/_common/logoWhite.svg';
import { ReactComponent as LogoImg } from 'asset/_common/logoImg.svg';
import { S } from './style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import { useNavigate } from 'react-router-dom';
import ModeToggleButton from '../ModeToggleButton/ModeToggleButton';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';
import { useUserInfoQuery } from '../../../hooks/apis/member';
import { LocalStorage } from 'utils/localStorage';

export type HeaderProps = {
  isWriteButton?: boolean;
};

const Header = ({ isWriteButton = true }: HeaderProps) => {
  const navigate = useNavigate();
  const mode = useRecoilValue(modeState);

  const nickname = LocalStorage.getNickname()!;
  const userInfo = useUserInfoQuery(nickname);

  return (
    <S.Wrapper>
      <S.LogoWrapper
        onClick={() => {
          navigate('/main');
        }}
      >
        <LogoImg />
        {mode == 'light' ? <BlackLogo /> : <WhiteLogo />}
      </S.LogoWrapper>
      <S.BasicButtonWrapper>
        <ModeToggleButton />
        {isWriteButton && (
          <BasicButton
            width={100}
            height={35}
            color="positive"
            fontSize={18}
            onClick={() => navigate('/scrap-write')}
          >
            <S.BasicButtonText>스크랩</S.BasicButtonText>
            <PencilIcon />
          </BasicButton>
        )}
      </S.BasicButtonWrapper>
      {userInfo ? (
        <S.ProfileImgWrapper
          onClick={() => navigate(`/folder/${userInfo.nickname}`)}
        >
          <CircleIcon size="small" imgUrl={userInfo.profileImgUrl} />
        </S.ProfileImgWrapper>
      ) : (
        <BasicButton
          color={'grey'}
          fontSize={14}
          width={68}
          height={35}
          onClick={() => {
            navigate('/');
          }}
        >
          로그인
        </BasicButton>
      )}
    </S.Wrapper>
  );
};

export default Header;
