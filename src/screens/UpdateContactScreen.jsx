import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { vh, vw } from '../utils/screenSize';
import { useDispatch } from 'react-redux';

const UpdateContactScreen = ({ navigation, route }) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  useEffect(() => {
    setName(route.params.name);
    setPhone(route.params.phone);
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name.trim().length <= 0) {
      Alert.alert('HATA', 'İsim kutusu boş bırakılamaz');
      return;
    }

    if (phone.trim().length < 11) {
      Alert.alert('HATA', 'Telefon no kutusu boş bırakılamaz');
      return;
    }

    dispatch({
      type: 'UPDATE_CONTACT',
      payload: { id: route.params.id, name, phone },
    });

    Alert.alert('BAŞARILI', 'Kişi başarıyla güncellendi.', [
      {
        text: 'Tamam',
        onPress: () =>
          navigation.reset({
            routes: [{ name: 'Home' }],
            index: 0,
          }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 8 }}>
        <Text style={styles.label}>İsim</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />

        <Text style={styles.label}>Telefon</Text>

        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
      </View>
      <View style={{ flex: 2 }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.btnText}>KİŞİ GÜNCELLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    width: vw(90),
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  input: {
    width: vw(90),
    marginHorizontal: 'auto',
    marginVertical: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  addButton: {
    backgroundColor: 'rgb(100,205,100)',
    height: vh(5),
    width: vw(50),
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});
