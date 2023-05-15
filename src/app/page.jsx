"use client";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

export async function getProductFeed() {
  const res = await fetch(`https://fakestoreapi.com/products`);

  return res.json();
}

export default async function Home() {
  const products = await getProductFeed();
  
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}


