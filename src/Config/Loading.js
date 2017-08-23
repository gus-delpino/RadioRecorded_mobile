'use strict';

import React from 'react';
import {Text, View} from 'react-native';
import Styles from '../Stylesheet';

class Loading extends React.Component {

    render() {
        return <View style={Styles.loadingContainer}>
                <Text style={Styles.loadingText}>Contacting API...</Text>
               </View>
    }
}

export default Loading;