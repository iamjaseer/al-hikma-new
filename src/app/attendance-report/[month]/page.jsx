'use client'

import { collection, getDocs, query, where } from "firebase/firestore"
import Header from "../../Components/Header"
import { db } from "../../firebase/config"
import { useUserContext } from "../../Context/userContext"
import { useEffect, useState } from "react"
import ProtectedRoute from '../../ProtectedRoute';



export default function AttendanceView({ params }) {


    //WORKING TIME START AND END
    const startTime = 7
    const endTime = 8


    let { month } = params


    //CONTEXT
    const userId = localStorage.getItem('userId');
    const { profile } = useUserContext()


    //STATES
    const [getAttendance, setGetAttendance] = useState([])
    const [getHolidays, setGetHolidays] = useState([])
    const [checkIntime, setCheckInTime] = useState('')



    //CHECk PUNCH IN
    const checkPunchInTimeTeachers = (getTime) => {



        const onTimeThreshold = new Date();
        onTimeThreshold.setHours(7, 6, 0);


        const punchIn = new Date(getTime);


        if (punchIn <= onTimeThreshold) {
            return 1;
        } else {
            return 0;
        }

    }


    //CHECk PUNCH OUT
    const checkPunchOutTimeTeachers = (getTime) => {

        const onTimeThreshold = new Date();
        onTimeThreshold.setHours(8, 0, 0);


        const punchOut = new Date(getTime);


        if (punchOut >= onTimeThreshold) {
            return 1;
        } else {
            return 0;
        }

    }


    //GET THE TIME FROM STRING
    const getTimeFromString = (dateTimeString) => {

        // Create a Date object from the provided string
        const date = new Date(dateTimeString);

        // Extract hours, minutes, and seconds
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        // Return the time portion as a string
        return `${hours}:${minutes}:${seconds}`;
    }


    //PRINT DAYS BY MONTH NUMBER

    const attendanceTable = (holidays) => {




        const days = [];


        const mergedArray = [...holidays, ...getAttendance];


        days.push(


            (mergedArray).map((item, key) => (

                <>

                    <li className="flex justify-start items-center gap-5" key={key}>

                        {/* {checkPunchInTimeTeachers(item.punchIn) == 0 ? 'Late': 'Correct'} */}
                        {/* {checkPunchOutTimeTeachers(item.punchOut) == 0 ? 'Early': 'Correct'}  */}

                        {/* {checkPunchInTimeTeachers(item.punchIn)} */}
                        {item.reason && <span className="bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center">{item.date.substring(item.date.indexOf("-") + 4)}</span>}

                        {/* checkPunchInTimeTeachers(item.punchIn) == 0 &&  */}
                        {!item.reason ? <span className={checkPunchOutTimeTeachers(item.punchOut) == 0 || checkPunchInTimeTeachers(item.punchIn) == 0 ?

                            'bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center'
                            :
                            'bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center'}>
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

                        {!item.reason ? <span className={checkPunchOutTimeTeachers(item.punchOut) == 0 || checkPunchInTimeTeachers(item.punchIn) == 0 ? 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold' : 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold'}>
                            <span>
                                IN  {getTimeFromString(item.punchIn)}
                                {checkPunchInTimeTeachers(item.punchIn) == 0 ? '- LPU' : null}
                            </span>
                            <span>
                                OUT {getTimeFromString(item.punchOut)}
                                {checkPunchOutTimeTeachers(item.punchOut) == 0 ? '- EPO' : null}
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






    //CALCULATE SALARY
    const paySalary = () => {

        const latePunchin = getAttendance

        //console.log(getAttendance)
        const latePunchinList = latePunchin.filter(item => checkPunchInTimeTeachers(item.punchIn) == 0);
        const earlyPunchinList = latePunchin.filter(item => checkPunchOutTimeTeachers(item.punchOut) == 0);


        const totalDays = 30

        const perDay = profile[0].salary / totalDays

        const lateDeduction = (parseInt((latePunchinList.length + earlyPunchinList.length)) / 3) * perDay

        //console.log(lateDeduction)

        const earn = (getAttendance.length * perDay - lateDeduction)

        return earn
    }



    useEffect(() => {

        //HOLIDAYS
        (async () => {
            try {

                const holidaysCollectionRef = await query(collection(db, `holidays-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`), where('month', '==', parseInt(month)));

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

                const collectionName = `attendance-user-${userId}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`

                //NORMAL
                const attendanceReportCollectionRef = await query(collection(db, collectionName), where('month', '==', parseInt(month)));

                const dataNormal = await getDocs(query(attendanceReportCollectionRef,))

                const filteredDataNormal = dataNormal.docs.map((doc) => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))

                //console.log(filteredDataNormal)
                setGetAttendance(filteredDataNormal)


            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();
        paySalary()

    }, []);


    return (
        <ProtectedRoute>
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
                        ₹{paySalary()}
                    </span>
                </div>
            </div>
        </ProtectedRoute>
    )

}
