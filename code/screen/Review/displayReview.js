/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, Button, Alert } from 'react-native';
import Container from '../../components/ContainerReport';

import { useData } from '../../hooks';


// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation, route }) => {
    const { getReport, deleteItem, IgnoreReport, unactive } = useData();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const tempData = await getReport();
            setData(tempData);
        }
        fetchData();
    }, [getReport, setData]);
    return (
        <Container>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 24, color: 'black' }}>{route.params.review}</Text>
                <Image style={{
                    width: '100%',
                    height: 200,
                    resizeMode: 'stretch',
                }} source={{ uri: route.params.photoUrl }} />
            </View>
            <View style={{ margin: 10 }}>
                <Button
                    onPress={async () => {

                        if (await Linking.canOpenURL(route.params.link)) { // this returns true
                            await Linking.openURL(route.params.link) // this is where the error is thrown
                        } else {
                            alert('Can not open')
                        }
                    }}
                    title="Test Base"
                />
            </View>
            <View style={{ margin: 10 }}>
                <Button
                    onPress={async () => {
                        Alert.alert('Delete Item', 'Are you sure you want to delete Item', [
                            {
                                text: 'Cancel',
                                onPress: () => { },
                                style: 'cancel',
                            },
                            {
                                text: 'Confirm', onPress: async () => {
                                    const re = await deleteItem(route.params.link, route.params.ref);
                                    if (re.status == 'success') {
                                        navigation.push("Home");
                                    } else {
                                        Alert.alert('Failed to delete');
                                    }
                                    console.log(re);
                                }
                            },
                        ]);
                    }}
                    title="Delete Item"
                />
            </View>
            <View style={{ margin: 10 }}>
                <Button
                    onPress={async () => {
                        console.log('Update Item');
                        Alert.alert('Alert Title', 'My Alert Msg', [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ]);
                    }}
                    title="Update Item"
                />
            </View>
            <View style={{ margin: 10 }}>
                <Button
                    onPress={async () => {
                        console.log('Update Item');
                        Alert.alert('Ignore Report', 'Are you sure you want to Ignore Report?', [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: 'Confirm', onPress: async () => {
                                    const re = await IgnoreReport(route.params.ref);
                                    if (re.status == 'success') {
                                        navigation.push("Home");
                                    } else {
                                        Alert.alert('Failed to delete');
                                    }
                                }
                            },
                        ]);
                    }}
                    title="Delete Report"
                />
            </View>
            <View style={{ margin: 10 }}>
                <Button
                    onPress={async () => {
                        console.log('Update Item');
                        Alert.alert('Un active', 'Are you sure you want to un active Base?', [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            { text: 'Confirm', onPress: async () => {
                                await unactive(route.params.link);
                                alert('Base De active');
                                navigation.push('Home');
                            } },
                        ]);
                    }}
                    title="UnActive Base"
                />
            </View>
        </Container>
    );
};
export default Screen;
