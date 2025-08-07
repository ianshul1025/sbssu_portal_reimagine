import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const photos = [
  { src: "/assets/vcwelcome.jpg", caption: "Tech Fest 2024" },
  { src: "/assets/vcsign.jpg", caption: "Sports Meet" },
  { src: "/assets/vcofficewelcome.jpg", caption: "Cultural Night" },
  { src: "/assets/vchawan.jpg", caption: "Independence Day" },
  { src: "/assets/vcgroupphoto.jpg", caption: "Convocation 2023" },
  { src: "/assets/placementwelcome.jpg", caption: "Placement Drive" },
  { src: "/assets/placementteachers.jpg", caption: "Guest Lecture" },
  { src: "/assets/placementgroupphoto.jpg", caption: "Group Photo" },
  { src: "/assets/placementstudentsgroup.jpg", caption: "Student Meet" },
  ...Array.from({ length: 13 }, (_, i) => ({
    src: `/assets/sportsmeet${i + 1}.jpg`,
    caption: "Sports Meet",
  })),
  ...Array.from({ length: 29 }, (_, i) => ({
    src: `/assets/techfest${i + 1}.jpg`,
    caption: "Tech Fest",
  })),
];

const chunkPhotos = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const SwipeableGrid = () => {
  const [modal, setModal] = useState({ open: false, photo: null });
  const imgRef = useRef(null);

  const openModal = (photo) => {
    setModal({ open: true, photo });
    setTimeout(() => {
      if (imgRef.current?.requestFullscreen) {
        imgRef.current.requestFullscreen().catch(() => {});
      }
    }, 100);
  };

  const closeModal = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    setModal({ open: false, photo: null });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const photoChunks = chunkPhotos(photos, 6);

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-[#DB2121] mb-4">
        Campus Pulse
      </h2>
      <section className="bg-[#F5F0A0] rounded-3xl mx-4 md:mx-12 lg:mx-7 mb-7 pt-6 pb-6 px-6 relative">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          navigation
          pagination={{ clickable: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.3,
            thresholdDelta: 50,
            releaseOnEdges: true,
          }}
          slidesPerView={1}
          spaceBetween={20}
          speed={500}
          allowTouchMove={true}
          className="rounded-lg"
        >
          {photoChunks.map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {chunk.map((photo, i) => (
                  <div
                    key={i}
                    onClick={() => openModal(photo)}
                    className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition duration-300">
                      {photo.caption}
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {modal.open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4"
            onClick={closeModal}
          >
            <div
              className="relative max-w-6xl w-full h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white text-black rounded-full p-2 text-xl z-50 hover:bg-red-600 hover:text-white transition"
                aria-label="Close"
              >
                &times;
              </button>

              <img
                ref={imgRef}
                src={modal.photo.src}
                alt={modal.photo.caption}
                className="w-full h-full object-contain touch-pan-y cursor-zoom-in"
                draggable="false"
                onDoubleClick={(e) => {
                  const el = e.target;
                  if (document.fullscreenElement) {
                    document.exitFullscreen();
                  } else {
                    el.requestFullscreen?.();
                  }
                }}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SwipeableGrid;
