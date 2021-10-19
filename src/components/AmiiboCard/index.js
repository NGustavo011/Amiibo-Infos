import React from 'react';
import * as S from './styled'


const AmiiboCard = ({name, serie, img, headKey, data}) => {

    return(
        <S.LinkCard to={{pathname:`detail/${headKey}`, state: {data: data}}} >
            <S.Card>   
                <S.Name>{name}</S.Name>
                <S.Serie>{serie.toUpperCase()}</S.Serie>
                <S.ImageWrapper>
                    <S.Image src={`${img}`} alt={`${name} amiibo of ${serie}`} />
                </S.ImageWrapper>
            </S.Card>
        </S.LinkCard>
    );
}

export default AmiiboCard;