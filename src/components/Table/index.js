import React from 'react';
import * as S from './styled'

const Table = ({ children }) => {
    return(
        <S.Wrapper>
            <S.Table>
                <S.Row>
                    <S.Title>GAME</S.Title>
                    <S.Title>USAGE</S.Title>
                    <S.Title>CONSOLE</S.Title>
                </S.Row>
                {children}
            </S.Table>
        </S.Wrapper>   
    );
}

export default Table;