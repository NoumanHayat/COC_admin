/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import { images, SIZES, icons } from '../../../constants';
import Feather from 'react-native-vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
import ScreenHader from '../../../components/ScreenHaderCopy';
import AppButton from '../../../components/AppButton';


// import { TouchableOpacity } from 'react-native-gesture-handler';
const CustomCard = ({ navigation, item }) => {
    console.log('------------');
    return (

        <View style={styles.cardStyle}>
            <View>
                {item.baseType === 'builder' && item.townHall > 5 ? (
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image style={styles.imageStyleBuilder} source={{ uri: item.photoUrl }} alt="image not found"  />
                            <Image style={styles.imageStyleBuilder} source={{ uri: item.photoUrlCave }} alt="image not found" />
                        </View>
                        <View style={styles.textArea}>
                            <View>
                                <Text style={{ fontSize: 20, color: 'black' }}>Town Hall</Text>
                                <Text style={{ fontSize: 13, color: 'gray' }}>Town Hall  {item.townHall} </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: 'black' }}>Category</Text>
                                <Text style={{ fontSize: 13, color: 'gray' }}>{(item.type).toUpperCase()}</Text>
                            </View>
                        </View><View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                            <AppButton
                                onPress={() => { navigation.push('details', { link: item.link, photoUrl: item.photoUrl,photoUrlCave:item.photoUrlCave ? item.photoUrlCave : null }); }}
                                text="Copy Link"
                                style={{
                                    // width: '40%',
                                }}
                                icon={icons.stats}
                                textStyle={{ color: 'white', letterSpacing: 2 }} />
                        </View>
                        </>) : <>
                    <Image style={styles.imageStyle} source={{ uri: item.photoUrl }} />
                    <View style={styles.textArea}>
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}>Town Hall</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>Town Hall  {item.townHall} </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: 'black' }}>Category</Text>
                            <Text style={{ fontSize: 13, color: 'gray' }}>{(item.type).toUpperCase()}</Text>
                        </View>
                    </View><View style={{ marginTop: 10, alignItems: 'flex-end' }}>
                        <AppButton
                            onPress={() => { navigation.push('details', { link: item.link, photoUrl: item.photoUrl  }); }}
                            text="Copy Link"
                            style={{
                                // width: '40%',
                            }}
                            icon={icons.stats}
                            textStyle={{ color: 'white', letterSpacing: 2 }} />
                    </View></>}
            </View>
        </View>
    );
};
const DATA = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'First Item',
    },
    {
        id: '5',
        title: 'Second Item',
    },
    {
        id: '6',
        title: 'Third Item',
    },
    {
        id: '7',
        title: 'First Item',
    },
    {
        id: '8',
        title: 'Second Item',
    },
    {
        id: '9',
        title: 'Third Item',
    },
    {
        id: '10',
        title: 'First Item',
    },
];

const Screen = ({ navigation, route }) => {
    // console.log(route.params.Data);
    console.log('=================================');
    const home = true
    const [status, setStatus] = useState('All');
    const tablist = [
        { status: 'All' },
        { status: 'FARMING' },
        { status: 'TROPHY' },
        { status: 'WAR' },
        { status: 'TROLL' },
    ];
    const setStatusFilter = (status) => {
        setStatus(status);
    }
    const [result, setResult] = useState([{}]);
    const filteredData = route.params.Data.filter(item => {
        if (route.params.type == 'builder') {
            return item.townHall == route.params.townHall && item.baseType == route.params.type && item.active
        } else {
            if (status == 'All') {
                return item.townHall == route.params.townHall && item.baseType == route.params.type && item.active
            } else {
                return item.townHall == route.params.townHall && item.baseType == route.params.type && item.active && item.type == status.toLowerCase()
            }
        }
    });
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,

            }}>
            <ScreenHader title="Select Base" navigation={navigation} onlyBack={true} />
            {route.params.type !== 'builder' ? <><View style={{ marginHorizontal: 10 }}>
                <ScrollView horizontal style={styles.listTab}>
                    {tablist.map((tab) => {
                        return (
                            <TouchableOpacity key={tab.status} style={[styles.btnTab, tab.status === status && styles.tnTabActive]}
                                onPress={() => { setStatusFilter(tab.status); }}>
                                <Text style={[styles.textTab, tab.status === status && styles.tnTabTextActive]}>{tab.status}</Text>
                            </TouchableOpacity>);
                    })}
                </ScrollView>
            </View>
            </>
                : <Text style={{ color: 'black' }}></Text>}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={filteredData}
                    initialNumToRender={10}
                    renderItem={
                        ({ item }) => <CustomCard navigation={navigation} item={item} />
                    }
                    // keyExtractor={item => item._id}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </ImageBackground >

    );
};

export default Screen;
const styles = StyleSheet.create({
    tnTabActive: {
        backgroundColor: 'black'
    },
    tnTabTextActive: {
        color: 'white',
    },
    btnTab: {
        width: 100,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#E9EBEB',
        padding: 10,
        justifyContent: 'center',
        marginLeft: 5,
        // backgroundColor: 'rgba(61, 38, 69, 0.2)'

    },
    container: {
        // margin: 30,
        // marginBottom: 10,
        // marginTop: 0,
    },
    cardStyle: {
        backgroundColor: '#F7F7FE', borderRadius: 10,
        padding: 10, marginHorizontal: 20, shadowColor: 'black', marginVertical: 5,
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 10,
    },
    imageStyle: {
        width: '100%',
        height: 200,
        borderRadius: 1,
    }, textArea: {
        padding: 8,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        // margin: 10,
        backgroundColor: '#ffff',
        marginBottom: 0,
        // borderWidth:0,
    },
    listTab: {
        flexDirection: 'row',
        // marginBottom: 20,
        // alignSelf: 'center',
        // marginTop: 19,
        borderRadius: 5,
        // backgroundColor: 'white',
        paddingLeft: 6,
        paddingRight: 6,
        // paddingTop: 4,
        // paddingBottom: 4,
    },
    textTab: {
        fontSize: 15,
        color: 'black',
    },
    imageStyleBuilder: {
        width: '49%',
        height: 150,
        borderRadius: 1,
    }

});
