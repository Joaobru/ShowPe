import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Icone } from "../style";

function Button() {
  const [favorite, setFavorite] = useState(false);
  return (
    <Icone onPress={() => setFavorite(!favorite)}>
      {favorite ? (
        <Icon name="cards-heart" size={30} color="#ba0c2f" />
      ) : (
        <Icon name="heart-outline" size={30} color="#ba0c2f" />
      )}
    </Icone>
  );
}

export default Button;
