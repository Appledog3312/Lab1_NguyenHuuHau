import { StyleSheet, Text, View } from "react-native";

const Exercise1=() =>{

    return(
        <View style={mystyle.container}>
            <Text style={mystyle.TextStyle}>Hello Myfriends</Text>
        </View>
    )
};
const mystyle=StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'

    },
    TextStyle:{
        color:'red',
        justifyContent:'space-between'
    }

    
}

)

export default Exercise1;
