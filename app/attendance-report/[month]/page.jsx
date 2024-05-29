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
    const userId = localStorage.getItem('userId');
    const { profile } = useUserContext()


    //STATES
    const [getAttendance, setGetAttendance] = useState([])
    const [getEarlyPunchout, setGetEarlyPunchout] = useState([])
    const [getHolidays, setGetHolidays] = useState([])
    const [totalSalary, setTotalSalary] = useState(0)





 







    //PRINT DAYS BY MONTH NUMBER

    const attendanceTable = (holidays) => {



        //WORKING TIME START AND END
        const startTime = 7
        const endTime = 8



        const days = [];


        const mergedArray = [...holidays, ...getAttendance];


        days.push(


            (mergedArray).map((item, key) => (

                <>

                    <li className="flex justify-start items-center gap-5" key={key}>
                        {parseFloat(item.punchIn).toFixed(2)}
                        {item.reason && <span className="bg-white border-blue-800 border text-blue-800 rounded-full p-2 w-10 h-9 flex justify-center">{item.date.substring(item.date.indexOf("-") + 4)}</span>}
                        {!item.reason ? <span className={additionalTime(parseFloat(item.punchIn).toFixed(2)) < item.punchIn || endTime > item.punchOut ? 'bg-yellow-400 border border-yellow-400 text-white rounded-full p-2 w-10 h-9 flex justify-center' : 'bg-sky-400 border border-sky-400 text-white rounded-full p-2 w-10 h-9 flex justify-center'}>
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

                        {!item.reason ? <span className={additionalTime(parseFloat(item.punchIn).toFixed(2)) < item.punchIn || endTime > item.punchOut ? 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-yellow-400 font-semibold' : 'flex justify-between items-center w-full border-b-gray-100 border-b-2 py-4  text-sky-400 font-semibold'}>
                            <span>
                                IN {item.punchIn} {additionalTime(parseFloat(item.punchIn).toFixed(2)) < item.punchIn ? '- LPU' : null}
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




//console.log(getAttendance)


        //ADD ADDIOTIOLAL TIME
        const additionalTime =   (inTime) => {
      
            const integer = inTime;
            const additionalValues = "5"; 
            
            // Concatenate the additional values after the decimal point
            const numberWithDecimal = integer.toString() + "." + additionalValues;
            
            // Convert the concatenated string back to a number
            const result = parseFloat(numberWithDecimal);
            //setAdditionalTime(result)
            return result
       
        }




    //CALCULATE SALARY
    const paySalary = () => {

const latePunchin = getAttendance
const latePunchinList = latePunchin.filter(item => item.punchIn > 7.5);
//console.log(latePunchinList.length);
const totalDays = 30

if(latePunchinList.length > 3){
    console.log('More late')
}
else{
    console.log('normal')
}

        const perDay = profile[0].salary / totalDays
        const earn = (getAttendance.length * perDay)

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



                //LATE PUNCHIN
                // const attendanceReportLatePunchinCollectionRef = await query(collection(db, collectionName), where('punchIn', '>', 7));

                // const dataLatePunchin = await getDocs(query(attendanceReportCollectionRef,))

                // const filteredDataNormal = dataNormal.docs.map((doc) => (
                //     {
                //         ...doc.data(),
                //         id: doc.id
                //     }
                // ))

                // setGetAttendance(filteredDataNormal)






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
