import { RESET_COUNTRIES ,GET_COUNTRIES ,FILTER_BY_TYPE,FILTER_BY_CONTINENT, ORDER_BY_ALPHABET, ORDER_BY_POPULATION, UPDATE_ORDER } from "./type";


export const updateOrder = (order) => {
    return {
        type: UPDATE_ORDER,
        payload: order
    }
}
export const resetCountries = (data) => {
    return {
        type: RESET_COUNTRIES,
        payload: data
    }
}
export const getAllCountries = (data) =>{
        return {
            type: GET_COUNTRIES,
            payload: data
        }
}

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
    }
}

export const filterByType = (types) => {
    return {
      type: FILTER_BY_TYPE,
      payload: types
    };
  };
  

export const orderByAlphabet = (status) => {
    return {
        type: ORDER_BY_ALPHABET,
        payload: status
    }
}

export const orderByPopulation = (status) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: status
    }
}