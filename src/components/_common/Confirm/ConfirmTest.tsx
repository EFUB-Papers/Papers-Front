import { useState } from "react";
import Confirm from "./Confirm";

// Confirm 컴포넌트 사용 예시입니다.

const ConfirmTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>삭제하기</button>
      <Confirm
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        text="정말로 삭제하시겠습니까?"
        onCancel={() => console.log("취소되었습니다.")}
        onConfirm={() => console.log("삭제되었습니다.")}
      />
    </div>
  );
};

export default ConfirmTest;
