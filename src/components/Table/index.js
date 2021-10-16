import React from 'react';
import * as S from './styled'

const Table = ({ children }) => {
    return(
        <S.Table>
            <S.Row>
                <S.Title>Game</S.Title>
                <S.Title>Usage</S.Title>
            </S.Row>
            {children}
        </S.Table>
    );
}

export default Table;