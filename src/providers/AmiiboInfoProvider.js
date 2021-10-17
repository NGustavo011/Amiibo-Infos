import React, { createContext, useState } from 'react';
import api from '../services/api'

export const AmiiboInfoContext = createContext({
    list: []
})

const AmiiboInfoProvider = ({ children }) =>{
    const [actualAmiiboUse, setActualAmiiboUse] = useState();

    const getAmiiboUse = async(key) =>{
        await api.get(`amiibo/?character=${key}&showusage`).then(({ data:{amiibo} }) =>{
            setActualAmiiboUse(amiibo.map((am)=>{
                return am;
            }));
        })
    }

    const contextValue={
        actualAmiiboUse,
        getAmiiboUse,
    };

    return <AmiiboInfoContext.Provider value={contextValue}>{children}</AmiiboInfoContext.Provider>
}

export default AmiiboInfoProvider;