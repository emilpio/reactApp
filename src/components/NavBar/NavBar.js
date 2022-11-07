import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <ul>
          <a href='/'>
            <li>
              <i class='fa fa-tasks' aria-hidden='true'></i>
            </li>
          </a>
          <a href='/'>
            <li>HOME</li>
          </a>
          <a href='favorite'>
            <li>FAVORITE</li>
          </a>
          <a href='about'>
            <li> ABOUT </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
