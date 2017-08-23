'use strict';

import React from 'react';
import {Text, View, AppRegistry} from 'react-native';

import MainLayout from './MainLayout';
import Loading from './Config/Loading';
import Error from './Config/Error';

import ApiUtils from './Config/ApiUtils';

import Styles from './Stylesheet';

class RadioRecorderApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded : false,
            error: false
        };
        this.radios = null;
    }

    getRadios() {
        this.setState({
            loaded: false,
            error: false});

        ApiUtils.get('/api/getRadios')
            .then( r => ApiUtils.parse(r) )
            .then( radios => {
                this.radios = radios;

                setTimeout(() => {
                    this.setState({loaded: true});
                }, 2000);

            }).catch( err => {
            this.setState({error: true});
        });
    }

    componentDidMount() {
        this.getRadios();
    }


    render() {
        let app_element = null;
        if (this.state.error) {
            app_element = <Error/>;
        } else {
            app_element = this.state.loaded ? <MainLayout radios={this.radios} /> : <Loading /> ;
        }

        return <View style={Styles.appContainer}>{ app_element }</View>
    }
}

export default RadioRecorderApp;