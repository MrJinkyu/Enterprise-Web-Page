import React, { useState } from "react";
import styles from "./NewProduct.module.css";
import { uploadImage } from "../apis/uploader";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(undefined);
  const { addProduct } = useProducts();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    uploadImage(file)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("제품 등록 성공✅");
              setTimeout(() => {
                setSuccess(undefined);
              }, 3000);
            },
          }
        );
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>새로운 제품 등록하기</h3>
      {success && <p className={styles.success}>{success}</p>}
      {file && (
        <img
          className={styles.preview}
          src={URL.createObjectURL(file)}
          alt="제품 이미지"
        />
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <select
          name="category"
          onChange={handleChange}
          value={product.category ?? ""}
          required
        >
          <option value="">제품 카테고리</option>
          <option value="스마트폰">스마트폰</option>
          <option value="태블릿">태블릿</option>
          <option value="갤럭시북">갤럭시북</option>
          <option value="워치">워치</option>
          <option value="버즈">버즈</option>
        </select>
        <input
          type="text"
          name="title"
          placeholder="제품 이름"
          onChange={handleChange}
          value={product.title ?? ""}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="제품 가격"
          onChange={handleChange}
          value={product.price ?? ""}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="제품 유형"
          onChange={handleChange}
          value={product.type ?? ""}
          required
        />
        <input
          type="text"
          name="colors"
          placeholder="제품 컬러(콤마(,)로 구분)"
          onChange={handleChange}
          value={product.colors ?? ""}
          required
        />
        <input
          type="text"
          name="options"
          placeholder="제품 옵션(콤마(,)로 구분)"
          onChange={handleChange}
          value={product.options ?? ""}
        />
        <button className={styles.submitBtn} disabled={isLoading}>
          {isLoading ? "추가중입니다..." : "제품 추가하기"}
        </button>
      </form>
    </section>
  );
}
