import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/countries/${id}`);
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.detail}>
    
      <div className={styles.containerDetail}>
         <div>
          <img className={styles.flag} src={country.image} alt={country.name} />
        </div>
        <div className={styles.info}>
           <div className={styles.name}>
          <h1>{country.name}</h1>
        </div>
          <h3>Id: {country.id}</h3>
          <h4>Continent: {country.continents}</h4>
          <h4>Capital: {country.capital}</h4>
          <h4>Subregion: {country.subregion}</h4>
          <h4>Area: {country.area}</h4>
          <h4>Population: {country.population}</h4>
        </div>
        {
          country.activities && (country.activities.map(activity=>(
            <div key={activity.id}>
              <h4>{activity.name}</h4>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration}</p>
              <p>Season: {activity.season}</p>
            </div>
          )))
        }

      </div>
    </div>
    
  );
}