import styled from "styled-components";
import BasicButton from "../../components/_common/BasicButton/BasicButton";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "asset/_common/logoAndTitle.svg";
import { ReactComponent as PencilIcon } from "asset/_common/smallWrite.svg";
import CircleIcon from "components/_common/CircleBox/CircleBox";
import { flexCenter } from "style/common";

const MainLayout = () => {
  return (
    <>
      <S.Wrapper>
        <Logo />
        <S.RightWrapper>
          <BasicButton color={"positive"} fontSize={16} width={100} height={40}>
            <S.ButtonWrapper>
              스크랩
              <PencilIcon />
            </S.ButtonWrapper>
          </BasicButton>
          <CircleIcon imgurl="" size="small" />
        </S.RightWrapper>
      </S.Wrapper>
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </>
  );
};
export default MainLayout;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 30px 0 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.lineGrey};
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: rgba(256, 256, 256, 0.8);
`;

const RightWrapper = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 62px;
  display: flex;
  justify-content: space-between;
`;

const ContentWrapper = styled.div`
  width: 100%;
  ${flexCenter}
`;

const S = {
  Wrapper,
  RightWrapper,
  ButtonWrapper,
  ContentWrapper
};
