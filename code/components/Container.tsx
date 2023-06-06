/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar,View } from 'react-native';
import { COLORS,SIZES } from '../constants';

interface Props {
  children: ReactNode;
  Style?: any;
}
export default function container({ children }: Props) {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={COLORS.black} />
      {/* <KeyboardAwareScrollView > */}
        {children}
      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView >
  );
}
