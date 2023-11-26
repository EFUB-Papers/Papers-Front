import { S } from './style';

const LoadingPage = () => {
  return (
    <S.Wrapper>
      <div>로딩 중입니다.</div>
      <S.Spinner />
    </S.Wrapper>
  );
};
export default LoadingPage;
