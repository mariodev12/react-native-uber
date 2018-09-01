import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Login extends Component {
    static navigatorStyle = {
        navBarHidden: true
    }

    socialLogin = () => {
        this.props.navigator.showModal({
            screen: 'SocialLogin',
            animated: true,
            animationType: 'slide-up'
        })
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <ImageBackground 
                    source={require('../../images/bg.jpg')}
                    style={{flex: 1}}
                >
                    <View
                        style={styles.contentLogo}
                    >
                        <View style={styles.logo}>
                            <Text style={styles.logoText}>UBER</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.boxPhone}>
                            <Text style={styles.sloganText}>Empieza a viajar con Uber</Text>
                            <View style={styles.buttonPhone}>
                                <Image
                                    style={styles.flag}
                                    source={require('../../images/flag.png')}
                                />
                                <Icon 
                                    style={styles.iconDown}
                                    name="caret-down"
                                    size={15}
                                    color="#ccc"
                                />
                                <Text style={styles.prefix}>+44</Text>
                                <Text style={styles.placeholder}>Introduce tu móvil</Text>
                            </View>
                        </View>
                        <TouchableHighlight style={styles.boxSocial}
                            onPress={this.socialLogin}
                        >
                            <Text style={styles.socialText}>O conéctate a la cuenta de una red social</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentLogo: {
        flexGrow: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoText: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 25
    },
    box: {
        flexGrow: 1,
        borderWidth: 1,
        borderColor: 'red',
        height: 150,
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    flag: {
        width: 30,
        height: 20
    },
    sloganText: {
        fontSize: 28,
        fontWeight: '200'
    },
    buttonPhone: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    prefix: {
        fontSize: 20,
        marginLeft: 10
    },
    placeholder: {
        marginLeft: 10,
        fontSize: 20,
        color: '#ccc'
    },
    iconDown: {
        marginLeft: 10
    },
    boxSocial: {
        paddingVertical: 30
    },
    socialText: {
        color: '#627ED8'
    }
})