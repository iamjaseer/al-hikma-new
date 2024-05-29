'use client'

import { collection, getDocs, query, where } from "firebase/firestore"
import Header from "../../Components/Header"
import { db } from "../../firebase/config"
import { useUserContext } from "../../Context/userContext"
import { useEffect, useState } from "react"
import ProtectedRoute from '../../ProtectedRoute';



export default function AttendanceView({ params }) {

    let { month } = params



    //CONTEXT
    const { loginUser } = useUserContext()


    //STATES
    const [getAttendance, setGetAttendance] = useState([])
    const [getHolidays, setGetHolidays] = useState([])
    const [profile, setProfile] = useState([])
    const [totalSalary, setTotalSalary] = useState(0)

    //FIREBASE DB
    // const attendanceReportCollectionRef =  collection(db, `attendance-user-${loginUser.uid}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`, where('month' == 5))





    //PRINT DAYS BY MONTH NUMBER

    const attendanceTable = (holidays) => {



        const getDaysInMonth = function (month, year) {
            return new Date(year, month, 0).getDate();
        };




        //     holidays.map((item) => {
        //    console.log(item)
        //     });

        //console.log(getAttendance)


        const splitDay = ('2024-05-30', '2024-05-31', '2024-05-28', '2024-05-27').split("-")

        function removeLeadingZerosRegex(str) {
            return str.replace(/^0+(?=\d)/, '');
        }


        //WORKING TIME START AND END
        const startTime = 7
        const endTime = 8



        const days = [];

        //for (let i = 0; i < getDaysInMonth(new Date().getMonth() + 1, new Date().getFullYear()); i++) {
        // days.push(
        //     <li className="flex justify-start items-center gap-5">
        //         <span className="bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center">{i+1}</span>
        //         <span className="flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold">
        //             <span>
        //                 IN 7.02 {i++ == removeLeadingZerosRegex(splitDay[2]) ? 'yes' : 'no'}
        //             </span>
        //             <span>
        //                 OUT 8.35
        //             </span>
        //         </span>
        //     </li>
        // )

        const mergedArray = [...holidays, ...getAttendance];


        days.push(


            (mergedArray).map((item, key) => (

                <>

                    <li className="flex justify-start items-center gap-5" key={key}>

                        {item.reason && <span className="bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center">{item.date.substring(item.date.indexOf("-") + 4)}</span>}
                        {!item.reason ? <span className={startTime < item.punchIn || endTime > item.punchOut ? 'bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center' : 'bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center'}>
                            {item.day}
                        </span>
                            :
                            null
                        }
                        {item.reason && <span className="flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold">
                            <span>
                                HOLIDAY - {item.reason}
                            </span>
                        </span>
                        }

                        {!item.reason ? <span className={startTime < item.punchIn || endTime > item.punchOut ? 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold' : 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold'}>
                            <span>
                                IN {item.punchIn} {startTime < item.punchIn ? '- LPU' : null}
                            </span>
                            <span>
                                OUT {item.punchOut} {endTime > item.punchOut ? '- EPO' : null}
                            </span>
                        </span>
                            :
                            null
                        }

                        {/* <span className="flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-red-500 font-semibold">
                                        <span>



                                            {item.day}<br/>
                                            {new Date().getDate()-1}<br/>
                                            ABSENT
                                        </span>
                                    </span> */}

                    </li>
                </>
            ))
        )

        return days;

    }





    //DATE MALAYALAM

    function dateMalayalam(date) {

        switch (date) {
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



    useEffect(() => {



        //CALCULATE SALARY

        (async () => {
            try {
               

                    const perDay = await profile[0].salary/30
                    setTotalSalary(perDay)
                
                


            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();




        //PROFILE
        (async () => {
            try {

                

                const teachersCollectionRef = await query(collection(db, `teachers`),);
               

                const data = await getDocs(query(teachersCollectionRef, where('userId', '==', 'zZfRakIcCBbEkW46oFNp1Xav17r2')))

            
                const filteredData = data.docs.map((doc) => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))

                setProfile(filteredData)


            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();


        //HOLIDAYS
        (async () => {
            try {

                const holidaysCollectionRef = await query(collection(db, `holidays-2024-2025`),);

                const data = await getDocs(query(holidaysCollectionRef,))

                //await getDocs(teachersCollectionRef)

                const filteredData = data.docs.map((doc) => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))

                //filteredData.map((item) => {
                setGetHolidays(filteredData)
                //console.log(item)
                //});



            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();


        //ATTENDANCE
        (async () => {
            try {
                const attendanceReportCollectionRef = await query(collection(db, `attendance-user-${loginUser.uid}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`), where('month', '==', 5));

                const data = await getDocs(query(attendanceReportCollectionRef,))

                //await getDocs(teachersCollectionRef)

                const filteredData = data.docs.map((doc) => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))

                setGetAttendance(filteredData)

            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();



    }, []);




    //console.log(getAttendance)
    //console.log(getHolidays)


    return (
        <ProtectedRoute>
            dfgdfgdfg
 <div className="bg-white h-screen  px-6 py-5">
                        <Header type="page-header" title={`ഹാജർ പട്ടിക ${dateMalayalam(month)} ${new Date().getFullYear()}`} />
                        <div className="grid items-start px-6 py-5">
                            <ul className="p-0 m-0 number text-sm uppercase">
                                {attendanceTable(getHolidays)}
                            </ul>
                        </div>
                        <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold">
                            <span className="block w-full">
                                ജനുവരി മാസത്തെ ശമ്പളം
                            </span>
                            <span className="number block text-end">
                                ₹{totalSalary} 
                            </span>
                        </div>
                    </div>
         </ProtectedRoute>
    )

}
