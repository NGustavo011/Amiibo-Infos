import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import AmiiboExtraInfos from '../AmiiboExtraInfos';
import Table from '../Table';
import AmiiboUsage from '../AmiiboUsage';
import * as S from './styled';

import useAmiiboInfo from '../../hooks/AmiiboInfoHooks';

const AmiiboInfo = () => {
    const {state} = useLocation();
    const amiiboInfoGeneral = state.data;
    const {key} = useParams();
    const [release, setRelease] = useState({"au": "2014-12-12", "eu": "2014-12-19", "jp": "2014-12-06", "na": "2014-12-14"});
    const [usage, setUsage] = useState([
        {
            "gameName": "Ace Combat Assault Horizon Legacy+",
            "Usage": "Unlock character-themed aircraft early"
        },
        {
            "gameName": "Chibi-Robo! Zip Lash",
            "Usage": "Unlock figure in the pose of the character (requires Chibi-Robo amiibo)"
        },
    ])  
    
    useEffect(()=>{
        console.log(amiiboInfoGeneral)
    },[])

    return(
        <S.Wrapper> 
            <S.WrapperDetail>
                <S.ZoomImageWrapper>
                    <S.ZoomImage img={amiiboInfoGeneral.image} zoomScale={2} width={350} height={350} />
                </S.ZoomImageWrapper>
                <AmiiboExtraInfos character={amiiboInfoGeneral.character} name={amiiboInfoGeneral.name} serie= {amiiboInfoGeneral.amiiboSeries} gameSeries={amiiboInfoGeneral.gameSeries} release={amiiboInfoGeneral.release}/>
            </S.WrapperDetail>
            <S.WrapperUsage>
                <S.Text>USE IN GAMES</S.Text>
                <Table>
                    <AmiiboUsage usage={usage}/>
                </Table>
             </S.WrapperUsage>
        </S.Wrapper>
    );
}

export default AmiiboInfo;