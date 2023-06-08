/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
// import React, { useState } from 'react';
// import {
//     View,
//     StyleSheet,
//     Text,
//     Button,
//     FlatList,

// } from 'react-native';
// import { SIZES } from '../../constants';
// import Container from '../../components/Container';
// import { useData } from './../../hooks';
// const CustomCard = ({ navigation, item }) => {
//     console.log('------------');
//     return (

//         <View style={styles.cardStyle}>
//             <View>
//                 <Text>Working</Text>
//             </View>
//         </View>
//     );
// };
// const Screen = ({ navigation }) => {
//     const { Action, getReport } = useData();
//     const [data, setData] = useState([]);
//     const [refresh, setRefresh] = useState(false);
//     return (
//         <Container
//             style={{
//                 flex: 1,
//                 paddingVertical: SIZES.padding,
//             }}>
//             <View style={{
//                 flex: 1,
//             }}>
//                 <Text>Hy</Text>
//                 <Button onPress={async () => {
//                     const response = await getReport();
//                     console.log(response.length);
//                     setData[response];
//                     setRefresh(!refresh);
//                     // console.log(response[0]._ref._documentPath._parts[1]);
//                 }} title='pk' />
//                 <View style={{ backgroundColor:'red' }}>
//                     <FlatList
//                         data={data}
//                         initialNumToRender={10}
//                         renderItem={
//                             ({ item }) => <CustomCard navigation={navigation} item={item} />
//                         }
//                         // keyExtractor={item => item._id}
//                         keyExtractor={(item, index) => index.toString()}
//                     />
//                 </View>
//             </View>
//         </Container >
//     );
// };
// const styles = StyleSheet.create({
//     tnTabActive: {
//         backgroundColor: 'black'
//     },
//     tnTabTextActive: {
//         color: 'white',
//     },
//     btnTab: {
//         width: 100,
//         flexDirection: 'row',
//         borderWidth: 0.5,
//         borderColor: '#E9EBEB',
//         padding: 10,
//         justifyContent: 'center',
//         marginLeft: 5,
//         // backgroundColor: 'rgba(61, 38, 69, 0.2)'

//     },
//     container: {
//         // margin: 30,
//         // marginBottom: 10,
//         // marginTop: 0,
//     },
//     cardStyle: {
//         backgroundColor: '#F7F7FE', borderRadius: 10,
//         padding: 10, marginHorizontal: 20, shadowColor: 'black', marginVertical: 5,
//         shadowOffset: {
//             width: 10,
//             height: 10,
//         },
//         shadowOpacity: 0.5,
//         shadowRadius: 1,
//         elevation: 10,
//     },
//     imageStyle: {
//         width: '100%',
//         height: 200,
//         borderRadius: 1,
//     }, textArea: {
//         padding: 8,
//         paddingRight: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     dropdownBox: {
//         flexDirection: 'row',
//         height: 50,
//         borderRadius: 5,
//         // margin: 10,
//         backgroundColor: '#ffff',
//         marginBottom: 0,
//         // borderWidth:0,
//     },
//     listTab: {
//         flexDirection: 'row',
//         // marginBottom: 20,
//         // alignSelf: 'center',
//         // marginTop: 19,
//         borderRadius: 5,
//         // backgroundColor: 'white',
//         paddingLeft: 6,
//         paddingRight: 6,
//         // paddingTop: 4,
//         // paddingBottom: 4,
//     },
//     textTab: {
//         fontSize: 15,
//         color: 'black',
//     },
//     imageStyleBuilder: {
//         width: '49%',
//         height: 150,
//         borderRadius: 1,
//     }

// });

// export default Screen;
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
                <Text style={{ fontSize: 24, color: 'black' }}>{route.params.issue}</Text>
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
