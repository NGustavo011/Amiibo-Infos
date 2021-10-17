import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled';
import logo from '../../assets/images/AmiiboLogo.png';
import useListCard from '../../hooks/ListCardHooks';

const Header = () =>{
    const {listNameState, getAmiibo, goHome} = useListCard();
    const [ optionValue, setOptionValue ] = useState();
    const selectInputRef = useRef();

    const onSubmit = (e) =>{
        e.preventDefault();
        getAmiibo(optionValue);
    }

    const backToHome = () =>{
        selectInputRef.current.setValue({label: null, value: null});
        goHome();
    }
    
    useEffect(()=>{
        console.log(optionValue);
    }, [optionValue]);

  return (
      <S.Wrapper>
            <S.WrapperLogo> 
                <S.Logo src={logo} />
            </S.WrapperLogo>
            <S.FormAmiibo>
                <S.HomeOption onClick={backToHome}>
                    <S.HomeText className="fas fa-home" />
                </S.HomeOption>
                <S.SelectAmiibo
                    aria-labelledby="aria-label"
                    inputId="aria-example-input"
                    name="aria-live-color"
                    placeholder="Enter the desired character name"
                    options={
                        listNameState.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)).filter((v,i,a)=>a.findIndex(t=>(t.label === v.label))===i)
                    }
                    ref={selectInputRef}
                    onChange={(event) => setOptionValue(event.value)}
                />
                <S.ButtonAmiibo type="submit" onClick={(e)=>onSubmit(e)}>
                    <S.SearchIcon className="fas fa-search" />
                </S.ButtonAmiibo>
            </S.FormAmiibo>
      </S.Wrapper>
  );
}

export default Header;