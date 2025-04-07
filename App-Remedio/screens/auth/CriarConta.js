import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { MaterialIcons } from '@expo/vector-icons';

const CriarConta = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if (!username.trim() || !password.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            await SecureStore.setItemAsync('username', username);
            await SecureStore.setItemAsync('password', password);
            Alert.alert('Cadastro bem-sucedido!', 'Agora você pode fazer login.');
            navigation.replace('Login');
        } catch (error) {
            console.log('Erro ao criar conta:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro</Text>
            <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <MaterialIcons name="lock" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.loginButton]}
                onPress={() => navigation.replace('Login')}
            >
                <Text style={styles.buttonText}>Voltar para Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
    button: {
        backgroundColor: '#28A745',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: '#007BFF',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CriarConta;