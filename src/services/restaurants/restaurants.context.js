import React, { useState, useContext, createContext, useEffect } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  
  // const retrieveRestaurants = (loc) => {
  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {

      // restaurantsRequest(loc)
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  // useEffect(() => {
  //   if (location) {
  //     const locationString = `${location.lat},${location.lng}`;
  //     retrieveRestaurants(locationString);
  //   }
  // }, [location]);


  useEffect(() => {
    retrieveRestaurants();
  }, []);

//   return (
//     <RestaurantsContext.Provider
//       value={{
//         restaurants,
//         isLoading,
//         error,
//       }}
//     >
//       {children}
//     </RestaurantsContext.Provider>
//   );
// };



  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8],
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};