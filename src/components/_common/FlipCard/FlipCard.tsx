import { ReactElement, useState } from 'react';
import { S } from './style';

type CardProps = {
  content: [frontContent: ReactElement, backContent: ReactElement];
  handleClick?: () => void;
};

const FlipCard = ({
  content: [frontContent, backContent],
  handleClick
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
      onClick={handleClick}
    >
      {isFlipped ? (
        <div onClick={handleClick}>{frontContent}</div>
      ) : (
        <div onClick={handleClick}>{backContent}</div>
      )}
    </S.CardWrapper>
  );
};

export default FlipCard;
