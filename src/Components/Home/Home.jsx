import React, { useState, useRef } from 'react';

function HomePage() {
  const [images, setImages] = useState([]);
  const imageRefs = useRef([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const caption = prompt("Please enter a caption for the photo:");
      if (caption !== null) {
        setImages([{ src: reader.result, caption }, ...images]);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageLoaded = (index) => {
    const image = imageRefs.current[index];
    if (image) {
      const aspectRatio = image.naturalWidth / image.naturalHeight;
      const style = aspectRatio > 1 ? { aspectRatio: `${aspectRatio}/1` } : { aspectRatio: `1/${1/aspectRatio}` };
      image.parentNode.style.maxWidth = '100%';
      Object.assign(image.style, style);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-900  mb-8">
          Share Your
          <span className="text-blue-500"> TINT </span>
          Memories
        </h1>
        <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4 md:mt-0">
          Choose File
          <input 
            type="file" 
            id="file-upload"
            accept="image/*" 
            onChange={handleImageUpload} 
            className="hidden"
          />
        </label>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {images.map((image, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <img 
                src={image.src} 
                alt="Uploaded" 
                className="object-cover w-full" 
                ref={el => imageRefs.current[index] = el}
                onLoad={() => handleImageLoaded(index)}
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-blue-600">Uploaded Photo:</h2>
                <p className="text-gray-700">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
