import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";
import { authOptions } from "./api/auth/[...nextauth]/route.js";
import { getServerSession } from "next-auth/next";

export async function getProductFeed() {
  const res = await fetch(`https://fakestoreapi.com/products`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const session = await getServerSession(authOptions);

  const products = await getProductFeed();

  return (
    <div className="bg-gray-100">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Header session={session} />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}
