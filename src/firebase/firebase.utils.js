import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const Config={
    apiKey: "AIzaSyDV-0OpF_WNRAtOTSJ0tfbYa4_M6XvJu9Q",

    authDomain: "crwn-db-da7f9.firebaseapp.com",

    projectId: "crwn-db-da7f9",

    storageBucket: "crwn-db-da7f9.appspot.com",

    messagingSenderId: "904668557605",

    appId: "1:904668557605:web:34643c9198d878ee972acc",

    measurementId: "G-R7YM6R8YTC"

};
export const createUserProfileDocument=async(userAuth, ...additionalData)=>{
    const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get();
    if(!snapShot.exists){
        const {displayName, email}=userAuth;
        const createdAt=new Date();
        try{
            userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    additionalData
                }
            )

        }
    catch(error){
        console.log('error creating user',error.message);
    }
    

    
    }

    return userRef;
}
firebase.initializeApp(Config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
 const provider=new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;