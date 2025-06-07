import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import style from '../styles/Events';

// Пример данных событий
const events = [
  {
    id: 1,
    title: 'Соревнование по волейболу',
    description: '14 декабря',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Турнир по шашкам',
    description: '15 декабря',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Турнир по футболу',
    description: '16 декабря',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обработчик свайпа
  const onSwiped = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Swiper
        cards={events}
        renderCard={(event) => (
          <View style={styles.card}>
            <Image source={{ uri: event.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.description}</Text>
          </View>
        )}
        onSwiped={onSwiped}
        onSwipedAll={() => console.log('Все карточки были свайпнуты!')}
        cardIndex={currentIndex}
        backgroundColor={'#f2f2f2'}
        stackSize={3} // Количество карточек на экране
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width:300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
