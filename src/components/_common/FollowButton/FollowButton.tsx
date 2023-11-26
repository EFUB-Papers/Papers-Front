import React from 'react';
import BasicButton from '../BasicButton/BasicButton';
import {
  useDeleteFollowMutation,
  useGetCurrentFollowQuery,
  usePostFollowMutation
} from 'hooks/apis/follow';
import { useState } from 'react';
export type FollowButtonProps = {
  nickname: string;
};

const FollowButton = ({ nickname }: FollowButtonProps) => {
  const isFollow = useGetCurrentFollowQuery(nickname);
  const [isCurrentFollow, setIsCurrentFollow] = useState(isFollow);
  const { postFollowMutate } = usePostFollowMutation({
    nickname,
    setIsFollow: setIsCurrentFollow
  });
  const { deleteFollowMutate } = useDeleteFollowMutation({
    nickname,
    setIsFollow: setIsCurrentFollow
  });

  return (
    <div>
      {isCurrentFollow ? (
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
