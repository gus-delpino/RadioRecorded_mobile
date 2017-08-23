'use strict';

import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './Stylesheet';

class MenuOptions extends React.Component {

    render() {

        let back = this.props.selectedRadio ?
            <TouchableOpacity onPress={ () => this.props.onClear(null) }>
                <Text style={ Styles.menuOptionsText }>Back</Text></TouchableOpacity> :
            <Text style={ Styles.menuOptionsText }> </Text>;


        return <View style={ Styles.menuOptionsContainer }>
                    <View style={ Styles.menuOptionsFlexContainer } >
                        { back }
                        <Text style={ Styles.menuOptionsLogo }>Logo</Text>
                        <Text style={ Styles.menuOptionsText}> </Text>
                        </View>

                </View>;
    }

}

export default MenuOptions;