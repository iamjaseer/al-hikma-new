
'use client'
import Swal from 'sweetalert2'
import { collection, addDoc, getDocs, query, where, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useEffect, useState } from 'react'


export default function Punching({ user }) {


  //WORKING TIME START AND END
  const startTime = 7
  const endTime = 8

  
  //console.log(user)

  //FIREBASE DB
  const attendanceCollectionRef = collection(db, `attendance-user-${user}-month-${new Date().getMonth() + 1}-year-${new Date().getFullYear()}`,)


  //STATES
  const [getHolidays, setGetHolidays] = useState([])
  const [punchStatus, setPunchStatus] = useState([])
  //const [currentPuchStatus, setcurrentPuchStatus] = useState([])





  //GET CURRENT INDIAN TIME
  const currentTime = new Date();

  const currentOffset = currentTime.getTimezoneOffset();

  const ISTOffset = 330;   // IST offset UTC +5:30 

  const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

  // ISTTime now represents the time in IST coordinates

  const hoursIST = ISTTime.getHours()
  const minutesIST = ISTTime.getMinutes()


  //GET PUNCH STATUS
  const getPunchStatus = async () => {

    const data = await getDocs(query(attendanceCollectionRef, where('day', '==', parseInt(new Date().getDate()))))

    //await getDocs(teachersCollectionRef)

    const filteredData = data.docs.map((doc) => (
      {
        ...doc.data(),
        id: doc.id
      }
    ))

    filteredData.map((item) => {
      setPunchStatus(item)
      //console.log(item)
    });


  }


  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all",
      cancelButton: "w-full bg-transparent hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white border border-blue-800 rounded-md p-4 text-blue-800 font-bold text-lg transition-all mt-3",
      title: "text-blue-800"
    },
    buttonsStyling: false
  });



  
 

  // PUNCH IN
  function readyIn() {

    swalWithBootstrapButtons.fire({
      title: "ശ്രെദ്ധിക്കുക ",
      text: "തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക ",
      position: 'bottom-end',
      cancelButtonText: 'ഒഴിവാക്കുക ',
      showCancelButton: true,
      confirmButtonText: "സ്ഥിദീകരിക്കുക",
    }).then((result) => {
      if (result.isConfirmed) {

        try {
          setDoc(doc(attendanceCollectionRef, 'day-'+new Date().getDate()), {
            //setDoc(doc(attendanceCollectionRef, 'day-31'), {

           // date: "5/26/2024",
            // month: 5,
            // year: 2024,
            // day: 31,
            // punchIn: new Date(),
            // punchOut: new Date(),
            // status: 'punchout',
            // teacherId: user,



            month: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            day: new Date().getDate(),
            punchIn: new Date().toString(),
            punchOut: null,
            status: 'punchin',
            teacherId: user,
          });



          getPunchStatus()
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



  // PUNCH OUT
  function readyOut() {

    swalWithBootstrapButtons.fire({
      title: "ശ്രെദ്ധിക്കുക ",
      text: "തങ്ങളുടെതാങ്കൾ നേരത്തെ പുറത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പടുത്താൻ ശ്രമിച്ചു. ഇത് സ്ഥിദീകരിക്കുക പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക ",
      position: 'bottom-end',
      cancelButtonText: 'ഒഴിവാക്കുക ',
      showCancelButton: true,
      confirmButtonText: "സ്ഥിദീകരിക്കുക",
    }).then((result) => {
      if (result.isConfirmed) {


        try {
          const attendanceDoc = doc(attendanceCollectionRef, 'day-'+new Date().getDate())
          updateDoc(attendanceDoc, {
            punchOut: new Date().toString(),
            status: 'punchout',
          })
          getPunchStatus()
          console.log('success')
          //router.push(`/all-teachers`)
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


//console.log(new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate())
 

  useEffect(() => {

    //HOLIDAYS
    (async () => {
      try {

        //new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()

          const holidaysCollectionRef = await query(collection(db, `holidays-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`), 
          where('day', '==', new Date().getDate()),
          where('month', '==', new Date().getMonth()+1),
          where( 'year', '==', new Date().getFullYear())
        );

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
        console.log(filteredData)
          //});



      } catch (err) {
          console.log('error')
          console.log(err)
      }
  })();




    getPunchStatus()

  }, []);




  //console.log(getHolidays[0] && getHolidays[0].day)
  return (
    <>

 {getHolidays[0] && getHolidays[0].day == new Date().getDate() ? 
  
  <div className="text-lg font-bold text-red-600 border-1 text-center">
    ഇന്ന് {getHolidays[0].reason} അവധിയാണ് 
  </div>

 :  <div>
 {!punchStatus.status && startTime <= 7 && endTime >= 8 ? 
  <div className="bg-white rounded-xl p-6 grid gap-4 ">
    <p className="text-base">തങ്ങളുടെ അകത്തോട്ട് ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക  </p>
    <button className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all" onClick={() => readyIn()}>അകത്തേക്ക്</button>
  </div> : null}

  {punchStatus.status == 'punchin' ? <div className="bg-white rounded-xl p-6 grid gap-4 ">
    <p className="text-base">തങ്ങളുടെ പുറത്തേക്കുള്ള ഉള്ള ഹാജർ രേഖപ്പെടുത്തുക </p>
    <button className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all" onClick={() => readyOut()}>പുറത്തേക്കു</button>
  </div> : null}

  {punchStatus.status == 'punchout' ? <div className="bg-white rounded-xl p-6 grid gap-4 w-full">
    <p className="text-base">തങ്ങളുടെ ഹാജർ രേഖപ്പെടുത്തി. നന്ദി  </p>
    <button className="w-full bg-transparent hover:bg-sky-500 active:bg-sky-500 hover:text-white active:text-white border border-sky-400 rounded-md p-4 text-sky-400 font-bold text-lg transition-all">റിപ്പോർട്ട് കാണുക </button>
  </div> : null}
 </div>} 
   
  </>

  )


}
