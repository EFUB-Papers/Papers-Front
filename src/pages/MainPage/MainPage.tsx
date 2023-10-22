import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import ScrapCard, {
  ScrapCardProps
} from 'components/_common/ScrapCard/ScrapCard';
import SearchBar from 'components/_common/SearchBar/SearchBar';
import Tag, { TagProps } from 'components/_common/Tag/Tag';
import UserCard, { UserCardProps } from 'components/_common/UserCard/UserCard';
import React from 'react';
import { S } from './style';
import BasicButton from 'components/_common/BasicButton/BasicButton';

const MainPage = () => {
  // 더미데이터
  const scrapCardProps: ScrapCardProps = {
    width: '31%',
    scrapId: 0,
    link: 'https://biz.heraldcorp.com/view.php?ud:20230912000401',
    linkTitle: '풍요의 제주 ‘일멍쉬멍’ 워케이션 성지로',
    imgurl:
      'https://res.heraldm.com/content/image/2023/09/12/20230912000420_0.jpg',
    title: '풍요의 제주 ‘일멍쉬멍’ 워케이션 성지로',
    content: '임시 내용입니다.',
    heartCnt: 2,
    author: '나는 고양이다'
  };

  const scrapCardList: ScrapCardProps[] = [
    scrapCardProps,
    scrapCardProps,
    scrapCardProps
  ];

  const userCardProps: UserCardProps = {
    width: '31%',
    userId: 0,
    imgurl:
      'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
    nickname: '나는 고양이다',
    introduction: '야옹야옹야옹'
  };

  const userCardList: UserCardProps[] = [
    userCardProps,
    userCardProps,
    userCardProps
  ];

  const tagList: TagProps[] = [
    { text: '프론트엔드' },
    { text: '백엔드' },
    { text: '디자인' },
    { text: '리액트' },
    { text: '스프링' },
    { text: '자바' }
  ];

  return (
    <S.Wrapper>
      <S.Header>
        {/* 검색바 */}
        <SearchBar />
        {/* 카테고리바 */}
        <S.CategoryBarWrapper>
          <CategoryBar />
        </S.CategoryBarWrapper>
        {/* 태그 리스트 */}
        <S.TagList>
          {tagList.map((tag) => (
            <Tag text={tag.text} />
          ))}
        </S.TagList>
      </S.Header>

      <S.ContentWrapper>
        {/* 지금 뜨고 있는 글 */}
        <S.Section>
          <S.Text>지금 뜨고 있는 글</S.Text>
          <S.CardList>
            {scrapCardList.map((scrap) => (
              <ScrapCard {...scrap} />
            ))}
          </S.CardList>
        </S.Section>

        {/* 팔로우한 유저의 글 */}
        <S.Section>
          <S.Text>팔로우한 유저의 글</S.Text>
          <S.CardList>
            {scrapCardList.map((scrap) => (
              <ScrapCard {...scrap} />
            ))}
          </S.CardList>
        </S.Section>

        {/* 추천 유저 */}
        <S.Section>
          <S.Text>추천 유저</S.Text>
          <S.CardList>
            {userCardList.map((user) => (
              <UserCard {...user} />
            ))}
          </S.CardList>
        </S.Section>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default MainPage;
