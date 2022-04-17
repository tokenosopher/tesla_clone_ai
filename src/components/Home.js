import React from 'react';
import styled from "styled-components";
import Section from "../components/Section";

const Home = () => {

    return (
        <Container>
            <Section
            name={"Model S"}
            description = {"Order Online for Touchless Delivery"}
            leftBtnText={"Custom Order"}
            rightBtnText={"Existing Inventory"}
            bgImg={"model-s.jpg"}
            />
            {/*create section for model 3*/}
            <Section
            name={"Model 3"}
            description = {"Order Online for Touchless Delivery"}
            leftBtnText={"Custom Order"}
            rightBtnText={"Existing Inventory"}
            bgImg={"model-3.jpg"}
            />
            {/*create section for model y*/}
            <Section
            name={"Model Y"}
            description = {"Order Online for Touchless Delivery"}
            leftBtnText={"Custom Order"}
            rightBtnText={"Existing Inventory"}
            bgImg={"model-y.jpg"}
            />
            {/*create section for model x*/}
            <Section
            name={"Model X"}
            description = {"Order Online for Touchless Delivery"}
            leftBtnText={"Custom Order"}
            rightBtnText={"Existing Inventory"}
            bgImg={"model-x.jpg"}
            />
            {/*create section for solar panel*/}
            <Section
            name={"Lowest Cost Solar Panel in America"}
            description = {"Money-back Guarantee"}
            leftBtnText={"Custom Order"}
            rightBtnText={"Existing Inventory"}
            bgImg={"solar-panel.jpg"}
            />
            <Section
                name={"Solar for New Roofs"}
                description = {"Solar Roof Costs Less Than A New Roof"}
                leftBtnText={"Order now"}
                rightBtnText={"Learn More"}
                bgImg={"solar-roof.jpg"}
            />



            {/*<Section />*/}
            {/*<Section />*/}
            {/*<Section />*/}

        </Container>
    )
}
export default Home;

// create an empty styled component for container:
const Container = styled.div`
    overflow-x: hidden;
`;