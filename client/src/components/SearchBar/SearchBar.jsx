import style from '../SearchBar/SearchBar.module.css';
import { useState } from 'react';


export default function SearchBar(props) {
    const {onSearch} = props;
    const [countries, setCountries ] = useState("");
    
    const handleChange = (event) => {
        setCountries(event.target.value);
        onSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(countries);
        setCountries("");
    }

    
    return(
        <div >
            <form className={style.container} onSubmit={handleSubmit}>
                <input  type = "text" placeholder = "Busca un país..." value = {countries} onChange={handleChange}></input>
                <button className={style.button} type = "submit"></button>
            </form>
            
        </div>
    );
}

