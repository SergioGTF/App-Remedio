import React, { useContext } from 'react'; 
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../context/AuthContext';

const Home = ({ navigation }) => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        Alert.alert(
            'Confirmar Logout',
            'Você tem certeza que deseja sair?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Sair',
                    onPress: async () => {
                        try {
                            await logout();
                            navigation.replace('AuthStack', { screen: 'Login' });
                        } catch (error) {
                            console.log('Erro ao realizar logout:', error);
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao App Remédio!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AddMedicine')}
                >
                    <MaterialIcons name="add-circle-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Adicionar Medicamento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('MedicineList')}
                >
                    <MaterialIcons name="list" size={24} color="white" />
                    <Text style={styles.buttonText}>Listar Medicamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <MaterialIcons name="logout" size={24} color="white" />
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

export default Home;