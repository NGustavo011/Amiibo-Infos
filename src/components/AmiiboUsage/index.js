import React from 'react';
import * as S from './styled'

const AmiiboUsage = ({usage}) => {
    
    const generalUsage = usage.map((item, key)=>{
        return (
                <S.Row>
                    <S.Value key={`gameName${key}`}>{item["gameName"].toUpperCase()}</S.Value> 
                    <S.Value key={`Usage${key}`}>{item["Usage"]}</S.Value>
                    <S.Value key={`console${key}`}>{item["console"]}</S.Value> 
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