import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { calculateTimes } from '../utils/CalcTime';
import { ToastAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddMedicine = ({ navigation }) => {
    const [name, setName] = useState('');
    const [interval, setInterval] = useState(''); 
    const [startTime, setStartTime] = useState(''); 

    const handleAddMedicine = async () => {
        if (!name.trim() || !interval.trim() || !startTime.trim()) {
            ToastAndroid.show('Por favor, preencha todos os campos.', ToastAndroid.SHORT);
            return;
        }
    
        const intervalInHours = parseInt(interval, 10);
        if (isNaN(intervalInHours) || intervalInHours <= 0) {
            ToastAndroid.show('O intervalo deve ser um número maior que 0.', ToastAndroid.SHORT);
            return;
        }
    
        try {
            const times = calculateTimes(startTime, intervalInHours);
    
            if (times.length === 0) {
                ToastAndroid.show('Não foi possível calcular os horários.', ToastAndroid.SHORT);
                return;
            }
    
            const newMedicine = { name, times };
            const existingData = await AsyncStorage.getItem('medicines');
            const medicines = existingData ? JSON.parse(existingData) : [];
            medicines.push(newMedicine);
            await AsyncStorage.setItem('medicines', JSON.stringify(medicines));
    
            ToastAndroid.show('Medicamento adicionado com sucesso!', ToastAndroid.SHORT);
            navigation.goBack();
        } catch (error) {
            console.log('Erro ao salvar medicamento:', error);
            ToastAndroid.show('Erro ao salvar medicamento.', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <MaterialIcons name="medication" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Paracetamol"
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons name="schedule" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 08:00"
                    value={startTime}
                    onChangeText={setStartTime}
                />
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons name="timer" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 6"
                    keyboardType="numeric"
                    value={interval}
                    onChangeText={setInterval}
                />
            </View>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
    },
});

export default AddMedicine;