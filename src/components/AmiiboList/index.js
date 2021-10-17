import React, { useEffect } from 'react';
import * as S from './styled'
import AmiiboCard from '../AmiiboCard';
import useListCard from '../../hooks/ListCardHooks';

const AmiiboList = () => {

    const {listCardState, getAllAmiibos} = useListCard();

    const items = listCardState.map(card => {
        if(card.name){
            return(
                <S.Item>
                    <AmiiboCard name={card.name} serie={card.amiiboSeries} img={card.image} />
                </S.Item>
                )
        }
        return null;
    })

    return(
        <S.List>
            {items}
        </S.List>    
    );
}

export default AmiiboList;

/*

            <S.Item>
                <AmiiboCard name="Toon Zelda - The Wind Waker" serie="The Legend of Zelda" img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Zelda" serie="The Legend of Zelda" img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03560902.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Luigi" serie="Super Smash Bros." img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Joker" serie="Super Smash Bros." img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_3a000000-03a10002.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Terry" serie="Super Smash Bros." img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_3c800000-03a40002.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Zelda" serie="The Legend of Zelda" img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03560902.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Zelda" serie="The Legend of Zelda" img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03560902.png" />
            </S.Item>
            <S.Item>
                <AmiiboCard name="Zelda" serie="The Legend of Zelda" img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03560902.png" />
            </S.Item>
*/