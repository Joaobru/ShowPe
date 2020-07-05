import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";

import CarouselItem from "./Item";

const { width, height } = Dimensions.get("window");

function Promos({ data }) {
  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
        />
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Promos;
