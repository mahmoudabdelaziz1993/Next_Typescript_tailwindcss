import react, { FunctionComponent } from "react";
import { Result } from "../utils/types";
import { HiOutlineDownload } from "react-icons/hi";
import { IoLanguageSharp } from "react-icons/io5";

const Book: FunctionComponent<Result> = ({
  title,
  subjects,
  download_count,
  languages,
  authors,
}) => {
  return (
    <div className="flex flex-col flex-wrap h-full px-4 py-1 bg-black divide-y divide-gray-700">
      <h3 className="h-20 my-4 text-4xl text-red-700 line-clamp-2">{title}</h3>
      {/* subjects */}
      <div className="flex-grow w-full">
        <h3 className="mb-2  text-lg text-gray-600">Authors</h3>
        <div className="flex flex-wrap gap-4">
          {authors.map((author) => (
            <div className="mb-1" key={author.name}>
              {author.name}
            </div>
          ))}
        </div>

        <h3 className="mb-4 text-lg text-gray-600">Subjects</h3>
        <div className="flex flex-wrap gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="flex flex-grow-0 px-3 mb-1 text-sm text-red-300 h-fit flex-nowrap rounded-xl ring-1 ring-red-300"
            >
              {subject}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full my-3">
        <h3 className="flex items-center text-base text-red-700">
          {download_count}
          <HiOutlineDownload className="ml-2" />
        </h3>
        <h3 className="flex items-center text-base text-red-700">
          <IoLanguageSharp className="mr-2" />

          {languages?.map((language, index) => (
            <strong key={index}>{language}</strong>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default Book;
