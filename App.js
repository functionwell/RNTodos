import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Platform,
} from 'react-native';
import {
  Header,
  Icon,
  Button,
} from 'react-native-elements';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={<TouchableOpacity><Icon name="menu" color="#fff"></Icon></TouchableOpacity>}
          centerComponent={{text:'RN Todos', style:{color:'#fff'}}}
          rightComponent={{icon:'home', color:'#fff'}}
        />
        <Button
          Component={TouchableHighlight}
          backgroundColor='green'
          onPress={()=>{Alert.alert('pressed')}} 
          title="open another component"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
