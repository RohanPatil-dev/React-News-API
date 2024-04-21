import React, { useState, useEffect } from "react";

import Buttons from "./Buttons"
import NewsData from "./NewsData";

// const articles = [
//   {
//     source: { id: null, name: "Buffalo News" },
//     author: "Lisa M. Krieger The Mercury News",
//     title: "Used EV shopping? How to get a deal on electric vehicles",
//     description:
//       "A price war is sweeping the EV industry, making them as cheap as gas-powered cars and hybrids. Here’s how to find the best deals.",
//     url: "https://buffalonews.com/news/nation-world/business/personal-finance/used-ev-shopping-electric-vehicle-deals/article_8a0dce52-3194-5152-b46d-54e6a5295676.html",
//     urlToImage:
//       "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/8/a0/8a0dce52-3194-5152-b46d-54e6a5295676/65fe365219ab8.preview.jpg?crop=1210%2C635%2C0%2C92&resize=1200%2C630&order=crop%2Cresize",
//     publishedAt: "2024-03-23T10:12:37Z",
//     content:
//       "Henrietta Burroughs was so deeply devoted to her 1991 Dodge Dynasty that she saved its floor mats to honor the cars two decades of service.\r\nBut everything else about its replacement a bright red 201… [+12218 chars]",
//   },
//   {
//     source: { id: null, name: "Detroit Free Press" },
//     author: "Benzinga",
//     title: "No rate cuts in March but Fed chair hints they're coming",
//     description:
//       "Jerome Powell downplayed the unexpected inflation surges in January and February, pushing the market to anticipate a 72% chance of a rate cut by June.",
//     url: "https://www.freep.com/story/money/business/2024/03/23/no-rate-cuts-march/73038820007/",
//     urlToImage:
//       "https://s.yimg.com/ny/api/res/1.2/xj1alV7omSJSWyF9lFF_Zw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/detroit-free-press/c328240f6c3cb6de671f724adf22da2d",
//     publishedAt: "2024-03-23T10:05:40Z",
//     content:
//       "The Federal Reserve kept rates unchanged at its March meeting but new forecasts confirmed plans for three 25-basis-point rate cuts this year, boosting Wall Street optimism.\r\nFed Chair Jerome Powell h… [+2146 chars]",
//   },
//   {
//     source: { id: null, name: "Newsmotor.com.br" },
//     author: "News Motor",
//     title:
//       "Cama, videogame e drone: carros elétricos ousam com inovações para o motorista",
//     description:
//       "Muito além de karaokê dentro dos carros, montadora chinesa aposta em diferenciais para atrair os consumidores. O post Cama, videogame...",
//     url: "https://newsmotor.com.br/cama-videogame-e-drone-carros-eletricos-ousam-com-inovacoes-para-o-motorista/",
//     urlToImage:
//       "https://newsmotor.com.br/wp-content/uploads/2024/03/Polestones-01-SUV-20.webp",
//     publishedAt: "2024-03-23T10:03:02Z",
//     content:
//       "As montadoras chinesas adotaram uma estratégia interessante para tentar recuperar a demanda dos consumidores perdida nos últimos meses: apostar em itens como videogames, drones, cama e até fogão nos … [+3224 chars]",
//   },
//   {
//     source: { id: null, name: "DIE WELT" },
//     author: null,
//     title: "„Der Generalbundesanwalt ermittelt jetzt im Fall der Vulkangruppe“",
//     description:
//       "Ein mutmaßlicher Anschlag hat die einzige Tesla-Autofabrik in Europa mit einem Stromausfall lahmgelegt. Die Polizei geht von Brandstiftung aus. WELT-Investigativ-Redakteur Lennart Pfahler über sein Recherchen: „Die Sicherheitsbehörden würden zumindest sagen, …",
//     url: "https://www.welt.de/politik/deutschland/video250711418/Faeser-sieht-erhebliche-linksextremistische-Bedrohung-Der-GBA-ermittelt-im-Fall-der-Vulkangruppe.html",
//     urlToImage:
//       "https://img.welt.de/img/politik/deutschland/mobile250711644/1421354727-ci16x9-w1200/start-lennart-jpg.jpg",
//     publishedAt: "2024-03-23T10:02:35Z",
//     content:
//       "Die WELT als ePaper: Die vollständige Ausgabe steht Ihnen bereits am Vorabend zur Verfügung so sind Sie immer hochaktuell informiert. Weitere Informationen: http://epaper.welt.de \r\n Der Kurz-Link die… [+49 chars]",
//   },
//   {
//     source: { id: null, name: "Abertoatedemadrugada.com" },
//     author: "Nuno Barros",
//     title:
//       "ChargeGuru Zeplug facilita carregamento de veículos eléctricos em condomínios e empresas",
//     description:
//       "A ChargeGuru lança em Portugal o seu serviço Zeplug, que tem como principal objectivo ser a solução de carregamento eléctrico em condomínios e empresa",
//     url: "https://abertoatedemadrugada.com/2024/03/chargeguru-zeplug-facilita-carregamento.html",
//     urlToImage:
//       "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipEQ-PGJF1Crwy0vN7crpjtgZav8wrybEQUaZavAOTVBeUHErybdyJN3n7mv0i6jurezrZvYNABXTL6JjIYACrshavYYqO7Owe1gE_qWb8xVhLnxt6REELrQZ0LSJAgQG2E9zjqz1cocftL85VlCkQhYQuTdRBzW5rrN0qfAteujlJRfG1kDNXSxX0tEyM/w1200-h630-p-k-no-nu/zeplug.jpg",
//     publishedAt: "2024-03-23T10:00:00Z",
//     content:
//       "A ChargeGuru lança em Portugal o seu serviço Zeplug, que tem como principal objectivo ser a solução de carregamento eléctrico que permite ultrapassar os obstáculos existentes nas garagens partilhadas… [+3696 chars]",
//   },
// ];



