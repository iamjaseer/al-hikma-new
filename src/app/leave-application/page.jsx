'use client'
import Header from "../Components/Header"
import Swal from 'sweetalert2'
import { useEffect, useState } from "react"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useRouter } from 'next/navigation'
import { useUserContext } from "../Context/userContext"
import ProtectedRoute from '../ProtectedRoute';


export default function LeaveApplicattion() {

    const router = useRouter()



    //FIREBASE DB
    const leaveCollectionRef = collection(db, "leave",)

//CONTEXT
    const { loginUser } = useUserContext()


        //STATES
        const [day, setDay] = useState('')
        const [reason, setReason] = useState('')
        const [errors, setErrors] = useState({});
        const [isFormValid, setIsFormValid] = useState(false);


        
    useEffect(() => {
    }, [day, reason]);

    // Validate form 
    const validateForm = () => {
        let errors = {};

        if (!day) {
            errors.day = 'Day is required.';
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



       //ADD NEW LEAVE
       const addNewLeave = async () => {
      
        validateForm()

        const userId = await loginUser.uid

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
                        addDoc(leaveCollectionRef, {
                            appliedDate: new Date(),
                            leaveDay: day,
                            reason:  reason,
                            status: 'pending',
                            teacherId:  userId
                        })
                        console.log('success')
                        //console.log(auth.currentUser)
                        router.push(`/leave`)

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


    return (
        <ProtectedRoute>
 <div className="bg-gray-100  px-6 py-5">
            <Header type="page-header" title="ലീവ് അപ്ലിക്കേഷൻ 2024  " />
            <div className="h-screen grid items-center px-6 py-5">
                <div className="grid gap-3 items-center w-100">
                    <div className="grid gap-4">
                        <input
                            type="date"
                            className="rounded-md h-12 px-4 w-full border-0"
                            placeholder="ദിവസം"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            required
                        />
                        {errors.day && <p>{errors.day}</p>}

                        <input
                            type="text"
                            className="rounded-md h-12 px-4 w-full border-0"
                            placeholder="കാരണം"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                        {errors.reason && <p>{errors.reason}</p>}
                        <button onClick={addNewLeave} className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all">അപേക്ഷിക്കുക</button>
                    </div>
                </div>
            </div>
        </div>
           
        </ProtectedRoute>
    )

}
