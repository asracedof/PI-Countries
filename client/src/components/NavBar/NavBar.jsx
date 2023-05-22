import { Link } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';
import Home from '../Icons/Home';
import Logout from '../Icons/Logout';


export default function Nav(){
    return (
    <div className= {style.container}>
       <div className={style.container2}>
        <Link className={style.p}to = "/home">
             <Home/>
        </Link>
        <Link className= {style.btn} to= "/">
              <div className={style.sign}>
                    <Logout/>
                    <div className={style.text}>Logout
                    </div>
                
               </div>
          </Link>
        </div>
         
       

        
        
    </div>
    );
}