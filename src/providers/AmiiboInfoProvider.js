import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '../services/api'

export const AmiiboInfoContext = createContext({
    list: []
})

const AmiiboInfoProvider = ({ children }) =>{
    const [actualAmiiboUse, setActualAmiiboUse] = useState();

    const getAmiiboUse = async(key) =>{
        console.log(key);
        await api.get(`amiibo/?character=${key}&showusage`).then(({ data:{amiibo} }) =>{
            setActualAmiiboUse(amiibo);
        })
    }

    const contextValue={
        getAmiiboUse
    };

    return <AmiiboInfoContext.Provider value={contextValue}>{children}</AmiiboInfoContext.Provider>
}

export default AmiiboInfoProvider;