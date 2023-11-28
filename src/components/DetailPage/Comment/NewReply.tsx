import React from 'react';
import useInputs from '../../../hooks/useInputs';
import TextArea from '../../_common/TextArea/TextArea';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import BasicButton from '../../_common/BasicButton/BasicButton';
import { R, S } from './style';
import { usePostNewReplyMutation } from 'hooks/apis/comment';
import { useUserInfoQuery } from 'hooks/apis/member';
import { LocalStorage } from 'utils/localStorage';

const NewReply = ({
  commentId,
  scrapId
}: {
  commentId: number;
  scrapId: number;
}) => {
  const { values, setValues, onChange } = useInputs({
    comment: ''
  });

  const userInfo = useUserInfoQuery(LocalStorage.getNickname()!);
  const { postNewReplyAction } = usePostNewReplyMutation({
    scrapId,
    commentId
  });

  const onPostReply = () => {
    postNewReplyAction({
      commentId: commentId,
      replyContent: values.comment
    });
    setValues({ comment: '' });
  };

  return (
    <R.ReplyNewContainer>
      <S.MyInfoBox>
        <S.FlexBox>
          <CircleIcon imgUrl={userInfo?.profileImgUrl} size={'verySmall'} />
          <S.NameBox>{userInfo?.nickname}</S.NameBox>
        </S.FlexBox>
        <BasicButton
          onClick={onPostReply}
          color={'positive'}
          fontSize={14}
          width={60}
          height={30}
        >
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
