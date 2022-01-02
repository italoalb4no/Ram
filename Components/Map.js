import * as React from 'react';
import MapView from 'react-native-maps';
import {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {Component, Platform} from "react";
import PropTypes from 'prop-types';

export default class Map extends Component{
    static propTypes = {
        // Custom style for Botaozudo. Requires object
        componentStyle: PropTypes.object,
    };

    render(){
        const {componentStyle, initialRegion, region,  children} = this.props;
        if(Platform.OS === "ios") {
            return (
                <MapView
                    style = {componentStyle}
                    initialRegion = {initialRegion}
                    region = {region}
                >
                    {children}
                    {/*<Marker*/}
                    {/*    coordinate ={{*/}
                    {/*        latitude: 37.78825,*/}
                    {/*        longitude: -122.4324,*/}
                    {/*    }}*/}
                    {/*>*/}

                    {/*</Marker>*/}
                </MapView>
            )
        } else {
            return (
                <MapView
                    style = {componentStyle}
                    provider = {PROVIDER_GOOGLE}
                    initialRegion = {initialRegion}
                >

                </MapView>
            )
        }
    }
}