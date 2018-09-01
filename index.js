/** @format */
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens()

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Init'
    }
})