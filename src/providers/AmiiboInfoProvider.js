import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api'

export const AmiiboInfoContext = createContext({
    list: []
})

const AmiiboInfoProvider = ({ children }) =>{
    const [actualAmiiboUse, setActualAmiiboUse] = useState();

    const getAmiiboUse = async(key) =>{
        let amiibosUsageAux = [];
        
        const { data: {amiibo} } = await api.get(`amiibo/?character=${key}&showusage`);
        
        if(amiibo?.length > 0){
            amiibo.map((amiibo)=>{
                amiibo.games3DS.map((game)=>{
                    amiibosUsageAux.push({"console": "Nintendo 3DS", "gameName": game.gameName, "Usage":game.amiiboUsage[0].Usage});
                });
                amiibo.gamesWiiU.map((game)=>{
                    amiibosUsageAux.push({"console": "Wii U", "gameName": game.gameName, "Usage":game.amiiboUsage[0].Usage});
                });
                amiibo.gamesSwitch.map((game)=>{
                    amiibosUsageAux.push({"console": "Nintendo Switch", "gameName": game.gameName, "Usage":game.amiiboUsage[0].Usage});
                });
            });
            amiibosUsageAux = amiibosUsageAux.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.console === thing.console && t.gameName === thing.gameName && t.Usage === thing.Usage
                ))
            )
            setActualAmiiboUse(amiibosUsageAux.sort((a,b) => (a.gameName > b.gameName) ? 1 : ((b.gameName > a.gameName) ? -1 : 0)));
        }
    }

    const contextValue={
        actualAmiiboUse,
        getAmiiboUse,
    };

    return <AmiiboInfoContext.Provider value={contextValue}>{children}</AmiiboInfoContext.Provider>
}

export default AmiiboInfoProvider;