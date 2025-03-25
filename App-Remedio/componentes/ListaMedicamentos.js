import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicineList = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Lista de Medicamentos</Text>
        {}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default MedicineList;