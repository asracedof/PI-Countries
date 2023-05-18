import style from "./Selector.module.css";
import { filterByActivity, filterByContinent, orderByAlphabet, orderByPopulation, resetCountries } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Selector(props){
    const dispatch = useDispatch();
    const {setOrden, setSearchResults, setCurrentPage} = props;
    const [selectValues, setSelectValues] = useState({
        continent: "",
        activity: "",
        Alphabet: "",
        population: ""
      });

      const resetStates = () => {
        setSearchResults([]);
        setCurrentPage(1);
        dispatch(resetCountries());
        setOrden("");
        setSelectValues({
            continent: "",
            activity: "",
            Alphabet: "",
            population: ""
        })
    };

    const handleByContinent = (event) => {
        const value = event.target.value;
        dispatch(filterByContinent(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            continent: value
        })

        
    }

    const handleByActivity = (event) => {
        const value = event.target.value;
        dispatch(filterByActivity(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            activity: value
        })

        
    }

    const handleByAlphabet = (event) => {
        const value = event.target.value;
        dispatch(orderByAlphabet(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            Alphabet: value
        })

    }
    const handleByPopulation = (event) => {
        const value = event.target.value;
        dispatch(orderByPopulation(value));
        setOrden(value);
        setSelectValues({
            ...selectValues,
            population: value
        })
    }


    return (
    <div className={style.containerFather} >
        <button className={style.restore} onClick = {() => {resetStates()}} >Restaurar orden</button>



    
        <select className={style.container} onChange = {handleByContinent} name="continent" value ={selectValues.continent}>
        <option value="" disabled>Select Continent</option>
            <option value="America">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctic</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
        </select >
       
        <select className={style.container} onChange = {handleByActivity} name="activity" value ={selectValues.activity}>
        <option value="" disabled>Select activity</option>
                <option value = "Playa">Playa</option>
                <option value = "Viaje en Globo">Viaje en Globo</option>
                <option value = "Esquiar">Esquiar</option>
                <option value = "Explorar Museos">Explorar Museos</option>
                <option value = "Kayak">Kayak</option>
                <option value = "Camping">Camping</option>
                <option value = "Montar a caballo">Montar a caballo</option>
                <option value = "Recorrido en cuatrimoto">Recorrido en cuatrimoto</option>
                <option value = "Aventura en la selva">Aventura en la selva</option>
        </select>
        
    


   
        
        <select className={style.container} onChange={handleByAlphabet} name="Alphabet" value ={selectValues.Alphabet}>
        <option value="" disabled>Select Order</option>
            <option value="ascendente">Ascending</option>
            <option value="descendente">Descending</option>
        </select>
        
        <select className={style.container} onChange={handleByPopulation} name="population" value ={selectValues.population}>
            <option value = ""disabled>Sort by Population:</option>
  <option value="ascendente">Largest Population</option>
  <option value="descendente">Smallest Population</option>
</select>
        
    
</div>

);
}


