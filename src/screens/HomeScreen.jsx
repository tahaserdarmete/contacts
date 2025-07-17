import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  // ortak hafızadan contacts(kişileri) çektik
  const contacts = useSelector(state => state.contacts);

  // dispatch örneği çekerek ortak hafızadan veri ekleme/güncelleme yapabiliriz.
  const dispatch = useDispatch();

  useEffect(() => {
    // sayfa ilk yüklendiğinde sayfanın headerının sağ tarafına buton ekle
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('AddContact')}>
          <Text>KİŞİ EKLE</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <View style={styles.contact}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
            <View style={styles.bottoms}>
              <TouchableOpacity
                style={styles.deleteBottom}
                onPress={() =>
                  dispatch({ type: 'DELETE_CONTACT', payload: item.id })
                }
              >
                <Text style={styles.btnText}>SİL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottom}>
                <Text
                  style={styles.btnText}
                  onPress={() =>
                    navigation.navigate('UpdateContact', {
                      id: item.id,
                      name: item.name,
                      phone: item.phone,
                    })
                  }
                >
                  GÜNCELLE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  phone: {
    fontSize: 16,
  },
  bottoms: {
    borderLeftWidth: 2,
    borderLeftColor: 'rgba(0,0,0,0.1)',
    paddingLeft: 10,
    justifyContent: 'center',
    gap: 10,
  },

  bottom: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
    gap: 10,
  },
  deleteBottom: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 700,
  },
});
