'use client'
import Link from "next/link"
import Header from "../Components/Header"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"
import { collection, getDocs, deleteDoc, doc, updateDoc, where, query } from "firebase/firestore"
import Swal from 'sweetalert2'
import { useUserContext } from "../Context/userContext"
import { useRouter } from "next/navigation"
import ProtectedRoute from '../ProtectedRoute';




export default function Leave() {

    const router = useRouter()


    //LOCAL STORAGE
    const userId = localStorage.getItem('userId');


    //CONTEXT
    const { profile } = useUserContext()


    //FIREBASE DB
    const leaveCollectionRef = collection(db, "leave",)

    //STATES
    const [leave, setLeave] = useState([])
    const [allLeave, setAllLeave] = useState([])



    //OWL SETTINGS
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all",
            cancelButton: "w-full bg-transparent hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white border border-blue-800 rounded-md p-4 text-blue-800 font-bold text-lg transition-all mt-3",
            title: "text-blue-800"
        },
        buttonsStyling: false
    });


    useEffect(() => {


        getLeaveList()
        getAllLeaveList()

    }, []);





    
        
    //GT Leave list by uid 
    const getLeaveList = async () => {

        try {

    
            const data = await getDocs(query(leaveCollectionRef, where('teacherId', '==', userId)))


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


    //GET ALL LEAVE LIST
    const getAllLeaveList = async () => {

        try {

          
            const data = await getDocs(query(leaveCollectionRef, where('status', '==', 'pending')))

            const filteredData = data.docs.map((doc) => (
                {
                    ...doc.data(),
                    id: doc.id
                }
            ))
            setAllLeave(filteredData)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }




    //DATE MALAYALAM

    function dateMalayalam(date) {

        const month = date.replace(/-/g, "").slice(4, 6).replace(/^0+/, '');

        switch (month) {
            case '1':
                return 'ജനുവരി'
                break;
            case '2':
                return 'ഫെബ്രുവരി '
                break;
            case '3':
                return 'മാർച്ച്'
                break;
            case '4':
                return 'ഏപ്രിൽ'
                break;
            case '5':
                return 'മെയ്'
                break;
            case '6':
                return 'ജൂൺ'
                break;
            case '7':
                return 'ജൂലൈ'
                break;
            case '8':
                return 'ഓഗസ്റ്റ്'
                break;
            case '9':
                return 'സെപ്റ്റംബർ'
                break;
            case '10':
                return 'ഒക്ടോബർ'
                break;
            case '11':
                return 'നവംബർ'
                break;
            case '12':
                return 'ഡിസംബർ'
                break;
        }
    }


     //CHANGE LEAVE STATUS
     const changeLeaveStatus = async (status, leaveId) => {

        swalWithBootstrapButtons.fire({
            title: "ശ്രെദ്ധിക്കുക ",
            text: "മാറ്റം വരുത്താനോ?",
            position: 'bottom-end',
            cancelButtonText: 'ഒഴിവാക്കുക ',
            showCancelButton: true,
            confirmButtonText: "സ്ഥിദീകരിക്കുക",
        }).then((result) => {
            if (result.isConfirmed) {

                try {
                    const leaveDoc = doc(leaveCollectionRef, leaveId)
                    updateDoc(leaveDoc, {
                        status: status,
                    })
                    console.log('success')
                    getAllLeaveList()
                   // router.push(`/leave`)
                } catch (err) {
                    console.log('error')
                    console.log(err)
                }


            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
            }
        });
    }

    //REMOVE LEAVE
    const removeLeave = async (leaveId) => {
        swalWithBootstrapButtons.fire({
            title: "ശ്രെദ്ധിക്കുക ",
            text: "ഒഴിവാക്കാനോ?",
            position: 'bottom-end',
            cancelButtonText: 'ഒഴിവാക്കുക ',
            showCancelButton: true,
            confirmButtonText: "സ്ഥിദീകരിക്കുക",
        }).then((result) => {
            if (result.isConfirmed) {

                // try {
                //     deleteDoc(doc(leaveCollectionRef, leaveId));
                //     getLeaveList()
                //     console.log('success')
                // } catch (err) {
                //     console.log('error')
                //     console.log(err)
                // }


                try {
                    const leaveDoc = doc(leaveCollectionRef, leaveId)
                    updateDoc(leaveDoc, {
                        status: 'Canceled',
                    })
                    console.log('success')
                    getLeaveList()
                   // router.push(`/leave`)
                } catch (err) {
                    console.log('error')
                    console.log(err)
                }


            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
            }
        });
    }

   

   // console.log(leave)
    return (
        <ProtectedRoute>
           <div className="bg-gray-100  px-6 py-5">
                        <Header type="page-header" title={`ലീവ് അപ്ലിക്കേഷൻ ${new Date().getFullYear()}`} />
                        <div className="mt-5 gap-4 pb-24 min-h-screen">
                            <ul className="grid gap-7">

                                {
                                    profile[0].email ==  'jaseerali2012@gmail.com' ? allLeave.map((leave, key) => (
                                        <>
                                            <li className="bg-white rounded-xl p-6 grid gap-4" key={key}>
                                                <div className="grid gap-2">
                                                    <p className="text-xl font-semibold text-blue-800 m-0">{leave.leaveDay.replace(/-/g, "").slice(-2)} {dateMalayalam(leave.leaveDay)} {leave.leaveDay.replace(/-/g, "").slice(0, 4)}</p>
                                                    <p className="text-blue-800">{leave.reason}</p>
                                                </div>
                                                {leave.status == 'pending' && <div className="w-full bg-yellow-50  rounded-md p-4 text-yellow-500 font-bold text-lg text-center">പരിശോദിക്കുന്നു</div>}
                                                {leave.status == 'approved' && <div className="w-full bg-green-50  rounded-md p-4 text-green-500 font-bold text-lg text-center">അനുവദിച്ചു</div>}
                                                {leave.status == 'rejected' && <div className="w-full bg-red-50 rounded-md p-4 text-red-500 font-bold text-lg text-center">അനുവദിച്ചിട്ടില്ല</div>}
                                                {profile[0].email ==  'jaseerali2012@gmail.com' ?
                                                    <>
                                                        <button onClick={() => changeLeaveStatus('approved', leave.id)} className="w-full bg-white border border-green-500 hover:bg-green-500 active:bg-green-500 rounded-md p-4 text-green-500 hover:text-white active:text-white font-bold text-lg transition-all">അനുവദിക്കുക</button>
                                                        <button onClick={() => changeLeaveStatus('rejected', leave.id)} className="w-full bg-white border border-red-500 hover:bg-red-600 active:bg-red-600 rounded-md p-4 text-red-600 hover:text-white active:text-white font-bold text-lg transition-all">ഒഴിവാക്കുക</button>
                                                    </>
                                                    :
                                                  null
                                                }
                                            </li>
                                        </>
                                    )) : leave.map((leave, key) => (
                                        <>
                                            <li className="bg-white rounded-xl p-6 grid gap-4" key={key}>
                                                <div className="grid gap-2">
                                                    <p className="text-xl font-semibold text-blue-800 m-0">{leave.leaveDay.replace(/-/g, "").slice(-2)} {dateMalayalam(leave.leaveDay)} {leave.leaveDay.replace(/-/g, "").slice(0, 4)}</p>
                                                    <p className="text-blue-800">{leave.reason}</p>
                                                </div>
                                                {leave.status == 'pending' && <div className="w-full bg-yellow-50  rounded-md p-4 text-yellow-500 font-bold text-lg text-center">പരിശോദിക്കുന്നു</div>}
                                                {leave.status == 'approved' && <div className="w-full bg-green-50  rounded-md p-4 text-green-500 font-bold text-lg text-center">അനുവദിച്ചു</div>}
                                                {leave.status == 'rejected' && <div className="w-full bg-red-50 rounded-md p-4 text-red-500 font-bold text-lg text-center">അനുവദിച്ചിട്ടില്ല</div>}
                                                {leave.status == 'Canceled' && <div className="w-full bg-red-50 rounded-md p-4 text-red-500 font-bold text-lg text-center">ലീവ് ഉപേക്ഷിച്ചു </div>}
                                                {profile[0].email ==  'jaseerali2012@gmail.com' ?
                                                    <>
                                                        <button onClick={() => changeLeaveStatus('approved', leave.id)} className="w-full bg-white border border-green-500 hover:bg-green-500 active:bg-green-500 rounded-md p-4 text-green-500 hover:text-white active:text-white font-bold text-lg transition-all">അനുവദിക്കുക</button>
                                                        <button onClick={() => changeLeaveStatus('rejected', leave.id)} className="w-full bg-white border border-red-500 hover:bg-red-600 active:bg-red-600 rounded-md p-4 text-red-600 hover:text-white active:text-white font-bold text-lg transition-all">ഒഴിവാക്കുക</button>
                                                    </>
                                                    :
                                                    !leave.status == 'Canceled' ? <button onClick={() => removeLeave(leave.id)} className="w-full bg-white border border-red-500 hover:bg-red-600 active:bg-red-600 rounded-md p-4 text-red-600 hover:text-white active:text-white font-bold text-lg transition-all">പിൻവലിക്കുക</button> : null
                                                }
                                            </li>
                                        </>
                                    ))
                                }

                            </ul>
                        </div>
                        {profile[0].email !== 'jaseerali2012@gmail.com' ?
                            <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold">
                                <Link href="/leave-application" className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all block text-center">ലീവിന് അപേക്ഷിക്കുക</Link>
                            </div>
                            : null
                        }
                    </div>
        </ProtectedRoute>
    )


}




