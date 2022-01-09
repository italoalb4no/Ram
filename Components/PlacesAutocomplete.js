import * as React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GOOGLE_AUTOCOMPLETE_API_KEY from '../config'
import PropTypes from "prop-types";
import {Component, useRef} from "react";

export default class PlacesAutocomplete extends Component{
    static propTypes = {
        componentStyle: PropTypes.object,
    };

    render(){

        const {text, placeholder, onPressF, query, styles,  textInputProps, children} = this.props;
            return(
                <GooglePlacesAutocomplete
                    placeholder = {placeholder}
                    fetchDetails = {true}
                    GooglePlacesSearchQuery = {{
                        rankby: "distance"
                    }}
                    text = {text}
                    onPress = {onPressF}
                    query = {query}
                    styles = {styles}
                    textInputProps = {textInputProps}
                >
                    {children}
                </GooglePlacesAutocomplete>
            )
    }
}