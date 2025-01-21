import React from 'react';
import useFetch from '../Hooks/useFetch';


type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
}

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
};

//1° Criar o contexto
const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};


//2° Criar o Provider
export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>('https://data.origamid.dev/vendas/',
  );


  //3° DataCOntext nome do contexto . Provider
  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>

};