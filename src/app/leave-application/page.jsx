'use client'
import Header from "../Components/Header"
import Swal from 'sweetalert2'
import { useEffect, useState } from "react"
import { db } from '../firebase/config'
import { useRouter } from 'next/navigation'
import { useUserContext } from "../Context/userContext"
import ProtectedRoute from '../ProtectedRoute';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"

export default function LeaveApplicattion() {

    const router = useRouter()



    //FIREBASE DB
    const leaveCollectionRef = collection(db, "leave",)


    //LOCAL STORAGE
    const userId = localStorage.getItem('userId');



    //CONTEXT
    const { loginUser } = useUserContext()


    //STATES
    const [day, setDay] = useState('')
    const [reason, setReason] = useState('')
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [getLeaves, seGetLeaves] = useState([])



    useEffect(() => {

        //LEAVES
        (async () => {
            try {

                const leaveCollectionRef = await query(collection(db, `leave`),
                    where('teacherId', '==', userId),
                    //where('status', '==', 'approved'),
                );

                const data = await getDocs(query(leaveCollectionRef,))

                //await getDocs(teachersCollectionRef)

                const filteredData = data.docs.map((doc) => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))

                //filteredData.map((item) => {
                seGetLeaves(filteredData)
                //console.log(filteredData)
                //});



            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();


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



    //GET THE DAY FROM DATE
    function getDayFromDate(dateString) {
      
        const date = new Date(dateString);
     const day = date.getDate();
    return day;
       }

  //GET THE MONTH FROM DATE
  function getMonthFromDate(dateString) {
const date = new Date(dateString);
const month = date.getMonth() + 1; 
return month
 
}



    //ADD NEW LEAVE
    const addNewLeave = async () => {

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
                        addDoc(leaveCollectionRef, {
                            appliedDate: new Date(),
                            day:getDayFromDate(day),
                            month:getMonthFromDate(day),
                            leaveDay: day,
                            leaveReason: reason,
                            status: 'pending',
                            teacherId: userId
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
                <Header type="page-header" title={`ലീവ് അപ്ലിക്കേഷൻ ${new Date().getFullYear()} - ${new Date().getFullYear() + 1}`} />
                <div className="h-screen grid items-center px-6 py-5">
                    <div className="grid gap-3 items-center w-100">
                        {getLeaves.length < process.env.NEXT_PUBLIC_LEAVES_YEAR ?
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
                            : 
                            <div className="text-lg font-bold text-red-600 border-1 text-center">
                           ക്ഷമിക്കുക. തങ്ങളുടെ വർഷത്തെ ലീവ് തീർന്നിരിക്കുന്നു.
എമർജൻസി ആണെങ്കിൽ സെക്രട്ടറി യുമായി ബന്ധപെടുക 
                          </div>
                        }
                    </div>
                </div>
            </div>

        </ProtectedRoute>
    )

}
