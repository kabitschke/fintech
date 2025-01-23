import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";

const Header = () => {

  const { data, error, loading } = useData();


  return (
    <header className="mb">
      <div className="mb">

        <DateRange />
      </div>
      <Meses />


    </header>
  );
}

export default Header;