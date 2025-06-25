import React, { useState } from 'react';
import { useTarefa } from '../contexts/TarefaContext';
import styled from 'styled-components';
 
const Form = styled.form`
  display: flex;
  margin-bottom: 1rem;
`;
 
const Input = styled.input`
  flex: 1;
  padding: 0.5rem;

`;
 
const Button = styled.button`
  padding: 0.5rem 1rem;
  background:rgb(104, 222, 108);
`;
 
const FormNovaTarefa: React.FC = () => {
  const { adicionarTarefa } = useTarefa();
  const [descricao, setDescricao] = useState('');
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (descricao.trim()) {
      adicionarTarefa(descricao);
      setDescricao('');
    }
  };
 
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digite uma tarefa"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};
 
export default FormNovaTarefa;
 