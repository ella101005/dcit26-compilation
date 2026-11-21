import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const json = await response.json();
      setUser(json.results[0]);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.home}>
      {loading && <ActivityIndicator size="large" color="#2196F3" />}

      {error && !loading && (
        <Text style={styles.error}>
          Could not load user. Check your connection and press RANDOM USER.
        </Text>
      )}

      {user && !loading && (
        <>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Profile', { user })}
          >
            <Image source={{ uri: user.picture.large }} style={styles.homePic} />
          </TouchableOpacity>
          <Text style={styles.homeName}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}

      <View style={styles.buttonWrap}>
        <Button title="RANDOM USER" onPress={fetchUser} color="#2196F3" />
      </View>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <Text style={styles.line}>
      <Text style={styles.label}>{label}: </Text>
      {value}
    </Text>
  );
}

function ProfileScreen({ route }) {
  const { user } = route.params;
  const loc = user?.location || {};
  const street = loc.street || {};
  const tz = loc.timezone || {};
  const coords = loc.coordinates || {};

  return (
    <ScrollView style={styles.profile} contentContainerStyle={styles.profileContent}>
      <Image source={{ uri: user.picture.large }} style={styles.profilePic} />
      <Text style={styles.fullName}>
        {user.name.title} {user.name.first} {user.name.last}
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>👤 About</Text>
        <InfoRow label="Age" value={user.dob?.age} />
        <InfoRow label="Birthday" value={user.dob?.date} />
        <InfoRow label="Gender" value={user.gender} />
        <InfoRow label="Nationality" value={user.nat} />
        <InfoRow
          label="Address"
          value={`${street.number ?? ''} ${street.name ?? ''}, ${loc.city ?? ''}, ${loc.state ?? ''}, ${loc.country ?? ''} ${loc.postcode ?? ''}`}
        />
        <InfoRow label="Coordinates" value={`${coords.latitude}, ${coords.longitude}`} />
        <InfoRow label="Timezone" value={`${tz.offset ?? ''} ${tz.description ?? ''}`} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>✉️ Contact</Text>
        <InfoRow label="Email" value={user.email} />
        <InfoRow label="Phone" value={user.phone} />
        <InfoRow label="Cell" value={user.cell} />
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>⋯ Other</Text>
        <InfoRow label="Username" value={user.login?.username} />
        <InfoRow label="UUID" value={user.login?.uuid} />
        <InfoRow
          label="ID"
          value={user.id?.name ? `${user.id.name} ${user.id.value ?? ''}` : 'N/A'}
        />
        <InfoRow label="Date registered" value={user.registered?.date} />
        <InfoRow label="Years registered" value={user.registered?.age} />
      </View>
    </ScrollView>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <Text
              style={styles.menu}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              ☰
            </Text>
          ),
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeDrawer" component={HomeStack} options={{ title: 'Home' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  homePic: { width: 150, height: 150 },
  homeName: { fontSize: 16, fontWeight: 'bold', marginTop: 8, marginBottom: 12 },
  buttonWrap: { marginTop: 8 },
  error: { color: '#c62828', textAlign: 'center', marginBottom: 12 },
  menu: { fontSize: 24, marginLeft: 16 },

  profile: { flex: 1, backgroundColor: '#eeeeee' },
  profileContent: { alignItems: 'center', padding: 16, paddingBottom: 40 },
  profilePic: { width: 130, height: 130, marginTop: 8 },
  fullName: { fontSize: 18, fontWeight: 'bold', marginVertical: 12 },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555555',
    marginBottom: 6,
  },
  line: { fontSize: 13, color: '#333333', marginBottom: 4 },
  label: { fontWeight: 'bold', color: '#555555' },
});