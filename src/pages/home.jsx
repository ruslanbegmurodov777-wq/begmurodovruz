import meFoto from "./img/me.jpg";
import proX from "./img/ProX.jpg";
import school from "./img/school.jpg";
import hometown from "./img/gijduvann.jpg";
import { Link } from "react-router-dom";
import "./home.css";
import StatsPanel from "../components/StatsPanel.jsx";
import kino from "./img/film.jpg";
import diplom from "./img/diplom.jpg";

export default function Home() {
  return (
    <div className="home page-container">
      {/* <div class="shape shape1">
        <img src="" alt="" />
      </div> */}
      <div class="shape shape1">
        <img
          width="70"
          height="70"
          src="https://img.icons8.com/ios/50/statistics.png"
          alt="statistics"
        />
      </div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <h1 className="home-title">Welcome to</h1>
      <div className="name">
        <img src={meFoto} alt="foto" />
        <h1>My bio</h1>
        <div className="developer-text">
          <span
            style={{
              color: "#030989",
              fontSize: "40px",
              fontFamily: "fantasy",
              boxShadow: "1px 1px 1px",
            }}
          >
            full-stuck developer
          </span>
        </div>
        <div className="name-text">
          <span style={{ color: "#5a0999", fontSize: "30px" }}>
            RUSLANBEK BEGMURDOV
          </span>
        </div>
        <div className="portfolio-text">
          <span style={{ color: "#5a0999", fontSize: "30px" }}>
            it's my portfolio-site!
          </span>
        </div>
      </div>

      <div className="home-about">
        <div className="about-fotos">
          <img src={hometown} alt="" />
          <img src={proX} alt="" />
          <img src={school} alt="" />
        </div>
        <h2>About me</h2>
        <div className="about-text">
          <p>
            Salom men Buxoro viloyati G'ijduvon tumanida tug'ilganman. Men
            18-maktabda ta'lim olaman va proX akademiyasida dasturlashni
            o'rganyapman.
            {/* Hi🖐️, These are the pictures of my academy and my school. I spend
            most of my day here. */}
          </p>
        </div>
        <div className="about-btns">
          <button className="about-btn">
            <Link className="about-link" to="/about">
              read more →
            </Link>
          </button>
        </div>
      </div>

      <StatsPanel />

      <div className="will-skills">
        <h1 className="will-skills-title">Mening keyingi rejalarim</h1>
        <div className="kino-skills">
          <img src={kino} alt="" />

          <div className="dev-card skill-precent">
            <div className="meter" style={{ "--percent": 48 }}></div>
            <div className="meter-label">hozirda 48%</div>
          </div>
          <p>o'zimning keyingi murakkab kino saytimni yaratish</p>
        </div>
        <div className="akademiya-skills">
          <img src={diplom} alt="" />

          <div className="dev-card skill-precent">
            <div className="meter" style={{ "--percent": 40 }}></div>
            <div className="meter-label">hozirda 40%</div>
          </div>
          <p>
            {" "}
            proX akademiyamda dasturlash qadamlarini 600 qadamgacha grand
            asosida tugatish va chet-elga o'qishga tayyorgarlik
          </p>
        </div>
      </div>
      <div className="contact-home">
        <h2>Men bilan bog'lanish uchun bosing</h2>{" "}
        <Link className="contact-link" to="/contact">
          bog'lanish →
        </Link>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <h2>by Ruslanbek Begmurodov</h2>
          <p>
            {" "}
            Bu portfolio mening dasturlashdagi sayohatim va orzularimni aks
            ettiradi.
          </p>
          <p>© 2025 Barcha huquqlar himoyalangan</p>
        </div>
      </footer>
    </div>
  );
}
