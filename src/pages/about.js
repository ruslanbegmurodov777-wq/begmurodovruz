import React from "react";
import "./about.css";
import me from "./img/me.jpg";
import shahar from "./img/gijduvann.jpg";
import shahar2 from "./img/gijduvan.jpg";
import ProX from "./img/ProX.jpg";
import maktab from "./img/school.jpg";
import kanal from "./img/ruzmore_kanal.jpg";

function About() {
  return (
    <div className="about-container page-container">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-card">
          <img src={me} alt="O'zim" />
          {/* <h3>O'zim</h3> */}
          <p>
            Men Begmurodov Ruslanbek dasturchiman, yoshim 16 (2009). da Har kuni
            18-maktabimda va proX akademiyamda ta'lim olaman. Men o'z soham
            bo'yicha mukammal kadr bo'lib chet elda o'qimoqchiman.{" "}
          </p>
        </div>
        <div className="about-card">
          <img src={shahar2} alt="" />
          <img src={shahar} alt="Shahrim" />
          <p>
            Men Buxoro viloyatining G‘ijduvon tumanida tug'ilganman va
            yashayapman. Kelajakda do'stlarim bilan bu yerni rivojlantirib, IT
            bo'yicha zamonaviy shahar qilmoqchimiz.{" "}
          </p>
        </div>
        <div className="about-card">
          <img src={ProX} alt="Akademiyam" />

          <p>
            proX Akademiyasida zamonaviy dasturlashni o‘rganmoqdaman. proX
            akademiyasida tezlik katta va bu ta'limni keng tarqatish
            maqsadlarimizdan biri{" "}
          </p>
        </div>
        <div className="about-card">
          <img src={maktab} alt="Maktabim" />

          <p>
            Men 18-maktabda tahsil olyapman va ko‘plab do'stlarim bor. bu
            maktabda tartib-qoida juda kuchli shu sababli, ko'plab o'quvchilar
            o'qiydi
          </p>
        </div>
        <div className="about-card">
          <img src={kanal} alt="Kanallarim" className="kanal1" />
          {/* <img src={kanal2} alt="" className="kanal2" />
           <img src={kanal3 }alt="" className="kanal3" /> */}
          <h3>Kanallarim</h3>
          <p>
            Telegram kanalimda tajribam va soham bo'yicha yangiliklarni
            bo‘lishaman. telegram:
            <br />{" "}
            <a
              href="https://t.me/Begmurodov_IT_blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Begmurodov IT blog
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
