import React from "react";
import styled from "styled-components/native";
import CustomText from "./text";
import postImage from "./postImage";
import imagemPerfil from "./imagemPerfil";
import text from "./text";
import icon from "./icon"

const Container = styled.View `
    padding: 10px;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
`;

const Row = styled.View `
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
`;

const ActionsRow = styled.View `
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

const FeedItem = ({item}) => {
    <Container>
        <Row>

            <imagemPerfil/>
            
           
        </Row>

    </Container>
}