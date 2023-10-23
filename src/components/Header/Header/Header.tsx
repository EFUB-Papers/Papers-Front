import BasicButton from '../../_common/BasicButton/BasicButton';
import { ReactComponent as PencilIcon } from 'asset/_common/pencil.svg';
import { ReactComponent as BlackLogo } from 'asset/_common/logoBlack.svg';
import { ReactComponent as WhiteLogo } from 'asset/_common/logoWhite.svg';
import { ReactComponent as LogoImg } from 'asset/_common/logoImg.svg';
import { S } from './style';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import { useNavigate } from 'react-router';
import ModeToggleButton from '../ModeToggleButton/ModeToggleButton';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from '../../../atom/mode';

const Header = () => {
  const navigate = useNavigate();
  const mode = useRecoilValue(modeState);
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <LogoImg />
        {mode == 'day' ? <BlackLogo /> : <WhiteLogo />}
      </S.LogoWrapper>
      <S.BasicButtonWrapper>
        <ModeToggleButton />
        <BasicButton
          width={100}
          height={35}
          color="positive"
          fontSize={18}
          onClick={() => {}}
        >
          <S.BasicButtonText>스크랩</S.BasicButtonText>
          <PencilIcon />
        </BasicButton>
      </S.BasicButtonWrapper>
      <S.ProfileImgWrapper onClick={() => navigate('myPage')}>
        <CircleIcon size="small" imgurl="" />
      </S.ProfileImgWrapper>
    </S.Wrapper>
  );
};

export default Header;
