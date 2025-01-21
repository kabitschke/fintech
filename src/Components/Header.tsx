import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";

const Header = () => {

  const { data, error, loading } = useData();


  return (
    <div>
      <DateRange />


    </div>
  );
}

export default Header;