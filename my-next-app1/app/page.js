
import Image from "next/image";
import Profile from "@/public/images/Profile.jpeg";
import IconT from "@/public/images/faviconT.png";

export default function Home() {
  // console.log("Home Page");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gradient-to-br from-indigo-500 via-pink-400 to-yellow-300 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 drop-shadow-lg mb-2 animate-fade-in">
        This is Home Page
      </h1>
      <p className="max-w-2xl text-lg sm:text-xl text-white/90 font-medium text-center bg-black/30 rounded-xl px-6 py-4 shadow-xl backdrop-blur-md border border-white/20 animate-fade-in delay-100">
        To be part of an organization where I get a chance to use my knowledge and skills to contribute in the progress of the organization as well as myself.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-8 mt-4 animate-fade-in delay-200">
        <div className="rounded-full border-4 border-white/60 shadow-2xl overflow-hidden w-40 h-40 bg-white/20 hover:scale-105 transition-transform duration-300">
          <Image placeholder="blur" src={Profile} alt="Profile image" className="object-cover w-full h-full" />
        </div>
        <div className="rounded-xl border-2 border-yellow-300 shadow-lg overflow-hidden w-28 h-28 bg-white/30 hover:rotate-6 transition-transform duration-300">
          <Image placeholder="blur" src={IconT} alt="IconT image" className="object-contain w-full h-full" />
        </div>
      </div>
    </main>
  );
}
