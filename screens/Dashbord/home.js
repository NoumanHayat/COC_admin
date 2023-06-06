/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react';

import {
    ImageBackground,
    Text,
    View,
    TouchableOpacity,
    Linking,
    Button,
    Modal,
    ScrollView

} from 'react-native';
import { images, SIZES } from '../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Card } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalLayout from '../../components/ModalLayout';
import { useData } from './../hooks';
import Lottie from 'lottie-react-native';
const Screens = () => {
    return (
        <Lottie
            source={require('./../../loadingScreen/loader-animation.json')}
            colorFilters={[
                {
                    keypath: 'button',
                    color: '#F00000',
                },
                {
                    keypath: 'Sending Loader',
                    color: '#F00000',
                },
            ]}
            autoPlay
            loop
        />
    );
}
import {
    InterstitialAd,
    TestIds,
    AdEventType,
    BannerAd,
    BannerAdSize,
} from 'react-native-google-mobile-ads';

const Screen = ({ navigation }) => {
    const [vasible, setVasible] = useState(false);
    const { getData } = useData();
    const [vasibleAnimation, setVasibleAnimation] = useState(false);
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Text style={{ fontSize: 25, color: 'black', fontWeight: "bold" }}>Clash Of Clan Tools</Text> */}
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: 'black', fontWeight: "bold", marginVertical:'10%' }}>Clash Of Clan Tools</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={async () => {
                                    setVasibleAnimation(true);
                                    let res = await getData();
                                    console.log(res);
                                    setVasibleAnimation(false);
                                    if (res[0] == undefined) {
                                        alert('Please check your internet connection');
                                    } else {
                                        navigation.push("Builder Hall Base", res);
                                    }
                                    // navigation.push("Builder Hall Base", res);

                                }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/4/43/Builder_Hall9.png' }}
                                        />
                                    </View>
                                    <Card.Title>Builder Base</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={async () => {
                                    setVasibleAnimation(true);
                                    let res = await getData();
                                    setVasibleAnimation(false);
                                    if (res[0] == undefined) {
                                        alert('Please check your internet connection');
                                    } else {
                                        navigation.push("Town hall Base", res);
                                    }

                                }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Giga_Inferno15-5.png' }}
                                        />
                                    </View>
                                    <Card.Title>TownHall base</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { setVasible(true) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/0/06/LLT_Info.png' }}
                                        />
                                    </View>
                                    <Card.Title>Paid Bases for trophy push</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            {/* <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.push("Clash News"); }}>
                                <View style={{ alignItems: 'center', padding: 20,paddingBottom:10 }}>
                                    <Card.Image
                                        style={{ width: 70, height: 60 }}
                                        resizeMode="cover"
                                        source={images.cocsetting}
                                    />
                                </View>
                                <Card.Title>COC News</Card.Title>
                            </TouchableOpacity>
                        </Card> */}
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                            <BannerAd unitId={'ca-app-pub-3079210464435975/9088339105'} size={BannerAdSize.LARGE_BANNER} />
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
                            <Text fontWeight="SemiBold" style={{ fontSize: 28, color: 'black' }}>
                                Coming Soon! 😀
                            </Text>
                            <Text fontWeight="Medium" style={{ fontSize: 14, color: 'black' }}>
                                Please wait for new version
                            </Text>
                        </View>
                    </ModalLayout>
                </Modal>
                {/* //------------------------------------------------------------------------------- */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={vasibleAnimation}
                    onRequestClose={() => setVasibleAnimation(!vasibleAnimation)}
                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)' }}>
                        <Lottie
                            source={require('./../../loadingScreen/loader-animation.json')}
                            colorFilters={[
                                {
                                    keypath: 'button',
                                    color: '#F00000',
                                },
                                {
                                    keypath: 'Sending Loader',
                                    color: '#F00000',
                                },
                            ]}
                            autoPlay
                            loop
                        />
                    </View>
                </Modal>

            </View>
        </ImageBackground >
    );
};

export default Screen;