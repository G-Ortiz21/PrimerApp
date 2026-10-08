import { router } from 'expo-router';
import { Button, Text, View} from 'react-native';


export default function MensajeScreen(){
    return(
        <View>
            <Text>Esta es la nueva página de Mensajes.</Text>
            <Button title="Volver" onPress={() => router.back()} />
        </View>
    );
}
