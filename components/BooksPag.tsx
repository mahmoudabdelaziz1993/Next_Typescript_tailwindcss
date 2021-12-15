import React, { FunctionComponent } from "react";
import { pagination } from "../utils/types";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { useRouter } from "next/router";

const BooksPag: FunctionComponent<pagination> = ({ next, previous }) => {
  let forword = next && new URL(next, "https://gutendex.com/books").search;
  let backward =
    previous && new URL(previous, "https://gutendex.com/books").search;

  const router = useRouter();
  let { page } = router.query;
  return (
    <div className="flex  h-20 py-4 px-4 justify-between w-full cursor-pointer">
      {backward && (
        <div
          className="flex items-center w-auto text-xl text-red-700 hover:text-red-500 "
          onClick={() => router.push(backward)}
        >
          <FiSkipBack className="mr-2" />
          BACK
        </div>
      )}
      <div className="flex flex-grow justify-center items-center text-lg text-red-900 font-semibold">
        {backward ? page : 1}
      </div>
      {forword && (
        <div
          className="flex  items-center w-auto text-xl text-red-700 hover:text-red-500 "
          onClick={() => router.push(forword)}
        >
          NEXT
          <FiSkipForward className="ml-2" />
        </div>
      )}
    </div>
  );
};

export default BooksPag;
