import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import FirebaseService from '../../fireBase/firebaseConfig'; // путь подстрой под себя

const Events = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [date, setDate] = useState(getTodayDate());
  const [time, setTime] = useState(getCurrentTime());
  const [loading, setLoading] = useState(false);

  function getTodayDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10); // формат YYYY-MM-DD
  }

  function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // формат HH:MM
  }

  const handleAddEvent = async () => {
    if (!title || !description || !location || !organizer || !date || !time) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля.');
      return;
    }

    setLoading(true);

    try {
      await FirebaseService.createEvent({
        title,
        description,
        location,
        organizer,
        date,
        time
      });

      Alert.alert('Готово', 'Событие успешно создано.');
      setTitle('');
      setDescription('');
      setLocation('');
      setOrganizer('');
      setDate(getTodayDate());
      setTime(getCurrentTime());
    } catch (error) {
      console.error(error);
      Alert.alert('Ошибка', 'Не удалось создать событие.');
    } finally {
      setLoading(false);
    }
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Создание события</Text>

      <Text style={styles.label}>Заголовок события</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Введите заголовок" />

      <Text style={styles.label}>Описание события</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Введите описание" multiline />

      <Text style={styles.label}>Место проведения</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Введите место" />

      <Text style={styles.label}>ФИО организатора</Text>
      <TextInput style={styles.input} value={organizer} onChangeText={setOrganizer} placeholder="Введите ФИО" />

      <Text style={styles.label}>Дата (ГГГГ-ММ-ДД)</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="например, 2025-06-12" />

      <Text style={styles.label}>Время (ЧЧ:ММ)</Text>
      <TextInput style={styles.input} value={time} onChangeText={setTime} placeholder="например, 14:30" />

      <View style={{ marginTop: 20 }}>
        <Button color='#000' title={loading ? "Добавление..." : "Добавить"} onPress={handleAddEvent} disabled={loading} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    padding: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  title:{
    fontSize:18,
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginTop: 4,
    borderRadius: 4
  },
});

export default Events;
