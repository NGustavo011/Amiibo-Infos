import React from 'react';
import * as S from './styled'

const List = ({ children }) => {
    return(
        <S.List>
            {children}
        </S.List>
    );
}

export default List;