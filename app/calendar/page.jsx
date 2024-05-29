'use client'
import Link from "next/link"
import Header from "../Components/Header"
import { useUserContext } from "../Context/userContext"
import { useEffect, useState } from "react"
import ProtectedRoute from '../ProtectedRoute';




export default function CalenderSetting() {


    //CONTEXT
    const { profile } = useUserContext()

    //STATE
    const [userData, setUserData] = useState('')



    return (
        <ProtectedRoute>
<div className="bg-gray-100  px-6 py-5">
                        <Header type="page-header" title="കലണ്ടർ സെറ്റിങ് 2024 - 2025" />
                        <div className="mt-5 gap-4 h-screen pb-24">
                            <Link href={`/calendar/holidays-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`} className="bg-white rounded-xl p-6 flex justify-between items-center gap-4 w-full text-blue-800 mb-7">
                                <p className="text-xl m-0 pt-2 pl-3 font-semibold">അവധി ദിനങ്ങൾ</p>
                                {/* <span className="bg-sky-50 text-sky-500 rounded-full items-center  w-10 h-10 flex justify-center font-semibold number">4</span> */}
                            </Link>
                            <Link href={`/calendar/exam-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`} className="bg-white rounded-xl p-6 flex justify-between items-center gap-4 w-full text-blue-800 mb-7">
                                <p className="text-xl m-0 pt-2 pl-3 font-semibold">പരീക്ഷ ദിനങ്ങൾ </p>
                                {/* <span className="bg-sky-50 text-sky-500 rounded-full items-center  w-10 h-10 flex justify-center font-semibold number">4</span> */}
                            </Link>
                            <Link href={`/calendar/public-exam-${new Date().getFullYear()}-${new Date().getFullYear() + 1}`} className="bg-white rounded-xl p-6 flex justify-between items-center gap-4 w-full text-blue-800 mb-7">
                                <p className="text-xl m-0 pt-2 pl-3 font-semibold">പൊതു പരീക്ഷ </p>
                                {/* <span className="bg-sky-50 text-sky-500 rounded-full items-center  w-10 h-10 flex justify-center font-semibold number">4</span> */}
                            </Link>
                        </div>
                        {profile[0].email ==  'jaseerali2012@gmail.com' ? <div className="fixed bottom-0 left-0 right-0 bg-white flex justify-start items-center gap-5 p-4 text-blue-800 font-semibold">
                            <Link href="/leave-application" className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all block text-center">മാറ്റം വരുത്തുക </Link>
                        </div> : null}
                    </div>
        </ProtectedRoute>
    )


}
