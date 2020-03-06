//App.js
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import registerForPushNotifications from './registerForPushNotifications';


const App = () => {
  useEffect(() => {
    registerForPushNotifications()
  }, []);
  return (
    <View style={styles.container}>
      <Text>Notifications Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;