import React from 'react';
import AmiiboRelease from '../AmiiboRelease';
import List from '../List';
import * as S from './styled'

const AmiiboExtraInfos = ({ character, name, serie, gameSeries, release }) => {
    return(
        <S.Wrapper>
            <S.TextTitle>Character</S.TextTitle> 
            <S.TextContent>{character}</S.TextContent>

            <S.TextTitle>Name</S.TextTitle> 
            <S.TextContent>{name}</S.TextContent>
            
            <S.TextTitle>Amiibo series</S.TextTitle> 
            <S.TextContent>{serie}</S.TextContent>

            <S.TextTitle>Game series</S.TextTitle> 
            <S.TextContent>{gameSeries}</S.TextContent>
            
            <List>
                <AmiiboRelease release={release}/>
            </List>
        </S.Wrapper>
    );
}

export default AmiiboExtraInfos;