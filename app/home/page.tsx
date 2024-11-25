import Link from "next/link"; // Import Link from Next.js

function HeroPage() {
    return (
        <>
            <div className="relative h-screen w-full">
                <img
                    src="./BG.jpg"
                    alt="Background of a car"
                    className="w-full h-full object-cover"
                    aria-label="A beautiful view of a car"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-4 md:p-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-black">
                        Drive Your Dreams
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-slate-400">
                        This emphasizes the aspiration and excitement of <br />
                        owning or exploring cars.
                    </p>
                    <Link href="/get-started">
                        <button
                            className="mt-6 px-6 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-black transition"
                            aria-label="Click to get started"
                        >
                            Get Started
                        </button>
                    </Link>
                </div>
                <div className="py-1 bg-black text-center text-white">
                    Footer (HomeWork class-6) <br />| Maimoona | GIAIC
                </div>
            </div>
        </>
    );
}

export default HeroPage;