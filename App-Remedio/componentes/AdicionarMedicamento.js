import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Audio } from 'expo-av';

const AddMedicine = ({ navigation }) => {
    const [name, setName] = useState('');
    const [time, setTime] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const playAlarm = async () => {
        try {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/alarm.mp3') 
        );
        await sound.playAsync();
        } catch (error) {
        console.log('Erro ao reproduzir o som:', error);
        }
    };

    const handleAddMedicine = () => {
        console.log(`Medicamento: ${name}, Horário: ${time.toLocaleTimeString()}`);
        playAlarm(); 
        navigation.goBack();
    };

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowPicker(Platform.OS === 'ios'); 
        setTime(currentTime);
    };

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Nome do Medicamento:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Horário:</Text>
        <Button title="Selecionar Horário" onPress={() => setShowPicker(true)} />
        <Text style={styles.selectedTime}>Horário Selecionado: {time.toLocaleTimeString()}</Text>
        {showPicker && (
            <DateTimePicker
            value={time}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChangeTime}
            />
        )}
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
    selectedTime: {
        fontSize: 16,
        marginVertical: 10,
        color: 'blue',
    },
});

export default AddMedicine;