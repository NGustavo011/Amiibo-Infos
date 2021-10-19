import React, { useEffect, useState } from 'react';
import * as S from './styled'

const AmiiboUsage = ({usage, amiiboId, name}) => {
    const [generalUsage, setGeneralUsage] = useState([]);
    useEffect(()=>{
        setGeneralUsage(usage.map((item, key)=>{
            return (
                    <S.Row key={`${amiiboId}-${key}`}>
                        <S.Value>{item["gameName"].toUpperCase()}</S.Value> 
                        <S.Value>{item["Usage"]}</S.Value>
                        <S.Value>{item["console"]}</S.Value> 
                    </S.Row>
                )
        }));
    }, [])
    

    return(
        <>
           {generalUsage}
        </>
    );
}

export default AmiiboUsage;