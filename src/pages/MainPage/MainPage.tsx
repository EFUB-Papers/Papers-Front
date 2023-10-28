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
import { TagType } from 'types/TagType';
import { PostListMock } from 'mock/postMock';
import { OnePostType } from 'types/PostType';
import { userListMock } from 'mock/userMock';
import { UserType } from 'types/UserType';
import { tagListMock } from 'mock/tagMock';

const MainPage = () => {
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
          {tagListMock.map((tag) => (
            <Tag tag={tag} />
          ))}
        </S.TagList>
      </S.Header>

      <S.ContentWrapper>
        {/* 지금 뜨고 있는 글 */}
        <S.Section>
          <S.Text>지금 뜨고 있는 글</S.Text>
          <S.CardList>
            {PostListMock.map(
              (post: OnePostType, index: number) =>
                index < 3 && (
                  <ScrapCard
                    width="31%"
                    scrapId={post.postId}
                    link={post.originPost.originLink}
                    linkTitle={post.originPost.originTitle}
                    imgUrl={post.imgUrl}
                    title={post.postTitle}
                    content={post.postDetail}
                    heartCnt={10}
                    author={post.writerInfo.userName}
                  />
                )
            )}
          </S.CardList>
        </S.Section>

        {/* 팔로우한 유저의 글 */}
        <S.Section>
          <S.Text>팔로우한 유저의 글</S.Text>
          <S.CardList>
            {PostListMock.map((post: OnePostType, index: number) => {
              return (
                index < 3 && (
                  <ScrapCard
                    width="31%"
                    scrapId={post.postId}
                    link={post.originPost.originLink}
                    linkTitle={post.originPost.originTitle}
                    imgUrl={post.imgUrl}
                    title={post.postTitle}
                    content={post.postDetail}
                    heartCnt={10}
                    author={post.writerInfo.userName}
                  />
                )
              );
            })}
          </S.CardList>
        </S.Section>

        {/* 추천 유저 */}
        <S.Section>
          <S.Text>추천 유저</S.Text>
          <S.CardList>
            {userListMock.map(
              (user: UserType, index: number) =>
                index < 3 && (
                  <UserCard
                    width="31%"
                    userId={user.userId}
                    imgurl={user.imgUrl}
                    nickname={user.userName}
                    introduction={user.userDetail}
                  />
                )
            )}
          </S.CardList>
        </S.Section>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default MainPage;
