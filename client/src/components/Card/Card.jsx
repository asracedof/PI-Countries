import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({cont}) {
  return (
    <div className={style.card}>
                      <Link className={style.txt} to={`/detail/${cont.id}`} key={cont.id}>
                       <div className={style.imgContainer}><img className={style.img} src={cont.image} alt={cont.name} /></div> 
                        <div className={style.nameContainer}><h2 className={style.name}>{cont.name}</h2></div>
                        <div className={style.infoContainer}><p className={style.p}>Continent: {cont.continents}</p>
                        <p className={style.p}>Population: {cont.population}</p>
                        </div>
                      </Link>
      </div>
  );
}
