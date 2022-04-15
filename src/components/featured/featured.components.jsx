import React from "react";
import "./featured.style.css";

function Featured() {
  const banner = [
    {
      imgsrc:
        "https://thumbs.dreamstime.com/b/dynamic-radial-color-sound-equalizer-design-music-album-cover-template-abstract-circular-digital-data-form-vector-160916775.jpg",
    },
    {
      imgsrc:
        "https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg",
    },
    {
      imgsrc:
        "https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg",
    },
    {
      imgsrc:
        "https://cdn.smehost.net/sonymusiccomau-auprod/wp-content/uploads/Havanna-Album-Artwork.jpeg",
    },
    {
      imgsrc:
        "https://cdn5.vectorstock.com/i/1000x1000/65/04/abstract-color-music-album-cover-energy-sound-vector-27836504.jpg",
    },
    {
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFPly1gWM_zdPZO0loSBi8PZCnyDHmlBiaA&usqp=CAU",
    },
  ];

  return (
    <div className="featured-music">
      {banner.map((img) => (
        <img className="ft-banners" src={img.imgsrc} alt="" />
      ))}
    </div>
  );
}

export default Featured;
