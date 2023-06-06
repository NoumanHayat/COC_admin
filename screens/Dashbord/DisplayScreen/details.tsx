/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useEffect } from 'react';

import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Linking,
    Button,
    Modal,
    TextInput,
} from 'react-native';
import { images, SIZES, icons } from '../../../constants';
import Feather from 'react-native-vector-icons/Feather';
import { SelectList } from 'react-native-dropdown-select-list';
import ScreenHader from '../../../components/ScreenHaderCopy';
import AppButton from '../../../components/AppButton';
import Hyperlink from 'react-native-hyperlink';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalLayout from '../../../components/ModalLayout';
import { useData } from './../../hooks';

import { FloatingAction } from 'react-native-floating-action';
import {
    InterstitialAd,
    TestIds,
    AdEventType,
    BannerAd,
    BannerAdSize,
} from 'react-native-google-mobile-ads';
const adUnitId = 'ca-app-pub-3079210464435975/4375030484';
console.log(adUnitId);
//  const adUnitId='ca-app-pub-3079210464435975/9171211539';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: false,
});

// import { TouchableOpacity } from 'react-native-gesture-handler';

const Screen = ({ navigation, route }) => {
    const actions = [
        {
            text: 'Report',
            icon: <MaterialIcons name="bug-report" size={24} color="white" />,
            name: 'Report',
            position: 1
        },
        {
            text: 'Review',
            icon: <MaterialIcons name="rate-review" size={24} color="white" />,
            name: 'Review',
            position: 2
        }
    ];
    const [status, setStatus] = useState('All');
    const data = [
        { key: '2', value: 'Base Link does not work' },
        { key: '3', value: 'Base link does match image' },
        { key: '5', value: 'Something else' },
    ];
    const [text, onChangeText] = React.useState('');
    const [selected, setSelected] = useState('Something else');
    const setStatusFilter = (status) => {
        setStatus(status);
    }
    const [vasible, setVasible] = useState(false);
    const [vasibleReport, setVasibleReport] = useState(false);
    const { Action, sendReport, sendReview } = useData();
    useEffect(() => {
        console.log('===================');
        const unsubscribe = interstitial.addAdEventListener(
            AdEventType.LOADED,
            () => {
                interstitial.show();
            },
        );
        // Start loading the interstitial straight away
        interstitial.load();
        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScreenHader title="Selected Base" navigation={navigation} onlyBack={true} />
            {!(route.params.photoUrlCave) ? (
                <View style={styles.container}>
                    <Image style={{
                        width: '100%',
                        height: 200,
                        resizeMode: 'stretch',
                    }} source={{ uri: route.params.photoUrl }} />
                </View>

            ) : (
                <View>

                    <View style={styles.container}>
                        <Image style={{
                            width: '100%',
                            height: 200,
                            resizeMode: 'stretch',
                        }} source={{ uri: route.params.photoUrl }} />
                    </View>
                    <Text style={{marginVertical:15,fontSize:20,color:'black'}}>Cave Base </Text>
                    <View style={styles.container}>
                        <Image style={{
                            width: '100%',
                            height: 200,
                            resizeMode: 'stretch',
                        }} source={{ uri: route.params.photoUrlCave }} />
                    </View>
                </View>
            )}

            <View style={styles.buttonLine}>
                <View style={{}}>
                    {/* <AppButton
                        onPress={async () => {
                            const handlePress = async () => {
                                Action();
                            };
                            handlePress();
                        }}
                        text="Action "
                        style={{
                            // width: '40%',
                            backgroundColor: '#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    /> */}
                </View>
                <View style={{}}>
                    <AppButton
                        onPress={async () => {
                            let url = route.params.link;

                            const handlePress = async () => {
                                // Open the custom settings if the app has one
                                await Linking.getInitialURL().then((url) => {
                                    if (url) {
                                        console.log('Initial url is: ' + url);
                                    }
                                }).catch(err => console.error('An error occurred', err));
                                Linking.canOpenURL(url)
                                    .then(supported => {
                                        if (!supported) {
                                            console.log("Can't handle url: " + url);
                                        } else {
                                            return Linking.openURL(url);
                                        }
                                    })
                                    .catch(err => console.error('An error occurred', err));
                            };
                            handlePress();
                        }}
                        text="Copy Base"
                        style={{
                            // width: '40%',
                            backgroundColor: '#445cda'
                        }}
                        // icon={icons.stats}
                        textStyle={{ color: 'white', letterSpacing: 2 }}
                    />
                </View>
            </View>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <BannerAd unitId={'ca-app-pub-3079210464435975/9088339105'} size={BannerAdSize.LARGE_BANNER} />
            </View>
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                    if (name == 'Review') {
                        setVasible(true);
                    }
                    if (name == 'Report') {
                        setVasibleReport(true);
                    }
                }}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={vasible}
                onRequestClose={() => setVasible(!vasible)}
            >
                <ModalLayout onClose={() => setVasible(!vasible)}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 28, color: 'black' }}>
                            Thank You for review! 😀
                        </Text>
                        <View style={{ marginRight: 5, ...styles.textBoxSignSmall }}>
                            <TextInput
                                placeholder="Please Enter review here..."
                                placeholderTextColor='gray'
                                autoCapitalize={'none'}
                                onChangeText={onChangeText}
                                // multiLine: true
                                multiline={true}
                                style={{
                                    height: 'auto',
                                    fontSize: 12,
                                    marginLeft: 20,
                                    color: 'gray',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <AppButton
                                onPress={async () => {
                                    setVasible(false);
                                    await sendReview(route.params.photoUrl, route.params.link, text);

                                    alert('Thank you for your review');
                                }}
                                text="Submit"
                                style={{
                                    // width: '100%',
                                    marginTop: 30,
                                    paddingHorizontal: 40,
                                }}
                                textStyle={{ color: 'white', letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 20 }}
                            />
                        </View>
                    </View>
                </ModalLayout>
            </Modal>


            <Modal
                animationType="slide"
                transparent={true}
                visible={vasibleReport}
                onRequestClose={() => setVasibleReport(!vasibleReport)}
            >
                <ModalLayout onClose={() => setVasibleReport(!vasibleReport)}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black' }}>What would you like to report?</Text>
                        <View>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                inputStyles={{ color: 'gray' }}
                                dropdownTextStyles={{ color: 'gray' }}
                                boxStyles={styles.dropdownBox}
                                save="value"
                                search={false}
                                placeholder={'Something else'}
                                searchPlaceholder={'Something else'}
                                arrowicon={<View >
                                    <Feather name="chevron-down" size={24} color="black" />
                                </View>
                                }
                            />
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <AppButton
                                onPress={async () => {
                                    setVasibleReport(false);
                                    await sendReport(route.params.photoUrl, route.params.link, selected);
                                    alert('Report Send');
                                }}
                                text="Submit"
                                style={{
                                    marginTop: 30,
                                    paddingHorizontal: 40,
                                    backgroundColor: 'blue',
                                }}
                                textStyle={{ color: 'white', letterSpacing: 2, fontFamily: 'Mulish-Black', fontSize: 20 }}
                            />
                        </View>
                    </View>
                </ModalLayout>
            </Modal>

        </ImageBackground >

    );
};

export default Screen;
const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        // marginHorizontal: 20
    },
    buttonLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,

    },
    textBoxSignSmall: {
        // flexDirection: 'row',
        height: 300,
        // flex: 1,

        borderRadius: 2,
        backgroundColor: 'lightGray',
        elevation: 2,
        marginTop: 20,
        padding: 5,
        width: '100%',
    },
    textBoxSignSmallTitle: {
        height: 50,
        borderRadius: 2,
        backgroundColor: 'lightGray',
        elevation: 2,
        marginTop: 4,
        padding: 5,
        width: '100%',
    },
    dropdownBox: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'white',
        marginBottom: 0,
        borderWidth: 1
    }
});
