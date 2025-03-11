import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import { Card } from 'react-native-paper';

export default function Homepage({ navigation }) {
  return (
    <Background>
      <Header>Welcome to Homepage</Header>
      <Text style={styles.subtitle}>
        Explore Features & Manage Your Profile
      </Text>

      <Card style={styles.card} elevation={3}>
        <Card.Content>
          <Text style={styles.cardTitle}>View Profile</Text>
          <Text style={styles.cardSubtitle}>
            Check and update your account details
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Profile')}
          >
            Go to Profile
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card} elevation={3}>
        <Card.Content>
          <Text style={styles.cardTitle}>Available Services</Text>
          <Text style={styles.cardSubtitle}>
            Browse all the services we offer
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Services')}
          >
            Explore Services
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card} elevation={3}>
        <Card.Content>
          <Text style={styles.cardTitle}>Support</Text>
          <Text style={styles.cardSubtitle}>
            Need help? Contact our support team
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Support')}
          >
            Get Support
          </Button>
        </Card.Actions>
      </Card>
    </Background>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
});
