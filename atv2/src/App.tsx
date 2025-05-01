import "./App.css";
import Display from "./components/Display";
import Input from "./components/Input";
import { LetterProvider } from "./contexts/LetterCtx";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: black;
  color: white;
`;

export default function App() {
  return (
    <LetterProvider>
      <GlobalStyle />
      <AppContainer>
        <Input />
        <Display />
      </AppContainer>
    </LetterProvider>
  );
}