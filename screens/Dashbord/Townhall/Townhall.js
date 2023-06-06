/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';

import {
    ImageBackground,
    View,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import { images, SIZES } from '../../../constants';
import { Card } from 'react-native-elements';
import ScreenHader from '../../../components/ScreenHaderCopy';

// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation, route }) => {
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScrollView >
                <ScreenHader title="TownHall" navigation={navigation} onlyBack={true} />

                <View style={{ flex: 1, }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 15, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/1/1d/Giga_Inferno15-5.png' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 15</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 14, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/4/48/Giga_Inferno14-5.png' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 14</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 13, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/0/0f/Giga_Inferno5.png' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 13</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 12, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/0/06/Giga_Tesla5.png' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 12</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 11, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/9/96/Town_Hall11.png/revision/latest/scale-to-width-down/110' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 11</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 10, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/5/5c/Town_Hall10.png/revision/latest/scale-to-width-down/115?cb=20170827040043' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 10</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 9, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/e/e0/Town_Hall9.png/revision/latest/scale-to-width-down/100?cb=20170827045259' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 9</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay', { townHall: 8, Data: route.params, type: 'home' }) }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/f/fa/Town_Hall8.png/revision/latest/scale-to-width-down/100?cb=20170827051039' }}
                                        />
                                    </View>
                                    <View style={{paddingVertical:10}}>
                                        <Card.Title>TownHall 8</Card.Title>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <FAB onPress={() => { alert("Ok"); }} icon={<MaterialIcons name="file-upload" size={24} color="white" />} placement={"right"} /> */}
        </ImageBackground >

    );
};

export default Screen;