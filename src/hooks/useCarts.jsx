import { useAuthContext } from "../context/AuthContext";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getMyCart, addOrUpdateToCart, removeFromCart } from "../apis/firebase";

export default function useCarts() {
  const { uid } = useAuthContext();
  const cartsQuery = useQuery(["cart", uid || ""], () => getMyCart(uid), {
    enabled: !!uid,
  });
  const queryClient = useQueryClient();
  const addOrUpdateItem = useMutation(
    (product) => {
      addOrUpdateToCart(uid, product);
    },
    { onSuccess: () => queryClient.invalidateQueries(["cart", uid || ""]) }
  );
  const removeItem = useMutation(
    (productId) => {
      removeFromCart(uid, productId);
    },
    { onSuccess: () => queryClient.invalidateQueries(["cart", uid || ""]) }
  );
  return { cartsQuery, addOrUpdateItem, removeItem };
}
