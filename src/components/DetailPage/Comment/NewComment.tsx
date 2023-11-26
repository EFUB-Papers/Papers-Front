import React from 'react';
import useInputs from '../../../hooks/useInputs';
import TextArea from '../../_common/TextArea/TextArea';
import CircleIcon from '../../_common/CircleBox/CircleBox';
import BasicButton from '../../_common/BasicButton/BasicButton';
import { S } from './style';
import { usePostNewCommentMutation } from 'hooks/apis/comment';
import { useParams } from 'react-router';
import { LocalStorage } from 'utils/localStorage';
import { useUserInfoQuery } from 'hooks/apis/member';

const NewComment = ({ scrapId }: { scrapId: number }) => {
  const { values, setValues, onChange } = useInputs({
    comment: ''
  });

  const params = useParams();
  const { postCommentAction } = usePostNewCommentMutation(scrapId);

  const onPostComment = () => {
    postCommentAction({
      scrapId: params.scrapId!,
      commentContent: values.comment
    });
    setValues({ comment: '' });
  };

  const userInfo = useUserInfoQuery(LocalStorage.getNickname()!);

  return (
    <S.NewCommentWrapper>
      <S.MyInfoBox>
        <S.FlexBox>
          <CircleIcon imgUrl={userInfo?.profileImgUrl} size={'small'} />
          <S.NameBox>{userInfo?.nickname}</S.NameBox>
        </S.FlexBox>
        <BasicButton
          onClick={onPostComment}
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
          placeholder={'댓글을 입력하세요.'}
        />
      </S.TextAreaBox>
    </S.NewCommentWrapper>
  );
};
export default NewComment;
