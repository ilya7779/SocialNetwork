import Profile from './Profile/Profile';
import sidebar from './Sidebar.module.css';
import {NavLink} from "react-router-dom";


const Sidebar = (props) => {

  const setActive = ({isActive}) => isActive ? sidebar.sidebar__link_active : '';

  return (
    <aside className={sidebar.sidebar}>
      <nav className={sidebar.sidebar__menu}>
        <ul className={sidebar.sidebar__list}>
          <li className={sidebar.sidebar__item}>
            <NavLink to="profile" className={setActive}>Profile</NavLink>
          </li>
          <li className={sidebar.sidebar__item}>
            <NavLink to="messages" className={setActive}>Messages</NavLink>
          </li>
          <li className={sidebar.sidebar__item}>
            <NavLink to="users" className={setActive}>Users</NavLink>
          </li>
          {/*<li className={sidebar.sidebar__item}>*/}
          {/*  <NavLink to="News" className={setActive}>News</NavLink>*/}
          {/*</li>*/}
          {/*<li className={sidebar.sidebar__item}>*/}
          {/*  <NavLink to="Music" className={setActive}>Music</NavLink>*/}
          {/*</li>*/}
          {/*<li className={sidebar.sidebar__item}>*/}
          {/*  <NavLink to="Settings" className={setActive}>Settings</NavLink>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </aside>
  );
}


export default Sidebar;