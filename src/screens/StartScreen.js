import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Smart Solar App</Header>
      <Paragraph>The easiest way to get amazing solar solutions.</Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('AdminLoginScreen')}
      >
        Sign in as Admin
      </Button>
    </Background>
  );
}
