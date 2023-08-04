import React from 'react';
import {Button, Alert, View, Text, Image, ScrollView, TextInput, TouchableWithoutFeedback} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{ 
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'magenta',}}>Florencia la mas hermosa</Text>
      <View>
        <Text style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: 'magenta'
        }}>La mejor kinesiologa</Text>
        </View>
        <View>
        <TouchableWithoutFeedback onPress={() => Alert.alert('MIAU!!')}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{
            width: 'auto', height: 400, margin: 5,}}
        />
      </TouchableWithoutFeedback>
      </View>
      <Button title='holis' onPress={() => Alert.alert('Buenas noches')}></Button>
      <TextInput
        style={{
          justifyContent:'center',
          textAlign: 'center',
          fontSize: 18,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="I miss you so much my baby!"
      />
    </ScrollView>
  );
};

export default App;
