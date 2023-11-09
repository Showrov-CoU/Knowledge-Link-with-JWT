import { useQuery } from "@tanstack/react-query";

const useBooks = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3000/books", {
        credentials: true,
      });
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useBooks;
