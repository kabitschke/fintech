import { useData } from "../Context/DataContext";

const Header = () => {

  const { data, error, loading } = useData();


  return (
    <div>
      <div>{loading ? 'carregando...' : ''}</div>
      <h1>Header</h1>


    </div>
  );
}

export default Header;