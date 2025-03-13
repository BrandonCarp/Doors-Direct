'use client';


export default function Hero() {
    return (
        <div className="relative bg-[url('/images/4050hero.webp')] bg-cover bg-center h-screen">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="mt-[25%] ml-10 w-[45%]">
                <h1 className="text-white font-bold text-4xl">New Jersey's Fastest Growing Garage Door Distribution Center</h1>
                <button className="bg-white py-1 px-3 rounded  mt-1 hover:bg-gray-300">Learn More</button>
                </div>
                
            </div>
        </div>
    );
}
