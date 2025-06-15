import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import FirebaseService from '../../fireBase/firebaseConfig';

const Events = () => {
  const [events, setEvents] = useState([]);                   // Массив событий
  const [expandedEventIds, setExpandedEventIds] = useState({}); // Идентификаторы раскрытых событий

  // Загрузка всех событий при монтировании компонента
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await FirebaseService.fetchAllEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        console.error("Ошибка при загрузке событий: ", err.message);
      }
    };

    fetchEvents();
  }, []);

  // Обработчик открытия события
  const toggleEventExpand = (eventId) => {
    setExpandedEventIds(prevState => ({
      ...prevState,
      [eventId]: !prevState[eventId]
    }));
  };

  // Рендеринг спискового представления событий
  const renderEventItem = ({ item }) => {
    const isExpanded = expandedEventIds[item.id]; // true, если событие раскрыто

    return (
      <View style={styles.eventItem}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        {!isExpanded && (                 // Показывать только кнопку "Подробнее", пока событие свернуто
          <TouchableOpacity 
            onPress={() => toggleEventExpand(item.id)}
            style={styles.eventDetails} 
          >
            <Text>Подробности</Text>
          </TouchableOpacity>
        )}
        {isExpanded && (                  // Раскрываем остальные детали, если событие развернуто
          <>
            <Text style={styles.eventInfo}>Дата и время: {item.time}, {item.date}</Text>
            <Text style={styles.eventLocation}>Место: {item.location}</Text>
            <Text style={styles.eventDescription}>Подробности: {item.description}</Text>
            <Text style={styles.eventOrganizer}>Организатор: {item.organizer}</Text>
            <TouchableOpacity
                style={styles.eventDetails}
                onPress={() => toggleEventExpand(item.id)}
            >
                <Text>
                    Скрыть подробности
                </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(230,230,230)',
  },
  eventItem: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    gap:10,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  eventOrganizer: {
    fontSize: 14,
    color: '#666',
  },
  eventDetails:{
    marginTop:10,
    padding:10,
    alignItems:'center',
    borderWidth:1,
    borderRadius:15,
  }
});

export default Events;