import { Button, View ,Alert, TouchableOpacity, Text} from "react-native"
import React from "react";


const Exercise3 = () => {
  return (
    <View>
      <Button title="Say hello" onPress={() => Alert.alert("hello")} />
      <Button
        title="Say goodbye"
        onPress={() => Alert.alert("goodbye")}
        style={{ backgroundColor: "#fff" }} 
      />
    </View>
  );
};

export default Exercise3;


const button=(props)=>(
    <TouchableOpacity
        onPress={props.onPress}
        style={{
            backgroundColor:'yellow',
            alignSelf:'center',
            padding:10,
            margin:20,
            ...props.buttonStyle,
        }}>
            <Text style={{color:"red"}}>{props.text}</Text>

    </TouchableOpacity>
)