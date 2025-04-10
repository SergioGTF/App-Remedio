import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

const ListaMedicamentos = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            const data = await AsyncStorage.getItem('medicines');
            if (data) setMedicines(JSON.parse(data));
        };
        fetchMedicines();
    }, []);

    const deleteMedicine = async (index) => {
        Alert.alert(
            'Confirmar Exclusão',
            'Você tem certeza que deseja excluir este medicamento?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Excluir',
                    onPress: async () => {
                        const updatedMedicines = medicines.filter((_, i) => i !== index);
                        setMedicines(updatedMedicines);
                        await AsyncStorage.setItem('medicines', JSON.stringify(updatedMedicines));
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const renderItem = ({ item, index }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.times}>
                Horários: {item.times.join(', ')}
            </Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteMedicine(index)}
            >
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Lista de Medicamentos</Text>
            <FlatList
                data={medicines}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    times: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    deleteButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
});

export default ListaMedicamentos;