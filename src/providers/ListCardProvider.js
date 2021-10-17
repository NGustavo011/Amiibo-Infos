import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api'

export const ListCardContext = createContext({
    list: []
})

const ListCardProvider = ({ children }) =>{
    const [ isLoading, setIsLoading] = useState(true);
    const [ listCardState, setListCardState ] = useState([]);
    const [ listNameState, setListNameState ] = useState([]);

    const getAllAmiibo = () =>{
        api.get(`amiibo`).then(({ data:{amiibo} }) =>{
            setListCardState(amiibo);
        })
    }

    useEffect(()=>{
        getAllAmiibo(); 
    }, []);

    useEffect(()=>{
        setListNameState(listCardState.map((card)=>{
            return {label: card.name, value: card.name};
        }));
        setIsLoading(false);
    }, [listCardState]);

    const contextValue={
        listCardState,
        isLoading,
        listNameState,
    };

    return <ListCardContext.Provider value={contextValue}>{children}</ListCardContext.Provider>
}

export default ListCardProvider;