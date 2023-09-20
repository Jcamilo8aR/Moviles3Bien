import { StyleSheet, Text, View } from 'react-native';
import { Formulario } from './Components/Formulario';
import { styles } from './assets/Styles/styleprincipales';
import { estilos } from './assets/Styles/styles';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

export default function App() {
  return (
    <View style={estilos.container1}>

    <Text style={styles.texts}>MOMENTO 1</Text>

      <Formulario />

      <View style={estilos.footer}>
        <Footer message="Desarrollado por: Juan Camilo Ochoa"/>
      </View>
    </View>

    
  );
}


