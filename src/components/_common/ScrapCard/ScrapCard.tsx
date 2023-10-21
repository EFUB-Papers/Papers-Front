import React from "react";
import { S } from "./style";
import { ReactComponent as HeartIcon } from "asset/scrapCard/heart.svg";

export type ScrapCardProps = {
  width: number;
  scrapId: number;
  link: string;
  linkTitle: string;
  imgurl: string;
  title: string;
  content: string;
  heartCnt: number;
  author: string;
};

const ScrapCard = (props: ScrapCardProps) => {
  return (
    <S.Wrapper $width={props.width}>
      <S.LinkBox to={props.link} target="_blank">
        <S.LinkTitle>{props.linkTitle}</S.LinkTitle>
      </S.LinkBox>
      <S.ScrapBox>
        <S.ImageBox>
          <S.Img src={props.imgurl} />
        </S.ImageBox>
        <S.Title>{props.title}</S.Title>
        <S.Content>{props.content}</S.Content>
        <S.Footer>
          <HeartIcon />
          <S.HeartCnt>{props.heartCnt}</S.HeartCnt>
          <S.Author>{`by ${props.author}`}</S.Author>
        </S.Footer>
      </S.ScrapBox>
    </S.Wrapper>
  );
};

export default ScrapCard;
