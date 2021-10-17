import styled from "styled-components";
import Select from 'react-select';

export const Wrapper = styled.div`
    background-color: #000;
    margin-bottom: 35px;
    padding: 50px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const WrapperLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`

export const Logo = styled.img`
    width: 250px;
`

export const FormAmiibo = styled.form`
    width: 100%;
    display: flex;  
    justify-content: center;
    align-items: center;
`

export const HomeOption = styled.a`
    cursor: pointer;
`

export const HomeText = styled.i`
    font-size: 30px;
    color: #e60012;
    text-align: center;
    margin-right: 20px;
    &:hover{
        color: #FF8B8B;
        transition: 0.5s ease-in-out;
        transform: scale(1.1);
    }
`

export const SelectAmiibo = styled(Select)`
    width: 50%;
`

export const ButtonAmiibo = styled.button`
    width: 100px;
    padding: 7px 5px;
    background-color: #000;
    border: 3px solid #e60012;
    border-radius: 10%;
    margin-left: 20px;
    cursor: pointer;
    &:hover{
        background-color: #FF8B8B;
        transition: 0.5s ease-in-out;
        transform: scale(1.1);
    }
`

export const SearchIcon = styled.i`
    font-size: 20px;
    color: #e60012;
`