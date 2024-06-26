"use client"
import { useFormStatus } from "react-dom"
import Button from "./Button";
import { ArrowRight } from "lucide-react";



function Loadingbtn({ content }: { content: string }) {
    const { pending } = useFormStatus();
    return (
        <Button white disabled={pending} className="text-black text-lg rounded-lg  px-20 py-2.5 text-center me-2 mb-2 disabled:bg-opacity-20">
            {pending ? (<>
                <div className="flex justify-center items-center">
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-purple-500 border-t-transparent"></div>

                    <div className="text-black ml-2">Submitting...</div>
                </div>
            </>
            ) : (<div className="flex justify-center items-center"><div>{content}</div><div><ArrowRight className="ml-2"/></div></div>)}</Button>
    )
}

export default Loadingbtn