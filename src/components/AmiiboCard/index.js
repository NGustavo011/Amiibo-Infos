import React from 'react';
import * as S from './styled'

const AmiiboCard = ({name, serie, img, headKey, data}) => {
    return(
        <S.Card href={`/detail/${headKey}`}>
            <S.Name>{name}</S.Name>
            <S.Serie>{serie.toUpperCase()}</S.Serie>
            <S.ImageWrapper>
                <S.Image src={`${img}`} alt={`${name} amiibo of ${serie}`} />
            </S.ImageWrapper>
        </S.Card>
    );
}

export default AmiiboCard;