import React,{useState} from "react";
import { Text, View, StyleSheet,  Alert,  TouchableHighlight } from "react-native";

const Exercise2=() => {

    const onPress =()=>
    {
        Alert.alert('Wellcome you')
    }
    return(           
            <View style={{}}  >
                <TouchableHighlight
                    style = {styles.button}
                    onPress={onPress}
                >
                    <Text style ={styles.textbuton}>
                        Press Me
                    </Text>
                </TouchableHighlight>
            </View>
    )
}
export default Exercise2;

const styles = StyleSheet.create({
    container: {
     justifyContent:'center',
     alignSelf:'center',
     borderRadius:10,
    },
    button: {
        padding: 10,
        backgroundColor:'pink',
        alignItems:"center",
        
    },
    textbuton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
});