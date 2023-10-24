import BasicModal from '../BasicModal/BasicModal';
import InputBox from '../../_common/InputBox';
import useInputs from '../../../hooks/useInputs';
import { ReactComponent as ActiveWriteIcon } from 'asset/_common/activePencil.svg';

const ProfileEditModal = () => {
  const { values, onChange } = useInputs({
    name: ' ',
    detail: ''
  });

  return (
    <BasicModal width={100} height={300} onCloseModal={() => {}}>
      <>
        <InputBox
          type="text"
          width={180}
          height={45}
          onChange={onChange}
          borderRadius={10}
          name="name"
          value={values.name}
          readonly={false}
          children={
            <ActiveWriteIcon
            // onClick={() => {
            //   setIsEditMode([false, false]);
            // }}
            />
          }
        />
        <InputBox
          type="text"
          width={50}
          height={20}
          backgroundColor="blue"
          onChange={() => {}}
          name="name"
          value={values.detail}
          readonly={false}
        />
      </>
    </BasicModal>
  );
};
export default ProfileEditModal;
