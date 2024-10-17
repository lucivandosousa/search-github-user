import { createStackNavigator } from "@react-navigation/stack"
import DetailsUser from "../screens/DetailsUser"
import Home from "../screens/Home"

export default function StackRoutes() {
 
  const { Navigator, Screen } = createStackNavigator()

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home}/>
      <Screen name="DetailsUser" component={DetailsUser}/>
    </Navigator>
  )
}
