import React, { useState } from 'react';
import AmiiboExtraInfos from '../AmiiboExtraInfos';
import Table from '../Table';
import AmiiboUsage from '../AmiiboUsage';
import * as S from './styled'

const AmiiboInfo = () => {
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

    return(
        <S.Wrapper>
            
            <S.WrapperDetail>
                <S.ZoomImageWrapper>
                <S.ZoomImage img="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03560902.png" zoomScale={2} width={400} height={400} />
                </S.ZoomImageWrapper>
                
                <AmiiboExtraInfos character="Zelda" name="Zelda" serie="The Legend of Zelda" gameSeries="The Legend of Zelda" release={release}/>
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