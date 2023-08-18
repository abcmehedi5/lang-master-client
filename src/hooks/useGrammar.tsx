
import { useQuery } from "@tanstack/react-query";


const useGrammar = () => {

    const { data: grammar = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['grammar'],
        queryFn: async () => {
            const res = await fetch('../../public/grammar.json');
            return res.json()
        }
    })

    return [grammar, loading, refetch]

}

export default useGrammar;