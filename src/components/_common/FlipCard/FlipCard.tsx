import { ReactElement, useState } from 'react';
import { S } from './style';

type CardProps = {
  content: [frontContent: ReactElement, backContent: ReactElement];
  handleClickArr: () => void;
};

const FlipCard = ({
  content: [frontContent, backContent],
  handleClickArr
}: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <S.CardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClickArr}
    >
      {isFlipped ? (
        <div onClick={handleClickArr}>{frontContent}</div>
      ) : (
        <div onClick={handleClickArr}>{backContent}</div>
      )}
    </S.CardWrapper>
  );
};

export default FlipCard;
