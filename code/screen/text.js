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
import { images, SIZES } from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { FAB, Card } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalLayout from '../components/ModalLayout';
// import { useData } from './../hooks';

import Container from '../components/Container';
const Screen = ({ navigation }) => {
    const [vasible, setVasible] = useState(false);
    const [vasibleAnimation, setVasibleAnimation] = useState(false);
    return (
        <Container
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* <Text style={{ fontSize: 25, color: 'black', fontWeight: "bold" }}>Clash Of Clan Tools</Text> */}
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, color: 'black', fontWeight: "bold", marginVertical: '10%' }}>Admin Tools</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={async () => {

                                    // navigation.push("Builder Hall Base", res);

                                }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        {/* <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/4/43/Builder_Hall9.png' }}
                                        /> */}
                                        <MaterialIcons name="home-repair-service" size={44} color="black" />
                                    </View>
                                    <Card.Title>Report</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={async () => {


                                }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        {/* <MaterialIcons name="home-repair-service" size={44} color="black" /> */}
                                        <MaterialIcons name="rate-review" size={44} color="black" />
                                    </View>
                                    <Card.Title>Review base</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%', alignSelf: 'flex-start' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { setVasible(true) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                    {/* <AntDesign name="Trophy" size={44} color="black" /> */}
                                    <MaterialIcons name="public" size={44} color="black" />
                                    </View>
                                    <Card.Title>trophy push</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { console.log('Working') }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                    <MaterialIcons name="sports-basketball" size={44} color="black" />
                                    </View>
                                    <Card.Title>Base setting</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
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

                    </View>
                </Modal>

            </View>
        </Container >
    );
};

export default Screen;