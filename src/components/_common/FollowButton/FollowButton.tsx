import React from 'react';
import BasicButton from '../BasicButton/BasicButton';
import {
  useDeleteFollowMutation,
  useGetCurrentFollowQuery,
  usePostFollowMutation
} from 'hooks/apis/follow';

export type FollowButtonProps = {
  nickname: string;
};

const FollowButton = ({ nickname }: FollowButtonProps) => {
  const isFollow = useGetCurrentFollowQuery(nickname);
  const { postFollowMutate } = usePostFollowMutation(nickname);
  const { deleteFollowMutate } = useDeleteFollowMutation(nickname);

  return (
    <div>
      {isFollow ? (
        <BasicButton
          color="grey"
          fontSize={16}
          width={100}
          height={35}
          onClick={(e) => {
            e.preventDefault();
            deleteFollowMutate(nickname);
          }}
        >
          언팔로우
        </BasicButton>
      ) : (
        <BasicButton
          color="positive"
          fontSize={16}
          width={100}
          height={35}
          onClick={(e) => {
            e.preventDefault();
            postFollowMutate(nickname);
          }}
        >
          팔로우
        </BasicButton>
      )}
    </div>
  );
};

export default FollowButton;
