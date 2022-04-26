import Link from "next/link";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/"> Posts </Link>
          </li>
          <li>
            <Link href="/new-meetup"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
