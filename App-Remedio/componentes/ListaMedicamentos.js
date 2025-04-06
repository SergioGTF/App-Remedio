import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const MedicineList = () => {
    const [medicines, setMedicines] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            const fetchMedicines = async () => {
                try {
                    const data = await AsyncStorage.getItem('medicines');
                    if (data) {
                        const parsedData = JSON.parse(data);
                        if (Array.isArray(parsedData)) {
                            setMedicines(parsedData);
                        } else {
                            console.log('Dados inválidos no AsyncStorage');
                            setMedicines([]);
                        }
                    }
                } catch (error) {
                    console.log('Erro ao buscar medicamentos:', error);
                    setMedicines([]);
                }
            };
    
            fetchMedicines();
        }, [])
    );

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.times}>
                Horários: {Array.isArray(item.times) ? item.times.join(', ') : 'Nenhum horário disponível'}
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Medicamentos</Text>
            <FlatList
                data={medicines}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 16,
        color: '#555',
    },
});

export default MedicineList;