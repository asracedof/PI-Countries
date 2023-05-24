import style from '../SearchBar/SearchBar.module.css';
import { useState } from 'react';
import Search from '../Icons/Search';
 


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
        <div className={style.group}>
            <form  onSubmit={handleSubmit}>
                <Search className={style.icon}/>
                <input className={style.input} pattern=".*\S.*" type="search" placeholder = "Search a Country" value = {countries} onChange={handleChange} id="search"></input>
                                        
            </form>
            
        </div>
    );
}
