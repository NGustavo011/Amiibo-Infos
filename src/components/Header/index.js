import React, { useEffect, useState } from 'react';
import * as S from './styled';
import logo from '../../assets/images/AmiiboLogo.png'
import useListCard from '../../hooks/ListCardHooks';

const Header = () =>{
    const {listNameState} = useListCard();

  return (
      <S.Wrapper>
            <S.WrapperLogo> 
                <S.Logo src={logo} />
            </S.WrapperLogo>
            <S.FormAmiibo>
                <S.HomeOption ahref="/">
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
                />
                <S.ButtonAmiibo>
                    <S.SearchIcon className="fas fa-search" />
                </S.ButtonAmiibo>
            </S.FormAmiibo>
      </S.Wrapper>
  );
}

export default Header;