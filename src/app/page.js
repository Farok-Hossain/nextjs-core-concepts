import React from "react";
import GalleryPage from "./gallery/page";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: { revalidate: 5 },
  });
  const shoes = await res.json();
  // console.log(data);
  return (
    <div className="text-center m-5">
      <h1 className="text-center text-4xl">Next.js image optimization</h1>
      <div className=" grid lg:grid-cols-3 m-3 md:grid-cols-2 sm:grid-cols-1">
        {shoes.slice(0, 5).map((shoe) => (
          <div
            key={shoe.id}
            className="card bg-base-100 w-96 shadow-xl mx-auto mb-4"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.name}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link href="/all-shoes">
        <button className="btn btn-secondary">See More</button>
      </Link>
    </div>
  );
};

export default HomePage;
