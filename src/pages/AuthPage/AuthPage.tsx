import { useEffect } from 'react';
import { postLogin } from '../../apis/member';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../style/common';

const AuthPage = () => {
  const navigate = useNavigate();
  // 구글 로그인 처리
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search); //구글 로그인 redirect URI
    const code = searchParams.get('code'); //URI의 파라미터에서 code를 추출
    console.log('code', code);
    if (code) {
      login(code); //추출한 code로 백엔드에 로그인 api 요청
    }
  }, []);

  // 백엔드에 로그인 api 요청
  const login = async (code: string) => {
    try {
      const data = await postLogin(code);
      if (data) {
        localStorage.setItem('papersToken', data.accessToken);
        localStorage.setItem('nickname', data.nickname);
        navigate(`/main?isFirst=${!data.isExist}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Wrapper>
      <img src={'asset/_common/circle/gif'} />
    </S.Wrapper>
  );
};

export default AuthPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  ${flexCenter};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const S = {
  Wrapper
};
