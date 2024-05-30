'use client'

import { collection, getDocs, query, where } from "firebase/firestore"
import Header from "../../Components/Header"
import { db } from "../../firebase/config"
import { useUserContext } from "../../Context/userContext"
import { useEffect, useState } from "react"
import ProtectedRoute from '../../ProtectedRoute';



export default function AttendanceView({ params }) {


    //WORKING TIME START AND END
    const startTime = process.env.NEXT_PUBLIC_START_TIME
    const endTime = process.env.NEXT_PUBLIC_END_TIME


    let { month } = params


    //CONTEXT
    const userId = localStorage.getItem('userId');
    const { profile } = useUserContext()


    //STATES
    const [getAttendance, setGetAttendance] = useState([])
    const [getHolidays, setGetHolidays] = useState([])
    const [getLeaves, seGetLeaves] = useState([])
    const [leaveCount, setLeaveCount] = useState(0)



    //CHECk PUNCH IN
    const checkPunchInTimeTeachers = (punchInTime) => {


        const punchInDate = new Date(punchInTime);


        const punchInHour = punchInDate.getHours();
        const punchInMinute = punchInDate.getMinutes();


        const expectedHour = 7; // Expected hour for punch-in
        const expectedMinute = 5; // Expected minute for punch-in


        if (punchInHour > expectedHour || (punchInHour === expectedHour && punchInMinute > expectedMinute)) {
            return "Late";
        } else if (punchInHour === expectedHour && punchInMinute === expectedMinute) {
            return "On time";
        } else {
            return "Early";
        }


    }


    //CHECk PUNCH OUT
    const checkPunchOutTimeTeachers = (getTime) => {

        const punchInDate = new Date(getTime);


        const punchInHour = punchInDate.getHours();
        const punchInMinute = punchInDate.getMinutes();


        const expectedHour = 8; // Expected hour for punch-in
        const expectedMinute = 0; // Expected minute for punch-in


        if (punchInHour > expectedHour || (punchInHour === expectedHour && punchInMinute > expectedMinute)) {
            return "More";
        } else if (punchInHour === expectedHour && punchInMinute === expectedMinute) {
            return "On time";
        } else {
            return "Early";
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


    //GET THE DAY FROM DATE
    function getDayFromDate(dateString) {

        const date = new Date(dateString);
        const day = date.getDate();
        return day;
    }




    //PRINT DAYS BY MONTH NUMBER

    const attendanceTable = () => {


        const days = [];


        const mergedArray = [...getHolidays, ...getAttendance, ...getLeaves];


        days.push(


            (mergedArray).map((item, key) => (

                <>

                    <li className="flex justify-start items-center gap-5" key={key}>

                        {item.reason && <span className="bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center">{item.day}</span>}

                        {item.leaveDay && <span className="bg-red-500 border border-red-500 text-white rounded-full p-2 w-10 h-9 flex justify-center">{getDayFromDate(item.leaveDay)}</span>}

                        {!item.leaveDay && !item.reason ? <span className={

                            checkPunchInTimeTeachers(item.punchIn) == 'Late' || checkPunchOutTimeTeachers(item.punchOut) == 'Early' ?

                                'bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center'
                                :
                                'bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center'}>
                            {item.day}
                        </span>
                            :
                            null
                        }

                        {!item.leaveDay && item.reason && <span className="flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-blue-800 font-semibold">
                            <span>
                                HOLIDAY - {item.reason}
                            </span>
                        </span>
                        }

                        {!item.leaveDay && !item.reason ? <span className={

                            checkPunchInTimeTeachers(item.punchIn) == 'Late' || checkPunchOutTimeTeachers(item.punchOut) == 'Early' ?

                                'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold' : 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold'}>
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
                        {item.leaveDay && <span className="flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-red-500 font-semibold">
                            <span>
                                LEAVE - {item.leaveReason}
                            </span>
                        </span>
                        }

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


        const totalLeavePerYear = process.env.NEXT_PUBLIC_LEAVES_YEAR

        //console.log(getAttendance)
        const latePunchinList = getAttendance.filter(item => checkPunchInTimeTeachers(item.punchIn) == 'Late');
        const earlyPunchinList = getAttendance.filter(item => checkPunchOutTimeTeachers(item.punchOut) == 'Early');




        
        const weekOffdays = 5
        //const monthlyHolidays = 2
       // const addiTionalTIme = weekOffdays+monthlyHolidays
      

        const perDay = profile[0].salary / 30

        const lateDeduction = (parseInt((latePunchinList.length + earlyPunchinList.length)) / 3) * perDay


        console.log(lateDeduction)


        //console.log(lateDeduction)

        //console.log(lateDeduction)

        //2 = holidays36+
        //5 = weekly holidays
        const earn =  (30*perDay)-lateDeduction

        return parseFloat(earn).toFixed(2)
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


        //LEAVES
        (async () => {
            try {

                const leaveCollectionRef = await query(collection(db, `leave`),
                    where('teacherId', '==', userId),
                    where('month', '==', parseInt(month)),
                    where('status', '==', 'approved'),
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
                // console.log(filteredData)
                //});



            } catch (err) {
                console.log('error')
                console.log(err)
            }
        })();


        paySalary()

    }, []);


    return (
        <ProtectedRoute>
            <div className="bg-white  px-6 py-5">
                <Header type="page-header" title={`ഹാജർ പട്ടിക ${dateMalayalam(month)} ${new Date().getFullYear()}`} />
                <div className="grid items-start px-6 py-5">
                    <ul className="p-0 m-0 number text-sm uppercase">
                        {attendanceTable()}
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
