/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import {
    ImageBackground,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Modal,
} from 'react-native';
import ModalLayout from './ModalLayout';
import { images, SIZES } from '../../constants';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Screen = ({ navigation }) => {
    const [inputVisible, setInputVisible] = useState(false);
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <ScrollView >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => { setInputVisible(true); }}>
                        <Text style={{color:'black'}}>Ok</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={inputVisible}
                    onRequestClose={() => {
                        setInputVisible(!inputVisible);
                    }}
                >
                    <ModalLayout
                        onClose={() => {
                            setInputVisible(!inputVisible);
                        }}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{color:'black'}}>Hello</Text>
                        </View>
                    </ModalLayout>
                </Modal>
            </ScrollView>
        </ImageBackground >

    );
};

export default Screen;
