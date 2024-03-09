import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { DB } from '../../Firebase';

const FetchUser = async () => {
  try {
    const auth = getAuth();
    let user = auth.currentUser;

    // Use a Promise to ensure the observer completes before continuing
    const userPromise = new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (updatedUser) => {
        user = updatedUser;
        unsubscribe();
        resolve();
      }, reject);
    });

    // Wait for the observer to complete before continuing
    await userPromise;

    if (user) {
      // If the user is signed in, fetch additional user data
      const userQuery = query(collection(DB, 'users'), where('uid', '==', user.uid));
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.size === 1) {
        const namaToko = querySnapshot.docs[0].data().NamaToko;
        return namaToko;
      } else {
        console.error('User data not found');
        throw new Error('User data not found');
      }
    } else {
      console.error('User not signed in');
      throw new Error('User not signed in');
    }
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
};

export default FetchUser;