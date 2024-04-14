import React, { useState } from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import CustomLabel from "../common/CustomLabel";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { addKey, fetchKey } from "../common/Utils";



function Login({ navigation }) {
    const [mobNumber, setMobNumber] = useState('')
    const [otp, setOtp] = useState('1234')
    const [errorMessaege, setErrorMessage] = useState('')
    const [disableBtn, setDisableButton] = useState(true)

    const handleFetchKey = async () => {
        try {
            const response = await fetchKey();
            if (response !== null) {
                return response;
            } else {
                console.log('Key not found');
                return null;
            }
        } catch (e) {
            console.error('Error fetching key:', e);
            throw e;
        }
    };

    const handleAddKey = async () => {
        if (mobNumber == '' || otp == '') {
            setDisableButton(true);
            setErrorMessage("Mobile number or otp is empty");
            return;
        }

        try {
            let userprofile = {
                mobileNo: mobNumber
            };

            // Wait for handleFetchKey to resolve
            let existingData = await handleFetchKey();
            console.log(existingData);

            if (existingData == null) {
                addKey(JSON.stringify(userprofile));
                console.log('Key added successfully');
            } else {
                navigation.navigate("BottomTab");
            }

        } catch (e) {
            console.error('Error adding key:', e);
        }
    };






    const getNumericFormattedText = (text) => {
        // Remove non-numeric characters
        const formattedText = text.replace(/[^0-9]/g, '');
        return formattedText
    }

    const handleMobileNumberChange = (text) => {
        if (text == '') {
            setDisableButton(true);
            setErrorMessage("Mobile Number cannot be empty")
        }
        setErrorMessage('')
        setMobNumber(getNumericFormattedText(text));
    };

    const handleOTPChange = (text) => {
        if (text == '') {
            setDisableButton(true);
            setErrorMessage("OTP cannot be empty")
        }
        setErrorMessage('')
        setOtp(getNumericFormattedText(text));
    };




    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.signInTextContainer}>
                <CustomLabel text="Sign In to continue" style={styles.signInText} />
            </View>
            <View style={styles.numberContainer}>
                <TextInput placeholder="Mobile Number" onChangeText={handleMobileNumberChange} value={mobNumber} style={styles.numberTextBox} keyboardType="numeric" maxLength={10} />
            </View>
            <View style={styles.numberContainer}>
                <TextInput placeholder="OTP" onChangeText={handleOTPChange} value={otp} style={styles.numberTextBox} keyboardType="numeric" maxLength={4} />
            </View>
            {errorMessaege != '' ? <View style={styles.otpBtnContainer}>
                <CustomLabel text={errorMessaege} style={styles.errorText} />
            </View> : <></>}
            <View style={styles.otpBtnContainer}>
                <Button style={styles.otpBtn} onPress={handleAddKey} title="Submit OTP" disabled={disableBtn} />
            </View>
            <View style={styles.registerContainer}>
                <CustomLabel text="Don't have an account?" style={styles.registerText} />
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <CustomLabel text="Register" style={styles.registerLink} />
                </TouchableOpacity>
            </View>

        </View>
    )
}




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
    errorText: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 20,
        color: 'red'
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
        marginTop: 70,
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


export default Login