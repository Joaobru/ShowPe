import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Sign from "./pages/Sign";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default createAppContainer(
  createSwitchNavigator({
    Sign,
    SignIn,
    SignUp,
  })
);
