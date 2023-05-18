import { Link } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';


export default function Nav(){
    return (
    <div className= {style.container}>
       
           
           <Link className = {style.link} to = "/form">
                 Add Activity
           </Link>
             
           <div className={style.container2}>
        <Link className={style.p}to = "/home">
         <img className = {style.img} src="https://img2.freepng.es/20180624/vft/kisspng-button-computer-icons-background-process-computer-home-page-poster-5b2fcc61bb3d83.812488621529859169767.jpg" alt = "Mundo"/>
        </Link>
      
        </div>
          <Link className= {style.decoration} to= "/">
        <div className={style.div}>
         <h1 className= {style.h1}>
          <img className= {style.img2} src = "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-logout-icon-png-image_958608.jpg" alt = ""/>
          
          </h1>
          </div>
          </Link>

        
        
    </div>
    );
}