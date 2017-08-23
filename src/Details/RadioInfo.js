'use strict';

import React from 'react';
import {View, Text, Button} from 'react-native';

import Styles from './RadioStylesheet';

class RadioInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let action = this.props.radio.is_recording ?
            <Text style={Styles.radioActionText}>...Recording!</Text> :
            <Button title="Record" color="#8cdad9" onPress={() => this.props.startRecording()} />;

        return <View style={Styles.radioInfoContainer}>
                    {action}
               </View>;
    }
}

export default RadioInfo;