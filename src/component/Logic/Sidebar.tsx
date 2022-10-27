import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '../../img/sidebar/home.svg';
import SearchIcon from '../../img/sidebar/search.svg';
import TableIcon from '../../img/sidebar/table.svg';
import CalendarIcon from '../../img/sidebar/calendar.svg';
import MapsIcon from '../../img/sidebar/maps.svg';
import TvIcon from '../../img/sidebar/tv.svg';
import SettingsIcon from '../../img/sidebar/settings.svg';
import ExitIcon from '../../img/sidebar/exit.svg';
import PolygonIcon from '../../img/sidebar/polygon.svg';
import ProfileIcon from '../../img/sidebar/settings-profile.svg';
import FinanceIcon from '../../img/sidebar/settings-finance.svg';

const Sidebar = () => {
  const links = [
    { id: 1, title: 'Главная', icon: HomeIcon, link: '/' },
    { id: 2, title: 'Поиск адресов', icon: SearchIcon, link: 'address' },
    { id: 3, title: 'Таблицы', icon: TableIcon, link: 'table' },
    { id: 4, title: 'Календарь', icon: CalendarIcon, link: 'calendar' },
    { id: 5, title: 'Карты', icon: MapsIcon, link: 'maps' },
    { id: 6, title: 'Виджеты', icon: TvIcon, link: 'vidgets' },
    { id: 7, title: 'Настройки', icon: SettingsIcon, link: 'settings' },
    { id: 8, title: 'Выход', icon: ExitIcon, link: 'exit' },
  ];

  const [activeLink, setActiveLink] = React.useState('/');

  const [width, setWidth] = React.useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const [openSettings, setOpenSettings] = React.useState(true);

  function onClickToLink(link: string) {
    setActiveLink(link);
    if (link === 'settings') setOpenSettings(!openSettings);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        {width > 768 && <h1>Меню</h1>}
        <nav className="nav">
          <ul className="nav__menu">
            {links.map((item) => (
              <li className="nav__menu-item" onClick={() => onClickToLink(item.link)} key={item.id}>
                <Link
                  to={item.link}
                  className={`nav__menu-link ${
                    activeLink === item.link && 'nav__menu-link_active'
                  }`}>
                  <img src={item.icon} alt="icon" className="icon" />
                  {width > 768 && item.title}
                  {item.title === 'Настройки' && (
                    <img
                      src={PolygonIcon}
                      alt="icon"
                      className={`polygon ${openSettings && 'polygon_active'}`}
                    />
                  )}
                </Link>
                {openSettings && item.title === 'Настройки' && (
                  <ul className="nav__submenu">
                    <li className="nav__menu-link">
                      <img src={ProfileIcon} alt="icon" className="icon" />
                      Настройки профиля
                    </li>
                    <li className="nav__menu-link">
                      <img src={FinanceIcon} alt="icon" className="icon" />
                      Управление финансами
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
