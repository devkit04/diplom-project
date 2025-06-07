import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import FirebaseService from '../../fireBase/firebaseConfig';

export default function App() {

    const [permission, requestPermission] = useCameraPermissions();

    const [isScanning, setIsScanning] = useState(false);

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
    }

    return (
        <View style={styles.container}>

              <CameraView 
                  style={styles.camera}
                  barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                  }}

                  onBarcodeScanned={async ({data}) => {
                    
                      if (isScanning) return; // Если уже в процессе обработки, игнорируем

                      setIsScanning(true); // Устанавливаем блокировку

                      Alert.alert('Студент', `2 часа зачислены`); // Показываем алерт

                      try {
                          const uid = data;
                          await FirebaseService.addTraining(uid);
                          console.log('Тренировка успешно добавлена');
                      } catch (error) {
                          console.error('Ошибка при добавлении тренировки:', error.message);
                      }

                      console.log(`ID студента = ${student_id}`);

                      setTimeout(() => {
                          setIsScanning(false); // Снимаем блокировку через 5 секунд
                      }, 5000);  

                      }

                  }

              >
                <Image style={styles.qrBorder} source={require('../../assets/qr_border_white.png')}/>
                <View style={styles.addTrainBtnWrap}>
                  <TouchableOpacity style={styles.addTrainBtn}>
                    <Text style={styles.addTrainBtn.text}>Отметить тренеровку</Text>
                  </TouchableOpacity>
                </View>
              </CameraView>

        </View>
    );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  qrBorder:{
    width:200,
    height:200,
  },
  camera: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  addTrainBtnWrap:{
    width:'100%',
    position:'absolute',
    alignItems:'center',
    bottom:90,
  },
  addTrainBtn:{
    backgroundColor:'#ff6704',
    width:'90%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    text:{
      color:'#fff',
      fontSize:14,
    }
  },

});
