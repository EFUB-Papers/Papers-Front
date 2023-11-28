import React, { useState } from 'react';
import MoreBox from './MoreBox';

// MoreBox 사용 예시입니다.

const MoreBoxTest = () => {
  const [isMoreBoxOpen, setIsMoreBoxOpen] = useState(false);

  const openMoreBox = () => setIsMoreBoxOpen(true);
  const closeMoreBox = () => setIsMoreBoxOpen(false);

  return (
    <div>
      <button onClick={openMoreBox}>모달 열기</button>
      <MoreBox
        isMoreBoxOpen={isMoreBoxOpen}
        closeMoreBox={closeMoreBox}
        buttons={[
          {
            name: '마이페이지',
            onClick: () => {
              console.log('마이페이지 클릭됨');
            }
          },
          {
            name: '로그아웃',
            onClick: () => {
              console.log('로그아웃 클릭됨');
            }
          }
        ]}
      />
    </div>
  );
};

export default MoreBoxTest;
