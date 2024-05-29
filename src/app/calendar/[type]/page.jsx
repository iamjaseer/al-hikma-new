'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { useRouter } from "next/navigation"
import Header from "../../Components/Header"
import { db } from "../../firebase/config"
import Swal from "sweetalert2"
import ProtectedRoute from '../../ProtectedRoute';
import { useUserContext } from "../../Context/userContext"




export default function CalenderSettingType({ params }) {


    let { type } = params


    const router = useRouter()


    //FIREBASE DB
    const calenderCollectionRef = collection(db, type)


    //CONTEXT
    const { profile } = useUserContext()


    //STATES
    const [calender, setCalender] = useState([])
    const [day, setDay] = useState('')
    const [reason, setReason] = useState('')
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [userData, setUserData] = useState('')


    useEffect(() => {
   getCalender()

    }, [day, reason]);


    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!day) {
            errors.day = 'Date is required.';
        }

        if (!reason) {
            errors.reason = 'Reason is required.';
        }

        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };


    //OWL SETTINGS
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all",
            cancelButton: "w-full bg-transparent hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white border border-blue-800 rounded-md p-4 text-blue-800 font-bold text-lg transition-all mt-3",
            title: "text-blue-800"
        },
        buttonsStyling: false
    });


    //GT ALL DATA
    const getCalender = async () => {



        const data = await getDocs(calenderCollectionRef)

        const filteredData = data.docs.map((doc) => (
            {
                ...doc.data(),
                id: doc.id
            }
        ))
        setCalender(filteredData)
        // setLoading(false)
        //  console.log(data)
    }


    //ADD NEW DATA
    const addCalender = async () => {

        validateForm()

        if (isFormValid) {

            swalWithBootstrapButtons.fire({
                title: "ശ്രെദ്ധിക്കുക ",
                text: "ചേർക്കാനോ?",
                position: 'bottom-end',
                cancelButtonText: 'ഒഴിവാക്കുക ',
                showCancelButton: true,
                confirmButtonText: "സ്ഥിദീകരിക്കുക",
            }).then((result) => {
                if (result.isConfirmed) {

                    try {
                        addDoc(calenderCollectionRef, {
                            date: day,
                            reason: reason,
                            year: new Date().getFullYear(),
                            day: new Date().getDate(),
                        })
                        console.log('success')
                        //console.log(auth.currentUser)
                        router.push(`/calendar`)

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

    }


    //DELETE CALENDER
    const deleteCalender = async (calenderId) => {

        swalWithBootstrapButtons.fire({
            title: "ശ്രെദ്ധിക്കുക ",
            text: "നീക്കം ചെയ്യണോ?",
            position: 'bottom-end',
            cancelButtonText: 'ഒഴിവാക്കുക ',
            showCancelButton: true,
            confirmButtonText: "സ്ഥിദീകരിക്കുക",
        }).then((result) => {
            if (result.isConfirmed) {

                try {
                    //const teachersDoc = doc(teachersCollectionRef, teacher[1])


                    deleteDoc(doc(calenderCollectionRef, calenderId));


                    //deleteDoc(teachersDoc)
                    router.push(`/calendar`)
                    console.log('success')
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

    function pageHeading() {

        switch (type) {
            case `holidays-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`:
                return `അവധി ദിനങ്ങൾ ${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`
                break;
            case `exam-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`:
                return `പരീക്ഷ ദിവസങ്ങൾ ${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`
                break;
            case `public-exam-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`:
                return `പൊതു പരീക്ഷ ദിവസങ്ങൾ ${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`
                break;
        }
    }

    // അവധി ദിനങ്ങൾ 2024 - 2025


    return (
        <ProtectedRoute>
           <div className="bg-gray-100  px-6 py-5">
                        <Header type="page-header" title={pageHeading()} />


                        <div className="mt-5 gap-4 h-screen pb-24">
                            {
                                calender.map((calender) => (
                                    <div className="bg-white rounded-xl justify-between items-center w-full text-blue-800 overflow-hidden border-0 mb-7">
                                        <span className="p-4 border-b border-b-gray-100 block">{calender.date}</span>
                                        <div className="flex justify-between items-center pe-3 ps-3 py-1">
                                            <span className="p-4 block font-bold">{calender.reason}</span>
                                            {profile[0].email ==  'jaseerali2012@gmail.com' ?
                                                <button onClick={(e) => deleteCalender(calender.id)} className="rounded-lg bg-white border pt-2 pb-1 px-3 text-red-600 text-sm transition-all">
                                                    ഒഴിവാക്കുക
                                                </button>
                                                :
                                                null
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            {profile[0].email !==  'jaseerali2012@gmail.com' && !calender.length == 0 ? <h6 className="text-xl  font-semibold text-blue-800 my-5">കൂടുതൽ ചേർക്കുക </h6> : ''}
                            {profile[0].email !==  'jaseerali2012@gmail.com' ? <div className="bg-white rounded-xl justify-between items-center w-full text-blue-800 overflow-hidden border-0 mb-7">

                                <input
                                    type="date"
                                    className="rounded-md h-12 px-4 w-full  border-b border-b-gray-100"
                                    placeholder="ദിവസം"
                                    value={day}
                                    onChange={(e) => setDay(e.target.value)}
                                    required
                                />
                                {errors.day && <p className="p-3 text-red-600">{errors.day}</p>}
                                <input
                                    type="text"
                                    className="rounded-md h-12 px-4 w-full  border-b border-b-gray-100"
                                    placeholder="അവധി"
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value)}
                                    required
                                />
                                {errors.reason && <p className="p-3 text-red-600">{errors.reason}</p>}

                            </div>
                                : null
                            }
                        </div>
                        {profile[0].email !==  'jaseerali2012@gmail.com' ?
                            <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold">
                                <button onClick={addCalender} className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all block text-center">മാറ്റം വരുത്തുക </button>
                            </div>
                            : null}
                    </div>
        </ProtectedRoute>
    )



}



