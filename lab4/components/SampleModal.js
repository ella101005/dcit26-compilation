import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';

const LONG_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. Id diam vel quam elementum pulvinar etiam non quam. Sed augue lacus viverra vitae congue eu. Enim neque volutpat ac tincidunt vitae semper quis. Pretium fusce id velit ut tortor pretium. Rhoncus dolor purus non enim praesent elementum facilisis leo.\n\n' +
  'Pellentesque elit eget gravida cum sociis natoque penatibus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Mi proin sed libero enim sed faucibus turpis in eu. Neque convallis a cras semper auctor neque vitae tempus quam. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.\n\n' +
  'Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Vitae suscipit tellus mauris a diam maecenas sed enim ut. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Scelerisque purus semper eget duis at tellus at urna condimentum.\n\n' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>{LONG_TEXT}</Text>
        </ScrollView>

        <View style={styles.buttonWrapper}>
          <Button title="CLOSE" onPress={onClose} color="#E53935" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'justify',
    lineHeight: 20,
  },
  buttonWrapper: {
    marginTop: 16,
    width: 120,
  },
});