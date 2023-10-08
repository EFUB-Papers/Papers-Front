import React from 'react';
import BasicButton from '../BasicButton';
import { ReactComponent as PencilIcon } from 'asset/_common/pencil.svg';
import { ReactComponent as Logo } from 'asset/_common/logo.svg';
import { ReactComponent as Title } from 'asset/_common/title.svg';
import Profile from 'asset/mock/profile.png';
import { S } from './style';
import CircleIcon from '../CircleBox';

const Header = () => {
  return (
    <S.Wrapper>
      <Logo />
      <S.TitleWrapper>
        <Title />
      </S.TitleWrapper>
      <S.BasicButtonWrapper>
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
      <CircleIcon size="small" imgurl={Profile} />
    </S.Wrapper>
  );
};

export default Header;
