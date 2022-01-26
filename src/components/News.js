import React, { Component } from "react";
import Newscompnent from "./Newscompnent";

export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "The Indian Express" },
      author: "Tech Desk",
      title:
        "Ready for Galaxy S22? Samsung to host its Unpacked event on February 9 - The Indian Express",
      description:
        "Samsung is expected to announce the Galaxy S22 series, including the Galaxy Note successor, at its big Unpacked event on February 9.",
      url: "https://indianexpress.com/article/technology/mobile-tabs/samsung-unpacked-2022-galaxy-s22-series-7741974/",
      urlToImage: "https://images.indianexpress.com/2022/01/S22.jpg",
      publishedAt: "2022-01-26T03:16:40Z",
      content:
        "Fans of the Galaxy S series, mark your calendars.Samsung confirmed Wednesday it is live-streaming its next big Unpacked hardware event on February 9, where the South Korean giant will likely launch t… [+1988 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title: "73rd Republic Day Today, Many Firsts In Grand Parade - NDTV",
      description:
        "India's military might and cultural diversity will be showcased today as the country celebrates its 73rd Republic Day.",
      url: "https://www.ndtv.com/india-news/republic-day-2022-73rd-republic-day-today-grand-parade-to-have-many-firsts-2728709",
      urlToImage:
        "https://c.ndtvimg.com/2022-01/fk2kuagg_republic-day_625x300_26_January_22.jpg",
      publishedAt: "2022-01-26T03:00:00Z",
      content:
        "The celebrations this year are special as India is in the 75th year of Independence.\r\nNew Delhi: India's military might and cultural diversity will be showcased today as the country celebrates its 73… [+2608 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Arani Basu",
      title:
        "Cheteshwar Pujara, Ajinkya Rahane face demotion in central contracts - Times of India",
      description:
        "Cricket News: With the Indian team on the cusp of a transition, the Indian cricket board (BCCI) is likely to make major changes in the central contracts of players.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/cheteshwar-pujara-ajinkya-rahane-face-demotion-in-central-contracts/articleshow/89129121.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-89129100,width-1070,height-580,imgsize-52852,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-01-26T03:00:00Z",
      content:
        "Fit-again Rohit Sharma set to lead against West IndiesThe national selectors will announce the squads for the One-day and T20 teams that will play the upcoming series against the West Indies over the… [+20 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Buddhadeb Bhattacharjee requests no visit, call from govt officials over Padma Bhushan row - Hindustan Times",
      description:
        "After the home ministry said that officials calls Buddhadeb Bhattacharjee's residence and informed about the government's decision to confer him with the Padma Bhushan, his family said that the call got disconnected soon after giving the information.  | Lates…",
      url: "https://www.hindustantimes.com/india-news/buddhadeb-bhattacharjee-requests-no-visit-call-from-govt-officials-over-padma-101643164818032.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/26/1600x900/buddhadeb_1643165253788_1643165264090.jpg",
      publishedAt: "2022-01-26T02:53:31Z",
      content:
        "Former West Bengal chief minister Buddhadeb Bhattacharjee has requested that government officials should not call or visit him regarding the matter of Padma Bhushan, which the communist veteran, on t… [+2381 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Buzz Staff",
      title:
        "Anand Mahindra Responds After Karnataka Farmer Insulted at Car Showroom - News18",
      description:
        "Anand Mahindra was tagged on Twitter by several users after the row had broken out over the Karnataka farmer alleging misbehaviour from a sales executive at the company's showroom.",
      url: "https://www.news18.com/news/buzz/anand-mahindra-responds-after-karnataka-farmer-insulted-at-car-showroom-4699523.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2022/01/anand-mahindra-ktaka-farmer-164316445516x9.png",
      publishedAt: "2022-01-26T02:52:44Z",
      content:
        "Mahindra Group chairman Anand Mahindra has responded to the controversy that occurred on social media after videos of a Karnataka farmer being insulted purportedly at one of the company’s car showroo… [+2925 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Microsoft beats quarterly revenue estimates on cloud strength - Moneycontrol",
      description:
        "While revenue beat expectations it failed to turn around the negative market sentiment that has dragged down stocks. Microsoft shares were down about 3% in after-hours trading.",
      url: "https://www.moneycontrol.com/news/business/microsoft-beats-quarterly-revenue-estimates-on-cloud-strength-7985931.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/06/Microsoft-Satya-Nadella-770x433.jpg",
      publishedAt: "2022-01-26T02:44:25Z",
      content:
        "Microsoft Corp exceeded analysts' expectations for second-quarter revenue on January 25, propelled by strong demand for its cloud-based services from more businesses migrating to hybrid work models d… [+1643 chars]",
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Priyanka Goud",
      title:
        "Prithviraj Sukumaran pens note as his film Bro Daddy with Mohanlal releases; Calls himself accidental director - PINKVILLA",
      description:
        "Hours ahead of the film's release, Prithviraj Sukumaran took to social media and penned a long note about working with Mohanlal, cast, how he equipped himself for Bro Daddy, and others.",
      url: "https://www.pinkvilla.com/entertainment/south/prithviraj-sukumaran-pens-note-his-film-bro-daddy-mohanlal-releases-calls-himself-accidental-director-1006472",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/prithviraj_sukumaran_bro_daddy.jpg?itok=7uqw8BPv",
      publishedAt: "2022-01-26T02:43:22Z",
      content:
        "Prithviraj Sukumaran is popularly known for his acting and direction stints in Mollywood. The actor, who made his debut as a director with Lucifer and bagged blockbuster success, has released his sec… [+1556 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "K Shriniwas Rao",
      title:
        "Fit-again Rohit Sharma set to lead against West Indies - Times of India",
      description:
        "Cricket News: The national selectors will announce the squads for the One-day and T20 teams that will play the upcoming series against the West Indies over the next",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/fit-again-rohit-sharma-set-to-lead-against-west-indies/articleshow/89128830.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-89128816,width-1070,height-580,imgsize-32434,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-01-26T02:41:00Z",
      content:
        "Cheteshwar Pujara, Ajinkya Rahane face demotion in central contractsWith the Indian team on the cusp of a transition, the Indian cricket board (BCCI) is likely to make major changes in the central co… [+168 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "CBSE Result 2022 Live Updates: Class 10, 12 results ‘soon’ on Digilocker - Hindustan Times",
      description:
        "CBSE Result 2022 Live Updates: Class 10, 12 result is coming soon on Digilocker. The result can be checked on digilocker.gov.in and on official website of CBSE and CBSE results.",
      url: "https://www.hindustantimes.com/education/board-exams/cbse-result-2022-live-updates-class-10-12-result-at-cbseresultsnicin-101643092978464.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/01/25/1600x900/cbse_term_i_result_1643093129567_1643093160323.png",
      publishedAt: "2022-01-26T02:20:31Z",
      content:
        "Central Board of Secondary Education will release CBSE Term 1 Results 2022 on Digilocker soon. The Class 10, 12 result will be available on the official website of Digilocker on digilocker.gov.in. Th… [+7047 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "Shivani Gupta",
      title:
        "Virat Kohli Knew Rahul Dravid Wasn't Like Ravi Shastri; Give Rohit Sharma At Least a Year as Captain and Co - News18",
      description:
        "The former Indian batsman also said that picking the right playing XI was a big problem with Virat Kohli and added that the only deserving candidate for captaincy in all three formats is Rohit Sharma.",
      url: "https://www.news18.com/cricketnext/news/virat-kohli-knew-rahul-dravid-wasnt-like-ravi-shastri-give-rohit-sharma-at-least-a-year-as-captain-and-coach-more-power-sanjay-manjrekar-4697870.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2021/12/dravid-working-on-virat-kohlis-batting-in-nets-164006116916x9.jpg",
      publishedAt: "2022-01-26T02:00:45Z",
      content:
        "As Indian cricket goes through a period of transition and one of its toughest phases, commentator and former batsman Sanjay Manjrekar shares his thoughts in a wide-ranging interview with CNN-News18 o… [+17803 chars]",
    },
    {
      source: { id: null, name: "India TV News" },
      author: "India TV News Desk",
      title:
        "R-Day 2022: Rajpath parade to showcase India's military might, cultural diversity - Full Schedule - India TV News",
      description:
        "R-Day 2022: Rajpath parade to showcase India's military might, cultural diversity - Full Schedule",
      url: "https://www.indiatvnews.com/news/india/republic-day-2022-parade-india-military-might-cultural-diversity-rajpath-parade-schedule-2022-01-26-756333",
      urlToImage:
        "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/01/pti01-24-2022-000235b-1643162096.jpg",
      publishedAt: "2022-01-26T01:58:05Z",
      content:
        "<ul><li>President Ram Nath Kovind will lead the Nation in celebrating 73rd Republic Day today </li><li>The celebrations this year are special as Republic Day falls in the 75th year of Independence </… [+6107 chars]",
    },
    {
      source: { id: null, name: "The Tribune India" },
      author: "The Tribune India",
      title:
        "Punjab Assembly poll: Ex-CMs Brar, Bhattal's kin on Congress' 2nd list - The Tribune India",
      description:
        "The Congress has fielded former Chief Minister Harcharan Brar&rsquo;s daughter-in-law Karan Brar from Muktsar, former CM Rajinder Kaur Bhattal&rsquo;s son-in-law Vikram Bajwa from Sahnewal and former AAP leader Ashu Bangar from Ferozepur Rural in the second l…",
      url: "https://www.tribuneindia.com/news/punjab/ex-cms-brar-bhattals-kin-on-2nd-list-364444",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/1/2022_1$largeimg_1409922904.jpg",
      publishedAt: "2022-01-26T01:19:00Z",
      content:
        "New Delhi, January 25\r\nThe Congress has fielded former Chief Minister Harcharan Brar’s daughter-in-law Karan Brar from Muktsar, former CM Rajinder Kaur Bhattal’s son-in-law Vikram Bajwa from Sahnewal… [+2298 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Sugata Ghosh and Sachin Dave",
      title:
        "Mauritius-based PEs on taxman's radar, at least 7 get notices - Economic Times",
      description:
        "If the income tax (I-T) department has good reasons to believe that a fund's 'place of effective management' (or POEM in tax parlance) is somewhere else-where the key decision makers are located -and not Mauritius, many funds could find themselves exposed to …",
      url: "https://economictimes.indiatimes.com/industry/banking/finance/mauritius-based-pes-on-taxmans-radar-at-least-7-get-notices/articleshow/89127690.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-89127713,width-1070,height-580,imgsize-38922,overlay-economictimes/photo.jpg",
      publishedAt: "2022-01-26T00:34:00Z",
      content:
        "The Indian tax office has asked several Mauritius-based private equity (PE) funds to share their minutes of board meetings, deal agreements, residency and addresses of directors, and names of ultimat… [+4617 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Gaurav Laghate",
      title:
        "Uday Shankar, James Murdoch plan to pick up nearly 40% in Viacom18, Reliance to retain majority stake - Economic Times",
      description:
        "The bulk of the investment is likely to be by way of primary infusion of funds. Besides the Murdoch-Shankar duo - who are coming in as strategic investor - a few financial investors may also buy stakes.",
      url: "https://economictimes.indiatimes.com/industry/media/entertainment/media/uday-shankar-james-murdoch-plan-to-pick-up-nearly-40-in-viacom18-reliance-to-retain-majority-stake/articleshow/89127603.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-89127664,width-1070,height-580,imgsize-29664,overlay-economictimes/photo.jpg",
      publishedAt: "2022-01-26T00:21:00Z",
      content:
        "Industries, along with other investors - notably James Murdoch and Uday Shankar - plan to invest over 12,000 crore in the entertainment and sports broadcasting business, responding to an industry con… [+3223 chars]",
    },
    {
      source: { id: null, name: "Medical Xpress" },
      author: "Science X staff",
      title:
        "Make-up of gut microbiome may be linked to long COVID risk - Medical Xpress",
      description:
        "The make-up of the gut microbiome may be linked to a person's risk of developing 'long COVID' many months after initial infection with SARS-CoV-2, the virus responsible for COVID-19 infection, suggests research published online in the journal Gut.",
      url: "https://medicalxpress.com/news/2022-01-make-up-gut-microbiome-linked-covid.html",
      urlToImage: "https://scx2.b-cdn.net/gfx/news/2020/41-coronavirusc.jpg",
      publishedAt: "2022-01-25T23:30:01Z",
      content:
        "The make-up of the gut microbiome may be linked to a person's risk of developing 'long COVID' many months after initial infection with SARS-CoV-2, the virus responsible for COVID-19 infection, sugges… [+6644 chars]",
    },
    {
      source: { id: null, name: "Sci-News.com" },
      author: null,
      title:
        "Physicists Detect Exotic Particles in Quark-Gluon Plasma - Sci-News.com",
      description:
        "Physicists from the CMS (Compact Muon Solenoid) Collaboration at CERN’s Large Hadron Collider have detected about 100 particles of a type known as X(3872) in quark-gluon plasma, an environment that they hope will illuminate the particles’ as-yet unknown struc…",
      url: "http://www.sci-news.com/physics/x-3872-particles-quark-gluon-plasma-10488.html",
      urlToImage:
        "http://cdn.sci-news.com/images/2022/01/image_10488f-X3872.jpg",
      publishedAt: "2022-01-25T22:58:01Z",
      content:
        "Physicists from the CMS (Compact Muon Solenoid) Collaboration at CERNs Large Hadron Collider have detected about 100 particles of a type known as X(3872) in quark-gluon plasma, an environment that th… [+3980 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Samir Jain",
      title:
        "Horoscope Today, 26 January 2022: Check astrological prediction for Aries, Taurus, Gemini, Cancer and oth - Times of India",
      description:
        "Horoscope(Old) News: Read your horoscope predictions to know what the stars have in store for you today: Aries Today, you may enjoy it with your family.",
      url: "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-26-january-2022-check-astrological-prediction-for-aries-taurus-gemini-cancer-and-other-signs/articleshow/89089420.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-89089367,width-1070,height-580,imgsize-244423,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-01-25T22:30:00Z",
      content: null,
    },
    {
      source: { id: null, name: "PINKVILLA" },
      author: "Pinkvilla Desk",
      title:
        "Fans flood Twitter with heartfelt wishes as Yuvraj Singh and Hazel Keech welcome baby boy - PINKVILLA",
      description:
        "2018We are elated2019, said Yuvraj Singh and Hazel Keech as they welcomed their first child on January 25.",
      url: "https://www.pinkvilla.com/entertainment/news/fans-flood-twitter-heartfelt-wishes-yuvraj-singh-and-hazel-keech-welcome-baby-boy-1006432",
      urlToImage:
        "https://www.pinkvilla.com/files/styles/fbimagesection/public/yuvraj_singh_hazel_keech_social_2.jpg?itok=DUIz70VC",
      publishedAt: "2022-01-25T20:51:28Z",
      content:
        "Actor Hazel Keech and former cricketer Yuvraj Singh’s fans have flooded Twitter with heartfelt wishes as the couple on Tuesday got blessed with their first child. Sharing the good news, Yuvraj and Ha… [+1698 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Michail",
      title:
        "OnePlus could launch 10 Ultra model later this year - GSMArena.com news - GSMArena.com",
      description:
        "The device will reportedly featureOppo's in-house MariSilicon X NPU chip.",
      url: "https://www.gsmarena.com/oneplus_could_launch_an_ultra_model_later_this_year-news-52853.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/22/01/oneplus-10-ultra-rumor/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2022-01-25T20:13:01Z",
      content:
        "With the OnePlus 10 Pro already out in China and reportedly coming to Europe in March we looked set in terms of premium OnePlus phones. Yet a new rumor however suggests that we may see an Ultra model… [+832 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Reuters",
      title: "New NASA space telescope reaches Sun orbit destination - HT Tech",
      description:
        "The new NASA James Webb Space Telescope, designed to give the world an unprecedented glimpse of infant galaxies in the early stages of the universe.",
      url: "https://tech.hindustantimes.com/tech/news/new-nasa-space-telescope-reaches-sun-orbit-destination-71643140215282.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2022/01/25/1600x900/NASA-Space-Telescope-1_1643140332235_1643140376345.jpg",
      publishedAt: "2022-01-25T19:56:12Z",
      content:
        "The new NASA James Webb Space Telescope, designed to give the world an unprecedented glimpse of infant galaxies in the early stages of the universe, arrived at its gravitational parking spot in orbit… [+4687 chars]",
    },
  ];
  constructor() {
    super();
    console.log(" Hello from News.js");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=63f7ed9538ea40359414c6cb5fa0d6b2";
      let data  = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
            articles: parsedData.articles,
      })
  }
  render() {
    return (
      <div className="container my-3">
        <h2>India - Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Newscompnent
                  title={element.title?element.title.slice(0, 45):""}
                  Description={element.description?element.description.slice(0, 88):""}
                  newsUrl={element.url}
                  imgUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}