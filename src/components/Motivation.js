// import React, { useState } from 'react';

// function Motivation({ message }) {
//   const [imageSrc, setImageSrc] = useState('https://source.unsplash.com/800x200/?inspiration,motivation');

//   const handleImageError = () => {
//     // Fallback to a local image if the Unsplash image fails
//     setImageSrc('/motivational.jpg'); // Ensure this image is present in the `public` folder
//   };

//   return (
//     <div className="motivation">
//       <h2>Daily Motivation</h2>
//       <p>{message}</p>
//       <img
//         src={imageSrc}
//         alt="Motivational"
//         className="motivation-image"
//         onError={handleImageError} // Trigger fallback if image fails
//       />
//     </div>
//   );
// }

// export default Motivation;
