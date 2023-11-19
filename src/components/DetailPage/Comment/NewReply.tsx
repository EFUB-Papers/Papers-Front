import React from 'react';
import useInputs from '../../../hooks/useInputs';
import TextArea from '../../_common/TextArea/TextArea';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import BasicButton from '../../_common/BasicButton/BasicButton';
import { R, S } from './style';

const NewReply = () => {
  const { values, onChange } = useInputs({
    comment: ''
  });
  return (
    <R.ReplyNewContainer>
      <S.MyInfoBox>
        <S.FlexBox>
          <CircleIcon imgUrl={''} size={'verySmall'} />
          <S.NameBox>나는 고양이다</S.NameBox>
        </S.FlexBox>
        <BasicButton color={'positive'} fontSize={14} width={60} height={30}>
          등록
        </BasicButton>
      </S.MyInfoBox>
      <S.TextAreaBox>
        <TextArea
          width={'100%'}
          type={'text'}
          onChange={onChange}
          name={'comment'}
          value={values.comment}
          readonly={false}
          placeholder={'대댓글을 입력하세요.'}
        />
      </S.TextAreaBox>
    </R.ReplyNewContainer>
  );
};
export default NewReply;
