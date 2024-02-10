export default function useLocal() {
  const getLocalItems = () => {
    const getItems = localStorage.getItem("carts");
    return getItems ? JSON.parse(getItems) : [];
  };
  const addOrUpdateLocalItems = (items) => {
    localStorage.setItem("carts", JSON.stringify(items));
  };
  return {
    getLocalItems,
    addOrUpdateLocalItems,
  };
}
