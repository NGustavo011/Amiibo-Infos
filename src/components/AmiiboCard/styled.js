import styled from "styled-components";
import { Link } from 'react-router-dom';
import SuperMarioBros from '../../assets/fonts/SuperMarioBros-ov7d.ttf'

export const LinkCard = styled(Link)`
    text-decoration: none;
`

export const Card = styled.a`
    color: black;
    text-decoration: none;
    width: 17vw;
    height: 500px;
    overflow: hidden;
    box-shadow: 0px 0px 20px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    margin-bottom: 45px;
    cursor: pointer;
    &:hover {
      background-color: #D2B48C;
      transition: 0.5s ease-out;
      transform: scale(1.1);
    }
    transition: 0.5s ease-out;
    transform: scale(1.0);
`

export const Name = styled.h3`
    @font-face{
    font-family: 'SuperMarioBros';
        src: url(${SuperMarioBros});
    }
    text-align: center;
    font: 400 1rem 'SuperMarioBros', sans-serif;
    font-size: 22px;
    font-weight: bold;
    color: #e60012;
    margin: 0px 0px 10px 0px;
`

export const Serie = styled.h4`
    @font-face{
    font-family: 'SuperMarioBros';
        src: url(${SuperMarioBros});
    }

    font: 400 1rem 'SuperMarioBros', sans-serif;
    font-size: 20px;
    font-weight: bold;
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