"use client"
import Image from "next/image";
import { setUserApi } from "./api/setUserApi";
export default function Home() {
  const handleClick = async () => {
    const res = await setUserApi();
    console.log('res', res)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="bg-white w-36 h-10 text-black" onClick={handleClick}>setUser</button>
    </main>
  );
}
