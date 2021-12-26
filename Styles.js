import {Dimensions, StyleSheet} from "react-native";
import DeviceInfo from "react-native-device-info";

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