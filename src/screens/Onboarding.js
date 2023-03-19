import React, { useRef } from 'react';
import { View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Page from '../screens/components/Page';
import Footer from './components/Footer';

import { useNavigation } from '@react-navigation/native';
import { Divider, ProgressBar } from 'react-native-paper';

const Onboarding = () => {
  const navigation = useNavigation();
  const pagerRef = useRef(null);

  const image1 = require('../../assets/onboarding-1.png');
  const image2 = require('../../assets/onboarding-2.png');
  const image3 = require('../../assets/onboarding-3.png');
  const image4 = require('../../assets/onboarding-4.png');

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key='1'>
          <Divider
            style={{
              backgroundColor: 'white',
              height: 10,
              zIndex: 100,
            }}
          >
            <ProgressBar
              style={{ marginTop: 1, height: 8 }}
              progress={0.25}
              color={'#07689f'}
            />
          </Divider>
          <Page
            backgroundColor='#0256ae'
            image={image1}
            title='Bem vind@ ao Nexto '
            subtitle='Todas as suas comunidades e eventos em um só lugar'
          />
          <Footer
            backgroundColor='#07689f'
            rightButtonLabel='Pular'
            rightButtonPress={() => {
              navigation.navigate('Explorer');
            }}
          />
        </View>
        <View key='2'>
          <Divider
            style={{
              backgroundColor: 'white',
              height: 10,
              zIndex: 100,
            }}
          >
            <ProgressBar
              style={{ marginTop: 1, height: 8 }}
              progress={0.5}
              color={'#07689f'}
            />
          </Divider>
          <Page
            backgroundColor='#0256ae'
            image={image2}
            title='Amplie suas conexões'
            subtitle='Troque mensagens diretas e obtenha novas oportunidades'
          />
          <Footer
            backgroundColor='#07689f'
            rightButtonLabel='Pular'
            rightButtonPress={() => {
              navigation.navigate('Explorer');
            }}
          />
        </View>
        <View key='3'>
          <Divider
            style={{
              backgroundColor: 'white',
              height: 10,
              zIndex: 100,
            }}
          >
            <ProgressBar
              style={{ marginTop: 1, height: 8 }}
              progress={0.75}
              color={'#07689f'}
            />
          </Divider>
          <Page
            backgroundColor='#0256ae'
            image={image3}
            title='Participe de eventos'
            subtitle='Você será notificado dos eventos de suas comunidades'
          />
          <Footer
            backgroundColor='#07689f'
            rightButtonLabel='Pular'
            rightButtonPress={() => {
              navigation.navigate('Explorer');
            }}
          />
        </View>
        <View key='4'>
          <Divider
            style={{
              backgroundColor: 'white',
              height: 10,
              zIndex: 100,
            }}
          >
            <ProgressBar
              style={{ marginTop: 1, height: 8 }}
              progress={1}
              color={'#07689f'}
            />
          </Divider>
          <Page
            backgroundColor='#0256ae'
            image={image4}
            title='Canais de discussão'
            subtitle='Discuta temas de seu interesse, compartilhe ideias e explore conteúdos'
          />
          <Footer
            backgroundColor='#07689f'
            rightButtonLabel='Começar'
            rightButtonPress={() => {
              navigation.navigate('Explorer');
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
