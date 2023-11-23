import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import ScrapCard from 'components/_common/ScrapCard/ScrapCard';
import SearchBar from 'components/_common/SearchBar/SearchBar';
import Tag from 'components/_common/Tag/Tag';
import UserCard from 'components/_common/UserCard/UserCard';
import React, { useEffect } from 'react';
import { S } from './style';
import { PostListMock } from 'mock/postMock';
import { OneScrapType } from 'types/ScrapType';
import { userListMock } from 'mock/userMock';
import { UserType } from 'types/UserType';
import { tagListMock } from 'mock/tagMock';
import { useLocation, useNavigate } from 'react-router-dom';
import { postLogin } from 'apis/member';

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 구글 로그인 처리
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search); //구글 로그인 redirect URI
    const code = searchParams.get('code'); //URI의 파라미터에서 code를 추출
    if (code) {
      console.log('code', code);
      login(code); //추출한 code로 백엔드에 로그인 api 요청
    }
  }, []);

  // 백엔드에 로그인 api 요청
  const login = async (code: string) => {
    try {
      const data = await postLogin(code);
      console.log('data', data);
      localStorage.setItem('papersToken', data.accessToken);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

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
          {tagListMock.map((tag, index) => (
            <Tag tagId={tag.tagId} tagName={tag.tagName} key={index} />
          ))}
        </S.TagList>
      </S.Header>

      <S.ContentWrapper>
        {/* 지금 뜨고 있는 글 */}
        <S.Section>
          <S.Text>지금 뜨고 있는 글</S.Text>
          <S.CardList>
            {PostListMock.map(
              (scrap: OneScrapType, index: number) =>
                index < 3 && (
                  <ScrapCard
                    key={index}
                    width={300}
                    scrapId={scrap.scrapId}
                    link={scrap.scrapLink}
                    linkTitle={scrap.scrapLink}
                    imgUrl={scrap.imgUrl}
                    title={scrap.scrapTitle}
                    content={scrap.scrapContent}
                    heartCnt={10}
                    author={scrap.writerInfo.nickname}
                  />
                )
            )}
          </S.CardList>
        </S.Section>

        {/* 팔로우한 유저의 글 */}
        <S.Section>
          <S.Text>팔로우한 유저의 글</S.Text>
          <S.CardList>
            {PostListMock.map(
              (scrap: OneScrapType, index: number) =>
                index < 3 && (
                  <ScrapCard
                    key={index}
                    width={300}
                    scrapId={scrap.scrapId}
                    link={scrap.scrapLink}
                    linkTitle={scrap.scrapLink}
                    imgUrl={scrap.imgUrl}
                    title={scrap.scrapTitle}
                    content={scrap.scrapContent}
                    heartCnt={10}
                    author={scrap.writerInfo.nickname}
                  />
                )
            )}
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
                    key={index}
                    width="31%"
                    followProfileImg={user.imgUrl}
                    followNickname={user.nickname}
                    followDescription={user.userDetail}
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
