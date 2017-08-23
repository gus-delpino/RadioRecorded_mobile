'use strict';

import React from 'react';

import {Text, View} from 'react-native';

import MenuOptions from './MenuOptions';
import RadioList from './List/RadioList';
import RadioDetails from './Details/RadioDetails';

import Styles from './Stylesheet';

class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {selectedRadio: null};
        this.selected_radio_id = null;

    }

    selectRadio(radio, radio_id) {
        this.setState({selectedRadio: radio});
        this.selected_radio_id = radio_id;
    }

    render() {
        let layout = this.state.selectedRadio ?
            <RadioDetails radio={this.state.selectedRadio} radio_id={this.selected_radio_id}  /> :
            <RadioList radios={this.props.radios} onSelect={this.selectRadio.bind(this)} />;

        return (<View style={ Styles.mainLayout }>
                    <MenuOptions onClear={this.selectRadio.bind(this)} selectedRadio={this.state.selectedRadio} />
                    <View style={ Styles.bodyContainer }>{ layout }</View>
                </View> );
    }
}

export default MainLayout;