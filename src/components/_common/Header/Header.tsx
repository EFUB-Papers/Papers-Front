import BasicButton from '../BasicButton/BasicButton';
import { ReactComponent as PencilIcon } from 'asset/_common/pencil.svg';
import { ReactComponent as Logo } from 'asset/_common/logo.svg';
import { S } from './style';
import CircleIcon from '../CircleBox/CircleBox';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
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
      <S.ProfileImgWrapper onClick={() => navigate('myPage')}>
        <CircleIcon size="small" imgurl="" />
      </S.ProfileImgWrapper>
    </S.Wrapper>
  );
};

export default Header;
