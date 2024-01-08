import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Button, Linking } from 'react-native';

const instagram = 'https://www.instagram.com/adhipus_123'
const griyasoft = 'https://griyasoft.com'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('./assets/adhi.jpeg')}
        />
        <Text style={styles.name}>Adhi Puspo H</Text>
        <Text style={styles.bio}>Software Enginering</Text>
      </View>
      <View style={styles.button}>
        <Button title="Contact Me Here" color="blue" onPress={()=>Linking.openURL(instagram)} 
      />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {/* Tambahkan daftar proyek Anda di sini */}
        <Text>Project 1: Web Inventory Stock “Apotek”</Text>
          <Image
            style={styles.project}
            source={require('./assets/apotek.jpeg')}
          />
        <Text>Project 2: Web Developt SIM Absensi “G Co.”</Text>
        <Image
            style={styles.project}
            source={require('./assets/g.course.jpeg')}
          />
        <Text>Project 3: Web Griyasoft Official Website</Text>
        <Image
            style={styles.project}
            source={require('./assets/Laravel.jpeg')}
          />
        <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(griyasoft)}
            >
        <Text>Project 4: Web Griyasoft Official Website with wordpress</Text>
        <Image
            style={styles.project}
            source={require('./assets/wordpress.jpeg')}
            onPress={()=>Linking.openURL(griyasoft)}
          />
        </TouchableOpacity>
        {/* ... */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {/* Tambahkan daftar keahlian Anda di sini */}
          <View style={{ flexDirection: 'row'}}>
            <View style={{width: 230}}>
              <Text
              style={styles.boldFont}>
              UI / UX Design
            </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button} //onPress={onPress}
              >
              <Image style={{ width: 20, height: 20, borderRadius: 10}}
              source={require('./assets/design.png')}></Image>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row'}}>
            <View style={{width: 230}}>
              <Text
              style={styles.boldFont}>
              Web Developt
            </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button} //onPress={onPress}
              >
              <Image style={{ width: 20, height: 20, borderRadius: 10}}
              source={require('./assets/develop.png')}></Image>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row'}}>
            <View style={{width: 230}}>
              <Text
              style={styles.boldFont}>
              Indonesia Languange
            </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button} //onPress={onPress}
              >
              <Image style={{ width: 20, height: 20, borderRadius: 10}}
              source={require('./assets/develop.png')}></Image>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row'}}>
            <View style={{width: 230}}>
              <Text
              style={styles.boldFont}>
              English Languange
            </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button} //onPress={onPress}
              >
              <Image style={{ width: 20, height: 20, borderRadius: 10}}
              source={require('./assets/english.png')}></Image>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row'}}>
            <View style={{width: 230}}>
              <Text
              style={styles.boldFont}>
              Japanese Languange
            </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button} //onPress={onPress}
              >
              <Image style={{ width: 20, height: 20, borderRadius: 10}}
              source={require('./assets/japanese.png')}></Image>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center', 
    marginBottom:10,
    borderRadius: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFADD',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  project: {
    maxWidth: '100%',
    maxHeight: 150,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    alignItems: 'center',
    
  },
  bio: {
    fontSize: 18,
    color: 'gray',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