export default function News(props) {

  const [api, setApi] = useState({
    newsApi : [],
    page : 1,
 })

  useEffect(() => {
    console.log("update mount");

    async function getData() {
      const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-03-21&sortBy=publishedAt&apiKey=c564d4ccf5724eecbb13435af1159605&page=${api.page}`;

       await fetch(url).then((data) => data.json())
      .then((data) => { setApi({newsApi : data.articles,page : 1 }); console.log(data); });
    }
        
  getData()

    return () => {
      console.log("unmount");
    };
  }, []);
  
  console.log("api is",api.newsApi);
  console.log("page is",api.page);

  return (
    <>
      {console.log("render api")}
      <h3 className="ml-5 mt-4">{props.heading} - Top Headline</h3>

      <div
        className="container mt-3"
        style={{ display: "grid",gridTemplateColumns : "auto auto auto auto", gap: "10px 10px" }}
      >
        <div className="row">
          {api.newsApi.map((value) => {
            return (
              <NewsData url={value.url} title={value.title == null ? "" : value.title.slice(0,20)+"..."} description={value.description == null ? "" : value.description.slice(0,30)+"..."} urlImg={value.urlToImage == null ? "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/8/a0/8a0dce52-3194-5152-b46d-54e6a5295676/65fe365219ab8.preview.jpg?crop=1210%2C635%2C0%2C92&resize=1200%2C630&order=crop%2Cresize" : value.urlToImage} />
              // <div className="col" key={value.url} >
              //   <div className="card" style={{ width: "15rem",border : "2px solid black"}}>
              //     <img
              //       className="card-img-top"
              //       src={value.urlToImage == null ? "https://bloximages.chicago2.vip.townnews.com/buffalonews.com/content/tncms/assets/v3/editorial/8/a0/8a0dce52-3194-5152-b46d-54e6a5295676/65fe365219ab8.preview.jpg?crop=1210%2C635%2C0%2C92&resize=1200%2C630&order=crop%2Cresize" : value.urlToImage}
              //       alt="Card image cap"
              //       style={{ height: "150px" }}
              //     />
              //     <div className="card-body">
              //       <h5 className="card-title">{value.title == null ? "" : value.title.slice(0,20)+"..."}</h5>
              //       <p className="card-text">
              //         {value.description == null ? "" : value.description.slice(0,30)+"..." }
              //       </p>
              //       <a href={value.url}  className="btn btn-primary">
              //         Go somewhere
              //       </a>
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>


    <Buttons pages={api.page} set={setApi} />
    </>
  );
}
