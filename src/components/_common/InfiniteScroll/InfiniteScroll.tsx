import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSearchScrap } from '../../../hooks/apis/scrap';

const InfiniteScroll = () => {
  const {} = useSearchScrap();
  const [searchParams, setSearchParams] = useSearchParams();
  const observerElem = useRef(null);
  const navigate = useNavigate();
  const sort = searchParams.get('sort') || 'updated_at';

  const fetchIssue = async (page: number) => {
    const res = await getIssue('angular', 'angular-cli', page, 10, sort);
    const result = res.data;
    console.log('infinite scroll', result);
    return result;
  };

  const {
    status,
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['scrapList', '여행'],
    queryFn: ({ pageParam = 1 }) => fetchIssue(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage > lastPage.length ? undefined : nextPage;
    },
    initialPageParam: 1
  });

  const handleObserver = useCallback(
    (entries: any) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    if (!element) return;
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  if (status === 'pending') {
    return <div>로딩 중 입니다.</div>;
  }
  if (status === 'error') {
    return <h3>잘못된 데이터 입니다.</h3>;
  }
  return (
    <div>
      {/*{isSuccess &&*/}
      {/*  data.pages.map((page) => {*/}
      {/*    return page.map((item) => {*/}
      {/*      return <div>{item}</div>;*/}
      {/*    });*/}
      {/*  })}*/}
      <div className="loader" ref={observerElem}>
        {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
      </div>
    </div>
  );
};

export default InfiniteScroll;
