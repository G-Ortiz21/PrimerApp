//Boton personalizado para reutilizar
import {StyleSheet, Text, TouchableOpacity} from "react-native";

// interface  es un contrato que consiste en un conjunto de propiedades que un objeto debe cumplir
//type es una forma de definir un tipo de dato en TypeScript, que puede ser un objeto, una función, un array, etc.

type SimpleTouchableButtonProps = {
    title: string;
    onPress: () => void;
};

export default function SimpleTouchableOpacity({
    //Destructuracion de objeto para obtener las propiedades title y onPress del objeto SimpleTouchableOpacity
    title, 
    onPress
}: SimpleTouchableButtonProps) 
{
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 12, //margen externo, separar el boton de lo que esta arriba
        backgroundColor: '#ee49a9', // color fondo del boton
        paddingVertical: 10, //margen interno, separar parte de arriba y abajo del texto del boton
        paddingHorizontal: 16, //margen interno, separar parte de los lados del texto del boton
        borderRadius:8 // redondear las esquinas del boton
    },
    text: {
        color: '#050505', // color del texto del boton
        fontSize: 16, // tamaño del texto del boton
        fontWeight: '600', // grosor del texto del boton
    }
})