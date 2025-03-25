import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddMedicine = ({ navigation }) => {
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [time, setTime] = useState('');

    const handleAddMedicine = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Nome do Medicamento:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Dosagem:</Text>
        <TextInput style={styles.input} value={dosage} onChangeText={setDosage} />
        <Text style={styles.label}>Horário:</Text>
        <TextInput style={styles.input} value={time} onChangeText={setTime} />
        <Button title="Adicionar" onPress={handleAddMedicine} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default AddMedicine;