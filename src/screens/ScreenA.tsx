import React from 'react';

import { Button } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Container } from './stylesA';


export function ScreenA() {
    const navigation = useNavigation()

    function openScreen(){
        navigation.navigate('screenB');
    }

  return (
    <Container style={{ backgroundColor: 'red' }}>
        <Button 
            title="Ir para tela B"
            onPress={openScreen}
        />
    </Container>
  );
}