import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Page from '../screens/components/Page';
import Footer from './components/Footer';

import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const pagerRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key='1'>
          <Page
            backgroundColor='#ffc93c'
            iconName='sun'
            title='Welcome to Nexto fuckers!!r'
          />
          <Footer
            backgroundColor='#ffc93c'
            rightButtonLabel='Próximo'
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key='2'>
          <Page
            backgroundColor='#07689f'
            iconName='cloud-drizzle'
            title='We have the communities from the hell 666'
          />
          <Footer
            backgroundColor='#07689f'
            leftButtonLabel='Voltar'
            leftButtonPress={() => {
              handlePageChange(0);
            }}
            rightButtonLabel='Login'
            rightButtonPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
