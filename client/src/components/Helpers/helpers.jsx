import style from "./Selector.module.css";
import { filterByType, filterByContinent, orderByAlphabet, orderByPopulation, resetCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Selector(props) {
  const dispatch = useDispatch();
  const { setOrden, setSearchResults, setCurrentPage } = props;
  const [selectValues, setSelectValues] = useState({
    continent: "",
    type: "",
    alphabet: "",
    population: ""
  });

  const resetStates = () => {
    setSearchResults([]);
    setCurrentPage(1);
    dispatch(resetCountries());
    setOrden("");
    setSelectValues({
      continent: "",
      type: "",
      alphabet: "",
      population: ""
    });
  };

  const handleByContinent = (event) => {
    const value = event.target.value;
    dispatch(filterByContinent(value));
    setCurrentPage(1);
    setOrden(value);
    setSelectValues({
      ...selectValues,
      continent: value
    });
  };

  const handleByType = (event) => {
    const value = event.target.value;
    dispatch(filterByType(value));
    setOrden(value);
    setSelectValues({
      ...selectValues,
      type: value
    });
  };

  const handleByAlphabet = (event) => {
    const value = event.target.value;
    dispatch(orderByAlphabet(value));
    setOrden(value);
    setSelectValues({
      ...selectValues,
      alphabet: value
    });
  };

  const handleByPopulation = (event) => {
    const value = event.target.value;
    dispatch(orderByPopulation(value));
    setOrden(value);
    setSelectValues({
      ...selectValues,
      population: value
    });
  };

  return (
    <div className={style.containerFather}>
      <button className={style.restore} onClick={() => { resetStates() }}>Restore Order</button>

      <select className={style.container} onChange={handleByContinent} name="continent" value={selectValues.continent}>
        <option value="" disabled>Select Continent</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctic</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
      </select>

      <select className={style.container} onChange={handleByType} name="type" value={selectValues.type}>
        <option value="" disabled>Choose an activity type</option>
        <option value="Adventure">Adventure</option>
        <option value="Beach">Beach</option>
        <option value="Culture">Culture</option>
        <option value="Nature">Nature</option>
        <option value="Sports">Sports</option>
        <option value="Chilling">Chilling</option>
        <option value="Gastronomy">Gastronomy</option>
      </select>

      <select className={style.container} onChange={handleByAlphabet} name="alphabet" value={selectValues.alphabet}>
        <option value="" disabled>Select Order</option>
        <option value="ascendente">Ascending</option>
        <option value="descendente">Descending</option>
      </select>

      <select className={style.container} onChange={handleByPopulation} name="population" value={selectValues.population}>
        <option value="" disabled>Sort by Population:</option>
        <option value="ascendente">Largest Population</option>
        <option value="descendente">Smallest Population</option>
      </select>
    </div>
  );
}
