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
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Location,
            Evaluation,
            Menu,
            Cart,
            Payments,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: "#fff",
              inactiveTintColor: "rgba(255,255,255,0.6)",
              showLabel: false,
              style: {
                backgroundColor: "#ba0c2f",
              },
            },
          }
        ),
      },
      { initialRouteName: signedIn ? "App" : "Sign" }
    )
  );
