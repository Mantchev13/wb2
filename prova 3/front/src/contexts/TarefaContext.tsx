import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Tarefa } from '../types/Tarefa';
 
interface TarefaContextData {
  tarefas: Tarefa[];
  adicionarTarefa: (descricao: string) => void;
  removerTarefa: (id: string) => void;
  alternarConclusao: (id: string) => void;
}
 
const TarefaContext = createContext<TarefaContextData>({} as TarefaContextData);
 
export const TarefaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
 
  // Carregar do localStorage
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) setTarefas(JSON.parse(tarefasSalvas));
  }, []);
 
  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);
 
  const adicionarTarefa = (descricao: string) => {
    const novaTarefa: Tarefa = {
      id: crypto.randomUUID(),
      descricao,
      concluida: false,
    };
    setTarefas(prev => [...prev, novaTarefa]);
  };
 
  const removerTarefa = (id: string) => {
    setTarefas(prev => prev.filter(t => t.id !== id));
  };
 
  const alternarConclusao = (id: string) => {
    setTarefas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };
 
  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, removerTarefa, alternarConclusao }}>
      {children}
    </TarefaContext.Provider>
  );
};
 
export const useTarefa = () => useContext(TarefaContext);
 