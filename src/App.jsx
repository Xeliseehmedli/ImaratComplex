
import "./App.css";
import { useEffect, useState } from "react";
import Logo from "./assets/logo.svg";
import Imaratbackgr from "./assets/imaratbackground.png";
import history from "./assets/history.png";
import Statue from "./assets/statue.png";
import Mosque from "./assets/1.png";
import City from "./assets/city.png";
import Monument from "./assets/mosque.png";

import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";
import gerbLogo from "./assets/Gerb logo.svg";
import imaratLogo from "./assets/imaratlogo.svg";
import Imaratmap from "./assets/imarat map.png";

const navItems = [
  { title: "Əsas", path: "esas" },
  { title: "Haqqında", path: "haqqinda" },
  { title: "Qalereya", path: "qaleriya" },
  { title: "Xəritə", path: "xerite" },
];

function App() {
  const [activeSection, setActiveSection] = useState("");

  // === Carousel State ===
  const photos = [City, Monument];
  const [startIndex, setStartIndex] = useState(0);

  const getVisiblePhotos = () => {
    const result = [];
    for (let i = 0; i < 2; i++) {
      result.push(photos[(startIndex + i) % photos.length]);
    }
    return result;
  };

  const prevImage = () => {
    setStartIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextImage = () => {
    setStartIndex((prev) => (prev + 1) % photos.length);
  };


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
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);



  const[isOpen,setIsOpen]=useState(false)
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = (path) => {
    setActiveSection(path);
    setIsOpen(false);
  };

  return (
    <>
      <header className="header-bar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
    <nav className={`header-nav nav-links ${isOpen ? "open" : ""}`}>
  <ul>
    {navItems.map((link, index) => (
      <li
        key={index}
        className={link.path === activeSection ? "active" : ""}
      >
        <a
          href={`#${link.path}`}
          onClick={() => handleLinkClick(link.path)}
        >
          {link.title}
        </a>
      </li>
    ))}
  </ul>
</nav>

          <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </header>

      <section id="esas" className="hero-section">
        <div className="Imaratbackgr">
          <img src={Imaratbackgr} alt="Imarat Background" />
          <p className="imaratLogo-text">Ağdam İmarət Kompleksi</p>
        </div>
      </section>

      <main>
        <section id="haqqinda" className="history">
          <div>
            <h1>Tarixçə</h1>
             <p className="history-text">
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
            <img src={history} alt="History" />
             <p className="history-text">
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
            <div className="religious-and-historical">
              <img src={Statue} alt="Statue" />
              <img src={Mosque} alt="Mosque" />
            </div>
             <p className="history-text">
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
          </div>
        </section>

        <section id="qaleriya" className="gallery">
          <div className="heritage-carousel">
            <div className="gallery-header-bar">
              <h1>Qaleriya</h1>
              <div className="arrow-icons">
                <img
                  src={arrowLeft}
                  alt="previous"
                  onClick={prevImage}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={arrowRight}
                  alt="next"
                  onClick={nextImage}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <div
              className="heritage-photos">
              {getVisiblePhotos().map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`photo-${idx}`}
                  className="heritage-image"
                
                />
              ))}
            </div>
          </div>
        </section>

        <section id="xerite" className="map-header-bar">
          <h1>Xəritə</h1>
          <div className="map-content">
            <img src={Imaratmap} alt="Imarat Map" />
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

