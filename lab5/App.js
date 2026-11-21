import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const menuButton = (navigation) => () => (
  <Text
    style={styles.menu}
    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
  >
    ☰
  </Text>
);

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="PROFILE" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK HOME" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={({ navigation }) => ({ headerLeft: menuButton(navigation) })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  menu: {
    fontSize: 24,
    marginLeft: 16,
  },
});