import style from './Home.module.css';
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import { getAllCountries, resetCountries } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import Loader from '../Icons/Loader';
import SideBar from '../SideBar/SideBar';
import FilterHelpers from '../Helpers/Filters';
import OrderHelpers from '../Helpers/Orders';
import Reset from '../Icons/Reset';

export default function Home(props) {
  const { setSearchResults, SearchResults, onSearch } = props;
  const [Loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState([]);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const[isOpenBar, setisOpenBar]=useState(false);

  const dispatch = useDispatch();
  const order = useSelector(state => state.order);
  const [selectValues, setSelectValues] = useState({
    continent: "",
    type: "",
    alphabet: "",
    population: ""
  });
  
  const resetStates = () => {
    setSearchResults([]);
    setCurrentPage(1);
    dispatch(resetCountries());
    setOrden("");
    setSelectValues({
      continent: "",
      type: "",
      alphabet: "",
      population: ""
    });
  };



  const filtered = useSelector(state => {
    return state.filtered.length === 0 ? state.allCountries : state.filtered;
  });

  const filterSort = (country, order, orden) => {
    let filterActivity = country;

    if (order === "activity") {
      filterActivity = country.filter(continent => {
        return continent.activities.some(act => act.name === orden);
      });
    } else if (order === "continent") {
      filterActivity = country.filter(continent => {
        return continent.continents === orden;
      });
    }

    let sortedCountries;

    if (order === "name" || order === "population") {
      sortedCountries = filterActivity.slice().sort((a, b) => {
        if (order === "name") {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return orden === "ascendente" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        } else if (order === "population") {
          return orden === "ascendente" ? b.population - a.population : a.population - b.population;
        }

        return 0;
      });
    } else {
      sortedCountries = filterActivity;
    }

    return sortedCountries;
  };

  const getCountries = async () => {
    try {
      const response = await axios.get(`/countries`);
      const data = response.data;
      dispatch(getAllCountries(data));
    } catch (error) {
      // Manejar el error de la solicitud HTTP
    }
  };

  useEffect(() =>{
    setSearchResults([]);
    setCurrentPage(1);
    dispatch(resetCountries());
    setOrden("");
  }, [] )

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    setTimeout(() => {
      if (isMounted) setLoading(false);
    }, 1000);

    setCountryData(filtered);

    return () => {
      isMounted = false;
    };
  }, [filtered]);

  useEffect(() => {
    let isMounted = true;

    getCountries()
      .then(() => {
        if (isMounted) setLoading(false);
      })
      .catch((error) => {
        // Manejar el error de la solicitud HTTP
      });

    return () => {
      isMounted = false;
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  let filterSortCountries = filterSort(countryData, order, orden);

  const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    const totalPages = Math.ceil(
        SearchResults.length > 0 ? SearchResults.length / 10 : filterSortCountries.length / 10
      );
      

      return ( 
        
        <div className={style.home}>
          
          {Loading ? (
            <div className={style.loaderContainer}>
                <div className={style.loader}>
                    <Loader/>
                </div>
            </div>
          ) : (
            <> 
            <main className={style.main}>
                <SideBar>
                <h3>Filters</h3><div className={style.filters}><FilterHelpers setOrden={setOrden} setCurrentPage={setCurrentPage} /></div>
                <h3>Sort</h3><div className={style.orders}><OrderHelpers setOrden={setOrden} /></div>
                </SideBar>
                <div className={style.body}>
              <div className={style.part1}>
                 <div className={style.title}>
                     <h1>Embark on a Journey</h1>
                     <h2>Choose your Destination</h2>
                  </div>
                  <div className={style.searchResetContainer}>
                    <SearchBar onSearch={onSearch} />
                    <button className={style.button} onClick={() => { resetStates() }}><span className={style.button__text}>Reset</span><span className={style.button__icon}><Reset/></span></button>
                  </div>
                             
              </div>
              <div className={style.container}>
                  {SearchResults.length > 0 ? (
                  SearchResults.slice((currentPage - 1) * 10, currentPage * 10).map((cont, index) => (<Card key={cont.id} cont={cont}/>
                  ))
                ) : (
                  filterSortCountries.slice((currentPage - 1) * 10, currentPage * 10).map((cont) => (
                    <Card key={cont.id} cont={cont}/>
                  ))
                )}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
                </div>
            </main>
            </>)}
        </div>
      );
      
}