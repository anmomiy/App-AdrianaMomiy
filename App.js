import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Agrega un elemento'/>
        <Button color='#BC9EC1' title='Agregar'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  input:{
    borderColor: "#BC9EC1",
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 20,
    color: '#212121',
    width: '75%',
  },
});
