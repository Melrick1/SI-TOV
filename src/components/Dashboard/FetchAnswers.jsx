import { collection, getDocs } from 'firebase/firestore';
import { DB } from '../../Firebase.js';

const FetchAnswers = async () => {
    const answersLists = Array.from({ length: 36 }, () => []);

    const querySnapshot = await getDocs(collection(DB, 'answers'));

    querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Extract answers from each document and add them to respective lists
        for (let i = 0; i < 36; i++) {
            answersLists[i].push(data[`answer${i + 1}`]);
        }
    });

    return answersLists;
    //answersLists = [[answers1], [answers2], ...,[answers36]]
};

export default FetchAnswers