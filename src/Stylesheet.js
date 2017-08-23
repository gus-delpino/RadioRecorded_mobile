'use strict';

import {StyleSheet} from 'react-native';

export const background_color = '#58a7fa';
const menu_background_color = '#1c1c1c';

const styles = StyleSheet.create({

    appContainer: {
        flex: 1
    },

    mainLayout: {
        flex: 1
    },

    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: background_color
    },

    menuOptionsContainer: {
        height: 80,
        backgroundColor: menu_background_color
    },
    menuOptionsFlexContainer: {
        paddingTop: 30,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row'
    },
    menuOptionsLogo: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    menuOptionsText: {
        width: 50,
        color: '#FFFFFF'
    },



    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },

    loadingText: {
        fontSize: 32,
        color: '#150913'
    },

    radioListContainer: {
        width: 310
    }



});

export default styles;