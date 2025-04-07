export const validateLogin = (username, password) => {
    const errors = {};
        if (!username.trim()) errors.username = 'Usuário obrigatório';
        if (!password.trim()) errors.password = 'Senha obrigatória';
    return errors;
};

    export const validateMedicine = (name, startTime, interval) => {
        const errors = {};
        if (!name.trim()) errors.name = 'Nome é obrigatório';
        if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(startTime)) {
            errors.startTime = 'Formato inválido (HH:mm)';
        }
        if (isNaN(interval) || interval <= 0) {
            errors.interval = 'Intervalo deve ser > 0';
        }
    return errors;
};