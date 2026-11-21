import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const PRODUCTS = [
  {
    key: '1',
    title: 'Xbox',
    description: 'A home video game console made by Microsoft.',
    rating: '5/5',
  },
  {
    key: '2',
    title: 'PS5',
    description: 'A home video game console made by Sony.',
    rating: '4.8/5',
  },
  {
    key: '3',
    title: 'Nintendo Switch',
    description: 'A hybrid console you can play at home or on the go.',
    rating: '4.7/5',
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.screen}>
      <Text style={styles.detailTitle}>{product.title}</Text>
      <Text style={styles.detail}>Description: {product.description}</Text>
      <Text style={styles.detail}>Rating: {product.rating}</Text>
      <Text style={styles.detail}>Key: {product.key}</Text>
    </View>
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
      <Stack.Screen name="Product" component={ProductScreen} />
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
  screen: {
    flex: 1,
    backgroundColor: '#eeeeee',
    padding: 16,
  },
  item: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#f8f8f8',
    padding: 12,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 15,
    marginBottom: 4,
  },
  menu: {
    fontSize: 24,
    marginLeft: 16,
  },
});