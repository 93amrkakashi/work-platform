
import React from "react";
import Image from "next/image";
import heroPic from "../../_data/programming-clipart.svg";
import eShop from "../../_data/shoping.svg";
import bta3a from "../../_data/bta3a.png";
import mobile from "../../_data/pngegg.png";
import desk from "../../_data/Electronic File Management Isometric Illustration.svg";

const Services = () => {
  return (
    <main dir="ltr" className={``}>
      <div className="flex flex-col items-center justify-around">
        <div
          className={`hero flex flex-col md:flex-row  justify-evenly items-center  pb-6 min-h-[95vh]  w-full bg-indigo-700`}
        >
          <p className="font-bold text-2xl text-gray-50 p-0 px-10 pb-12 m-0 text-center">
            فى <span className="co">سكريبتو كود</span> نحن نقدم لك مجموعه من التطبيقات والحلول والادوات البرمجية التى تساعدك على بدء مشروعك الخاص او التنمية وزيادة الانتاجية.
          </p>
          <Image src={heroPic} alt="logo" width={610} height={1000} />
        </div>

        <div
          className={`relative flex flex-col md:flex-row  justify-evenly items-center px-3  my-6 min-h-[60vh]  w-full `}
        >
          <Image
            className="absolute bottom-5 right-5 z-[-1]"
            src={bta3a}
            alt="logo"
            width={110}
            height={300}
          />
          <Image src={eShop} alt="logo" width={610} height={1000} />
          <div className="ser">
            <p className="font-bold text-2xl text-gray-900 p-0 px-10 pb-12 m-0 text-center">
              موقع إليكترونى
            </p>
            <p className="font-bold text-2xl text-gray-900 p-0 px-10 pb-12 m-0 text-center">
              أنشئ موقع اليكترونى خاص بك , يعبر عن هويتك. أو أنشئ مدونتك الخاصة
              بك أو موقع خاص بنشاطك أو أطلق متجرك الاليكترونى وقم بتطوير عملك
              وزيادة الانتاجية لشركتك
            </p>
          </div>
        </div>

        <div
          className={`relative flex flex-col-reverse md:flex-row  justify-evenly items-center px-3  my-6 min-h-[60vh]  w-full `}
        >
          <div className="ser">
            <p className="font-bold text-2xl text-gray-900 p-0 px-10 pb-12 m-0 text-center">
              موبايل أبلكيشن
            </p>
            <p className="font-bold text-2xl text-gray-900 p-0 px-10 pb-12 m-0 text-center">
              اطلب تطبيق خاص بعملك , مهما كان مجال العمل الخاص بك يمكننا مساعدتك فى انشاء تطبيق للهاتف يساعدك فى ادارة عملك وزيادة الانتاجية, او حتى انشاء تطبيق خاص بك لمساعدتك فى انشطتك العادية
            </p>
          </div>
          <Image src={mobile} alt="logo" width={610} height={1000} />
        </div>

        <div
          className={`relative flex flex-col md:flex-row  justify-evenly items-center px-3  my-6 min-h-[60vh]  w-full `}
        >
          <Image src={desk} alt="logo" width={610} height={1000} />
          <div className="ser">
            <p className="font-bold text-2xl text-gray-900 p-0 px-10 pb-12 m-0 text-center">
              تطبيقات الكمبيوتر
            </p>
            <p className="font-bold text-2xl text-gray-900 p-0 px-10 pb-12 m-0 text-center">
              نقدم لك خدمة انشاء تطبيقات سطح المكتب, بامكانك طلب تطبيق خاص بك بمواصفات خاصة يساعدك على ادارة وتسهيل العمل 
             </p>
          </div>
        </div>


      </div>
    </main>
  );
};

export default Services;
