import React, { useState } from 'react';
import MoreBox from './MoreBox';

// MoreBox 사용 예시입니다.

const MoreBoxTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>
      <MoreBox
        isModalOpen={isModalOpen}
        closeModal={closeModal}
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
