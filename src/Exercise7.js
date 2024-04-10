import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";


const mystyle=StyleSheet.create({
    container:{
        padding:20,
    },
    label:{
        fontSize:20,
        fontWeight:"bold",
    },
    input:{
        marginTop:10,
        backgroundColor:"rba(0,0,0,0.1)",
        padding:10,
        borderRadius:5,
    },
});

const Exercise7=()=>{

    const [job, setJob]= useState("");

    return(
        <View style={mystyle.container}>
            <Text style={mystyle.label}>
                What is your job?
            </Text>
            <TextInput
                style={mystyle.input}
                placeholder="Worker"
                placeholderTextColor="rgba(241, 182, 212, 0.8)"
                onChangeText={(text) => setJob(text)}
                value={job}
            />
            <Button
                title="Submit"
                onPress={()=>{
                    Alert.alert(`Your ${job}'s job is great ^.^`);
                    setJob("");
                }}
            />
        </View>
    );
};

export default Exercise7;