import React, {useState} from 'react'
import {
    View,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image,
    Dimensions
} from 'react-native'
import DeviceInfo from "react-native-device-info"
import Map from "../Components/Map";
import {Callout, Marker, Circle} from "react-native-maps";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GOOGLE_AUTOCOMPLETE_API_KEY from '../config'

const LocationScreen = ({ navigation, route}) => {
    const [location, setLocationInInput] = useState(null)

    const [showNextPageButton, setNextPage] = useState(false)

    const [pin, setPin] = useState({
        latitude: 51.509865,
        longitude: -0.118092,
    })

    const [region, setRegion] = useState({
        latitude: 51.509865,
        longitude: -0.118092,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Pick a preferred location:</Text>

            <View style = {styles.search_section}>
            <View style = {styles.google_places_autocomplete_container} >
                <GooglePlacesAutocomplete
                    placeholder = 'Search'
                    fetchDetails = {true}
                    GooglePlacesSearchQuery = {{
                        rankby: "distance"
                    }}
                    onPress = {(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        //console.log(data, details);
                        setRegion({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })
                        setNextPage(true)
                    }}
                    query = {{
                        key: GOOGLE_AUTOCOMPLETE_API_KEY,
                        language: 'en',
                        components: "country:GB",
                        types: "address",
                        radius: 3000,
                        location: `${region.latitude}, ${region.longitude}`
                    }}
                    styles={{
                        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
                        listView: { backgroundColor: "white" }
                    }}
                />
                {/*<TouchableOpacity>*/}
                {/*    <Image*/}
                {/*        style = {styles.search_button}*/}
                {/*        source = {require("../Assets/Icons/search_icon.png")}*/}
                {/*    />*/}
                {/*</TouchableOpacity>*/}
            </View>
            </View>
            <Map
                componentStyle = {styles.map}
                initialRegion={{
                    latitude: 51.509865,
                    longitude: -0.118092,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                region = {region}
            >
                <Marker
                    coordinate={region}
                    pinColor="black"
                    draggable={true}
                    onDragEnd={(e) => {
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                    }}
                >
                    <Callout>
                        <Text>I'm here</Text>
                    </Callout>
                </Marker>
                <Circle center={region} radius={1000} />
            </Map>

            { showNextPageButton &&
                <TouchableOpacity
                    style = {styles.next_page_section}
                    onPress = {() => navigation.navigate('MyApp')}
                >
                    <Image
                        source = {require("../Assets/Icons/arrow.png")}
                        style = {styles.next_page_button}
                    />
                </TouchableOpacity>
            }

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        //display: "flex",
        flex: 1
    },
    google_places_autocomplete_container: {
        flex: 1,
    },
    text: {
        fontFamily: "RibeyeMarrow-Regular",
        fontSize: 18,
        left: 13,
        top: DeviceInfo.hasNotch() ? 50 : 20,
    },
    search_bar: {
        fontSize: 18,
        width: "70%",
        backgroundColor: 'rgba(216, 207, 207, 0.49)',
        borderRadius: 19,
        fontFamily: "RibeyeMarrow-Regular",
        textAlign: "left",
        textAlignVertical: "center",
        paddingLeft: 15,
        top: 5,
        height: 40
        //borderWidth: 1,
    },
    search_section: {
        top: DeviceInfo.hasNotch() ? 80 : 40,
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    search_button: {
      width: 50,
      height: 50,
    },
    geolocalization_button_container: {
        position: "absolute",
        top: DeviceInfo.hasNotch() ? 120 : 80,
        //flexDirection: "row",
        alignItems: "flex-start",
        width: "100%",
        paddingLeft: 20
    },
    next_page_section: {
        position: 'absolute',
        alignItems: "flex-end",
        bottom: 30,
        right: 20,
        //width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    next_page_button: {
        width: 80,
        height: 80,
    },
    map: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.6,
        bottom: 0,
        borderRadius: 25
    }
})


export default LocationScreen