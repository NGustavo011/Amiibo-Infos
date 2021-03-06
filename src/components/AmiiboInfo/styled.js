import styled from "styled-components";
import Zoom from 'react-img-zoom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const WrapperDetail = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0px 300px;
` 

export const ZoomImageWrapper = styled.div`
    cursor: zoom-out;
`

export const ZoomImage = styled(Zoom)`
`

export const WrapperUsage = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
` 

export const Text = styled.small`
    font-weight: bold;
    margin-top: 80px;
    text-align: center;
    font-size: 30px;
`

export const NoUse = styled.small`
    margin: 30px 0px 40px 0px;
    text-align: center;
    font-size: 22px;
`

export const WrapperLoading = styled.div`
    display: flex;
    justify-content: center;
`