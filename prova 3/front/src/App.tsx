import React from 'react';
import { TarefaProvider } from './contexts/TarefaContext';
import FormNovaTarefa from './components/FormNovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import styled from 'styled-components';
 
const Container = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
 
function App() {
  return (
    <TarefaProvider>
      <Container>
        <h1>Tarefas do Dia</h1>
        <FormNovaTarefa />
        <ListaTarefas />
      </Container>
    </TarefaProvider>
  );
}
 
export default App;
 