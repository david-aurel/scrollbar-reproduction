import type { NextPage } from "next";
import { LoremIpsum } from "../components/ipsum";

const Page: NextPage = () => {
  return (
    <>
      <h1>Page C</h1>
      <p>
        This page has examples for different <code>overflow</code> values
      </p>
      <div className="bad-example common-example">
        <h2>
          <code>overflow: scroll;</code>
        </h2>
      </div>
      <div className="bad-example common-example">
        <h2>
          <code>overflow: scroll;</code>
        </h2>
        <LoremIpsum />
      </div>
      <div className="bad-example-y common-example">
        <h2>
          <code>overflow-y: scroll;</code>
        </h2>
      </div>
      <div className="bad-example-y common-example">
        <h2>
          <code>overflow-y: scroll;</code>
        </h2>
        <LoremIpsum />
      </div>
      <div className="good-example common-example">
        <h2>
          <code>overflow: auto;</code>
        </h2>
      </div>
      <div className="good-example common-example">
        <h2>
          <code>overflow: auto;</code>
        </h2>
        <LoremIpsum />
      </div>
      <div className="good-example-y common-example">
        <h2>
          <code>overflow-y: auto;</code>
        </h2>
      </div>
      <div className="good-example-y common-example">
        <h2>
          <code>overflow-y: auto;</code>
        </h2>
        <LoremIpsum />
      </div>
    </>
  );
};

export default Page;
