import react from "react";
import { View, Text} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { styles } from "../assets/Styles/styleprincipales";
import { estilos } from "../assets/Styles/styles";


export function Formulario2() {
    const estudiantes = [{
        identificacion:"99",
        nombre:"Camilo",
        asignatura:"Moviles",
        nota1:3,
        nota2:3,
        nota3:3,
        resultado:3,
        observacion:"Materia Ganada"
    },
]
    const [identificacion,setidentificacion] = react.useState("")
    const [nombre,setNombre] = react.useState("")
    const [asignatura, setAsignatura] = react.useState("")
    const [nota1,setNota1] = react.useState(0)
    const [nota2,setNota2] = react.useState(0)
    const [nota3,setNota3] = react.useState(0)
    const [resultado,setResultado] = react.useState(0)
    const [anotacion,setAnotacion] =react.useState("Obervación:")
    const [resultadosBusqueda, setResultadosBusqueda] = react.useState([])

    console.log(estudiantes);

    const buscarEstudiantes = () => {
        // const resultado = estudiantes.map(function(){
        //     return (estudiantes)
        // })

        // resultado.forEach(function(){
        //     setNombre(nombre)
        // })

        const resultados = estudiantes.find(function(estudiante){
            return(estudiante.identificacion == identificacion && estudiante.asignatura == asignatura)
        })

        setidentificacion(resultados.identificacion)
        setNombre(resultados.nombre)
        setAsignatura(resultados.asignatura)
        setNota1(resultados.nota1)
        setNota2(resultados.nota2)
        setNota3(resultados.nota3)
        setResultado(resultados.resultado)
        setAnotacion(resultados.observacion)
    };

    

    const calcular = () => {
        var result= setResultado((nota1*.30)+(nota2*.35)+(nota3*.35))
        result = resultado.toFixed(2)
        if (resultado >= 3) {
            <Text style={{color:"green"}}>Materia Aprobada</Text>
            let test=("aprobado")
            setAnotacion(test)
            console.log("Materia Aprobada");
         }if (resultado >2 && resultado<3) {
                <Text style={{color:"green"}}>Materia Habilitada</Text>
                let test=("asd")
                setAnotacion(test)
                console.log("Materia habilitada");
            
         }if(resultado < 2){
            <Text style={{color:"green"}}>Materia no aprobada</Text>
            let test=("mp")
            setAnotacion(test)
            console.log("Materia no aprobada");
            
         }
    }     


    const cambiarAnotacion =() => {
        if (result > 3) {
            <Text style={{color:"green"}}>Materia Aprobada</Text>
            setAnotacion("Materia Aprobada")
        //    console.log("Materia aprobada");
            
         }if (result >2 && result<3) {
                <Text style={{color:"green"}}>Materia Habilitada</Text>
                setAnotacion("Materia Habilitada")
                // console.log("Materia habilitada");
            
         }if(result < 2){
            <Text style={{color:"green"}}>Materia no aprobada</Text>
            setAnotacion("yourmom")
        //    console.log("Materia no aprobada");
            
         }
    }

    const guardarEstudiante = () => {
        if(identificacion.length > 0 && nombre.length > 0 && asignatura.length > 0 && nota1.length > 0 && nota2.length > 0 && nota3.length){
            const nuevoEstudiante = [{
                identificacion: parseFloat(identificacion),
                nombre: nombre,
                asignatura: asignatura,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                resultado: resultado,
                observacion: anotacion
              }]
          estudiantes.push(nuevoEstudiante)
        }else{
            alert("Debe llenar todos los campos para continuar")
        }



        

    console.log("Estudiantes:", estudiantes);
    setidentificacion();
    setNombre("");
    setAsignatura("");
    setNota1();
    setNota2();
    setNota3();
    setResultado(0); 
    };
    
    
    const vacio = () =>{
        if(identificacion.length > 0 && nombre.length > 0 && asignatura.length > 0 && nota1.length > 0 && nota2.length > 0 && nota3.length){
            if(nota1 >0 && nota1 <= 5 && nota2 >0 && nota2 <= 5 && nota3 >0 && nota3 <= 5){
                calcular()
            }else{
                alert("Las notas deben estar entre 0 y 5")
            }
        }else{
            alert("Debe llenar todos los campos para continuar")
        }
    }

    return(

        
        <View style={estilos.View}>  

        {/* ROW 1 */}
        <View View style={{flexDirection:'row'}}>
          <TextInput label="Identificación"
          placeholder="Identificación"
          value={identificacion}
          onChange={identificacion => setidentificacion(identificacion.target.value)}
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
         

         {/* ROW 2 */}
        <View style={{flexDirection:'row'}}>
            <TextInput label="Asignatura"
                placeholder="Asignatura"
                value={asignatura}
                onChangeText={asignatura => setAsignatura(asignatura)}
                style={estilos.tInputs}
                >
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
    

        {/* ROW 3 */}
        <View style={{flexDirection:'row'}}>
            <TextInput label="Momento 2"
                placeholder="Momento 2"
                keyboardType="numeric"
                value={nota2}
                onChangeText={nota2 => setNota2(nota2)}
                style={estilos.tInputs}
                >
            </TextInput>
    
            <TextInput label="Momento 3"
                placeholder="Momento 3"
                keyboardType="numeric"
                value={nota3}
                onChangeText={nota3 => setNota3(nota3)}
                style={estilos.tInputs}>
            </TextInput>
        </View>
    
    
        {/* RESULTADO*/}
        <View style={{flexDirection:'row'}}>
          <TextInput label=""
            style={estilos.tInputs2}
            value={parseFloat(resultado)}
            >
          </TextInput>
        </View>


        
        <View style={{flexDirection:'row'}}>
          <TextInput label=""
            style={estilos.tInputs2}
            value={anotacion}
            >
          </TextInput>
        </View> 
    
        {/* <Tconsole.log(estudTcones);

        {/* BUTTONS */}
        <View style={{flexDirection:'row'}}>
            <Button
                style={estilos.button}
                textColor="white"
                onPress={()=>vacio()
                }>
                Calcular
            </Button>
    
            <Button
                style={estilos.button}
                textColor="white"
                onPress={guardarEstudiante}>
                    Guardar
            </Button>
    
            <Button
                style={estilos.button}
                textColor="white"
                onPress= {()=> {
                    setidentificacion('')
                    setNombre('')
                    setAsignatura('')
                    setNota1(0)
                    setNota2(0)
                    setNota3(0)
                    setResultado(0)
                    setAnotacion("Obervación:")
                }}>
                    Limpiar
            </Button>
    
            <Button
                style={estilos.button}
                textColor="white"
                onPress={buscarEstudiantes}>
                    Buscar
            </Button>
        </View>
    </View>
    


    )




    //FIN FUNCION PRINCIPAL
}