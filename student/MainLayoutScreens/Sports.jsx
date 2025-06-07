import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const drop_menu = [
    { title: 'Баскетбол(юноши)', content: 'Тренер: Спиридонов В.Р.\n89841061300' },
    { title: 'Волейбол(юноши)', content: 'Тренер: Сыромятников А.Н.\n89142670338'},
    { title: 'Волейбол(девушки)', content: 'Тренер: Николаев Л.Ф.\n89644220655' },
    { title: 'Легкая атлетика', content: 'Тренер: Попова З.А.\n89142967684' },
    { title: 'Северное многоборье', content: 'Тренер: Никифоров А.Н.\n89142996463' },
    { title: 'Борьба "Хаспагай"', content: 'Тренер: Иванов В.Н.\n89644286474' },
    { title: 'Аэробика', content: 'Тренер: Митрофанова С.Е.\n89841092562' },
    { title: 'Настольный теннис', content: 'Тренер: Саввинов И.И.\n89141007875' },
    { title: 'ОФП', content:'Тренер: Евсеев М.Д\n89142268609' },
    { title: 'Смешанные единоборства MMA', content: 'Тренер: Струкин Н.Н.\n89841186146' },
];

export default function Sports() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

return (

    <ScrollView contentContainerStyle={styles.container}>

      {drop_menu.map((item, index) => (



        <View key={index} style={styles.section}>

          <TouchableOpacity onPress={() => toggleSection(index)} style={styles.header}>
            <Text style={styles.headerText}>{item.title}</Text>
          </TouchableOpacity>

          {openIndex === index && (
            <View style={styles.content}>
              <Text style={styles.contentText}>{item.content}</Text>
            </View>
          )}

        </View>



      ))}

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {backgroundColor:'rgb(230,230,230)',},
  section: {marginBottom:1},
  header: { padding: 20, backgroundColor: 'rgb(250,250,250  )',},
  headerText: { fontSize: 16, fontWeight: '400', color: '#333',},
  content: { padding: 15, backgroundColor: 'rgb(230,230,23o)',},
  contentText: { fontSize: 16, lineHeight:30, color: '#666' },
});
