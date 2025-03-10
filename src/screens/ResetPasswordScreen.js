import React, { useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { emailValidator } from '../helpers/emailValidator';
import BackButton from '../components/BackButton';
import { StyleSheet } from 'react-native';
import { theme } from '../core/theme';
import { sendResetEmail } from '../api/auth-api';
export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);
  const onSubmitPress = async () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return; // Prevent further execution if there's an error
    }
    setLoading(true);
    const response = await sendResetEmail(email.value);
    if (response.error) {
      alert(response.error);
    } else {
      alert('Email with password has been sent');
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="Email"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        description="You will receive email with password reset link"
      />
      <Button loading={loading} mode="contained" onPress={onSubmitPress}>
        Send Instructions
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },

  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
});
