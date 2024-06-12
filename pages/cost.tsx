import React from "react";
import Image from "next/image";

// ...

// Inside your component returning JSX:

export default function cost() {
  return (
    <>
      <div>cost</div>
      <Image
        src="/images/ThePorróHat.jpg" // Use your image path here
        alt="Descriptive text for the image"
        width={200} // Desired size for the image
        height={200} // Maintain aspect ratio
        layout="responsive" // Optional: Adjust as needed (fixed, fill, etc.)
        priority={true} // Optional: Preload this image, if it's above-the-fold
      />
    </>
  );
}
