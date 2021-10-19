import React, { useEffect, useState } from 'react';
import * as S from './styled'
import AmiiboCard from '../AmiiboCard';
import useListCard from '../../hooks/ListCardHooks';
import ReactLoading from 'react-loading';

const AmiiboList = () => {

    const { listCardState } = useListCard();
    const [ items, setItems ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(()=>{
        if(!listCardState.length)
            return null;

        setItems(listCardState.map((card, index) => {
            return(
                <S.Item key={`0x${card.head.substring(0,4)}-${card.name}-${index}`}>
                    <AmiiboCard name={card.name} serie={card.amiiboSeries} img={card.image} headKey={`0x${card.head.substring(0,4)}`} data={card} />
                </S.Item>
                )
        }));
        setIsLoading(false);
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