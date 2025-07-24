
import Image from "next/image";
import Profile from "@/public/images/Profile.jpeg";
import IconT from "@/public/images/faviconT.png";

export default function Home() {
  // console.log("Home Page");
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      This is Home Page
      <Image placeholder="blur" src={Profile} alt="Profile image"/><br></br>
      <Image placeholder="blur" src={IconT} alt="IconT image"/>
    </main>
  );
}
