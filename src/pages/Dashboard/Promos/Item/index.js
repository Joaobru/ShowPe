import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

function CarouselItem({ item }) {
  return (
    <View style={styled.cardView}>
      <Image style={styled.image} source={{ uri: item.url }} />
      <View style={styled.textView}>
        <Text style={styled.itemTitle}>{item.title}</Text>
        <Text style={styled.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
}

const styled = StyleSheet.create({
  cardView: {
    flex: 1,
    marginTop: 10,
    width: width - 20,
    height: height / 3,
    backgroundColor: "#ededed",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  itemTitle: {
    color: "#eee",
    fontSize: 22,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },

  itemDescription: {
    color: "white",
    fontSize: 12,
  },
});

export default CarouselItem;
