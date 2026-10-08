import { Text, View, StyleSheet, Image,  Button, Alert, TextInput } from 'react-native';
import SimpleTouchableButton from '@/components/simple-touchable-button';
import {router} from 'expo-router';

const App = () => {
  return (
    // {} función {{}} objeto
    <View style = {styles.container}>
      <Text style = {styles.tittle}>Hola Mundo</Text>
      <Image 
      source={require('../../assets/images/buho.jpg')}
      style={styles.image}
      />
      <Button 
        color = 'red'
        title="Presioname"
        onPress={() => Alert.alert('Hola EPN')}
      />
      <SimpleTouchableButton
        title="Touchable Reutilizable"
        onPress={() => Alert.alert('Hola desde TouchableOpacity')}
      />
      <SimpleTouchableButton
        title="Boton de navegación"
        onPress={() => router.push('/mensaje')}
      />
      <TextInput/>
        <SimpleTouchableButton
        title="Formulario"
        onPress={() => router.push('/formulario')}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#c5fdf1'
  },
  tittle: {
    fontSize: 50,
    color: '#621394'
  },
  image: {
    height: 250,
    width: 250
  },

})

export default App;
