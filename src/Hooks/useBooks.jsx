import { useQuery } from "@tanstack/react-query";

const useBooks = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const data = await fetch(
        "https://knowledge-link-server.vercel.app/books",
        {
          credentials: true,
        }
      );
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useBooks;
