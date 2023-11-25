import CategoryBar from 'components/_common/CategoryBar/CategoryBar';
import ScrapCard from 'components/_common/ScrapCard/ScrapCard';
import SearchBar from 'components/_common/SearchBar/SearchBar';
import Tag from 'components/_common/Tag/Tag';
import UserCard from 'components/_common/UserCard/UserCard';
import { S } from './style';
import { OneScrapType } from 'types/ScrapType';
import { UserType } from 'types/UserType';
import { tagListMock } from 'mock/tagMock';
import { useParams } from 'react-router-dom';
import {
  useRecommendUsersQuery,
  useUserInfoQuery
} from '../../hooks/apis/member';
import { LocalStorage } from '../../utils/localStorage';
import { useRecommendScrapQuery } from '../../hooks/apis/scrap';
import UserModal from 'components/Modal/UserModal/UserModal';

const MainPage = () => {
  const params = useParams();
  const isFirst = params.isFirst;
  const nickname = LocalStorage.getNickname()!;
  const userInfo = useUserInfoQuery(nickname);
  /*추천 스크랩*/
  const scrapList = useRecommendScrapQuery();
  /*추천 유저 리스트*/
  const userList = useRecommendUsersQuery();

  return (
    <S.Wrapper>
      {isFirst && userInfo && (
        <UserModal
          imgUrl={userInfo.profileImgUrl}
          userName={userInfo.nickname!}
          userDetail={userInfo.introduce!}
        />
      )}
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
            {scrapList?.map((scrap: OneScrapType, index: number) => (
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
                author={scrap.writerNickname}
              />
            ))}
          </S.CardList>
        </S.Section>

        {/* 추천 유저 */}
        <S.Section>
          <S.Text>추천 유저</S.Text>
          <S.CardList>
            {userList?.map(
              (user: UserType, index: number) =>
                index < 3 && (
                  <UserCard
                    key={index}
                    width="31%"
                    followingProfileImg={user.profileImgUrl}
                    followingNickname={user.nickname}
                    followingDescription={user.introduce}
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
