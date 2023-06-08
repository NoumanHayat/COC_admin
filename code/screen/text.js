/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Button

} from 'react-native';
import { SIZES } from '../constants';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { useData } from './../hooks';
import Video from 'react-native-video';

import Container from '../components/Container';
const Screen = ({ navigation }) => {
    const [vasible, setVasible] = useState(false);
    const [vasibleAnimation, setVasibleAnimation] = useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);
    return (
        // <Container
        //     style={{
        //         flex: 1,
        //         paddingVertical: SIZES.padding,
        //     }}>
        <View style={{
            flex: 1,
            backgroundColor: 'black',
        }}>
            <Text>Hy</Text>
            {/* <Video source={{ uri: "https://s1.secunduscdn.xyz/prime/VinlandSagaSS2/Vinland%20Saga%20S2%20-%2002.mp4" }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                 
                    onBuffer={this.onBuffer}                
                    onError={this.videoError}               
                    style={styles.backgroundVideo} /> */}
            {/* <Video
                source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                style={styles.video}
            /> */}
            <Video
                source={{ uri: 'https://s1.secunduscdn.xyz/prime/VinlandSagaSS2/Vinland%20Saga%20S2%20-%2002.mp4' }}
                paused={!isPlaying}
                controls={true}
                style={styles.backgroundVideo}
                muted={isMuted}
                resizeMode={"contain"}
                videoWidth={1600}
                videoHeight={900}
            />
            <Button
                onPress={() => setIsPlaying(p => !p)}
                title={isPlaying ? 'Stop' : 'Play'}
            />
            <Button
                onPress={() => setIsMuted(m => !m)}
                title={isMuted ? 'Unmute' : 'Mute'}
            />
        </View>
        // </Container >
    );
};
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
export default Screen;