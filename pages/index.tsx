import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Books.module.css";
import { GetServerSideProps } from "next";
import { timeDifference } from "../utils/timeConverter";
import { Gutendex, Author, Formats, Result } from "../utils/types";
import {
  FaFastForward,
  FaFastBackward,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
import React from "react";

import { useRouter } from "next/router";
import Book from "../components/Book";
import BooksPag from "../components/BooksPag";
import { data } from "autoprefixer";

const Home: NextPage<{ data: Gutendex }> = (props) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.page}>
        <div className={styles.grid_container}>
          {props.data.results.map((data: Result) => (
            <Book
              key={data.id}
              title={data.title}
              subjects={data.subjects}
              download_count={data.download_count}
              languages={data.languages}
              authors={data.authors}
              id={data.id}
              translators={[]}
              bookshelves={[]}
              copyright={false}
              media_type={data.media_type}
              formats={data.formats}
            />
          ))}
        </div>
        <BooksPag next={props.data.next} previous={props.data.previous} />
      </div>
      <div className="flex items-center justify-center text-base bg-red-700 text-black">
        &copy;2021
        <a
          className="ml-2  font-semibold"
          href="https://mahmoudabdelaziz1993.github.io/Demo/"
        >
          Mahmoud Abdelaziz
        </a>{" "}
      </div>
    </>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const Page = query.page || 1;

  try {
    const result = await fetch(`https://gutendex.com/books/?page=${Page}`);
    if (result.status !== 200) {
      throw new Error("failed fetching data");
    }
    const data: Gutendex = await result.json();

    return {
      props: {
        data: { ...data },
      },
    };
  } catch {
    res.statusCode = 400;
    return {
      props: {
        message: "failed fetching data",
      },
    };
  }
};
