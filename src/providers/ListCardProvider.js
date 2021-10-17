import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api'

export const ListCardContext = createContext({
    list: []
})

const ListCardProvider = ({ children }) =>{
    const [ isLoading, setIsLoading] = useState(true);
    const [ listCardState, setListCardState ] = useState([]);

    const getAllAmiibo = () =>{
        console.log("oi");
        api.get(`amiibo`).then(({ data:{amiibo} }) =>{
            setListCardState(amiibo);
        })
        console.log("oi - " + listCardState);
    }

    useEffect(()=>{
        getAllAmiibo();
    }, []);

    const contextValue={
        listCardState,
    };

    return <ListCardContext.Provider value={contextValue}>{children}</ListCardContext.Provider>
}

export default ListCardProvider;