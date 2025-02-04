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
export default function Posts() {
  return (
    <div className="w-[calc(75vw)] p-10 flex flex-col gap-5 justify-center items-center">
      <div className="w-1/2 border border-zinc-700 rounded-md bg-black-700 p-4 flex flex-row items-center gap-5">
        <div className="w-9 h-9">
          <Image
            className="w-full h-full"
            alt="post"
            width={100}
            height={100}
            src="/user.png"
          ></Image>
        </div>
        <div className="relative w-[400px]">
          <input
            className="pl-5 pr-4 py-[8px] w-full bg-transparent rounded-sm border border-zinc-800 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-600"
            type="text"
            placeholder="Create Post"
          />
        </div>
        <div className="ml-5">
          <FontAwesomeIcon className="w-7 h-7 pr-1" icon={faImage} />
        </div>
      </div>
      <div className="w-1/2 border border-zinc-700 rounded-md bg-black p-6 flex flex-col">
        <div className="gap-3 pb-4 flex flex-row items-center">
          <div className="w-8 h-8">
            <Image
              className="w-full h-full"
              alt="post"
              width={100}
              height={100}
              src="/user.png"
            ></Image>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="primary-green font-semibold">Ramesh Patil</div>
            <div className="text-sm text-zinc-400"> Posted 2 days ago</div>
          </div>
          <div className="ml-auto">
            <FontAwesomeIcon
              className="w-5 h-5 pr-1"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
        <Image
          className="w-full h-full"
          alt="post"
          width={500}
          height={300}
          src="/demo.png"
        ></Image>
        <div className="pt-6 text-white  font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="pt-4 flex flex-row gap-10">
          <div>
            <FontAwesomeIcon className="w-5 h-5 pr-1" icon={faThumbsUp} /> 1296
          </div>
          <div>
            <FontAwesomeIcon className="w-5 h-5 pr-2" icon={faComment} />
            647
          </div>
          <div>
            <FontAwesomeIcon className="w-5 h-5" icon={faShare} />
          </div>
          <div className="ml-auto">
            <FontAwesomeIcon className="w-5 h-5" icon={faBookmark} />
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////////////// */}
      <div className="w-1/2 border border-zinc-700 rounded-md bg-black p-6 flex flex-col">
        <div className="gap-3 pb-4 flex flex-row items-center">
          <div className="w-8 h-8">
            <Image
              className="w-full h-full"
              alt="post"
              width={100}
              height={100}
              src="/user.png"
            ></Image>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="primary-green font-semibold">Ramesh Patil</div>
            <div className="text-sm text-zinc-400"> Posted 2 days ago</div>
          </div>
          <div className="ml-auto">
            <FontAwesomeIcon
              className="w-5 h-5 pr-1"
              icon={faEllipsisVertical}
            />
          </div>
        </div>
        <Image
          className="w-full h-full"
          alt="post"
          width={500}
          height={300}
          src="/demo.png"
        ></Image>
        <div className="pt-6 text-white  font-light">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div className="pt-4 flex flex-row gap-10">
          <div>
            <FontAwesomeIcon className="w-5 h-5 pr-1" icon={faThumbsUp} /> 1296
          </div>
          <div>
            <FontAwesomeIcon className="w-5 h-5 pr-2" icon={faComment} />
            647
          </div>
          <div>
            <FontAwesomeIcon className="w-5 h-5" icon={faShare} />
          </div>
          <div className="ml-auto">
            <FontAwesomeIcon className="w-5 h-5" icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
