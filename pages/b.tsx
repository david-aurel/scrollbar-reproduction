import type { NextPage } from "next";
import { LoremIpsum } from "../components/ipsum";
import styles from "../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <>
      <h1>Page B</h1>
      <p>
        This page has some more content. The idea is that when switched to a
        page with not enough content to trigger scrollbars to appear, the layout
        jumps around
      </p>
      <LoremIpsum />
    </>
  );
};

export default Page;
