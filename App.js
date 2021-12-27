import * as React from 'react';
import Tabs from './Navigation/Tabs'
import {StyleSheet, SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from "./Screens/WelcomeScreen";
import LocationScreen from "./Screens/LocationScreen";

export default function App() {

    //const [firstTime, alreadyWelcomed] = useState(true);

    if (true) {

        const Stack = createNativeStackNavigator()

        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions = {{ headerShown:false}}
                >
                    <Stack.Screen
                        name = "Welcome"
                        component = { WelcomeScreen }
                        options = {{ title: "Welcome"}}
                    />

                    <Stack.Screen
                        name = "LocationScreen"
                        component = {LocationScreen}
                    />

                    <Stack.Screen
                        name = "MyApp"
                        component = {MyApp}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            )
    }
    else {
        MyApp()
    }
}

const MyApp = () => {
    return (
        <Tabs/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


