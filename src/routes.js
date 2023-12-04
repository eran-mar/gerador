import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/paswords";

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
            nome="home"
            component={Home}
            />

            <Tab.Screen
            nome="passwords"
            component={Passwords}
            />
        </Tab.Navigator>
    )    
}