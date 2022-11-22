import React from "react";
import "@lottiefiles/lottie-player";
const Home = () => {
  return (
   <div>
    <div>
    <div className="block md:flex justify-between items-center w-3/4 mx-auto m-4">
    <div>
        <lottie-player
          autoplay
          // controls
          loop
          mode="normal"
          src="https://assets5.lottiefiles.com/packages/lf20_fcecpvzp.json"
          style={{ width: "320px" }}
        ></lottie-player>
      </div>
      <div>
        <h1
           
          className="font-serif text-lg"
        >
           <span className="font-semibold italic">Islamic Ilm Center </span> is a NON – PROFIT organisation. Our objective is to make our program accessible to as many families as possible. We strive to maintain the highest standard in our academics and in all of our program offerings with consistent focus on the Tarbiyah of our students.
        </h1>
      </div>
     
    </div>
    </div>
    <div>
    <div className="block md:flex justify-between items-center w-3/4 mx-auto">
      <div>
        <h1
          style={{ color: "#404040" }}
          className="font-serif font-bold italic text-lg"
        >
          “Proclaim! (or read!) in the name of thy Lord and Cherisher, Who created – Created man, out of a (mere) clot of congealed blood: Proclaim! And thy Lord is Most Bountiful, He Who taught (the use of) the pen, Taught man that which he knew not….” (Quran
            96:1-5)
        </h1>
      </div>
      <div>
        <lottie-player
          autoplay
          // controls
          loop
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_5tvcbbnr.json"
          style={{ width: "320px" }}
        ></lottie-player>
      </div>
    </div>
    </div>
   </div>
  );
};

export default Home;
