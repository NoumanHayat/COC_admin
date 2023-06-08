/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';
import { COLORS } from '../../constants';
import Container from '../../components/ContainerReport';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useData } from '../../hooks';
import ModalLayout from '../../components/ModalLayout';

const Log = ({ item, navigation }) => {
    const [vasible, setVasible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <View style={{ marginRight: 15 }}>
                        {/* <EvilIcons name="calendar" size={27} color="black" /> */}
                        <EvilIcons name="gear" size={24} color="black" />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                        <Text style={{ fontSize: 12, color: 'red' }}>{item._data.review.slice(0, 15)}</Text>
                        <Text style={{ fontSize: 12, color: 'gray' }}>{item._data.photoUrl.slice(76, 85)}</Text>
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <TouchableOpacity onPress={async () => {
                            setVasible(true);
                            // navigation.push('Display',{photoUrl:item._data.photoUrl,link:item._data.link,issue:item._data.issue,ref:item._ref._documentPath._parts[1]})
                        }}>
                            {/* <EvilIcons name="pencil" size={24} color="black" /> */}
                            <EvilIcons name="eye" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View >

                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={vasible}
                onRequestClose={() => setVasible(!vasible)}
            >
                <ModalLayout onClose={() => setVasible(!vasible)}>
                    <View style={{ alignItems: 'center' }}>
                        <Text fontWeight="SemiBold" style={{ fontSize: 28, color: 'black', marginVertical: 15 }}>
                            {item._data.photoUrl.slice(76, 84)}
                        </Text>
                        <Image style={{
                            width: '100%',
                            height: 200,
                            resizeMode: 'stretch',
                        }} source={{ uri: item._data.photoUrl }} />
                        <Text fontWeight="Medium" style={{ fontSize: 14, color: 'black', marginVertical: 15 }}>
                            {item._data.review}
                        </Text>
                    </View>
                    <View style={{ margin: 20 }}>
                        <Button title="More Details" onPress={() => {
                            setVasible(false);
                            navigation.push('DisplayReview', { photoUrl: item._data.photoUrl, link: item._data.link, review: item._data.review, ref: item._ref._documentPath._parts[1] })

                        }} />
                    </View>
                </ModalLayout>
            </Modal>
        </View>
    )
}
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    const { getReview } = useData();
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const tempData = await getReview();
            setData(tempData);
        }
        fetchData();
    }, [getReview, setData]);
    return (
        <>
            <View style={{ padding: 25, backgroundColor: '#3D2645' }}>
                <TouchableOpacity onPress={async () => { console.log('Ok') }}>
                    <View style={{ alignItems: 'flex-end' }}>
                        {/* <Text style={{ color: 'red', fontSize: 18 }}>Clear</Text> */}
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: '10%' }}>
                    <Text style={{ fontSize: 25, color: '#ffff' }}>Review Log</Text>
                </View>
            </View>
            <Container>
                <View style={{ margin: 10 }}>
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
