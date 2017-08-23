'use strict';

import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

import ApiUtils from '../Config/ApiUtils';
import LoadingDetails from './LoadingDetails';
import RadioInfo from './RadioInfo';

import Styles from './RadioStylesheet';

class RadioDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            is_recording: this.props.radio.is_recording,
            loading: false
        };
    }

    componentDidMount() {
        this.checkRadioStatus();
    }

    startRecording() {
        this.setState({is_recording: true});
        this.props.radio.is_recording = true;
    }

    checkRadioStatus() {
        this.setState({loading: true});
        ApiUtils.get('/api/getRadioInfo', {radio_id: this.props.radio_id})
            .then( r => ApiUtils.parse(r) )
            .then( radioData => {
                if (radioData.is_recording != this.props.radio.is_recording) {
                    this.setState({is_recording: radioData.is_recording});
                    this.props.radio.is_recording = radioData.is_recording;
                }

                this.setState({loading: false});

                this.props.radio.is_recording = true;
                this.setState({is_recording: true});

                setTimeout(() => {
                    this.props.radio.is_recording = false;
                    this.setState({is_recording: false});
                }, 1000);

            }).catch( err => console.log("ERROR: " + err) );
    }

    render() {
        let body = this.state.loading ?
            <LoadingDetails/> :
            <RadioInfo radio={this.props.radio} startRecording={this.startRecording.bind(this)} />;

        return (
            <View style={ Styles.radioContainer }>
                <Text style={Styles.radioNameText}>{ this.props.radio.name }</Text>

                <View>{body}</View>

            </View>
        );
    }
}

export default RadioDetails;