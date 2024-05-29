'use client'
import Link from "next/link"
import Header from "../Components/Header"
import ProtectedRoute from "../ProtectedRoute"



export default function AddTeacher() {

    const months = [
        {
            id: 1,
            name: 'ജനുവരി'
        },
        {
            id: 2,
            name: 'ഫെബ്രുവരി'
        },
        {
            id: 3,
            name: 'മാർച്ച്'
        },
        {
            id: 4,
            name: 'ഏപ്രിൽ'
        },
        {
            id: 5,
            name: 'മെയ്'
        },
        {
            id: 6,
            name: 'ജൂൺ'
        },
        {
            id: 7,
            name: 'ജൂലൈ'
        },
        {
            id: 8,
            name: 'ഓഗസ്റ്'
        },
        {
            id: 9,
            name: 'സെപ്തംബര്'
        },
        {
            id: 10,
            name: 'ഒക്ടോബര്'
        },
        {
            id: 11,
            name: 'നവംബര്'
        },
        {
            id: 12,
            name: 'ഡിസംബർ'
        }
    ]


    return (
        <ProtectedRoute>
            <>
                <div className="bg-gray-100  px-6 py-5">
                    <Header type="page-header" title="ഹാജർ പട്ടിക 2024" />
                    <div className="h-screen grid items-center px-6 py-5">
                        <ul className="list-none grid gap-5">
                            {
                                months.map((month, key) =>
                                    <li className="bg-white rounded-xl p-5 pl-7 flex justify-between items-center gap-4" key={key}>
                                        <p className="text-base text-blue-800 font-semibold m-0">{month.name} </p>
                                        <Link href={`attendance-report/${month.id}`} className="rounded-lg bg-sky-400 hover:bg-sky-500 active:bg-sky-500 p-4 text-white font-bold text-lg transition-all">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                                                <path fill="#fff" fillRule="evenodd" d="M2.904 1.029a.312.312 0 0 1 .442 0l3.75 3.75a.313.313 0 0 1 0 .442l-3.75 3.75a.313.313 0 0 1-.442-.442L6.434 5l-3.53-3.529a.313.313 0 0 1 0-.442Z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </>
        </ProtectedRoute>
    )



}
