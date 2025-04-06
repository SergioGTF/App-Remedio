import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { calculateTimes } from '../utils/calculoHorarios'; // Importando a função utilitária

const AddMedicine = ({ navigation }) => {
    const [name, setName] = useState('');
    const [interval, setInterval] = useState(''); 
    const [startTime, setStartTime] = useState(''); 

    const handleAddMedicine = async () => {
        if (!name.trim() || !interval.trim() || !startTime.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
    
        const intervalInHours = parseInt(interval, 10);
        if (isNaN(intervalInHours) || intervalInHours <= 0) {
            Alert.alert('Erro', 'O intervalo deve ser um número maior que 0.');
            return;
        }
    
        try {
            const times = calculateTimes(startTime, intervalInHours); // Chamando a função utilitária
    
            if (times.length === 0) {
                Alert.alert('Erro', 'Não foi possível calcular os horários.');
                return;
            }
    
            const newMedicine = {
                name,
                times,
            };
    
            console.log('Medicamento a ser salvo:', newMedicine);
    
            const existingData = await AsyncStorage.getItem('medicines');
            const medicines = existingData ? JSON.parse(existingData) : [];
            medicines.push(newMedicine);
            await AsyncStorage.setItem('medicines', JSON.stringify(medicines));
    
            Alert.alert('Medicamento Adicionado!', `Horários calculados: ${times.join(', ')}`);
            navigation.goBack();
        } catch (error) {
            console.log('Erro ao salvar medicamento:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Medicamento:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Paracetamol"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Horário Inicial (HH:mm):</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 08:00"
                value={startTime}
                onChangeText={setStartTime}
            />
            <Text style={styles.label}>Intervalo entre doses (em horas):</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 6"
                keyboardType="numeric"
                value={interval}
                onChangeText={setInterval}
            />
            <Button title="Adicionar Medicamento" onPress={handleAddMedicine} />
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
        borderRadius: 5,
    },
});

export default AddMedicine;