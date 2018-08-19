import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Col, Grid, Row} from "react-native-easy-grid";

export default class App extends React.Component {
    render() {
        return (
            <Grid>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
                <Col>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                    <Row></Row>
                </Col>
            </Grid>
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
