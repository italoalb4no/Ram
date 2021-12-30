import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity
} from "react-native";
import DeviceInfo from 'react-native-device-info';
import HomeScreen from "../Screens/HomeScreen"
import FindScreen from "../Screens/FindScreen"
import MoreScreen from "../Screens/MoreScreen"
import PreferencesScreen from "../Screens/PreferencesScreen"

const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions = {{
                "headerShown": false,
                "tabBarHideOnKeyboard": false,
                "tabBarShowLabel": false,
                "tabBarStyle": [
                    {
                        display: "flex",
                        position: 'absolute',
                        keyboardHidesTabBar: true,
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 20,
                        height: 80,
                        ...styles.shadow,
                    },
                    null
                ],

                "safeAreaInset": { bottom: 'never', top: 'never' }
            }}

        >

            <Tab.Screen
                name = "Home "
                component = {HomeScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {styles.iconsContainer}
                        >
                            <Image
                                source = {require('../Assets/Icons/home.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 45,
                                    height: 45,
                                    tintColor: focused ? '#e32f45' : '#748c94',

                                }}
                            />
                            {//<Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>HOME</Text>
                            }
                        </View>
                    )
                }}

            />
            <Tab.Screen
                name = "Find"
                component = {FindScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {styles.iconsContainer}>
                            <Image
                                source = {require('../Assets/Icons/lens_icon.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 45,
                                    height: 45,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            {//<Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>FIND</Text>
                            }
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name = "Preferences"
                component = {PreferencesScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {styles.iconsContainer}>
                            <Image
                                source = {require('../Assets/Icons/preferences_icon.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 45,
                                    height: 45,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            {//<Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>PREFERENCES</Text>
                            }
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name = "More"
                component = {MoreScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <View style = {styles.iconsContainer}>
                            <Image
                                source = {require('../Assets/Icons/more.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 45,
                                    height: 45,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                                }}
                            />
                            {//<Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>MORE    </Text>
                            }
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
    },
    iconsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        top: DeviceInfo.hasNotch() ? 15 : 0,
    }
})

export default  Tabs