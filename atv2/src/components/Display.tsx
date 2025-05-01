import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";
import Ball from "./Ball";
import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export default function Display() {
  const { input } = useContext(LetterCtx);
  return (
    <DisplayContainer>
      {input ? input.split('').map((char, index) => <Ball key={index} letter={char} />) : "Sem entrada"}
    </DisplayContainer>
  );
}