import { useQuery, useMutation, useQueryClient } from "react-query";
import { getProducts, addNewProduct } from "../apis/firebase";

export default function useProducts() {
  const productsQuery = useQuery(["products"], getProducts, {
    staleTime: 1000 * 60 * 5,
  });
  const queryClient = useQueryClient();
  const addProduct = useMutation(
    ({ product, url }) => {
      addNewProduct(product, url);
    },
    { onSuccess: () => queryClient.invalidateQueries(["products"]) }
  );
  return { productsQuery, addProduct };
}
