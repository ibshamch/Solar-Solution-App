import React, { useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import { Text } from 'react-native-paper';
import TextInput from '../components/TextInput';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import BackButton from '../components/BackButton';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { theme } from '../core/theme';

export default function AdminLoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return; // Prevent further execution if there's an error
    }

    setLoading(true);

    // Hardcoded Admin Credentials
    if (email.value === 'admin@admin.com' && password.value === 'admin123') {
      alert('Admin Login Successfully');
      navigation.navigate('AdminDashboardScreen'); // Navigate to admin panel
    } else {
      alert('Invalid admin credentials');
    }

    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Admin Login</Header>
      <TextInput
        label="Email"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
      />
      <TextInput
        label="Password"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button loading={loading} mode="contained" onPress={onLoginPressed}>
        Login
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
