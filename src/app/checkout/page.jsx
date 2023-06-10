"use client";

import Header from "@/components/Header";
import Image from "next/image";

function page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg: flex max-w-screen-2xl mx-auto ">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            width={1020}
            height={250}
            style={{ objectFit: "contain" }}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shoping Basket</h1>
          </div>
        </div>

        {/* Right */}
        <dir></dir>
      </main>
    </div>
  );
}

export default page;
