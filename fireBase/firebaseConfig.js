// Импорт модулей Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, addDoc, getDoc, doc} from 'firebase/firestore';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCnKzLjHnlIrJVgKO6Cxryg4WQPlYHgzZE",
  authDomain: "diplom-project-backend.firebaseapp.com",
  projectId: "diplom-project-backend",
  storageBucket: "diplom-project-backend.appspot.com",
  messagingSenderId: "689872424166",
  appId: "1:689872424166:web:f2e10a2e3210a27fadff27",
  measurementId: "G-TJ7STL3TMP"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Унифицированные операции с Firestore
const FirebaseService = {


    //Регистрация
    async registerUser(formData) {
        const { login, password, name, surname, group_number } = formData;
        // Проверка уникальности логина
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('login', '==', login));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          throw new Error('Пользователь с таким логином уже существует');
        }
        // Сохранение пользователя в Firestore
        return addDoc(usersRef, {
            login,
            password, // Сохраняем пароль в открытом виде
            name,
            surname,
            group_number
        });
    },


    //Вход
    async userLogin(login, password) {

        // Запрашиваем коллекцию 'users' и ищем совпадение по логину и паролю
        const q = query(
            collection(db, 'users'),
            where('login', '==', login),
            where('password', '==', password)  // Без хеширования
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            throw new Error('Неверный логин или пароль');
        }

        // Получаем ID найденного документа
        const userDoc = querySnapshot.docs[0];
        const uid = userDoc.id;

        // Возвращаем ID документа (UID пользователя)
        return uid;

    },


    // Получить информацию профиля по UID
    async getUserProfile(uid) {
        // Получаем документ пользователя по его UID
        const userRef = doc(db, 'users', uid);
        const userSnap = await getDoc(userRef);

        if (!userSnap.exists()) {
            throw new Error('Пользователь не найден');
        }

        // Возвращаем данные пользователя
        return userSnap.data();
    },
    
   // Отметка тренировки
    async addTraining(uid) {
        // Ссылка на коллекцию 'training'
        const trainingRef = collection(db, 'training');

        // Получаем текущую дату
        const currentDate = new Date();

        // Форматируем дату как '12 мая 2024'
        const formattedDate = currentDate.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

        // Документ с полями: student_id, hrs_count и date
        const trainingData = {
            student_id: uid,
            hrs_count: 2, // По умолчанию 2 часа
            date: formattedDate // Устанавливаем текущую дату
        };

        // Добавляем документ в Firestore
        return addDoc(trainingRef, trainingData);
    },


    // Получить документ из training по uid
    async getTrainingByUser(uid) {
        // Ссылка на коллекцию 'training'
        const trainingRef = collection(db, 'training');
        
        // Создаем запрос с фильтром по 'student_id'
        const q = query(trainingRef, where('student_id', '==', uid));
        
        // Выполняем запрос
        const querySnapshot = await getDocs(q);

        // Если документы не найдены, выбрасываем ошибку
        if (querySnapshot.empty) {
            throw new Error('Тренировки не найдены для данного пользователя');
        }

        // Возвращаем массив документов (если их несколько)
        return querySnapshot.docs.map(doc => ({
            id: doc.id,      // ID документа
            ...doc.data()    // Данные документа
        }));
    },

    // Создание события
    async createEvent(eventData) {
        const eventsRef = collection(db, 'events');
        return addDoc(eventsRef, {
            ...eventData
        });
    },

    async fetchAllEvents() {
        const eventsCollection = collection(db, 'events');
        const querySnapshot = await getDocs(eventsCollection);

        let eventsArray = [];
        querySnapshot.forEach((doc) => {
            eventsArray.push({ id: doc.id, ...doc.data() });
        });
        return eventsArray;
    }


};

export default FirebaseService;