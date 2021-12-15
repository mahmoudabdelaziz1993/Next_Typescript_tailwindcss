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

const Home: NextPage<{ data: Gutendex }> = (props) => {
  console.log(props);

  const router = useRouter();
  return (
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
          />
        ))}
      </div>

      {/* grid */}
      {/* <div className={styles.grid_container}>
        {props.data.items.map(
          ({
            id,
            owner,
            name,
            description,
            forks_count,
            open_issues_count,
            updated_at,
          }) => (
            <div className={styles.grid_special_col} key={id}>
              <img
                className={styles.avatar_image}
                src={owner.avatar_url}
                alt={owner.login}
              />
              <div className="max-w-3xl px-3">
                <h3 className={styles.headline}>{name}</h3>
                <p className={styles.paragraph}>{description}</p>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={styles.badg}>{forks_count} forks</span>
                  <span className={styles.badg}>
                    {open_issues_count} issues
                  </span>
                  <p className/={styles.caption}>
                    last update{" "}
                    {timeDifference(new Date(), new Date(updated_at))} by{" "}
                    <strong className="text-blue-900">{owner.login}</strong>
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      */}

      {/* paggination */}
      {/* <div className="flex justify-end h-20 "> 
        <div className="w-16 mr-2 text-lg">Page {props.data.Page}</div>
        <div
          className={`mx-1 text-5xl ${
            parseInt(props.data.Page) > limit
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
          onClick={() =>
            parseInt(props.data.Page) > limit &&
            router.push({
              pathname: "/",
              query: {
                Page: parseInt(props.data.Page) - 10,
              },
            })
          }
        >
          <FaFastBackward />
        </div>
        <div
          className={`mx-1 text-5xl ${
            parseInt(props.data.Page) > 1
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
          onClick={() =>
            parseInt(props.data.Page) > 1 &&
            router.push({
              pathname: "/",
              query: {
                Page: parseInt(props.data.Page) - 1,
                limit,
              },
            })
          }
        >
          <FaStepBackward />
        </div>
        <div
          className="mx-1 text-5xl cursor-pointer"
          onClick={() =>
            router.push({
              pathname: "/",
              query: {
                Page: parseInt(props.data.Page) + 1,
                limit,
              },
            })
          }
        >
          <FaStepForward />
        </div>
        <div
          className={`mx-1 text-5xl ${
            parseInt(props.data.Page) < 60
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
          onClick={() =>
            parseInt(props.data.Page) < 60 &&
            router.push({
              pathname: "/",
              query: {
                Page: parseInt(props.data.Page) + 10,
                limit,
              },
            })
          }
        >
          <FaFastForward />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  // const Page = query.Page || 1;
  // const limit = query.Limit || 10;

  try {
    const result = await fetch(`https://gutendex.com/books/`);
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
