import React from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/Container";

export default function Payment() {
  const {
    state: { cart, resultPrice, info },
  } = useLocation();
  info && console.log(cart, resultPrice, info);
  return (
    <Container>
      <p>결제페이지</p>
    </Container>
  );
}
