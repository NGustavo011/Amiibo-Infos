import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api'

export const ListCardContext = createContext({
    list: []
})

const ListCardProvider = ({ children }) =>{
    const [ isLoading, setIsLoading] = useState(true);
    const [ listCardState, setListCardState ] = useState([]);
    const [ listOriginalCardState, setListOriginalCardState ] = useState([]);
    const [ listNameState, setListNameState ] = useState([]);
    const [ infosFirstLoading, setInfosFirstLoading ] = useState(false);

    const getAllAmiibo = async () =>{
        await api.get(`amiibo`).then(({ data:{amiibo} }) =>{
            setListCardState(amiibo);
            setListOriginalCardState(amiibo);
        })
        setInfosFirstLoading(true);
    }

    const getAmiibo = async(name) =>{
        console.log(name);
        await api.get(`amiibo/?character=${name}`).then(({ data:{amiibo} }) =>{
            setListCardState(amiibo);
        })
    }

    const goHome = () =>{
        setListCardState(listOriginalCardState);
    }

    useEffect(()=>{
        getAllAmiibo(); 
    }, []);

    useEffect(()=>{
        setListNameState(listCardState.map((card)=>{
            return {label: card.character, value: card.character};
        }));
        setIsLoading(false);
    }, [infosFirstLoading]);

    const contextValue={
        listCardState,
        isLoading,
        listNameState,
        getAmiibo,
        goHome
    };

    return <ListCardContext.Provider value={contextValue}>{children}</ListCardContext.Provider>
}

export default ListCardProvider;