import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({name, description, leftBtnText, rightBtnText, bgImg}) => {

    return (
        <Container backgroundImg={bgImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Fade bottom>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        <span>{leftBtnText}</span>
                    </LeftButton>
                    <RightButton>
                        <span>{rightBtnText}</span>
                    </RightButton>
                </ButtonGroup>
                <DownArrow src={"/images/down-arrow.svg"} />
            </Buttons>
            </Fade>
        </Container>
    )
}
export default Section;

// create the styled component for the container to have an image that is centered and responsive
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
    //make background image be the backgroundImg prop:
    background-image: url(${props => `./images/${props.backgroundImg}`});
    justify-content: space-between;
`;

// create the styled component for the text to be centered vertically and slightly lower from the top
const ItemText = styled.div`
    padding-top: 15vh;
`;

const Buttons = styled.div`
 
`

//create the styled component for the button group to be centered vertically and slightly higher from the bottom
const ButtonGroup = styled.div`
    display: flex;
    padding-bottom: 5vh;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

//create the styled component for the left button to be grey:
//border radius is what causes the button to be rounded
const LeftButton = styled.div`
  background-color: #1f2127;
  height: 20px;
  width: 256px;
  border-radius: 100px;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  //make the button a different color when hovered over:
  &:hover {
    background-color: #a6abb4;
  }
  //make the button a different color when clicked:
  &:active {
    background-color: #162133;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

//create the styled component for the right button:
const RightButton = styled(LeftButton)`
  background-color: #b6b6b7;
  color: black;
`;

const DownArrow = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    animation: bounce infinite 1s;
  overflow: hidden;
`;