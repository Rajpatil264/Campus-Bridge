"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState, useRef } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMessage,
  faHome,
  faUserGroup,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Study from "../study/page";
import Posts from "../posts/page";
import Query from "../query/page";

export default function Home() {
  const firebaseConfig = {
    apiKey: "AIzaSyDrgahN63nq3w9y1hYpuVwWezw6vlYitoU",
    authDomain: "campusbridge-120b3.firebaseapp.com",
    projectId: "campusbridge-120b3",
    storageBucket: "campusbridge-120b3.appspot.com",
    messagingSenderId: "953464357643",
    appId: "1:953464357643:web:013dc694576efcb1fe580e",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [items, setItems] = useState<any[]>([]);
  const [queryResult, setQueryResult] = useState<string[]>([]);
  const [page, setPage] = useState("home");
  const [searchText, setSearchText] = useState("");
  const [isQueryLoading, changeLoadingStatus] = useState(false);
  const isFirstRender = useRef(true);

  const fetchItemsFromFirestore = async () => {
    try {
      const col = collection(db, "resources");
      const itemSnapshot = await getDocs(col);
      const data = itemSnapshot.docs.map((doc) => doc.data());
      data.forEach((item) => {
        console.log(item);
      });
      setItems(data);
    } catch (error) {
      console.log("Error fetching data from Firestore:" + error);
    }
  };

  const changePage = (page: string) => {
    setPage(page);
    changeLoadingStatus(false);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchItemsFromFirestore();
  }, []);

  const searchQuery = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/getData/${searchText}`
      );
      const result = await response.json();
      setQueryResult([result]);
      // setQueryResult([
      //   "To optimize the given program, you can make a few changes. First, you can initialize the `result` variable to 1 outside of the loop. This way, it will not be reset to 1 in each iteration. Additionally, you can use a more efficient algorithm such as recursion or memoization instead of looping through each number.\\n\\nHere's an example of an optimized version using recursion:\\n\\n```python\\ndef get_factorial(n):\\n    if n == 0:\\n        return 1\\n    else:\\n        return n * get_factorial(n-1)\\n```\\n\\nIn this version, if the input `n` is 0, it returns 1 as the base case. Otherwise, it recursively calls the `get_factorial` function with `n-1` and multiplies the result by `n`. This way, it avoids the need for a loop and calculates the factorial more efficiently.\\n\\nKeep in mind that the recursive approach has its limitations, especially for large values of `n` where it may cause a stack overflow error. In such cases, you can consider using memoization or an iterative solution.",
      // ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      changeLoadingStatus(false);
    }
  };

  return (
    <div className="w-screen text-zinc-300 overflow-y-auto bg-backgound-dark flex flex-col justify-center items-center">
      <div className="overflow-y-auto h-screen">
        {/* ------------------------------ Navbar Started -------------------------- */}
        <div className="w-[calc(75vw)] flex flex-row justify-between  items-center p-[14px] border-b border-zinc-800">
          <div className="text-md text-white font-semibold">
            The Campus Bridge
          </div>
          {/* <Link href="/auth/profile">
          <div className="text-zinc-300 text-lg px-20 py-5">Profile</div>
        </Link> */}
          <button
            className={`flex flex-row gap-2 text-sm ${
              page == "home"
                ? "bg-primary-green primary-green font-semibold rounded-full px-4 py-[6px] border border-green-900"
                : "text-white"
            }`}
            onClick={() => {
              changePage("home");
            }}
          >
            <div>
              <FontAwesomeIcon className="w-4 h-4" icon={faHome} />
            </div>
            Home
          </button>

          <div className="relative w-[calc(35vw)]">
            <input
              className="pl-10 pr-4 py-[5px] z-0 w-full bg-transparent rounded-md border border-zinc-700 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-600"
              type="text"
              placeholder="Search"
              onChange={(value) => {
                setSearchText(value.target.value);
              }}
            />
            <span className="absolute inset-y-0 right-2 z-50 px-3 flex items-center">
              <button
                onClick={() => {
                  changePage("query");
                  changeLoadingStatus(true);
                  console.log("Searching...");
                  searchQuery();
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </span>
          </div>
          <div className="flex flex-row gap-20 items-center">
            <div>
              <FontAwesomeIcon
                className={`w-4 h-4 ${
                  page == "groups" ? "primary-green" : "text-white"
                }`}
                icon={faUserGroup}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className={`w-4 h-4 ${
                  page == "message" ? "primary-green" : "text-white"
                }`}
                icon={faMessage}
              />
            </div>
            <div>
              <button onClick={() => changePage("study")}>
                <FontAwesomeIcon
                  className={`w-5 h-5 ${
                    page == "study"
                      ? "bg-primary-green primary-green font-semibold rounded-full px-4 py-[6px] border border-green-900"
                      : "text-white"
                  }`}
                  icon={faGraduationCap}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-16 justify-center items-center">
            <UserButton />
          </div>
        </div>
        {(() => {
          switch (page) {
            case "home":
              return <Posts></Posts>;
            case "study":
              return <Study></Study>;
            case "query":
              return (
                <Query loading={isQueryLoading} result={queryResult}></Query>
              );
            default:
              return <Posts></Posts>;
          }
        })()}
        {/* ---------------------------------- Navbar Ended -------------------------- */}
        {/* {<Study></Study>} */}
        {/* {<Posts></Posts>} */}
      </div>
    </div>
  );
}
