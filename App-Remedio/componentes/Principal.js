import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Bem-vindo ao App Remédio!</Text>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Adicionar Medicamento" onPress={() => navigation.navigate('AddMedicine')} />
            </View>
            <View style={styles.button}>
            <Button title="Listar Medicamentos" onPress={() => navigation.navigate('MedicineList')} />
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
    },
    button: {
        marginBottom: 15,
    },
});

export default Home;