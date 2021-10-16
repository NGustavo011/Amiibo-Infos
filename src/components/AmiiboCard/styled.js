import styled from "styled-components";

export const Card = styled.a`
    width: 20vw;
    max-width: 20vw;
    height: 65vh;
    overflow: hidden;
    box-shadow: 0px 0px 20px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    cursor: pointer;
    &:hover {
      background-color: #D2B48C;
      transition: 0.5s ease-out;
    }
`

export const Name = styled.h3`
    margin: 0px;
`

export const Serie = styled.h4`
    margin: 0px 0px 20px 0px;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`

export const Image = styled.img`
    width: 200px;
`