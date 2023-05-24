import { orderByAlphabet, orderByPopulation } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from "./Selector.module.css";

export default function OrderHelpers(props) {
  const dispatch = useDispatch();
  const { setOrden } = props;
  const [selectValues, setSelectValues] = useState({
    alphabet: "",
    population: ""
  });

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
      <select className={style.container}  onChange={handleByAlphabet} name="alphabet" value={selectValues.alphabet}>
        <option value="" disabled>Select Order</option>
        <option value="ascendente">Ascending</option>
        <option value="descendente">Descending</option>
      </select>

      <select className={style.container}  onChange={handleByPopulation} name="population" value={selectValues.population}>
        <option value="" disabled>Sort by Population:</option>
        <option value="ascendente">Largest Population</option>
        <option value="descendente">Smallest Population</option>
      </select>
    </div>
  );
}
