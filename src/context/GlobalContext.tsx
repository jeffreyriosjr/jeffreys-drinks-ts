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
            return {...state, drink: action.payload, is_loading: false };
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
           
            let {data}= await instance.get('api/json/v1/1/search.php?s=');
            let items = data.drinks;
            
             
            dispatch({type:'GET_DRINKS', payload:items})
          
        }
        catch(e) {
            // console.log(e);
        }
    };
    const getSingleDrink = async (drinkId : number) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
          let {data}= await instance.get(`/api/json/v1/1/lookup.php?i=${drinkId}`);
          let items = data.drinks;
           console.log('single',items[0]);
        //    debugger
          dispatch({ type: 'GET_SINGLE_DRINK', payload: items[0] });
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