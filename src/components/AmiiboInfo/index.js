import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import AmiiboExtraInfos from '../AmiiboExtraInfos';
import Table from '../Table';
import AmiiboUsage from '../AmiiboUsage';
import * as S from './styled';
import ReactLoading from 'react-loading';
import useAmiiboInfo from '../../hooks/AmiiboInfoHooks';

const AmiiboInfo = () => {
    const {state} = useLocation();
    const amiiboInfoGeneral = state.data;
    const {actualAmiiboUse, getAmiiboUse} = useAmiiboInfo();
    const {key} = useParams();
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(()=>{
        (
        async ()=>{
            await getAmiiboUse(key);
            setIsLoading(false);
        })() 
        return () => {
            setIsLoading(false); // This worked for me
          };
    }, [getAmiiboUse, key]);

    return(
        <S.Wrapper>
            <S.WrapperDetail>
                <S.ZoomImageWrapper>
                    <S.ZoomImage img={amiiboInfoGeneral.image} zoomScale={2} width={450} height={350} />
                </S.ZoomImageWrapper>
                <AmiiboExtraInfos character={amiiboInfoGeneral.character} name={amiiboInfoGeneral.name} serie= {amiiboInfoGeneral.amiiboSeries} gameSeries={amiiboInfoGeneral.gameSeries} release={amiiboInfoGeneral.release}/>
            </S.WrapperDetail>
            <S.WrapperUsage>
                <S.Text>USE IN GAMES</S.Text>
                {!isLoading?
                    <Table>
                        <AmiiboUsage usage={actualAmiiboUse} amiiboId={key} name={amiiboInfoGeneral.name} />
                    </Table>
                    :
                    <S.WrapperLoading>
                        <ReactLoading type="spin" color="#000" height={50} width={50} />
                    </S.WrapperLoading>
                }
             </S.WrapperUsage>
        </S.Wrapper>
    );
}

export default AmiiboInfo;