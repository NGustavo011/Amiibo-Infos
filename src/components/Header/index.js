import React from 'react';
import * as S from './styled';
import logo from '../../assets/images/AmiiboLogo.png'

const Header = () =>{

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
                    options={[{label:"Zelda", value:"Zelda"},{ label:"Link", value:"Link"}]}
                />
                <S.ButtonAmiibo>
                    <S.SearchIcon className="fas fa-search" />
                </S.ButtonAmiibo>
            </S.FormAmiibo>
      </S.Wrapper>
  );
}

export default Header;