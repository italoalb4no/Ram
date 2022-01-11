import React, {useState} from 'react'
import {
    View,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback, TouchableWithoutFeedbackComponent
} from 'react-native'
import DeviceInfo from "react-native-device-info"
import Map from "../Components/Map";
import {Callout, Marker, Circle} from "react-native-maps";
import PlacesAutocomplete from "../Components/PlacesAutocomplete";
import GOOGLE_AUTOCOMPLETE_API_KEY from '../config'
import KeyboardListener from 'react-native-keyboard-listener';

const LocationScreen = ({ navigation, route}) => {

    const [showNextPageButton, setNextPage] = useState(false)
    const [textInput, setTextInput] = useState("")
    const [keyboardShown, setKeyboardVisibility] = useState(false)

    const [region, setRegion] = useState({
        latitude: 51.509865,
        longitude: -0.118092,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })
    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback style = {styles.container} onPress = {Keyboard.dismiss} accessible = {false}>

            <View style = {styles.container}>
                <Text style = {styles.text}>Pick a preferred location:</Text>
                <KeyboardListener
                    onWillShow={() => { setKeyboardVisibility(true)}}
                    onWillHide={() => { setKeyboardVisibility(false)}}
                />
                <View style = {styles.search_section}>
                    <View style = {styles.google_places_autocomplete_container} >
                    <PlacesAutocomplete
                        placeholder = 'Search'
                        onPressF = {(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            setRegion({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            })
                            setNextPage(true)
                            let x = data["description"].toString()
                            setTextInput(x)
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
                        textInputProps = {{
                            value: textInput,
                            onChangeText: (textInput) => setTextInput(textInput)
                        }}
                    />
                    </View>
                </View>
                <View style = {styles.reset_location_button}>
                    {
                        showNextPageButton && !keyboardShown &&
                        <Button
                            title="Search for a new location"
                            onPress={() => {
                                setTextInput("")
                                setNextPage(false)
                                setRegion({
                                    latitude: 51.509865,
                                    longitude: -0.118092,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421
                                })
                            }}
                        />
                    }
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
                        // draggable={true}
                        // onDragEnd={(e) => {
                        //     setRegion({
                        //         latitude: e.nativeEvent.coordinate.latitude,
                        //         longitude: e.nativeEvent.coordinate.longitude,
                        //         latitudeDelta: 0.0922,
                        //         longitudeDelta: 0.0421
                        //     })
                        // }}
                    >
                        <Callout>
                            <Text>You are here</Text>
                        </Callout>
                    </Marker>
                    <Circle center = {region} radius={1000} />
                </Map>

                { showNextPageButton &&
                    <TouchableOpacity
                        style = {styles.next_page_section}
                        onPress = {() => navigation.navigate('MyApp', {
                            latitude: region.latitude,
                            longitude: region.longitude
                        })}
                    >
                        <Image
                            source = {require("../Assets/Icons/arrow.png")}
                            style = {styles.next_page_button}
                        />
                    </TouchableOpacity>
                }
            </View>
            </TouchableWithoutFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        //display: "flex",
        flex: 1
    },
    reset_location_button: {
        top: DeviceInfo.hasNotch() ? 100 : 60,
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
        top: DeviceInfo.hasNotch() ? 80 : 50,
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    search_button: {
      width: 50,
      height: 50,
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