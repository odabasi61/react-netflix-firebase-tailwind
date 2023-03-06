// apiyi Requests.js içerisine ekledik. şimdi burada import ediyoruz ve aşağıda axios ile fetch edeceğiz.
// useeffect kullanıyoruz bu sayede sayfa her yenilendiğinde içerik geliyor.
import requests from "../Requests";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // movies arrayı içinden rastgele bir movie seçiyoruz. bunu ana ekranın üstünde kullanacağız. ekranın her yenilenmesinde farklı bir film fragmanı görünecek.
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  // uzun olan paragrafın belirli bir kısmına readmore diyoruz ve tüm paragraflar böylece belirli uzunlukta eşitleniyor. readmore a tıklayınca paragraf uzuyor.
  // const truncateString = (str, num) => {
  //   if (str.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // };
  // yukardaki fonksiyon 1.yol aşağıdaki usestate ise 2.yol
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {/* nested şeklindeki objelere ulaşırken optional chain yapıyoruz(?). ayrıca image kısmı için farklı bir yol izledik. bunun nedeni api aldığmız sitenin dökümantasyonunda bu şekilde terif edilmesi */}
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="flex gap-4 py-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {/* {truncateString(movie?.overview, 150)} */}
            {/* 150 karakter sayısıdır. 150 den sonra readmore görünür. yukarısı 1.yol aşağısı 2.yol */}
            {readMore
              ? movie?.overview
              : `${movie?.overview.substring(0, 150)}...`}
            <button
              className="text-red-400"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "[show less]" : "[read more]"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
