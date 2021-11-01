import { NextComponentType } from "next";
import Link from "next/link";

const Layout: NextComponentType = ({ children }) => {
  return (
    <div id="layout">
      <nav>
        <ul>
          <li>
            <Link href="/">Home page</Link>
          </li>
          <li>
            <Link href="/a">Page A</Link>
          </li>
          <li>
            <Link href="/b">Page B</Link>
          </li>
          <li>
            <Link href="/c">Page C</Link>
          </li>
          <li>
            <Link href="/d">Page D</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export { Layout };
