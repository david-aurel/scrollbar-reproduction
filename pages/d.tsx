import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { LoremIpsum } from "../components/ipsum";

type ClassName =
  | "bad-example"
  | "bad-example-y"
  | "good-example"
  | "good-example-y";
type Box = {
  className: ClassName;
  overflowing?: boolean;
  label: string;
};
const examples: Box[] = [
  { className: "bad-example", label: "overflow: scroll;" },
  { className: "bad-example", overflowing: true, label: "overflow: scroll;" },
  { className: "bad-example-y", label: "overflow-y: scroll;" },
  {
    className: "bad-example-y",
    overflowing: true,
    label: "overflow-y: scroll;",
  },
  { className: "good-example", label: "overflow: auto;" },
  { className: "good-example", overflowing: true, label: "overflow: auto;" },
  { className: "good-example-y", label: "overflow-y: auto;" },
  {
    className: "good-example-y",
    overflowing: true,
    label: "overflow-y: auto;",
  },
];

const Page: NextPage = () => {
  const [automatic, setAutomatic] = useState<number | null>(0);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (typeof automatic !== "number") return;
    const timeout = setTimeout(() => {
      setAutomatic((s) =>
        s === examples.length - 1 ? 0 : typeof s === "number" ? s + 1 : null
      );
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [automatic]);
  return (
    <>
      <h1>Page D</h1>
      <p>
        Switch around different <code>overflow</code> values to detect any
        jumping layout.
      </p>

      <div>
        <ul>
          {examples.map(({ label, overflowing }, i) => {
            return (
              <li key={`${label} ${overflowing ? "o" : ""}`}>
                <button
                  onClick={() => {
                    setAutomatic(null);
                    setSelected(i);
                  }}
                >
                  <code>{label}</code> {overflowing ? "(overflowing)" : ""}
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => {
                setSelected(null);
                setAutomatic(0);
              }}
            >
              <code>switch automatically every second</code>
            </button>
          </li>
        </ul>
      </div>

      {examples.map(({ className, overflowing, label }, i) => {
        return automatic === i || selected === i ? (
          <div
            className={`common-example ${className}`}
            key={`${className} ${overflowing ? "o" : ""}`}
          >
            <h2>
              <code>{label}</code>
            </h2>
            {overflowing ? <LoremIpsum /> : null}
          </div>
        ) : null;
      })}
    </>
  );
};

export default Page;
