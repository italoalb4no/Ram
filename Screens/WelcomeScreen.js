import * as React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const WelcomeScreen = ({ navigation, route}) => {
    return (
        <View style = {styles.container}>
            <Text>Hello There</Text>
            <Button
                title = "Go to the Location Screen"
                onPress = {() => navigation.navigate('LocationScreen')}
            />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        top: 60
    }
})
