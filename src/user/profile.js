import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { fetchKey, mergeKey } from '../common/Utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        paddingTop: '20%'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    boxContainers: {
        marginTop: 20,
        width: '100%'
    },
    input: {
        borderRadius: 10,
        width: '100%',
        height: 45,
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: 45,
        fontSize: 20,
        backgroundColor: '#8276fd',
        backgroundImage: 'linear-gradient(to bottom, #8276fd, #948af2)',
    }
})

function UserProfile({ navigation }) {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        data = handleFetchKey()
    }, []);

    const handleFetchKey = async () => {
        try {
            const response = await fetchKey();
            if (response !== null) {
                var dataObj = JSON.parse(response)
                setUserName(dataObj.userName)
                setAge(dataObj.age)
                setEmail(dataObj.email)
            }

        } catch (e) {
            console.error('Error fetching key:', e);
            return null;
        }
    };

    const handleMergeKey = async () => {
        try {
            let userprofile = {
                age: age,
                userName: userName,
                email: email
            };
            mergeKey(JSON.stringify(userprofile));
            navigation.navigate("BottomTab")
        } catch (e) {
            console.error('Error adding key:', e);
        }
    };

    const getNumericFormattedText = (text) => {
        // Remove non-numeric characters
        const formattedText = text.replace(/[^0-9]/g, '');
        return formattedText
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/userimg.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.boxContainers}>
                <TextInput
                    placeholder="User Name"
                    style={styles.input}
                    value={userName}
                    onChangeText={text => setUserName(text)}
                />
            </View>
            <View style={styles.boxContainers}>
                <TextInput
                    placeholder="Age"
                    style={styles.input}
                    value={age}
                    onChangeText={text => setAge(getNumericFormattedText(text))}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.boxContainers}>

                <TextInput
                    placeholder="Email (optional)"
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                />
            </View>

            <View style={styles.boxContainers}>
                <Button style={styles.button} title="Save" onPress={handleMergeKey} />
            </View>
        </View>
    );
};


export default UserProfile;