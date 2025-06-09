
export default function Component() {
    return (
        <div style={{
            background: 'radial-gradient(circle at center, #3b82f6 0%, #192946 100%)',
        }} className="relative w-full h-screen overflow-hidden  ">

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 justify-items-center content-start h-full px-4 sm:px-8 text-center">

                {/* Top logos */}
                <div className="z-5 flex flex-wrap gap-4 mb-4 sm:mb-8 max-w-6xl mt-10">

                    <div className="mr-5  w-15 sm:w-20 h-15 sm:h-20 bg-red-600 rounded-full flex items-center justify-start">
                        <img src={"asean.svg"} className="w-full h-[100px] mx-auto m-5" />
                    </div>
                    <div className="ml-5 w-15 sm:w-20 h-15 sm:h-20 bg-blue-800 rounded-full flex items-center justify-center border-2 border-red-500">
                        <img src={"ncdm.svg"} className="w-full h-[100px] mx-auto m-5" />
                    </div>
                </div>

                {/* Main title */}
                <div className="z-4 max-w-4xl">
                    <img src={"title.svg"} className="w-full h-[150px] mx-auto mt-5" />
                </div>

                {/* Country flags */}
                <div className="z-3 flex flex-wrap justify-center gap-1 sm:gap-2 max-w-4xl">
                    <img src={"flag.svg"} className="w-full h-[25px] mx-auto mb-5" />
                </div>

                {/* Event details */}
                <div className="z-2  lg:bg-sky-950 backdrop-blur-sm lg:border lg:border-white/20 rounded-lg p-2 ">
                    <div className=" z-2 text-sm sm:text-lg md:text-xl lg:text-2xl  lg:text-white text-shadow-lg text-white font-semibold">
                        20- OCTOBER 2025 | PHNOM PENH, CAMBODIA
                    </div>
                </div>

                {/* Registration note */}
                <div className="z-1 lg:bg-amber-200 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3  mt-5">
                    <p className="lg:text-black text-white font-bold text-sm sm:text-xl ">
                        The registration link will be updated shortly. Please come back soon.
                    </p>
                </div>
            </div>

            {/* Bottom cityscape silhouette */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48">
                <img src="background.png" alt="" className="hidden sm:block z-0 absolute bottom-0 right-0 max-h-[620px]" />
                <img src="bg-mobile.png" alt="" className="block sm:hidden z-0 absolute bottom-0 mx-auto" />

                {/* Water reflection effect
                <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-16 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-8 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div> */}
            </div>
        </div>
    )
}
