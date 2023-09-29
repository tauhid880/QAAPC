import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "./Gallery.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";

const Gallery = () => {
  // const [togglers, setTogglers] = useState(false);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  // console.log(tempImgSrc);
  const data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
  ];

  // const getImg = (imgSrc) => {
  //   setTempImgSrc(imgSrc);
  // };
  return (
    <>
      <div
        id="gallery"
        className="lg:my-36 my-10"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="2000"
      >
        <h1 className="text-center font-bold text-4xl lg:my-10 font-Poppins">
          Gallery
        </h1>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                // onClick={() => getImg(item.imgSrc)}
                onClick={() => openLightboxOnSlide(index + 1)}
              >
                <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={[
          "img1.jpg",
          "img2.jpg",
          "img3.jpg",
          "img4.jpg",
          "img5.jpg",
          "img6.jpeg",
          "img7.jpeg",
          "img8.jpeg",
        ]}
      />

      {/*  */}
      {/* <img
        onClick={() => setToggler(!toggler)}
        src="https://i.imgur.com/fsyrScY.jpg"
        alt=""
        className="cursor-pointer"
      />
      <FsLightbox
        toggler={toggler}
        sources={["https://i.imgur.com/fsyrScY.jpg"]}
      /> */}
    </>
  );
};

export default Gallery;
