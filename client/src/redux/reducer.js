import {
    FILTER_BY_TYPE,
    FILTER_BY_CONTINENT,
    GET_COUNTRIES,
    ORDER_BY_ALPHABET,
    ORDER_BY_POPULATION,
    RESET_COUNTRIES
} from "./type";
  
const initialState = {
    allCountries: [],
    filtered: [],
    order: ""
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case RESET_COUNTRIES:
        return {
          ...state,
          filtered: state.allCountries,
          order: ""
      };
  
      case GET_COUNTRIES:
        return {
          ...state,
          allCountries: action.payload,
          filtered: action.payload
      };
  
      case FILTER_BY_CONTINENT:
        const { payload: continent } = action;
        const filteredByContinent = state.allCountries.filter(
          country => country.continents === continent
        );
        return {
          ...state,
          filtered: filteredByContinent,
          order: "continent"
      };
  
      case FILTER_BY_TYPE:
        const { payload: types } = action;
        const filteredByType = state.allCountries.filter(country =>
          country.activities.some(activities => activities.types === types)
        );
        return {
          ...state,
          filtered: filteredByType,
          order: "types"
      };

  
      case ORDER_BY_ALPHABET:
        const { payload: sortOrder } = action;
        const sortedCountriesByName = [...state.filtered].sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return sortOrder === "ascendente" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });
        return {
          ...state,
          filtered: sortedCountriesByName,
          order: "name"
        };
  
      case ORDER_BY_POPULATION:
        const { payload: orderPopulation } = action;
        const sortedCountriesByPopulation = [...state.filtered].sort((a, b) => {
          return orderPopulation === "ascendente" ? b.population - a.population : a.population - b.population;
        });
        return {
          ...state,
          filtered: sortedCountriesByPopulation,
          order: "population"
        };
  
      default:
        return state;
    }
};
  
export default reducer;
  