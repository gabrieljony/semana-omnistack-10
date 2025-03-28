import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// npm install @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "DevRadar",
        },
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Perfil no Github",
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#7D40E7",
        },
      },
    }
  )
);

export default Routes;
