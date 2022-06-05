import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const ResturantCard = styled(Card)`
  backgroundcolor: white;
`;

const ResturantCardCover = styled(Card.Cover)`
  padding: 20px;
  backgroundcolor: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestauranInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ResturantCard>
  );
};
