'use strict';

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Styles from '../Stylesheet';

class RadioList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let radios = [];
        for (let radio_id in this.props.radios) {
            if (this.props.radios.hasOwnProperty(radio_id)) {
                radios.push(
                    <TouchableOpacity onPress={ () => this.props.onSelect(this.props.radios[radio_id], radio_id) }
                                      key={ radio_id }>
                        <Text style={Styles.radioNameText}>{ this.props.radios[radio_id]['name'] }</Text>
                    </TouchableOpacity>);
            }
        }
        return <View style={Styles.radioListContainer}>{ radios }</View>;

    }
}

export default RadioList;