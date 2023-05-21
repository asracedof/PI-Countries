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
    
      <div className={styles.containerDetail}>
        <div className={styles.detail}>
            <div className={styles.containerName} >
               <h1 className={styles.name}>{country.name}<span className={styles.id}>({country.id})</span></h1>
           </div>
           <div className={styles.containerDetailInfo}>
         <div>
           <img className={styles.flag} src={country.image} alt={country.name} />
         </div>
           <div className={styles.info}>
              <h4>Continent: {country.continents}</h4>
              <h4>Capital: {country.capital}</h4>
              <h4>Subregion: {country.subregion}</h4>
              <h4>Area: {country.area}</h4>
              <h4>Population: {country.population}</h4>
            </div>
            <div className={styles.divider}></div>

        <div className={styles.containerActivities}>
        {
          country.activities.length ? (country.activities.map(activity=>(
            <div key={activity.id}>
              <h4>{activity.name}</h4>
              <p>Types: {activity.types}</p>
              <p>Duration: {activity.duration}</p>
              <p>Season: {activity.season}</p>
            </div>
          ))):(<h3>No activities</h3>)
        }
        </div>
        </div>
        </div>

      </div>
    
  );
}
