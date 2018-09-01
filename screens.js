import {Navigation} from 'react-native-navigation';

export function registerScreens() {
    Navigation.registerComponent('Init', (sc) => require('./components/Login').default);
    Navigation.registerComponent('SocialLogin', (sc) => require('./components/SocialLogin').default)
}