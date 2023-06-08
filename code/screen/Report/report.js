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
import React, { useState ,useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import Container from '../../components/ContainerReport';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useData } from '../../hooks';

const Log = ({item,navigation}) => {

    // console.log(item._ref._documentPath._parts[1]);
    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <EvilIcons name="calendar" size={27} color="black" /> */}
                        <EvilIcons name="gear" size={24} color="black" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 12, color: 'red' }}>{item._data.issue}</Text>
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item._data.photoUrl.slice(76, 85)}</Text>
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity onPress={async () => {
                            navigation.push('Display',{photoUrl:item._data.photoUrl,link:item._data.link,issue:item._data.issue,ref:item._ref._documentPath._parts[1]})
                        }}>
                            <EvilIcons name="pencil" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View >

                </View>
            </View>
        </View>
    )
}
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    const [check, setChecked] = useState(false);
    const logData = [1, 2, 3,]
    const {  getReport } = useData();
    const [data,setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const tempData = await getReport();
            setData(tempData);
        }
        fetchData();
    }, [getReport, setData]);
    return (
        <>
            <View style={{ padding: 25, backgroundColor: '#3D2645' }}>
                <TouchableOpacity onPress={async () => { console.log('Ok') }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        {/* <Text style={{ color: 'red', fontSize: 18 }}>Clear</Text> */}
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: '10%' }}>
                    <Text style={{ fontSize: 25, color: '#ffff' }}>Report Log</Text>
                </View>
            </View>
            <Container>
                <View style={{margin:10}}>
                    {data?.map((item, index) => (
                        <Log key={index} item={item} index={index} navigation={navigation} />
                    ))}
                </View>
            </Container>
        </>
    );
};
const styles = StyleSheet.create({
    titleTwo: {
        color: COLORS.dark,
        fontSize: 14,
        marginTop: 15,
    },
    container: {
        flex: 1,
        margin: 25,
        marginBottom: 10,
        marginTop: 0
    },
    modalView: {
        width: "100%",
        height: 45,
        justifyContent: 'space-between',
        marginBottom: 17,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 8,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
        paddingLeft: 11,
        paddingRight: 11
    },
    centeredView: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: 2,
    },
})
export default Screen;
