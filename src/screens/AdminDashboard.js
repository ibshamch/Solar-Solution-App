import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { Card } from 'react-native-paper';
import sendEmail from '../helpers/sendApprovalEmail';

export default function AdminDashboardScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const usersCollection = await getDocs(collection(db, 'users'));
    const userList = usersCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(userList.filter((user) => !user.approved)); // Only keep unapproved users
    setLoading(false);
  };

  const approveUser = async (userId, email) => {
    await updateDoc(doc(db, 'users', userId), { approved: true });
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Remove approved user from list
    sendEmail(email, userId);
  };

  return (
    <Background>
      <Header>Admin Dashboard</Header>
      <Text style={styles.title}>Pending Approvals</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.userCard} elevation={3}>
              <Card.Content>
                <Text style={styles.email}>{item.email}</Text>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="contained"
                  onPress={() => approveUser(item.id, item.email)}
                >
                  Approve
                </Button>
              </Card.Actions>
            </Card>
          )}
        />
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  loader: {
    marginTop: 20,
  },
  userCard: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
});
