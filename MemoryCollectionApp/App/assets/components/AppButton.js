import React from 'react';
import { Text, TouchableOpacity, StyleSheet , View , SafeAreaView } from 'react-native';
import AppColours from '../config/AppColours';

function AppButton({title}) {
    return (
        <TouchableOpacity>
            <SafeAreaView style={styles.button}>
                <Text style={styles.text}> {title} </Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColours.Blush,
        width: '100%',
        borderRadius: 20,
        padding: 20,
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: AppColours.DutchWhite,
    }
})

export default AppButton;