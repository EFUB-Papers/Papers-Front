import { useEffect, useState } from 'react';

function LinkPreview({ url }: { url: string }) {
  const [previewData, setPreviewData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const title = doc.querySelector('title')?.textContent || '';
        const description =
          doc
            .querySelector('meta[name="description"]')
            ?.getAttribute('content') || '';
        const image =
          doc
            .querySelector('meta[property="og:image"]')
            ?.getAttribute('content') || '';

        setPreviewData({ title, description, image });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>;
  }

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h3>{previewData?.title}</h3>
      <p>{previewData?.description}</p>
      {previewData?.image && (
        <img src={previewData?.image} alt="Link Preview" />
      )}
    </div>
  );
}

export default LinkPreview;

// const LinkPreview = () => {
//   return (
//     <S.Wrapper>
//       <S.Image src="https://ak-d.tripcdn.com/images/1mj1c12000bnc2cdm5451_C_800_600_R5.jpg_.webp?proc=autoorient" />
//       <S.ColumnWrapper>
//         <S.Title>풍요의 제주 ‘일멍쉬멍’ 워케이션 성지로</S.Title>
//         <S.Content>
//           바다와 맞닿아있는 해식애(해안 절벽) 봉우리, 제주 송악산에 오르니 이른
//           가을 바람에 옷깃이 흔들린다. 가파도와 마라도를 오가는 연락선의 뱃고동
//           소리가 들리고 북쪽 해안가 산방산과 용머리해안, 모슬봉이 미소 짓는다.
//           산신령이 제주도 세찬 바람에 단잠을 깨자 한라산 꼭대기를 발로 차
//           백록담을 만들고, 떨어진 꼭대기가 이곳까지 날아와 산방산이 되었다는
//           전설이 문득 떠오른다. 하지만 지질학적으로는 산방산이 한라산의 100만년
//           이상 선배다.
//         </S.Content>
//         <S.Source>출처 : 네이버 happycoding님의 블로그</S.Source>
//       </S.ColumnWrapper>
//     </S.Wrapper>
//   );
// };
//
