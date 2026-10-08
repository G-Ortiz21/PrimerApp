import { router } from 'expo-router';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function MensajeScreen(){
    return(
        <View>
            <Text>Esta es la nueva página de formulario.</Text>
            <Button title="Volver" onPress={() => router.back()} />
            <TextInput style={styles.input} placeholder="Ingrese su nombre" />
            <TextInput style={styles.input} placeholder="Ingrese su correo electrónico" />
            <TextInput style={styles.input} placeholder="Ingrese animal favorito" />

        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 40, 
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
}); 