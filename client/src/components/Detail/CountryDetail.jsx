import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
    <div className={styles.container}>
      <div className={styles.containerDetail}>
        <div className={styles.name}>
          <h1>{country.name}</h1>
        </div>
        <div>
          <img className={styles.flag} src={country.image} alt={country.name} />
        </div>
        <div className={styles.info}>
          <h3>Id: {country.id}</h3>
          <h4>Continent: {country.continent}</h4>
          <h4>Capital: {country.capital}</h4>
          <h4>Subregion: {country.subregion}</h4>
          <h4>Area: {country.area}</h4>
          <h4>Population: {country.population}</h4>
          
        </div>
      </div>
    </div>
  );
}

