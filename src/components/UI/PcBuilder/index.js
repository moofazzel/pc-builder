import { useState } from "react"

export default function PcBuilder() {

    return (
        <>
            <div className="container">
                <h2 className="mb-4 text-2xl font-semibold text-center md:text-3xl">PC Builder - Build Your Own Computer</h2>
                <p className="mb-4 font-semibold text-center text-md">Skyland’s custom PC builder makes it easy for you to compare components, find best adeal, save your builds, and share your builds with friends.</p>
                <div className="flex justify-between mt-8">
                    <button className="flex items-center gap-3 px-4 py-1 text-white bg-red-400 rounded-md">

                        Clear Selected

                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                        </svg>
                    </button>

                    <p className="font-bold">Total Costs: <span className="text-red-500">100৳</span> </p>
                </div>

                <div>
                    <div className="flex justify-between my-5">
                        <div className="flex items-center w-full gap-5">
                            <img src="https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cpu-48x48.webp" alt="" />
                            <div className="w-full">
                                <h3>Processor*</h3>
                                <div className="w-[70%] h-4 bg-slate-100">&nbsp;</div>
                            </div>
                        </div>

                        <div>
                            <button className="p-2 font-bold text-white bg-blue-700 rounded-md text-md">Choose</button>
                        </div>
                    </div>


                    <div className="flex items-center">
                        <button className="px-4 py-1 text-white bg-green-400 rounded-md">Complete Build</button>
                    </div>
                </div>
            </div>
        </>
    )
}


