import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Location from "./pages/Location";
import Evaluation from "./pages/Evaluation";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Payments from "./pages/Payments";
export default (signedIn = true) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
          Menu,
          Payments,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Location,
            Evaluation,
            Cart,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: "#ba0c2f",
              inactiveTintColor: "rgba(0,0,0,0.6)",
              style: {
                backgroundColor: "#f5f5f5",
              },
            },
          }
        ),
      },
      { initialRouteName: signedIn ? "App" : "Sign" }
    )
  );
