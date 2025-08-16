import React from "react";

function Gallery({ data }) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">
        {data.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`gallery-${idx}`}
            className="rounded-xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
