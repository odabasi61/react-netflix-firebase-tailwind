import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

// row componentine her bir row için başlık (string şeklinde) ve row türü için url yolladık. reusable row oluşturduk. birden fazla row için kullanıyoruz.

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowId="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowId="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Home;
