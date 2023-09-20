import { View, Text, Image} from "react-native";



function Banner(props) {
    return (
      <Image 
      style={{width:'100%', height:'30%', resizeMode:'stretch'}}
        source={require(`../assets/img/${props.imgName}`)}
      />
    );
}

export default Banner;