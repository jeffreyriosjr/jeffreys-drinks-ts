import React, {createContext, useReducer} from 'react';
import instance from '../api/apiConfig';

const initialState = {
    drinks: [],
    drink:  undefined,
    is_loading: false,
    getDrinks: () => {},
    getSingleDrink: () => {},
};

const appReducer = (state: any ,action: any) => {
    switch(action.type) {
        case 'GET_DRINKS':
            return {...state, drinks: action.payload, is_loading: false };
        case 'GET_SINGLE_DRINK':
            return {...state, drinks: action.payload, is_loading: false };
        case 'SET_LOADING':
                return { ...state, is_loading: action.payload };        
        default:
                return [...state]; 
    }
};
export const GlobalContext = createContext<InitialStateType>(initialState);

export const GlobalProvider: React.FC = ({children}) => {
    const [state , dispatch] = useReducer(appReducer,initialState)

    const getDrinks = async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try{
           
            let {data}= await instance.get('/api/json/v1/1/search.php?s=');
            let items = data.drinks;
            
            // console.log('data',items)
            dispatch({type:'GET_DRINKS', payload:items})
          
        }
        catch(e) {
            // console.log(e);
        }
    };
    const getSingleDrink = async () => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
          let { data } = await instance.get('/api/json/v1/1/search.php?s=');
        //   console.log(data);
          dispatch({ type: 'GET_SINGLE_DRINK', payload: data });
        } catch (e) {
        //   console.log(e);
        }
      };
    return (
        <GlobalContext.Provider value={{ 
            drinks: state.drinks,
            drink: state.drink,
            is_loading: state.is_loading,
            getDrinks,
            getSingleDrink
            }}>
            {children} {/**<AppRouter/> */}

        </GlobalContext.Provider>
    )
};