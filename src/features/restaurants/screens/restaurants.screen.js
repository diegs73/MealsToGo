import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar, View, SafeAreaView } from "react-native";
import { RestauranInfoCard } from "./../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestauranInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
