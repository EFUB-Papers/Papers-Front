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

export type HeaderProps = {
  isWriteButton?: boolean;
};

const Header = ({ isWriteButton = true }: HeaderProps) => {
  const navigate = useNavigate();
  const mode = useRecoilValue(modeState);

  return (
    <S.Wrapper>
      <S.LogoWrapper
        onClick={() => {
          navigate('/');
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

      <S.ProfileImgWrapper onClick={() => navigate('/folder/나는 고양이다')}>
        <CircleIcon size="small" imgUrl="" />
      </S.ProfileImgWrapper>
    </S.Wrapper>
  );
};

export default Header;
