import { useEffect, useState } from 'react';
import { S, XS } from './style';
import FlipCard from '../FlipCard/FlipCard';

function LinkPreview({ url, size }: { url: string; size: 'small' | 'big' }) {
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
    return <S.FailText>데이터를 불러오는데 실패했습니다.</S.FailText>;
  }

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return size == 'small' ? (
    <XS.SmallWrapper onClick={handleClick}>
      <FlipCard
        content={[
          <S.ColumnWrapper>
            <XS.SmallContent>{previewData?.description}</XS.SmallContent>
          </S.ColumnWrapper>,
          <XS.SmallFlex>
            <XS.SmallImg src={previewData?.image} alt="Link Preview" />
            <XS.SmallColumn>
              <XS.SmallTitle>{previewData?.title}</XS.SmallTitle>
              <XS.SmallSource>{url}</XS.SmallSource>
            </XS.SmallColumn>
          </XS.SmallFlex>
        ]}
      />
    </XS.SmallWrapper>
  ) : (
    <S.Wrapper onClick={handleClick}>
      {previewData?.image && (
        <S.Image src={previewData?.image} alt="Link Preview" />
      )}
      <S.ColumnWrapper>
        <S.Title>{previewData?.title}</S.Title>
        <S.Content>{previewData?.description}</S.Content>
        <S.Source>{url}</S.Source>
      </S.ColumnWrapper>
    </S.Wrapper>
  );
}

export default LinkPreview;
