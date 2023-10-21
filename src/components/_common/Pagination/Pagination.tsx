import React, { useState, useEffect } from "react";
import styled from "styled-components";

type paginationProps = {
  totalDataCount: number;
  page: number;
  perPage: number;
  pagePerGroup: number;
  array: string[];
};
const Pagination = (props: paginationProps) => {
  const { totalDataCount, page, perPage, pagePerGroup, array } = props;
  //perPage : 한 페이지에 몇개씩 보여줄 건지
  //page : 현재 페이지
  //pagePerGroup : 페이지네이션 한 그룹당 몇 페이지씩 묶을 건지

  const [currentPage, setCurrentPage] = useState(page | 1);
  const [currentPageGroup, setCurrentPageGroup] = useState(
    page ? Math.ceil(page / pagePerGroup) : 1
  );

  const lastPageGroup = Math.ceil(totalDataCount / perPage / pagePerGroup);
  const lastPage = Math.ceil(totalDataCount / perPage);

  //이전 버튼 그룹으로 이동(<)
  const onMovePrevGroup = () => {
    return setCurrentPageGroup((prev) => prev - 1);
  };

  //이후 버튼 그룹으로 이동(<)
  const onMoveNextGroup = () => {
    return setCurrentPageGroup((prev) => prev + 1);
  };

  //맨처음으로 이동
  const onMoveFirstPage = () => {
    setCurrentPage(1);
    setCurrentPageGroup(1);
  };

  //맨마지막으로 이동
  const onMoveLastPage = () => {
    setCurrentPage(lastPage);
    setCurrentPageGroup(lastPageGroup);
  };

  //해당 페이지 누르면 페이지 이동
  const onMovePage = (index: number) => {
    setCurrentPage(index);
  };
  useEffect(() => {
    console.log(currentPage, currentPageGroup);
  }, [currentPage]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.TextButton
          onClick={onMoveFirstPage}
          disabled={currentPage / 1 === 1}
        >
          맨처음
        </S.TextButton>
        <S.TextButton
          onClick={onMovePrevGroup}
          disabled={currentPageGroup === 1}
        >
          이전그룹
        </S.TextButton>
        {array.map((e, idx) => {
          const startPage = (currentPageGroup - 1) * 10 + 1;
          return (
            <S.Button
              onClick={() => {
                onMovePage(idx);
              }}
              key={Math.random() * 1000}
            >
              {startPage + idx}
            </S.Button>
          );
        })}
        <S.TextButton
          onClick={onMoveNextGroup}
          disabled={currentPageGroup === lastPageGroup}
        >
          다음그룹
        </S.TextButton>
        <S.TextButton
          onClick={onMoveLastPage}
          disabled={currentPage / 1 === lastPage}
        >
          맨끝
        </S.TextButton>
      </S.Container>
    </S.Wrapper>
  );
};
export default Pagination;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 14px;
  background-color: skyblue;
`;

const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 14px;
`;

const TextButton = styled.button`
  height: 30px;
  font-size: 12px;
  width: 130px;
`;

const S = {
  Wrapper,
  Container,
  Button,
  ArrowButton,
  TextButton
};
