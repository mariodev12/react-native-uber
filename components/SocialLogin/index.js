import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native'

export default class SocialLogin extends Component {
    static navigatorStyle = {
        navBarHidden: true
    }
    goBack = () => {
        this.props.navigator.dismissModal({
            animationType: 'slide-down'
        })
    }
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableHighlight onPress={this.goBack}>
                    <Text>Back</Text>
                </TouchableHighlight>
            </View>
        )
    }
}