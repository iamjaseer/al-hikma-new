'use client'
import Header from "../Components/Header"
import Punching from "../Components/Punching"
import { useUserContext } from "../Context/userContext";
import { useEffect, useState } from "react";
import { db } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Link from "next/link";
import ProtectedRoute from '../ProtectedRoute';




export default function AdminDashboard() {

  //LOCAL STORAGE
  const userId = localStorage.getItem('userId');
  
  //CONTEXT
 const { profile } = useUserContext()


  //FIREBASE DB
  const leaveCollectionRef = collection(db, "leave",)


  //STATES
  const [leave, setLeave] = useState([])





  useEffect(() => {

    //GT ALL leave
    const getLeaveList = async () => {

      try {

        const data = await getDocs(query(leaveCollectionRef, where('status', '==', 'pending')))

        const filteredData = data.docs.map((doc) => (
          {
            ...doc.data(),
            id: doc.id
          }
        ))
        setLeave(filteredData)

      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }

    getLeaveList()

  }, []);



 // console.log(profile[0].userId)

  return (
    <>


      <ProtectedRoute>
        <>
          <div className="bg-white-custom bg-primary h-screen px-6 py-5">
            <Header type="normal" />
            <div className="welcome my-6 grid gap-1">
              <h1 className="text-3xl font-bold text-blue-800">സ്വാഗതം,</h1>
              <p className="text-xl text-blue-800">{profile && profile[0].name}</p>
            </div>
            {/* ==================== IF USER ADMIN ======================= */}
            {profile[0].email == 'jaseerali2012@gmail.com' ?
              <div className="h-screen pt-6 items-center justify-center">
                <Link href={'/leave'} className="bg-white rounded-xl p-6 flex justify-between items-center gap-4 w-full text-blue-800">
                  <p className="text-xl m-0 pt-2 pl-3 font-semibold">ലീവ് അപ്ലിക്കേഷൻ </p>
                  <span className="bg-sky-50 text-sky-500 rounded-full items-center  w-10 h-10 flex justify-center font-semibold number">{leave.length}</span>
                </Link>
                <h6 className="text-xl  font-semibold text-blue-800 my-5">ഇന്നത്തെ ഹാജർ  </h6>
                <div className="grid gap-5">
                  <div className="bg-white rounded-xl p-6 pb-3 justify-between items-center w-full text-blue-800">
                    <p>മുഹമ്മദ് </p>
                    <div className="flex justify-between items-center w-100 pt-0">
                      <p className="text-lg m-0 font-semibold">IN 7.00 OUT 8.00</p>
                      <span className="bg-green-50 text-green-500 rounded-full items-center px-4 py-2 flex justify-center font-semibold number mb-3">കൃത്യ സമയം </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 pb-3 justify-between items-center w-full text-blue-800">
                    <p>മുഹമ്മദ് </p>
                    <div className="flex justify-between items-center w-100 pt-0">
                      <p className="text-lg m-0 font-semibold">IN 7.00 OUT 8.00</p>
                      <span className="bg-yellow-50 text-yellow-500 rounded-full items-center px-4 py-2 flex justify-center font-semibold number mb-3">20 മിനിറ്റ് വൈകി</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 pb-3 justify-between items-center w-full text-blue-800">
                    <p>മുഹമ്മദ് </p>
                    <div className="flex justify-between items-center w-100 pt-0">
                      <p className="text-lg m-0 font-semibold">IN 7.00 OUT 8.00</p>
                      <span className="bg-red-50 text-red-500 rounded-full items-center px-4 py-2 flex justify-center font-semibold number mb-3">ലീവ് </span>
                    </div>
                  </div>
                </div>
              </div>
              :
              /* ==================== IF USER PUBLIC (TEACHERS) =======================*/
              <div className="h-screen items-center grid">
            <Punching user={userId} />
              </div>
            }
          </div>
        </>
      </ProtectedRoute>
    </>
  )
}
