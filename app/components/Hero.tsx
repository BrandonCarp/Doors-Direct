'use client';


export default function Hero() {
    return (
        <div className="relative bg-[url('/images/4050hero.webp')] bg-cover bg-center h-[35rem]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
                <div className="pl-10 w-[50%]">
                    <h1 className="text-white font-bold text-4xl">
                        New Jersey's Fastest Growing Garage Door Distribution Center
                    </h1>
                    <button className="bg-white py-2 px-3 text-[1.2rem] rounded mt-3 hover:bg-rose-700">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
// screens: {
//     xs: "375px",
//     ss: "575px",
//     sm: "680px",
//     md: "860px",
//     lg: "1200px",
//     lgsm: "1300px",
//     lgmd: "1400px",
//     xl: "1700px",
