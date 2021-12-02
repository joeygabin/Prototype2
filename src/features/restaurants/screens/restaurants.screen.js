import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList, TouchableOpacity  } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// export const RestaurantsScreen = ({ navigation }) => { removed error inside const checkpoint 51 
//   const { isLoading,  restaurants } = useContext(RestaurantsContext);
// const { favourites } = useContext(FavouritesContext); video # 46
// const [isToggled, setIsToggled] = useState(false); code for the search button to become a heart
//   return (
//     <SafeArea>
//        {isLoading && (
//         <LoadingContainer>
//           <Loading size={50} animating={true} color={Colors.blue300} />
//         </LoadingContainer>
//       )}
//       
// //          <Search
//         isFavouritesToggled={isToggled}
//         onFavouritesToggle={() => setIsToggled(!isToggled)}code for the search button to become a heart 
//       />
//       
// {isToggled && (
//   <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
// )} video # 45 and 46
//       
//       <RestaurantList
//        data={restaurants}
//        renderItem={({ item }) => {
//          return (
// //        <TouchableOpacity onPress={() =>
//                 navigation.navigate("RestaurantDetail", {
//                   restaurant: item,
//                 })
//               }>

// // //            <Spacer position="bottom" size="large">
// // //              <RestaurantInfoCard restaurant={item} />
// // //            </Spacer>
// //            </TouchableOpacity>
// // //          );
// //        }}
// //         keyExtractor={(item) => item.name}
// //       />
// //     </SafeArea>
// //   );
// // };

// code for prototype
export const RestaurantsScreen = ({ navigation }) => {
  // const { isLoading,  restaurants } = useContext(RestaurantsContext);
  return (
  <SafeArea>
     {/* {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )} */}

      {/* <Search /> */}

    <SearchContainer>
      {/* <Searchbar /> */}
      </SearchContainer>

      <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
       
        
      ]}
      renderItem={() => (
        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail")}>
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard  />
        </Spacer>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
      
    />
  </SafeArea>

  );
};