/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import {
    ImageBackground,
    Text,
    View,
    Button
} from 'react-native';
import { images, SIZES } from '../../../constants';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useData } from './../../hooks';


const Screen = () => {
    const [vasible, setVasible] = useState(false);
    const { Actions } = useData();
    const [vasibleAnimation, setVasibleAnimation] = useState(false);
    return (
        <ImageBackground
            source={images.background} resizeMode="cover"
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
            }}>
            <View style={{ flex: 1 }}>
                <Text>hy</Text>
                <Button onPress={()=>{Actions()}} title='Get' />
            </View>
        </ImageBackground >
    );
};

export default Screen;