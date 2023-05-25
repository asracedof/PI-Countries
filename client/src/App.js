import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../src/components/Home/Home';
import CountryDetail from './components/Detail/CountryDetail';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import UpdateActivity from './components/UpdateActivity/UpadateActivity'
import Form from './components/Form/Form';
import axios from 'axios';

function App() {

  const [SearchResults, setSearchResults] = useState([]);
  const [ShowNavBar, setShowNavBar] = useState(true);
  
  const handleSearch = async (name) => {
    try {
      const response = await axios.get(`/countries/name?name=${name}`);
      const data = response.data;
      setSearchResults(data);
    } catch (error) {
      console.error(error);
      
    }
  };
  
     const navigate = useNavigate();
     const home = () =>{
       navigate("/home");
      } 
      const logout = () => {
        navigate("/");
      }  

      const location = useLocation();
      useEffect(() => {
        setShowNavBar(location.pathname !== '/');
      }, [location]);

   return (
    <div>
     {ShowNavBar && <NavBar/>}
     <Routes>
     <Route exact path='/' element= {
     <>
     <Landing/>
     
     <Footer/>
     </>
    }></Route>
     <Route path= "/home" element = {<Home logout = { logout } setSearchResults = {setSearchResults} SearchResults = {SearchResults} onSearch = {handleSearch}/>}></Route>
     <Route path= "/detail/:id" element = {<CountryDetail />}></Route>
     <Route path= "/form" element = {<Form home = {home} />}></Route>
     <Route path="/formAct" element = {<UpdateActivity/>}></Route>
     
     </Routes>
     
   </div>
   
    
  );
}
export default App;
