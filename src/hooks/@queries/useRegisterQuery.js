import { useMutation, useQueryClient } from 'react-query';
import api from '@utils/api';
import { useEffect } from 'react';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';
export const QUERY_KEY = '/api/user/sign-up';

const useRegisterQuery = () => {
    const queryClient = useQueryClient();
    const fetcher = (data) => api.post(QUERY_KEY, data);
    const mutation = useMutation({
        mutationFn: (userInfo) => fetcher(userInfo),
        retry: false,
        onSuccess: () => queryClient.invalidateQueries([QUERY_KEY]),
    });

    useEffect(() => {
        if (mutation.isError) {
            const errorType = mutation.error.response.data.error.type;
        }
    }, [mutation.isError]);

    return mutation;
};

export default useRegisterQuery;
