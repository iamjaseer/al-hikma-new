'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


const UserContext = createContext({})



export const UserContextProvider = ({ children }) => {





    //FIREBASE DB
    const teachersCollectionRef = collection(db, "teachers",)


    const [loginUser, setLoginUser] = useState()
    const [profile, setProfile] = useState('')






    const auth = getAuth();


    const loadData = () => {
        return new Promise((resolve) => {
            // Simulating an asynchronous operation
            setTimeout(() => {

                onAuthStateChanged(auth, (user) => {
                    setLoginUser(user)

                    localStorage.setItem('userId', user.uid);

                });

                resolve();
            }, 1000);
        });
    };



    useEffect(() => {
        loadData().then(() => {

            const getTeachersList = async () => {

                //if (loginUser) {

                    const data = await getDocs(query(teachersCollectionRef, where('userId', '==', auth.currentUser.uid)))
                    //const data =  await  getDocs(query(teachersCollectionRef, where('userId', '==', 'zZfRakIcCBbEkW46oFNp1Xav17r2')))


                    const filteredData = data.docs.map((doc) => (
                        {
                            ...doc.data(),
                            id: doc.id
                        }
                    ))
                    setProfile(filteredData[0])
                }
           // }

            getTeachersList()

        });
    }, []);


//console.log(profile)

    return (
        <UserContext.Provider value={{ loginUser: [loginUser, setLoginUser], profile: [profile, setProfile] }}
        >
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => useContext(UserContext);





