import type { NextPage } from "next";
import { LoremIpsum } from "../components/ipsum";
import styles from "../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <>
      <h1>Page A</h1>

      <p>
        This page has only very little content. The idea is that when switched
        to a page with more content that triggers scrollbars to appear, the
        layout jumps around
      </p>
    </>
  );
};

export default Page;
