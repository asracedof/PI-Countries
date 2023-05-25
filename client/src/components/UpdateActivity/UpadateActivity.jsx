import style from "../Form/Form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import validate from "../Form/validate";
import { useLocation } from 'react-router-dom';
import ok from "../../assets/Images/success.png";
import failed from "../../assets/Images/fail.png";

export default function UpdateActivity() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const countryId = searchParams.get('countryId');
  const [activityData, setActivityData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    difficulty: '',
    duration: '',
    season: "",
    countries: [],
    types: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: '',
    duration: '',
    season: "",
    countries: [],
    types: "",
  });

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await axios.get(`/activities/${id}`);
        setActivityData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchActivityData();
  }, [id]);

  useEffect(() => {
    if (activityData) {
      setInputs({
        name: activityData.name,
        difficulty: activityData.difficulty,
        duration: activityData.duration,
        season: activityData.season,
        countries: activityData.countries.map((country) => country.id),
        types: activityData.types,
      });
    }
  }, [activityData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let processedValue = value;
    
    if (name === "name") {
      processedValue = value.replace(/[^A-Za-z\s]/g, ""); // Eliminar caracteres no permitidos
      processedValue = processedValue.toUpperCase(); // Convertir a mayúsculas
    }
    
    if (name === "difficulty" || name === "duration") {
      processedValue = value.replace(/[^0-9]/g, ""); // Eliminar caracteres no numéricos
    }
  
    if (name === "duration") {
      // Validar rango de valores
      if (processedValue < 1) {
        processedValue = "1"; // Establecer el valor mínimo permitido
      } else if (processedValue > 24) {
        processedValue = "24"; // Establecer el valor máximo permitido
      }
    }

    if (name === "difficulty") {
      // Validar rango de valores
      if (processedValue < 1) {
        processedValue = "1"; // Establecer el valor mínimo permitido
      } else if (processedValue > 5) {
        processedValue = "5"; // Establecer el valor máximo permitido
      }
    }
 
    setInputs({
      ...inputs,
      [name]: processedValue,
    });
  
    setErrors(validate({
      ...inputs,
      [name]: processedValue,
    }));
  
    if (name === "countries") {
      setInputs({
        ...inputs,
        countries: value.split(",").map((country) => country.trim()),
      });
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (errors.name || inputs.name.trim() === "") {
      return;
    }
  
    try {
      await axios.put(`/activities/${id}`, inputs);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        window.location.href = `/detail/${countryId}`;
      }, 2000);
    } catch (error) {
      console.log("Error al actualizar la actividad", error.message);
      setFail(true);
      setTimeout(() => {
        setFail(null);
      }, 3000);
    }
  };
  

  return (
    <div className={style.form}>
      <div className={style.container}>
        <div className={style.background}>
          {success && <p className={style.success}><img src={ok} alt="success" /></p>}
          {fail && <p className={style.fail}><img src={failed} alt="fail" /></p>}
          <h1 className={style.txt}>Update an Activity</h1>
          <form onSubmit={handleSubmit} className={style.form}>
            <label htmlFor="name" className={style.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
              className={style.input}
            />
            {errors.name && <p className={style.validate}>{errors.name}</p>}

            <label htmlFor="difficulty" className={style.label}>Difficulty:</label>
            <input
              type="number"
              name="difficulty"
              value={inputs.difficulty}
              onChange={handleInputChange}
              className={style.input}
            />
            {errors.difficulty && <p className={style.validate}>{errors.difficulty}</p>}

            <label htmlFor="duration" className={style.label}>Duration:</label>
            <input
              type="number"
              name="duration"
              value={inputs.duration}
              onChange={handleInputChange}
              className={style.input}
            />
            {errors.duration && <p className={style.validate}>{errors.duration}</p>}

            <label htmlFor="countries" className={style.label}>Countries:</label>
            <input
              type="text"
              name="countries"
              value={inputs.countries.join(",")}
              readOnly
              className={style.input}
            />
            {errors.countries && <p className={style.validate}>{errors.countries}</p>}

            <label htmlFor="season" className={style.label}>Season:</label>
            <select
              name="season"
              value={inputs.season}
              onChange={handleInputChange}
              className={style.input}
            >
              <option value="" disabled>Choose a season...</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select>
            {errors.season && <p className={style.validate}>{errors.season}</p>}

            <label htmlFor="types" className={style.label}>Activity Type:</label>
            <select
              name="types"
              value={inputs.types}
              onChange={handleInputChange}
              className={style.input}
            >
              <option value="" disabled>Choose an activity type...</option>
              <option value="Adventure">Adventure</option>
              <option value="Beach">Beach</option>
              <option value="Culture">Culture</option>
              <option value="Nature">Nature</option>
              <option value="Sports">Sports</option>
              <option value="Chilling">Chilling</option>
              <option value="Gastronomy">Gastronomy</option>
            </select>
            {errors.types && <p className={style.validate}>{errors.types}</p>}

            <button type="submit" className={style.button}>Update Activity</button>
          </form>
        </div>
      </div>
    </div>
  );
}
