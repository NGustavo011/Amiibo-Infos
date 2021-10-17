import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import AmiiboExtraInfos from '../AmiiboExtraInfos';
import Table from '../Table';
import AmiiboUsage from '../AmiiboUsage';
import * as S from './styled';

import useAmiiboInfo from '../../hooks/AmiiboInfoHooks';
import { set } from 'react-hook-form';

const AmiiboInfo = () => {
    const {state} = useLocation();
    const amiiboInfoGeneral = state.data;
    const {actualAmiiboUse, getAmiiboUse} = useAmiiboInfo();
    const {key} = useParams();
    const [usageAux, setUsageAux] = useState();
    const [usage, setUsage] = useState([]);
       
    useEffect(()=>{
        getAmiiboUse(key);
    }, [])

    useEffect(()=>{
        let amiibosUsageAux = [];

        if(actualAmiiboUse){
            actualAmiiboUse.map((amiibo)=>{
                amiibo.games3DS.map((game)=>{
                    amiibosUsageAux.push({"console": "Nintendo 3DS", "gameName": game.gameName, "Usage":game.amiiboUsage[0].Usage});
                });
                amiibo.gamesWiiU.map((game)=>{
                    amiibosUsageAux.push({"console": "Wii U", "gameName": game.gameName, "Usage":game.amiiboUsage[0].Usage});
                });
                amiibo.gamesSwitch.map((game)=>{
                    amiibosUsageAux.push({"console": "Nintendo Switch", "gameName": game.gameName, "Usage":game.amiiboUsage[0].Usage});
                });
            });
            amiibosUsageAux = amiibosUsageAux.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.console === thing.console && t.gameName === thing.gameName && t.Usage === thing.Usage
                ))
            )
            setUsage(amiibosUsageAux.sort((a,b) => (a.gameName > b.gameName) ? 1 : ((b.gameName > a.gameName) ? -1 : 0)))
        }
    }, [actualAmiiboUse])

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
                {usage.length>0?
                    <Table>
                        <AmiiboUsage usage={usage}/>
                    </Table>
                    :
                    <S.NoUse>Amiibo has no use</S.NoUse>
                }
             </S.WrapperUsage>
        </S.Wrapper>
    );
}

export default AmiiboInfo;