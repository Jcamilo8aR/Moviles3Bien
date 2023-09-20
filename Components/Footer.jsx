import { View, Text} from 'react-native';
import { estilos } from '../assets/Styles/styles';

export default function Footer(props){
    return(

        <Text style={estilos.footer}>
            {props.message}
        </Text>

    );
}