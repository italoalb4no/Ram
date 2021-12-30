import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native';

const PreferencesScreen = () => {
    return (

        <ScrollView style = {styles.container}>
            <TouchableOpacity style = {styles.category1}>
                <ImageBackground
                    source = {require('../Assets/Preferences/chinese.jpg')}
                    style={{
                        height: 200,
                        width: 200,
                        opacity: 0.6,
                        position: 'absolute',
                        //borderRadius: 20,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.category2}>
                <ImageBackground
                    source = {require('../Assets/Preferences/chinese.jpg')}
                    style={{
                        height: 200,
                        width: 200,
                        opacity: 0.6,
                        position: 'absolute',
                        //borderRadius: 20,
                    }}
                />
            </TouchableOpacity>
        </ScrollView>

    );
};

export default PreferencesScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffff'
    },
    category1: {
        display: "flex",
        position: 'absolute',
        top: 60,
        left: 20,
        width: "35%",
        height: Dimensions.get('window').height/10,
        borderRadius: 20,
        backgroundColor: 'rgba(196,196,196,0.46)',

    },
    category3: {
        display: "flex",
        position: 'absolute',
        top: 60,
        right: 20,
        width: "35%",
        height: Dimensions.get('window').height/10,
        borderRadius: 20,
        backgroundColor: 'rgba(196,196,196,0.46)',
    }

});