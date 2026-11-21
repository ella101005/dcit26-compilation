import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Platform,
} from 'react-native';

const CARD_COLORS = ['#FFD6E8', '#E3D4FF', '#CFF1FF', '#FFF2B8', '#D5F5E3'];
const ICONS = ['𔓐𑇓', '𔓐𑇓', '𔓐𑇓', '𔓐𑇓'];

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === '') return;
    setItems([...items, { id: Date.now().toString(), name: text.trim() }]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ My Cute List ✨</Text>
      <Text style={styles.subtitle}>add something lovely below ♡</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          placeholderTextColor="#C9A0DC"
          value={text}
          onChangeText={setText}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title="ADD"
            onPress={addItem}
            color={Platform.OS === 'ios' ? '#ffffff' : '#FF8FB1'}
          />
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListEmptyComponent={
          <Text style={styles.empty}>Nothing here yet... ✋🏼{'\n'}add your first item!</Text>
        }
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: CARD_COLORS[index % CARD_COLORS.length] },
            ]}
          >
            <Text style={styles.icon}>{ICONS[index % ICONS.length]}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.heart}>♡</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F7',
    paddingTop: 60,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E75A9A',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#B58BD6',
    marginBottom: 20,
    marginTop: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 46,
    borderWidth: 2,
    borderColor: '#FFB6D5',
    borderRadius: 23,
    paddingHorizontal: 18,
    marginRight: 10,
    backgroundColor: '#ffffff',
    color: '#6A4C93',
    fontSize: 15,
  },
  buttonWrapper: {
    width: 76,
    height: 46,
    justifyContent: 'center',
    borderRadius: 23,
    overflow: 'hidden',
    backgroundColor: '#FF8FB1',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#5B3A78',
  },
  heart: {
    fontSize: 20,
    color: '#FF6FA5',
  },
  empty: {
    textAlign: 'center',
    color: '#C9A0DC',
    fontSize: 15,
    marginTop: 40,
    lineHeight: 24,
  },
});