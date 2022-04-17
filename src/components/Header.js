import React from 'react';
import styled from 'styled-components';
//import menu icon from material ui
import MenuIcon from '@material-ui/icons/Menu';
//import close icon from material ui
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';



const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Container removeBlur={!openMenu}>
            <Logo>
                <img src="/images/logo.svg" alt="logo" />
            </Logo>
            <MidMenu>
                <a href={'#'}>Model S</a>
                <a href={'#'}>Model 3</a>
                <a href={'#'}>Model Y</a>
                <a href={'#'}>Model X</a>

            </MidMenu>
            <RightMenu>
                <a href={'#'}>Shop</a>
                <a href={'#'}>Tesla Account</a>
                <CustomMenu onClick = {() => setOpenMenu(true)}/>
            </RightMenu>
            <BurgerNav show={openMenu}>
                {/*//as I understand it, the wrapper is needed here because otherwise you would be moving the icon, you wouldn't be moving the section in the div.*/}
                <CloseWrapper>
                    <TheXIcon onClick = {() => setOpenMenu(false)}/>
                </CloseWrapper>
                <ul>
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model Y</li>
                    <li>Model X</li>
                    <li>Solar Panels</li>
                    <li>Solar Roofs</li>
                </ul>
            </BurgerNav>
        </Container>
    )
}
export default Header;


const Container= styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  `

const Logo = styled.div`
    margin-left: 20px;
`

const MidMenu = styled.div`
    //remove underline
    a {
        text-decoration: none;
        //add space between menu items
        margin-right: 20px;
      //increase size of menu items
        font-size: 1.2em;
      //make the font thicker
        font-weight: bold;
      //change color of menu items to black
        color: black;
    }
  //hide this menu when the size of the screen is less than 800px
  @media (max-width: 868px) {
    display: none;
  }
`

const RightMenu = styled(MidMenu)`
    display: flex;
`

const CustomMenu = styled(MenuIcon)`
    color: black;
    font-size: 1.2em;
    margin-right: 20px;
    cursor: pointer;
`

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  text-align: start;
  ul {
    margin-left: 20px;
    list-style: none;
    padding: 0;
  }
  li {
    margin-top: 20px;
    margin-bottom: 20px;
    //create a line under each menu item
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    //make text thicker:
    font-weight: bolder;
    font-size: 1.2em;
    //create space between menu item and border:
    padding-bottom: 10px;
  }
  //transform translate from 0 to 100 when the menu is open
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  //this is the nice transition effect:
  transition: transform 0.3s ease-in-out;
`

const TheXIcon = styled(CloseIcon)`
//place the x icon in the top right corner
  color: black;
  font-size: 1.2em;
  cursor: pointer;
  margin-top: 10px;
`

const CloseWrapper = styled.div`
  display:flex;
  justify-content: flex-end;
`


