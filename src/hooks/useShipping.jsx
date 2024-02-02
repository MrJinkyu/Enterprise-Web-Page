import { useMutation, useQuery, useQueryClient } from "react-query";
import { useAuthContext } from "../context/AuthContext";
import {
  addNewShipping,
  getMyShipping,
  removeShipping,
} from "../apis/firebase";

export default function useShipping() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const shippingQuery = useQuery(
    ["shipping", uid || ""],
    () => getMyShipping(uid),
    {
      enabled: !!uid,
    }
  );
  const addItem = useMutation((info) => addNewShipping(uid, info), {
    onSuccess: () => queryClient.invalidateQueries(["shipping", uid || ""]),
  });
  const removeItem = useMutation((infoId) => removeShipping(uid, infoId), {
    onSuccess: () => queryClient.invalidateQueries(["shipping", uid || ""]),
  });
  return { shippingQuery, addItem, removeItem };
}
