import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import {
  deleteComment,
  deleteReply,
  getCommentList,
  getReplyList,
  NewCommentType,
  NewReplyType,
  postNewComment,
  postNewReply
} from 'apis/comment';
import { AxiosError, AxiosResponse } from 'axios';
import { AxiosResponseType } from 'constants/Api';
import { OneCommentType } from 'types/CommentType';
import { LocalStorage } from 'utils/localStorage';

//댓글 작성 mutation
export const usePostNewCommentMutation = (scrapId: number) => {
  const queryClient = useQueryClient();
  const { mutate: postCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    NewCommentType
  >({
    mutationFn: (commentInfo: NewCommentType) => postNewComment(commentInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentList', scrapId] });
    },
    onMutate: async (commentInfo: NewCommentType) => {
      // 낙관적 업데이트: 좋아요 증가
      queryClient.setQueryData(['commentList', scrapId], (prevData: any) => [
        ...prevData,
        {
          commentContent: commentInfo.commentContent,
          commentId: 10000,
          commentIsMine: true,
          createdAt: Date.now(),
          scrapId,
          writerNickname: LocalStorage.getNickname(),
          writeProfileImgUrl: ''
        }
      ]);
    },
    onError: () => {
      // 서버 요청이 실패한 경우 롤백
      queryClient.setQueryData(['commentList', scrapId], (prevData: any) => [
        ...prevData.slice(0, -1)
      ]);
    }
  });
  return { postCommentAction };
};

//댓글 삭제
export const useDeleteCommentMutation = (scrapId: number) => {
  const queryClient = useQueryClient();
  const { mutate: deleteCommentAction } = useMutation<
    AxiosResponseType,
    AxiosError,
    number
  >({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentList', scrapId] });
    },
    onMutate: async (deletedCommentId: number) => {
      const prevComments =
        queryClient.getQueryData<OneCommentType[]>(['commentList', scrapId]) ||
        [];
      const updatedComments = prevComments.filter(
        (comment) => comment.commentId !== deletedCommentId
      );
      queryClient.setQueryData(['commentList', scrapId], updatedComments);
      return { prevComments };
    },
    onError: (prevComments) => {
      queryClient.setQueryData(['commentList', scrapId], prevComments);
    }
  });
  return { deleteCommentAction };
};

//스크랩의 댓글 목록 조회 query
export const useGetCommentListQuery = (scrapId: number) => {
  const { data, refetch } = useQuery({
    queryKey: ['commentList', scrapId],
    queryFn: () => getCommentList(scrapId)
  });
  return { data, refetch };
};

//대댓글 작성 mutation
export const usePostNewReplyMutation = ({
  scrapId,
  commentId
}: {
  scrapId: number;
  commentId: number;
}) => {
  const queryClient = useQueryClient();
  const { mutate: postNewReplyAction } = useMutation({
    mutationFn: (replyInfo: NewReplyType) => postNewReply(replyInfo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentList', scrapId] });
      queryClient.invalidateQueries({ queryKey: ['replyList', commentId] });
    }
  });
  return { postNewReplyAction };
};

//대댓글 삭제 mutation
export const useDeleteReplyMutation = ({
  scrapId,
  commentId
}: {
  scrapId: number;
  commentId: number;
}) => {
  const queryClient = useQueryClient();
  const { mutate: deleteReplyAction } = useMutation({
    mutationFn: (replyId: number) => deleteReply(replyId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['commentList', scrapId] });
      queryClient.invalidateQueries({ queryKey: ['replyList', commentId] });
    }
  });
  return { deleteReplyAction };
};

//댓글의 대댓글 목록 조회 query
export const useGetReplyListQuery = (commentId: number) => {
  const { data, refetch } = useQuery({
    queryKey: ['replyList', commentId],
    queryFn: () => getReplyList(commentId)
  });
  return { data, refetch };
};
