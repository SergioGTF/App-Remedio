import { Alert } from 'react-native';

export const calculateTimes = (startTime, interval) => {
    const [startHour, startMinute] = startTime.split(':').map(Number);

    if (isNaN(startHour) || isNaN(startMinute) || startHour < 0 || startHour >= 24 || startMinute < 0 || startMinute >= 60) {
        Alert.alert('Erro', 'Horário inicial inválido. Use o formato HH:mm.');
        return [];
    }

    if (isNaN(interval) || interval <= 0) {
        Alert.alert('Erro', 'Intervalo inválido. Deve ser um número maior que 0.');
        return [];
    }

    const times = [];
    let currentHour = startHour;
    let currentMinute = startMinute;

    for (let i = 0; i < 24 / interval; i++) {
        const formattedTime = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;
        times.push(formattedTime);

        currentHour += interval;
        if (currentHour >= 24) {
            currentHour -= 24;
        }
    }

    return times;
};