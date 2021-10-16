import React from 'react';
import * as S from './styled'

const AmiiboRelease = ({release}) => {
    const releaseArr = Object.keys(release).map((country)=>[(country), release[country]]);
    
    const generalRelease = releaseArr.map((item, key)=>{
        return <S.Item key={key}>{item[0].toUpperCase()} - {item[1]}</S.Item>
    })

    return(
        <>
            <S.Text>General release</S.Text>
            {generalRelease}
        </>
    );
}

export default AmiiboRelease;