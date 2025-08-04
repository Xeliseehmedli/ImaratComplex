import "./App.css";
import Logo from "./assets/logo.svg";
import Imaratbackgr from "./assets/imaratbackground.png";
import history from "./assets/history.png";
import Statue from "./assets/statue.png";
import Mosque from "./assets/1.png";
import City from "./assets/city.png";
import Monument from "./assets/mosque.png";
import Images from "./assets/image.png";
import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import Map from "./assets/map.png";
import gerbLogo from "./assets/Gerb logo.svg";
import imaratLogo from "./assets/imaratlogo.svg";
import { useEffect, useState } from "react";
import Imaratmap from "./assets/imarat map.png";
const navItems = [
  {
    title: "Əsas",
    path: "esas",
  },
  {
    title: "Haqqında",
    path: "haqqinda",
  },
  {
    title: "Qalereya",
    path: "qaleriya",
  },
  {
    title: "Xəritə",
    path: "xerite",
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <header>
        <div className="logo">
          <img src={Logo} />
        </div>
        <nav className="header-nav">
          <ul>
            {navItems.map((link, index) => (
              <li
                key={index}
                className={link.path === activeSection ? "active" : ""}
              >
                <a
                  href={`#${link.path}`}
                  onClick={() => setActiveSection(link.path)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section id="esas" className="hero-section">
        <div className="Imaratbackgr">
          <img src={Imaratbackgr} />
          <p className="imaratLogo-text">Ağdam İmarət Kompleksi</p>
        </div>
      </section>
      <main>
        <section id="haqqinda" className="history">
          <div>
            <h1>Tarixçə</h1>
            <p>
              İmarət qəbiristanlığında yerləşən türbələrin aidiyyətinin
              müəyyənləşdirilməsi üzrə baxılan elmi tədqiqat materillarından (C.
              Aleksandroviç, İ. <br />
              Əzimbəyov və V. Sısoyevin birlikdə 1928-ci ildə nəşr etdirdikləri
              Yevlax - Şuşa adlı kitabı və Məşədixanım Nemətin “Эпиграфических{" "}
              <br />
              памятников Азербайджана» kitabının 5 - ci cildi) məlum olur ki,
              vaxtilə türbələrdə yerləşən məzarlarda, o cümlədən Natəvanın
              qəbirüstü <br />
              abidəsində epiqrafik yazılar olsa da, sovet dövründə həyata
              keçirilən “bərpa” işlərindən sonra həmin yazılar itmişdir
              (itirilmişdir). <br />
              İmarət qəbiristanlığının mövcud divarlarından kənarda- girişin sağ
              tərəfində vaxtilə daha bir türbə olsa da, hazırda mövcud deyildir.
              Lakin, sovet <br />
              dövründə tərtib olunmuş sənədlərdə həmin türbənin cizgisinə rast
              gəlinməkdədir. Habelə imarət qəbiristanlığına yaxın ərazidə xan{" "}
              <br />
              karvansarayının və hamamın da olması barədə məlumatlara rast
              gəlinməkdədir.
            </p>
            <img src={history} />
            <p>
              İmarət qəbiristanlığının mövcud divarlarından kənarda- girişin sağ
              tərəfində vaxtilə daha bir türbə olsa da, hazırda mövcud deyildir.
              Lakin, sovet <br />
              dövründə tərtib olunmuş sənədlərdə həmin türbənin cizgisinə rast
              gəlinməkdədir. <br />
              Çar Rusiyası dövründə bu yerlərin Mehdiqulu xana aid olması
              haqqında sənəd tələb olunan zaman Mehdiqulu xan İbrahim Sultan
              Budaq Sultan <br />
              oğlu Cavanşirin adına Şah Abbas tərəfindən verilmiş sənəd təqdim
              edir. Sənədə görə, Mehdiqulu xanın ulu babası həmin Ağdam mülkü də
              daxil <br />
              olmaqla, Cavanşir eli və Otuzikilər tayfa ittifaqının rəhbəri
              olmuş və yeddi yüz otuz nəfərlik süvari hərbi hissəsinə rəhbərlik
              etmişdir.
            </p>
            <div className="religious-and-historical">
              <img src={Statue} />
              <img src={Mosque} />
            </div>
            <p>
              İmarət qəbiristanlığının mövcud divarlarından kənarda- girişin sağ
              tərəfində vaxtilə daha bir türbə olsa da, hazırda mövcud deyildir.
              Lakin, sovet <br />
              dövründə tərtib olunmuş sənədlərdə həmin türbənin cizgisinə rast
              gəlinməkdədir. <br />
              Çar Rusiyası dövründə bu yerlərin Mehdiqulu xana aid olması
              haqqında sənəd tələb olunan zaman Mehdiqulu xan İbrahim Sultan
              Budaq Sultan <br />
              oğlu Cavanşirin adına Şah Abbas tərəfindən verilmiş sənəd təqdim
              edir. Sənədə görə, Mehdiqulu xanın ulu babası həmin Ağdam mülkü də
              daxil <br />
              olmaqla, Cavanşir eli və Otuzikilər tayfa ittifaqının rəhbəri
              olmuş və yeddi yüz otuz nəfərlik süvari hərbi hissəsinə rəhbərlik
              etmişdir.
            </p>
          </div>
        </section>
        <section id="qaleriya" className="gallery">
          <div>
            <div className="gallery-header-bar">
              <h1>Qaleriya</h1>
              <div className="arrow-icons">
                <img src={arrowLeft} />
                <img src={arrowRight} />
              </div>
            </div>
            <div className="heritage-photos">
              <img src={City} className="photo-city" />
              <img src={Monument} className="photo-monument" />
              <img src={Images} className="photo-gallery" />
            </div>
          </div>
        </section>
        <section id="xerite" className="map-header-bar">
          <h1>Xəritə</h1>
          <div className="map-content">
            <img src={Imaratmap} />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-bar">
          <div className="footer-content">
            <div className="footer-logos">
              <img src={gerbLogo} alt="Gerb Logo" />
              <img src={imaratLogo} alt="Imarat Logo" />
            </div>
            <div className="footer-main">
              <div className="footer-contact">
                <h3>Əlaqə</h3>
                <ul>
                  <li>+994 12 147</li>
                  <li>+994 12 565 01 47</li>
                  <li>info@culture.gov.az</li>
                </ul>
              </div>
              <div className="footer-address">
                <h3>Ünvan</h3>
                <ul>
                  <li>
                    AZ1000, Baku,
                    <br />
                    Ü. Hacıbəyli, 84
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-copy">Bütün hüquqlar qorunur! 2024</div>
        </div>
      </footer>
    </>
  );
}

export default App;
