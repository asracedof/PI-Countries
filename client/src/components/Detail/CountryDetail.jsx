import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios from 'axios';
import Delete from "../Icons/Delete";
import Edit from '../Icons/Edit';
import styles from './Detail.module.css';

export default function Detail() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/countries/${id}`);
        setCountry(response.data);
        setActivities(response.data.activities);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  const handleDeleteActivity = async (activityId) => {
    try {
      await axios.delete(`/activities/${activityId}`);
      setActivities(activities.filter((activity) => activity.id !== activityId));
    } catch (error) {
      console.error("Error al eliminar la actividad", error);
    }
  };

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.containerDetail}>
      <div className={styles.detail}>
        <div className={styles.containerName}>
          <h1 className={styles.name}>
            {country.name}
            <span className={styles.id}>({country.id})</span>
          </h1>
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
            {activities.length ? (
              activities.map((activity) => (
                <div key={activity.id}>
                  <h4>
                    <span>#{activity.id}</span> {activity.name}
                    <Link to={`/formAct?countryId=${country.id}&id=${activity.id}`}>
                        <button className={styles.editButton}><Edit/><span className={styles.label}></span></button>
                     </Link> 
                     <button className={styles.btn}
                      type="button" 
                      onClick={() => handleDeleteActivity(activity.id)}>
                      <Delete/>
                    </button>
                  </h4>
                  <p>Types: {activity.types}</p>
                  <p>Duration: {activity.duration}</p>
                  <p>Season: {activity.season}</p>
                </div>
              ))
            ) : (
              <h3>No activities</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
