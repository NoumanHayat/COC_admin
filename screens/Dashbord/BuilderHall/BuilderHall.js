/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { } from 'react';

import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS, images, SIZES } from '../../../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Card, ListItem, Button, Icon } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';
import ScreenHader from '../../../components/ScreenHaderCopy';

// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation,route }) => {
    // console.log(route.params);
   
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScrollView >
            <ScreenHader title="Builder Hall" navigation={navigation} onlyBack={true} />
                <View style={{ flex: 1, }}>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}> 
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:10,Data:route.params,type:'builder'})}}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image 
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={images.builderHall10}

                                        />
                                    </View>
                                    <Card.Title>Builder Hall 10</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>

                        <View style={{ width: '50%' }}> 
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:9,Data:route.params,type:'builder'})}}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image 
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/4/43/Builder_Hall9.png/revision/latest/scale-to-width-down/100?cb=20190616210631' }}
                                        />
                                    </View>
                                    <Card.Title>Builder Hall 9</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>


                        
                        {/* <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:8,Data:route.params,type:'builder'}); }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Builder_Hall8.png' }}
                                        />
                                    </View>
                                    <Card.Title>Builder 8</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View> */}
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:8,Data:route.params,type:'builder'}); }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/0/0e/Builder_Hall8.png' }}
                                        />
                                    </View>
                                    <Card.Title>Builder 8</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:7,Data:route.params,type:'builder'})}}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/7/7f/Builder_Hall7.png' }}
                                        />
                                    </View>
                                    <Card.Title>Builder 7</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:6,Data:route.params,type:'builder'}); }}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 70, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/2/29/Builder_Hall6.png' }}
                                        />
                                    </View>
                                    <Card.Title>Builder 6</Card.Title>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Card style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { navigation.push('mainDisplay',{townHall:5,Data:route.params,type:'builder'})}}>
                                    <View style={{ alignItems: 'center', padding: 20, paddingBottom: 0 }}>
                                        <Card.Image
                                            style={{ width: 80, height: 70 }}
                                            resizeMode="cover"
                                            source={{ uri: 'https://static.wikia.nocookie.net/clashofclans/images/2/22/Builder_Hall5.png' }}
                                        />
                                    </View>
                                    <Card.Title>Builder 5</Card.Title>
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