import LineNavbar from 'components/_common/LineNavbar/LineNavbar';
import BasicContentCard from 'components/_common/BasicContentCard/BasicContentCard';
import { PostListMock } from 'mock/postMock';
import { OnePostType } from 'types/PostType';
import S from './style';
import { UserMock } from 'mock/userMock';

type FolderPropsType = {
  isMine: boolean;
};
const FolderPage = ({ isMine }: FolderPropsType) => {
  return (
    <S.ListWrapper>
      <LineNavbar
        title={isMine ? '내 폴더' : `${UserMock.userName}님의 폴더`}
      />
      {PostListMock.map((post: OnePostType) => {
        const { imgUrl, postTitle, originPost, postDetail } = post;
        const { originLink, originTitle } = originPost;
        return (
          <BasicContentCard
            imgUrl={imgUrl}
            postDetail={postDetail}
            postTitle={postTitle}
            originTitle={originTitle}
            originLink={originLink}
          />
        );
      })}
    </S.ListWrapper>
  );
};

export default FolderPage;
