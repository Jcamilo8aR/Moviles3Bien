import react from "react";
import { View, Text} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../assets/Styles/styleprincipales";
import { estilos } from "../assets/Styles/styles";

export function Formulario() {
    const [estudiantes, setEstudiantes] = react.useState([]);
    const [documento,setDocumento] = react.useState("")
    const [nombre,setNombre] = react.useState("")
    const [asignatura, setAsignatura] = react.useState("")
    const [nota1,setNota1] = react.useState("")
    const [nota2,setNota2] = react.useState("")
    const [nota3,setNota3] = react.useState("")
    const [resultado,setResultado] = react.useState(0)
    const [resultadosBusqueda, setResultadosBusqueda] = react.useState([])


  const buscarEstudiantes = () => {
    const resultados = estudiantes.filter((estudiante) => {

      return (
        estudiante.nombre.includes(nombre) &&
        estudiante.asignatura.includes(asignatura)
      );
    });
    setResultadosBusqueda(resultados);
};

    const calcular = () => {
    
     var result= setResultado(parseFloat(nota1*.30)+parseFloat(nota2*.35)+parseFloat(nota3*.35))
     let color = "gray"; 

     if (resultado > 3) {
        color = "green";
        console.log("Materia aprobada");
      }else if (resultado >2 && resultado<2.94) {
        color = "orange";
        console.log("Materia habilitada");
      }
      else  {
        color = "red";
        console.log("Materia no aprobada");
      }
        
}

    
    const guardarEstudiante = () => {
        
        
        const nuevoEstudiante = {
          documento: documento,
          nombre: nombre,
          asignatura: asignatura,
          nota1: parseFloat(nota1),
          nota2: parseFloat(nota2),
          nota3: parseFloat(nota3),
        };

    setEstudiantes([...estudiantes, nuevoEstudiante]);

    console.log("Estudiantes:", estudiantes);

    setDocumento("");
    setNombre("");
    setAsignatura("");
    setNota1("");
    setNota2("");
    setNota3("");
    setResultado(0);

    
  };
    
  return (

    
    
    <View style={estilos.View}>  
    <View View style={{flexDirection:'row'}}>
      <TextInput label="Identificación"
      placeholder="Identificación"
      value={documento}
      onChange={documento => setDocumento(documento.target.value)}
      style={estilos.tInputs}
      >
      </TextInput>

      <TextInput label="Nombre Completo"
      placeholder="Nombre Completo"
      value={nombre}
      onChangeText={nombre => setNombre(nombre)}
      style={estilos.tInputs}>
      </TextInput>

      
      </View>
     
    <View style={{flexDirection:'row'}}>


    <TextInput label="Asignatura"
        placeholder="Asignatura"
        value={asignatura}
        onChangeText={asignatura => setAsignatura(asignatura)}
        style={estilos.tInputs}>
        </TextInput>

        
        <TextInput label="Momento 1"
        placeholder="Momento 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={nota1 => setNota1(nota1)}
        style={estilos.tInputs}
        >
      </TextInput>
    </View>

    <View style={{flexDirection:'row'}}>


     <TextInput label="Momento 2"
          placeholder="Momento 2"
          keyboardType="numeric"
          value={nota2}
          onChangeText={nota2 => setNota2(nota2)}
          style={estilos.tInputs}>
        </TextInput>

      <TextInput label="Momento 3"
        placeholder="Momento 3"
        keyboardType="numeric"
        value={nota3}
        onChangeText={nota3 => setNota3(nota3)}
        style={estilos.tInputs}>
      </TextInput>
    </View>


  

    <View style={{flexDirection:'row'}}>
      <TextInput label=""
        style={estilos.tInputs2}
        value={parseFloat(resultado)}
        >
      </TextInput>
    </View>


      <View style={{flexDirection:'row'}}>
      <Button
        style={estilos.button}
        textColor="white"
        onPress={()=>calcular()
        }>
            Calcular
        </Button>

        <Button
        style={estilos.button}
        textColor="white"
        onPress={() => guardarEstudiante()}>
            Guardar
        </Button>

        <Button
        style={estilos.button}
        textColor="white"
        onPress= {()=> {
            setDocumento('')
            setNombre('')
            setAsignatura('')
            setNota1('')
            setNota2('')
            setNota3('')
            setResultado(0)
        }}>
            Limpiar
        </Button>

        <Button
        style={estilos.button}
        textColor="white"
        onPress={() => buscarEstudiantes()}>
            Buscar
        </Button>
      </View>
    </View>


  );
}
            







