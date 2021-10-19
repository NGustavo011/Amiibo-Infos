import React from 'react';
import * as S from './styled'

const AmiiboUsage = ({usage, amiiboId}) => {
    
    const generalUsage = usage.map((item, key)=>{
        return (
                <S.Row>
                    <S.Value key={`${amiiboId}-gameName-${key}`}>{item["gameName"].toUpperCase()}</S.Value> 
                    <S.Value key={`${amiiboId}-Usage-${key}`}>{item["Usage"]}</S.Value>
                    <S.Value key={`${amiiboId}-console-${key}`}>{item["console"]}</S.Value> 
                </S.Row>
            )
    })

    return(
        <>
           {generalUsage}
        </>
    );
}

export default AmiiboUsage;