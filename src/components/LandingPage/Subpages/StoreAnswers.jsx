import { collection, addDoc } from 'firebase/firestore';
import { DB } from '../../../Firebase.js';

const StoreAnswers = async (answers) => {
    try {
        const dataToAdd = {};

        for (let i = 0; i < 36; i++) {
            dataToAdd[`answer${i + 1}`] = answers[i];
        }

        await addDoc(collection(DB, 'answers'), dataToAdd);

        console.log('Documents added successfully :', answers);
    } catch (error) {
        console.log(error.message);
    }
}

export default StoreAnswers;