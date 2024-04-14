import React, { useState } from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import CustomLabel from "../common/CustomLabel";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    logoContainer: {
        paddingTop: '10%'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    signInTextContainer: {
        marginTop: 20
    },
    signInText: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 20,
        color: '#413e3e'
    },
    numberContainer: {
        marginTop: 15
    },
    numberTextBox: {
        borderRadius: 10,
        width: 240,
        height: 45,
        fontSize: 20,
        textAlign: 'center'
    },
    otpBtnContainer: {
        marginTop: 15
    },
    otpBtn: {
        borderRadius: 10,
        width: 240,
        height: 45,
        fontSize: 20,
        backgroundColor: '#8276fd',
        backgroundImage: 'linear-gradient(to bottom, #8276fd, #948af2)',
    },
    registerContainer: {
        marginTop: 160,
        flexDirection: 'row',
    },
    registerText: {
        marginRight: 5,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 20,
        color: '#413e3e'
    },
    registerLink: {
        color: '#8276fd',
        textDecorationLine: 'underline',
    }

})


function Register({ navigation }) {

    const [mobNumber, setMobNumber] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.signInTextContainer}>
                <CustomLabel text="Sign Up" style={styles.signInText} />
            </View>
            <View style={styles.numberContainer}>
                <TextInput placeholder="Mobile Number" onChangeText={(event) => setMobNumber(event)} value={mobNumber} style={styles.numberTextBox} />
            </View>
            <View style={styles.otpBtnContainer}>
                <Button style={styles.otpBtn} onPress={() => console.log("I'm clicked")} title="Register" />
            </View>
            <View style={styles.registerContainer}>
                <CustomLabel text="Already have an account?" style={styles.registerText} />
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <CustomLabel text="Login" style={styles.registerLink} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Register