import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginTop: 50,
        marginLeft: -20,
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name='arrow-back' size={24} color='white' />
    </TouchableOpacity>
  );
};

export default BackButton;
