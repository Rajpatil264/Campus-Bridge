import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faBookmark,
  faEllipsisVertical,
  faShare,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import Shimmer from "@/app/shimmer";
import MultiLineText from "@/app/multiline_text";
interface ChildComponentProps {
  loading: boolean;
  result: string[];
}
export default function Query({ loading, result }: ChildComponentProps) {
  return (
    <div className="w-[calc(75vw)] p-10 flex flex-col gap-5 justify-center items-center">
      {loading ? (
        <div className="flex flex-col justify-start mt-10">
          <div className="w-[calc(50vw)] h-6 mb-6">
            <Shimmer />
          </div>
          <div className="w-[calc(40vw)] h-6 mb-6">
            <Shimmer />
          </div>
          <div className="w-[calc(25vw)] h-6 mb-6">
            <Shimmer />
          </div>
          <div className="w-[calc(35vw)] h-6 mb-6">
            <Shimmer />
          </div>{" "}
          <div className="w-[calc(50vw)] h-6 mb-6">
            <Shimmer />
          </div>
          <div className="w-[calc(40vw)] h-6 mb-6">
            <Shimmer />
          </div>
          <div className="w-[calc(25vw)] h-6 mb-6">
            <Shimmer />
          </div>
          <div className="w-[calc(35vw)] h-6 mb-6">
            <Shimmer />
          </div>
        </div>
      ) : (
        <div>
          {result.map((data) => (
            <div className="w-[calc(45vw)] border border-green-900 rounded-md bg-black-700 p-4 flex flex-row items-center gap-5 mb-8">
              <div className="text-zinc-200 text-base font-light leading-10 rounded-full px-4 py-[6px]">
                {data}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
