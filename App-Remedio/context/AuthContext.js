import React, { createContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
        try {
            const username = await SecureStore.getItemAsync('username');
            if (username) setUser(username);
        } catch (error) {
            console.log('Erro ao verificar autenticação:', error);
        } finally {
            setIsLoading(false);
        }
        };

        checkAuth();
    }, []);

    const login = async (username) => {
        await SecureStore.setItemAsync('username', username);
        setUser(username);
    };

    const logout = async () => {
        try {
            await SecureStore.deleteItemAsync('username');
            setUser(null); 
        } catch (error) {
            console.log('Erro ao realizar logout:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};