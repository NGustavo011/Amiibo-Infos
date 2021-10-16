import React, { createContext, useState } from 'react';

export const ListCardContext = createContext({
    list: []
})

const ListCardProvider = ({ children }) =>{
    const [ listCardState, setListCardState ] = useState([
        {
            name: "Toon Zelda - The Wind Waker",
            amiiboSeries: "The Legend of Zelda",
            image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        },
        {
            name: "Toon Zelda - The Wind Waker",
            amiiboSeries: "The Legend of Zelda",
            image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        },
        {
            name: "Toon Zelda - The Wind Waker",
            amiiboSeries: "The Legend of Zelda",
            image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        },
        {
            name: "Toon Zelda - The Wind Waker",
            amiiboSeries: "The Legend of Zelda",
            image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        },
    ]);

    const contextValue={
        listCardState,
    };

    return <ListCardContext.Provider value={contextValue}>{children}</ListCardContext.Provider>
}

export default ListCardProvider;