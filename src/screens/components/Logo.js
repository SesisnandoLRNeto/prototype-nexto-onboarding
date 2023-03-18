import React from 'react';
import { View, Image } from 'react-native';
import { Divider } from 'react-native-paper';

const LogoComponent = () => {
  const logo = require('../../../assets/adaptive-icon.png');

  return (
    <>
      <View style={{ marginBottom: 32 }}>
        <Image
          style={{
            width: 300,
            height: 300,
            marginBottom: -100,
          }}
          source={logo}
        ></Image>
      </View>

      <Divider
        style={{ width: 2000, height: 4, marginLeft: -230, marginBottom: -100 }}
      />
    </>
  );
};

export default LogoComponent;
