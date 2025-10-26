import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

function MenuCard({ item, addToCart }) {
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const descRef = useRef(null);
  const [descHeight, setDescHeight] = useState("3rem");

  useEffect(() => {
    if (descRef.current) {
      const fullHeight = descRef.current.scrollHeight + "px";
      setDescHeight(expanded ? fullHeight : "3rem");
    }
  }, [expanded]);

  return (
    <>
      {/* Card */}
      <div
        className="relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md p-3 m-2 w-full max-w-md flex items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        <img
          src={item.image || "https://via.placeholder.com/100"}
          alt={item.name}
          className="w-20 h-20 rounded-xl object-cover shadow-sm border"
        />

        <div className="ml-4 flex flex-col justify-between flex-grow h-full">
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: descHeight }}
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering popup
              setExpanded(!expanded);
            }}
          >
            <p
              ref={descRef}
              className="text-xs text-gray-600 mt-1 leading-snug"
            >
              {item.description}
            </p>
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="text-orange-500 font-semibold text-base">
              ₹ {item.price}
            </span>
            {addToCart && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent popup
                  addToCart(item);
                }}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1.5 rounded-xl transition"
              >
                <FaPlus className="text-xs" /> Add
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-sm w-full relative animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <FaTimes size={18} />
            </button>

            <img
              src={item.image || "https://via.placeholder.com/300"}
              alt={item.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />

            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <p className="text-orange-500 font-semibold text-lg mb-4">
                ₹ {item.price}
              </p>

              {addToCart && (
                <button
                  onClick={() => {
                    addToCart(item);
                    setShowPopup(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition w-full"
                >
                  <FaPlus /> Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuCard;
