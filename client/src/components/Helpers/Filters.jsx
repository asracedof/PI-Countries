import { filterByType, filterByContinent } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Selector.module.css";

export default function FilterHelpers(props) {
  const dispatch = useDispatch();
  const { setOrden, setCurrentPage } = props;
  const [selectValues, setSelectValues] = useState({
    continent: "",
    type: ""
  });

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

  return (
    <div className={style.containerFather}>
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
    </div>
  );
}
