import React, { useEffect, useState } from 'react';
import * as S from './styled'
import AmiiboCard from '../AmiiboCard';
import useListCard from '../../hooks/ListCardHooks';
import ReactLoading from 'react-loading';

const AmiiboList = () => {

    const {listCardState, isLoading} = useListCard();
    const [ items, setItems ] = useState([]);

    useEffect(()=>{
        setItems(listCardState.map(card => {
            if(card.name){
                return(
                    <S.Item>
                        <AmiiboCard name={card.name} serie={card.amiiboSeries} img={card.image} headKey={`0x${card.head.substring(0,4)}`} data={card} />
                    </S.Item>
                    )
            }
            return null;
        }));
    }, [listCardState])
    

    return(
        <S.List>
            {isLoading ? (
                <>
                    <ReactLoading type="spin" color="#000" height={50} width={50} />
                </>
            ):
                <>
                    {items}
                </>
            }
        </S.List>    
    );
}

export default AmiiboList;