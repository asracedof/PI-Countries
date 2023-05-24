import { Link } from 'react-router-dom';
import style from '../NavBar/NavBar.module.css';
import Home from '../Icons/Home';
import Logout from '../Icons/Logout';
import AddActivity from '../Icons/AddActivity'

export default function Nav(){
    return (
    <div className= {style.container}>
       <div className={style.container2}>
        <Link className={style.p}to = "/home">
             <Home/>
        </Link>
        <Link className = {style.btnAct} to = "/form">
                <span className={style.actLink}><AddActivity/></span>
           </Link>
        <Link className= {style.btn} to= "/">
              
                    <Logout/>
                                
       </Link>
     </div>
         
       

        
        
    </div>
    );
}