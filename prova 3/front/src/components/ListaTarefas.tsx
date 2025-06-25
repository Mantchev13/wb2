import React from 'react';
import { useTarefa } from '../contexts/TarefaContext';
import styled from 'styled-components';
 
const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;
 
const Item = styled.li<{ $concluida: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f9f9f9;
  margin-bottom: 0.5rem;
  text-decoration: ${({ $concluida }) => ($concluida ? 'line-through' : 'none')};
`;
 
const BotaoRemover = styled.button`
  margin-left: 1rem;
  background:rgb(203, 73, 69);
`;
 
const ListaTarefas: React.FC = () => {
  const { tarefas, removerTarefa, alternarConclusao } = useTarefa();
 
  return (
    <Lista>
        {tarefas.map(tarefas =>(
            <Item key={tarefas.id} $concluida={tarefas.concluida}>
                <label style={{flex:1}}>
                    <input
                    type="checkbox"
                    checked={tarefas.concluida}
                    onChange={() => alternarConclusao(tarefas.id)} style={{marginRight: '0,5rem'}}/>
                    {tarefas.descricao}
                </label>
                <BotaoRemover onClick={() => removerTarefa(tarefas.id)}>Remover</BotaoRemover>
            </Item>
        ))}
    </Lista>
  )
}
export default ListaTarefas;