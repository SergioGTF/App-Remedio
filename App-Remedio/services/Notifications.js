import * as Notifications from 'expo-notifications';

export const scheduleNotifications = async (medicine) => {
    await Notifications.requestPermissionsAsync();
    
    medicine.times.forEach(time => {
        const [hours, minutes] = time.split(':');
        
        Notifications.scheduleNotificationAsync({
        content: {
            title: `Hora do ${medicine.name}`,
            body: 'Não esqueça de tomar seu medicamento',
        },
        trigger: {
            hour: parseInt(hours),
            minute: parseInt(minutes),
            repeats: true,
        },
        });
    });
};