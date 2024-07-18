import { FlatList } from "react-native";
import React from "react";
import FeedItem from "./feedItem"
import styled from "styled-components";

const Container = styled.View `
flex:1,
background-color: #fff,

`

export default function FeedList() {
    return(
        <Container>

        <flatList>
            data={data}
            KeyExtractor={(item) => item.id}
            renderItem={(item) => <FeedItem item={item}/>}
        </flatList>

        </Container>
    )
}