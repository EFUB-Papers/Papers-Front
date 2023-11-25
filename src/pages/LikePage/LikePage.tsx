import { useLikeScrapsQuery } from '../../hooks/apis/scrap';

const LikePage = () => {
  const likeList = useLikeScrapsQuery();
  console.log('likeList', likeList);
  return <div>like</div>;
};

export default LikePage;
