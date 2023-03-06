import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

// row componentine her bir row için başlık (string şeklinde) ve row türü için url yolladık. reusable row oluşturduk. birden fazla row için kullanıyoruz.

const Home = () => {
  return (
    <div>
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
