import React from 'react';
import { View, Text, Image } from 'react-native';

const Page = ({ backgroundColor, image, title, subtitle }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor,
      }}
    >
      <Image
        style={{
          width: 350,
          height: 350,
          marginTop: 250,
          marginBottom: -80,
        }}
        source={image}
      ></Image>
      <View style={{ marginTop: 80 }}>
        <Text
          style={{
            height: '20%',
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            height: '20%',
            fontSize: 16,
            fontWeight: 'normal',
            color: 'white',
            textAlign: 'center',
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Page;
