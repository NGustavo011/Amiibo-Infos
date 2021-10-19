import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api'

export const ListCardContext = createContext({
    list: []
})

const ListCardProvider = ({ children }) =>{
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
        await api.get(`amiibo/?character=${name}`).then(({ data:{amiibo} }) =>{
            console.log(amiibo);
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
    }, [infosFirstLoading]);

    const contextValue={
        listCardState,
        listNameState,
        getAmiibo,
        goHome
    };

    return <ListCardContext.Provider value={contextValue}>{children}</ListCardContext.Provider>
}

export default ListCardProvider;