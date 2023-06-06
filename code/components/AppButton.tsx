import React from 'react';
import { TextStyle, View, ViewStyle, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import { COLORS } from '../constants';
import FastImage, { ImageStyle } from 'react-native-fast-image';

interface Props {
  text: string;
  icon?: any;
  onPress: any;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconStyle?: ImageStyle;
}

export default function AppButton({
  text,
  icon,
  onPress,
  style,
  textStyle,
  iconStyle,
}: Props) {
  return (
    <View
      style={{
        overflow: 'hidden',
        backgroundColor: '#6877c8',
        borderRadius: 10,
        ...style,
      }}>
      <TouchableHighlight
        underlayColor={'#00000008'}
        onPress={() => {
          onPress();
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 35,
            paddingVertical: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppText
            fontWeight="Medium"
            style={{ color: COLORS.white, fontSize: 12, ...textStyle }}>
            {text}
          </AppText>
          {icon && (
            <FastImage
              source={icon}
              tintColor={COLORS.white}
              style={{
                width: 25,
                height: 25,
                marginLeft: 10,
                ...iconStyle,
              }}
            />
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
}
