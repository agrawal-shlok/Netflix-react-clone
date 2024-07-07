import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore,collection } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDY8oi_WhRSaxs1SYUzQKmxJBDc6T9916c",
  authDomain: "netflix-clone-7d370.firebaseapp.com",
  projectId: "netflix-clone-7d370",
  storageBucket: "netflix-clone-7d370.appspot.com",
  messagingSenderId: "33916325925",
  appId: "1:33916325925:web:7c89ff4e4564c1e05f2fcc"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app);

const signup = async(name,email,password) =>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await addDoc(collection(db,"user"), {
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const login = async(email,password) =>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () =>{
    signOut(auth)
}


export {auth,db,login,signup,logout}