import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useLearnData = () => {
    const { isLoading, data: allLearnData = [], refetch } = useQuery({
        queryKey: ['learnData'],
        queryFn: async () => {
            const response = await axios.get('/learn.json');
            return response.data;
        },
    });

    return { isLoading, refetch, allLearnData };
};

export default useLearnData;
