import style from "../Form/Form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import validate from "./validate";
import ok from "../../assets/Images/success.png";
import load from "../../assets/Images/load2.gif";
import failed from "../../assets/Images/fail.png"

export default function Form(){
    
    const allCountries = useSelector(state => state.allCountries);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(null);
    const [country, setCountry ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [touch, setTouch] = useState({
        name: false,
       difficulty:false,
        duration: false,
        season: false,
        countries: false
    })
    const initialState = {
        name: "",
        difficulty: 0,
        duration: "",
        season: "",
        countries: []
      };
      
    const [inputs, setInputs] = useState(initialState);

    const [errors, setErrors] = useState({
        name:  "",
        difficulty: 0,
        duration: "",
        season: "",
        countries: [],
    });

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
        setCountry(allCountries)
        
    }, [allCountries])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    const handleInputChange = (event) => {
       const {name, value} = event.target;
        setInputs({
            ...inputs,
            [name]: value
        })
        setErrors(validate({
            ...inputs,
            [name]: value
        }))
        setTouch({
            ...touch,
            [name]: true
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/activities", inputs)
            console.log("Agregado correctamente");
        } catch (error) {
            console.log("Error al agregar la actividad", error.message);
        }

        if(Object.keys(errors).length === 0 && inputs.name && inputs.difficulty && inputs.duration && inputs.countries && inputs.season){
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setInputs({
                  name: "",
                  difficulty: 0,
                  duration: "",
                  season: "",
                  countries: [],
                });
              }, 3000);
        }else {
            setSuccess(false);
            setFail(true);
            resetForm();
            setTimeout(() => {
                setFail(null);
                
            }, 3000);
        }
    }

    const handleCountry = (event) => {
        const { value } = event.target;
        setInputs({
            ...inputs,
            countries: [...inputs.countries, value]
        });
    }
    
    const resetForm = () => {
        setInputs(initialState)
    }
    
    return(
        <div className={style.loading}>
              {loading ? (
            <div className={style.loadingdiv}>
            <p className={style.loadingp}> Cargando actividades...</p>
    <img className={style.animation} src ={load} alt = "loading"></img>
    </div>
      ) : (
        <div className= {style.container}>
        <div className= {style.background}>
        <h1 className={style.txt}>Registra una Actividad</h1>
        <form onSubmit={handleSubmit} className={style.conta}>
            {success && <p className={style.ok}><img src={ok} alt = "success"/></p> }
            {fail !== null && <p className={style.fail}><img src={failed} alt = "fail"/></p>}

          <div className = {style.group}>
            <label className = {style.label} htmlFor="name">Nombre: </label>
            <select className={style.input} name = "name" value={inputs.name} onChange={handleInputChange}>
                <option value = "">Elige una actividad...</option>
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
            {touch.name && errors.name && <p className={style.validate}>{errors.name}</p>}

            <div/>
            <div className = {style.group}>
            <label className = {style.label} htmlFor="difficulty">Dificultad: </label>
            <input className = {style.input} name = "difficulty" type="number" value={inputs.difficulty} onChange={handleInputChange} ></input>
            {touch.difficulty && errors.difficulty && <p className={style.validate}>{errors.difficulty}</p>}
            </div>

            <div className = {style.group}>
            <label className = {style.label} htmlFor="duration">Duración: </label>
            <input className = {style.input} name = "duration" type="text" value={inputs.duration} onChange={handleInputChange} ></input>
            {touch.duration && errors.duration &&  <p className={style.validate}>{errors.duration}</p>}
            </div>

            <div className = {style.group}>
            <label className = {style.label} htmlFor="countries">País: </label>
            <select className={style.input} name = "countries" value={inputs.countries} onChange={handleCountry}  multiple>
                {country.map(country => ( 
                <option key = {country.id} value = {country.id}>{country.name}</option>))}
               
            </select>
            <input className = {style.input} name = "countries" type="text" value={inputs.countries}onChange={handleInputChange} ></input>
            {touch.countries && errors.countries &&  <p className={style.validate1}>{errors.countries}</p>}
            </div>

            <div className = {style.group}>
            <label className = {style.label} htmlFor="season">Temporada: </label>
            <select className={style.input} name = "season" value={inputs.season} onChange={handleInputChange}>
                <option value = "">Elige una temporada...</option>
                <option value = "Primavera">Primavera</option>
                <option value = "Verano">Verano</option>
                <option value = "Otoño">Otoño</option>
                <option value = "Invierno">Invierno</option>
            </select>
            {touch.season && errors.season &&  <p className={style.validate}>{errors.season}</p>}
            </div>
            
            <button  className = {style.button} >Agregar Actividad</button>
          </div>
        </form>
        </div>
      
        

    </div>
      )}
    
    </div>
    );
}