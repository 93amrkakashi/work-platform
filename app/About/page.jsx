"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import pic from "./1.svg";
import pic1 from "./2.svg";
import pic2 from "./3.svg";
import pic3 from "./4.svg";
import pic4 from "./5.svg";
import pic5 from "./Electronic File Management Isometric Illustration.svg";

const About = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={` ${theme === "dark" ? "dark-body" : "light-body"} `}>
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">
          مرحبًا بك في <span className="co-name">Scripto Code</span>
        </h1>
        <div className="flex flex-col items-center justify-evenly">
          <div className="flex items-center justify-around my-12">
            <p className="text-lg mb-4">
              <span className="co-name">Scripto Code</span> هي شركة رائدة في
              مجال تطوير البرمجيات تأسست في عام 2020. نتخصص في تقديم مجموعة
              واسعة من حلول البرمجيات، بما في ذلك تطبيقات الويب، تطبيقات
              الديسكتوب، وتطبيقات الموبايل. التفاني في التقدم والجودة يميزنا في
              صناعة تكنولوجيا المعلومات.
            </p>
            <Image className="mx-10" src={pic} alt="logo" width={410} />
          </div>

          <div className="flex items-center justify-around my-12">
            <Image className="mx-10" src={pic2} alt="logo" width={410} />
            <p className="text-lg mb-4">
              في <span className="co-name">Scripto Code</span>، نؤمن بتقديم
              التميز. يعمل فريق المطورين الماهرين لدينا على إنشاء حلول برمجية
              مخصصة تلبي الاحتياجات الفريدة لعملائنا. سواء كنت تبحث عن تطبيق ويب
              قوي، أو أداة ديسكتوب، أو تجربة موبايل سلسة، فإننا نقدم لك كل ما
              تحتاجه.
            </p>
          </div>

          <div className="flex items-center justify-around my-12">
            <p className="text-lg mb-4">
          الابتكار والتكنولوجيا هما جوهر عملنا. نظل دائمًا في الصدارة، باعتماد
          أحدث التقنيات لتقديم حلول متقدمة تتجاوز توقعات عملائنا.
        </p>
            <Image className="mx-10" src={pic3} alt="logo" width={410} />
          </div>

          <div className="flex items-center justify-around my-12">
            <Image className="mx-10" src={pic4} alt="logo" width={410} />
          <p className="text-lg mb-4">
          رؤيتنا في <span className="co-name">Scripto Code</span> هي أن نكون
          الرائدين في مجال تطوير البرمجيات، حيث نسعى باستمرار لتحقيق رضا العملاء
          وتلبية توقعاتهم من خلال الجودة والابتكار.
        </p>
          </div>

          <div className="flex items-center justify-around my-12">
          <p className="text-lg mb-4">
          الجودة ورضا العملاء هما قيم أساسية في{" "}
          <span className="co-name">Scripto Code</span>. نهدف إلى أن نكون شريكًا
          موثوقًا للعملاء الذين يبحثون عن حلول برمجية مبتكرة وفعالة.
        </p>
            <Image className="mx-10" src={pic5} alt="logo" width={410} />
          </div>

        </div>

        
        
        
      </div>
    </main>
  );
};

export default About;
