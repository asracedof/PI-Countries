import style from "../Form/Form.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import validate from "./validate";
import ok from "../../assets/Images/success.png";
import LoaderAct from "../Icons/LoaderAct";
import failed from "../../assets/Images/fail.png";
import Delete from "../Icons/Delete";
import CreateActivity from "../Icons/CreateActivity";

export default function Form() {
  const allCountries = useSelector((state) => state.allCountries);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(null);
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [touch, setTouch] = useState({
    name: false,
    difficulty: false,
    duration: false,
    season: false,
    countries: false,
    types: false,
  });
  const initialState = {
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    countries: [],
    types: "",
  };

  const [inputs, setInputs] = useState(initialState);

  const [errors, setErrors] = useState({
    name: "",
    difficulty: 1,
    duration: 1,
    season: "",
    countries: [],
    types: "",
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    setCountry(allCountries);
  }, [allCountries]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let processedValue = value; // Valor sin modificar
  
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
  
    setTouch({
      ...touch,
      [name]: true,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/activities", inputs);
      } catch (error) {
      console.log("Error al agregar la actividad", error.message);
    }

    if (
      Object.keys(errors).length === 0 &&
      inputs.name &&
      inputs.difficulty &&
      inputs.duration &&
      inputs.countries &&
      inputs.season &&
      inputs.types
    ) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setInputs(initialState);
      }, 3000);
    } else {
      setSuccess(false);
      setFail(true);
      resetForm();
      setTimeout(() => {
        setFail(null);
      }, 3000);
    }
  };

  const handleCountry = (event) => {
    const { value } = event.target;
    if (!inputs.countries.includes(value)) {
      setInputs({
        ...inputs,
        countries: [...inputs.countries, value],
      });
    }
  };
  
  const deleteCountry = (id) => {
    setInputs({
      ...inputs,
      countries: inputs.countries.filter((countryId) => countryId !== id),
    });
  };

  const resetForm = () => {
    setInputs(initialState);
  };

  return (
    <div className={style.form}>
      <div className={style.loading}>
        {loading ? (
          <div className={style.loaderContainer}>
          <div className={style.loader}>
              <LoaderAct/>
          </div>
      </div>
        ) : (
          <div className={style.container}>
            <div className={style.background}>
              <h1 className={style.txt}>Register an Activity</h1>
              <form onSubmit={handleSubmit} className={style.conta}>
                {success && <p className={style.ok}><img src={ok} alt="success" /></p>}
                {fail !== null && <p className={style.fail}><img src={failed} alt="fail" /></p>}
  
                <div className={style.group}>
                  <label className={style.label} htmlFor="name">
                    Name:
                  </label>
                  <input
                    className={style.input}
                    name="name"
                    type="text"
                    value={inputs.name}
                    onChange={handleInputChange}
                  />
                  {touch.name && errors.name && (
                    <p className={style.validate}>{errors.name}</p>
                  )}
                </div>
  
                <div className={style.group}>
                  <label className={style.label} htmlFor="difficulty">
                    Difficulty:
                  </label>
                  <input
                    className={style.input}
                    name="difficulty"
                    type="number"
                    value={inputs.difficulty}
                    onChange={handleInputChange}
                  />
                  {touch.difficulty && errors.difficulty && (
                    <p className={style.validate}>{errors.difficulty}</p>
                  )}
                </div>
  
                <div className={style.group}>
                  <label className={style.label} htmlFor="duration">
                    Duration (hours):
                  </label>
                  <input
                    className={style.input}
                    name="duration"
                    type="number"
                    value={inputs.duration}
                    onChange={handleInputChange}
                  />
                  {touch.duration && errors.duration && (
                    <p className={style.validate}>{errors.duration}</p>
                  )}
                </div>
  
                <div className={style.group}>
                  <label className={style.label} htmlFor="countries">
                    Country:
                  </label>
                  <select
                    className={style.input}
                    name="countries"
                    onChange={handleCountry}
                    multiple
                  >
                    {country
                      .slice()
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((country) => (
                        <option
                          key={country.id}
                          value={country.id}
                          selected={inputs.countries.includes(country.id.toString())}
                        >
                          {country.name}
                        </option>
                      ))}
                  </select>
                  <div className={style.selectedCountries}>
                    {inputs.countries.map((countryId) => (
                      <div key={countryId} className={style.selectedCountry}>
                        {country.find((c) => c.id === countryId)?.name}
                        <button
                          className={style.btn}
                          type="button"
                          onClick={() => deleteCountry(countryId)}
                        >
                          <Delete />
                        </button>
                      </div>
                    ))}
                  </div>
                  {touch.countries && errors.countries && <p className={style.validate}>{errors.countries}</p>}
                </div>
  
                <div className={style.group}>
                  <label className={style.label} htmlFor="season">
                    Season:
                  </label>
                  <select
                    className={style.input}
                    name="season"
                    value={inputs.season}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Choose a season...</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                  </select>
                  {touch.season && errors.season && (
                    <p className={style.validate}>{errors.season}</p>
                  )}
                </div>
  
                <div className={style.group}>
                  <label className={style.label} htmlFor="types">
                    Activity Type:
                  </label>
                  <select
                    className={style.input}
                    name="types"
                    value={inputs.types}
                    onChange={handleInputChange}
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
                  {touch.types && errors.types && (
                    <p className={style.validate}>{errors.types}</p>
                  )}
                </div>
  
                <button className={style.create}><span className={style.containerCreate}><CreateActivity />Create</span></button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  
}
