
import { useQuery } from "@tanstack/react-query";


const useGrammar = () => {

    const { data: grammar = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['grammar'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/grammars/grammar');
            return res.json()
        }
    })

    return [grammar, loading, refetch]

}

export default useGrammar;