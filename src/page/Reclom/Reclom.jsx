// import YouTube from "react-youtube";
// import "./Reclom.css";
// const Reclom = () => {
//   const onPlayerReady = (event) => {
//     event.target.pauseVideo();
//   };

//   const opts = {
//     height: "290",
//     width: "350",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="reclom">
//       <YouTube
//         videoId={"Df9U25b7mls"}
//         opts={opts}
//         className="video"
//         onReady={onPlayerReady}
//       />

//       <YouTube
//         videoId={"KvVPDvKWXf0"}
//         className="video"
//         opts={opts}
//         onReady={onPlayerReady}
//       />
//     </div>
//   );
// };

// export default Reclom;




import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Orqaga qaytarish uchun

const Reclom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Instagramni yangi oynada (yoki ilovada) ochadi
    window.open("https://www.instagram.com/movarounnahr__choyxona?igsh=YnI4azM2NXU5dmIz", "_blank", "noopener,noreferrer");
    
    // 2. Saytingiz orqa fonda darhol asosiy sahifaga qaytib oladi
    navigate("/");
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Instagram sahifamiz ochilmoqda...</h3>
    </div>
  );
};

export default Reclom;
