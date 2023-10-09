import ScrapCard from 'components/_common/ScrapCard/ScrapCard';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from '../layout/navbarLayout';
import MyPage from '../pages/myPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ScrapCard
        width={280}
        scrapId={0}
        link="https://biz.heraldcorp.com/view.php?ud=20230912000401"
        linkTitle="풍요의 제주 ‘일멍쉬멍’ 워케이션 성지로"
        imgurl="https://res.heraldm.com/content/image/2023/09/12/20230912000420_0.jpg"
        title="풍요의 제주 ‘일멍쉬멍’ 워케이션 성지로"
        content="아침이 자랑처럼 마리아 까닭입니다. 별빛이 잠, 보고, 시인의 봅니다. 같이 이름을 이름자를 하아침이 자랑처럼 마리아 까닭입니다. 별빛이 잠, 보고, 시인의 봅니다. 같이 이름을 이름자를 하"
        heartCnt={12}
        author="나는 강아지다"
      />
    )
  },
  {
    element: <NavbarLayout />,
    children: [
      {
        element: <MyPage />,
        path: '/myPage'
      }
    ]
  }
]);

export default router;
