import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="click me!" />
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
