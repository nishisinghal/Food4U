// Search_Button.jsx
import { useState } from "react";

const Search_Button = ({ listofrest, setfilteredlist }) => {
  const [searchvalue, setsearchvalue] = useState("");

  const handleSearch = () => {
    const filterrestaurant = listofrest.filter((res) =>
      res.info.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setfilteredlist(filterrestaurant);
    
  };

  return (
    <div className="search">
      <input
        type="search"
        className="inputsearch"
        placeholder="Search!"
        value={searchvalue}
        onChange={(e) => setsearchvalue(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleSearch}
        >
         
        Search
      </button>
    </div>
  );
};

export default Search_Button;
