import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./Header.css";

function Header() {
  // const [openMenu, setOpenMenu] = useState(null);

  // const navItems = [
  //   {
  //     label: "Продукциялар",
  //     submenu: ["Спорттук кийимдер", "Классикалык кийимдер", "Аксессуарлар"],
  //   },
  //   {
  //     label: "Биз жөнүндө",
  //     submenu: ["Тарыхыбыз", "Команда", "Максаттар"],
  //   },
  //   {
  //     label: "Байланыш",
  //     submenu: ["Instagram", "WhatsApp", "Телефон"],
  //   },
  // ];
  return (
    <section className='header'>
      <div className='header__block'>
        <div className='container header__first_block'>
          <div className='header__logo'>
            <img
              src='/logo-agupkr-ru.png'
              alt=''
              className='header__logo_img'
              width={100}
            />
            <h1 className='header__logo_name'>
              Центр переподготовки и повышения квалификации
            </h1>
          </div>
          <div className='header__languages'>
            <img
              src='flag-kg.jpg'
              alt=''
              className='header__languages_img'
              width={50}
            />
            <img
              src='flag-rus.jpg'
              alt=''
              className='header__languages_img'
              width={50}
            />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='header__navbar'>

          <a href="#" className="header__navbar_item">Главная</a>
          <a href="#" className="header__navbar_item">О нас</a>
          <a href="#" className="header__navbar_item">Истори</a>
          <a href="#" className="header__navbar_item">Контакты</a>
          <a href="#" className="header__navbar_item">План-график</a>
        </div>
      </div>
    </section>
    //     <div className="maks">
    //       <div className=' bg-blue-900 '>
    //         <img src='/logo.png' alt='' className='w-700' />
    //       </div>

    //       <nav className='bg-white shadow-md'>
    //         <div className='max-w-5xl mx-auto px-4'>
    //           <div className='flex justify-between py-4'>
    //             {navItems.map((item, idx) => (
    //               <div
    //                 key={idx}
    //                 className='relative group'
    //                 onMouseEnter={() => setOpenMenu(idx)}
    //                 onMouseLeave={() => setOpenMenu(null)}
    //               >
    //                 <button className='text-gray-800 font-medium bg-blue-400 p-2 b-1 b hover:text-blue-600 transition'>
    //                   {item.label}
    //                 </button>

    //                 {/* Подменю */}
    //                 {openMenu === idx && (
    //                   <div className='absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg py-2 w-48 z-50'>
    //                     {item.submenu.map((subItem, subIdx) => (
    //                       <a
    //                         key={subIdx}
    //                         href='#'
    //                         className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
    //                       >
    //                         {subItem}
    //                       </a>
    //                     ))}
    //                   </div>
    //                 )}
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </nav>
    //       <div className="flex justify-between text-center p-20 mt-20">

    //       <p >31 июля 1996 года распоряжением Президента КР «Об организации на базе Бишкекской международной школы менеджмента и бизнеса» началась подготовка и переподготовка служащих органов государственного управления по программе «Магистр государственного управления», которая была создана в рамках реализации проекта ПРООН «Развитие менеджмента в Кыргызстане».

    // 19 января 1998 года согласно Указу Президента КР №19 на базе АУПКР был образован единый учебно-методический комплекс по подготовке и переподготовке кадров.

    // В соответствии с Постановлением Правительства КР от 26 января 2004 года № 35. в городах Бишкек и Ош были образованы Центры повышения квалификации и переподготовки государственных и муниципальных служащих.

    // В соответствии с Указом Президента КР от 26 сентября 2012 года №206 «Об Академии государственного управления при Президенте Кыргызской Республики» в целях повышения эффективности подготовки, переподготовки и повышения квалификации государственных и муниципальных служащих, отраслевых (корпоративных) руководителей государственных предприятий, а также в соответствии с Указом Президента Кыргызской Республики "О некоторых мерах по совершенствованию системы подготовки, переподготовки и повышения квалификации кадров в сфере государственного и муниципального управления" от 11 июля 2012 года №135 в организационной структуре Академии государственного управления при Президенте Кыргызской Республики был создан Институт дополнительного образования государственных и муниципальных служащих, который в 2015 году в соответствии с Указом Президента Кыргызской Республики (от 1 окт. 2015 г. УП № 188) был переименован в Высшие курсы администрирования и управления (ВКАУ).

    // В настоящее время повышением квалификации, подготовки, переподготовки государственных и муниципальных служащих, отраслевых (корпоративных) руководителей государственных предприятий занимается Высшая школа администрирования (ВША). ВША состоит из трех структур:  Высшие курсы администрирования и управления (ВКАУ); Институт исследования и развития государственного управления (ИИРГУ); Национальный центр информационных технологий.

    // На сегодняшний день около 28 тысяч государственных и муниципальных служащих прошли различные тренинги.

    // Регулярно проводятся тренинги на основе государственного заказа и сотрудничества с зарубежными партнерами (GIZ, EC, OSCE, JDS, JICE, Peace Nexus, RANEPA и т.д.</p>
    //       </div>
    //     </div>
  );
}

export default Header;
