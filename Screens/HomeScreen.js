//import {Styles} from "../Styles"
import Map from "../Components/Map"
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,

} from 'react-native';
import * as React from "react";
import DeviceInfo from "react-native-device-info";

const HomeScreen = () =>{
    return (
        <View style = {Styles.homescreen_container}>
            <Map
                componentStyle = {Styles.homescreen_map}
            />

            <TouchableOpacity style = {Styles.homescreen_title_widget}>

                <Text style = {Styles.homescreen_title}>Suggestions of the Day</Text>

            </TouchableOpacity>

            <ScrollView
                style = {Styles.homescreen_horizontal_scrollview}
                horizontal
                showsHorizontalScrollIndicator = {false}
                pagingEnabled = {true}
            >

                <TouchableOpacity style = {Styles.homescreen_widgets}>
                    <Text>Hello there</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.homescreen_widgets}>
                    <Text>Hello there</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {Styles.homescreen_widgets}>
                    <Text>Hello there</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>
    )
}

export default HomeScreen

export const Styles = StyleSheet.create({
    homescreen_container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homescreen_map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    homescreen_title: {
        textAlign: 'center',
        fontFamily: 'RockSalt-Regular'
    },
    homescreen_title_widget: {
        display: "flex",
        position: 'absolute',
        top: DeviceInfo.hasNotch() ? 60 : 30,
        width: "75%",
        height: 30,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.83)'
    },
    homescreen_horizontal_scrollview: {
        display: "flex",
        position: 'absolute',
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height/2,
        bottom: 100,
        right: 10,
        left: 10,
        flexDirection: "row"
    },
    homescreen_widgets: {
        display: "flex",
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height/2 - 20,
        top: 5,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        bottom: 100,
        borderRadius: 20,
        backgroundColor: 'rgba(196,196,196, 0.46)',
    }
});