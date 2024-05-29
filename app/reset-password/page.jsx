
'use client'
import Header from "../Components/Header"
import ProtectedRoute from '../ProtectedRoute';




export default function ResetPassword() {


    return  (
        <ProtectedRoute>
<div className="bg-gray-100  px-6 py-5">
            <Header type="page-header" title="പാസ്സ്‌വേർഡ് മാറ്റുക" />
            <div className="h-screen grid items-center px-6 py-5">
                <div className="grid gap-3 items-center w-100">
                    <div className="grid gap-4">
                        <input type="text" className="rounded-md h-12 px-4 w-full border-0" placeholder="നിലവിലെ പാസ്സ്‌വേർഡ്" />
                        <input type="text" className="rounded-md h-12 px-4 w-full border-0" placeholder="പുതിയ പാസ്സ്‌വേർഡ് " />
                        <input type="text" className="rounded-md h-12 px-4 w-full border-0" placeholder="പുതിയ പാസ്സ്‌വേർഡ് ഉറപ്പാക്കുക" />
                        <button className="w-full bg-sky-400 hover:bg-sky-500 active:bg-sky-500 rounded-md p-4 text-white font-bold text-lg transition-all">അപേക്ഷിക്കുക</button>
                    </div>
                </div>
            </div>
        </div>
        </ProtectedRoute>
    )

}
