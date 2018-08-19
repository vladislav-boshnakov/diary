import React from 'react';
import {StyleSheet, View} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.squareRow}>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                </View>
                <View style={styles.squareRow}>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                    <View style={styles.square}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    squareRow: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'red',
        backgroundColor: 'lightblue'
    },
    square: {
        flex: 1,
        backgroundColor: 'blue',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: 'black',
    }
});
