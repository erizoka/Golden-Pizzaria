import React, { useContext, useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";
import { api } from "../../services/api";

export default function Dashboard(){
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const { signOut } = useContext(AuthContext);
    const [number, setNumber] = useState('');

    async function openOrder(){
        if(number === ''){
            return;
        }

        const response = await api.post('/order', {
            table: Number(number)
        });

        navigation.navigate('Order', { number: number, order_id: response.data.id })
        setNumber('');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>

            <TextInput
            placeholder='Numero da mesa'
            placeholderTextColor='#f2d9d8'
            style={styles.input}
            keyboardType="numeric"
            value={number}
            onChangeText={setNumber}
            />

            <TouchableOpacity style={styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir mesa</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#211A1D'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 24
    },
    input:{
        width: '90%',
        height: 60,
        backgroundColor: '#141012',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 20,
        color: '#f2d9d8'
    },
    button:{
        width: '90%',
        height: 40,
        backgroundColor: '#C9FBD6',
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#211A1D',
        fontWeight: 'bold'
    }
})