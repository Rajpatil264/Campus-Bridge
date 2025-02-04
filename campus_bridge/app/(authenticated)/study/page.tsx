import { useState } from "react";
import PdfViewer from "../pdfViewer";

export default function Study() {
  const branches = [
    "Computer Science",
    "Electronics & Telecommunication",
    "Mechanical Engineering",
    "Civil Engineering",
  ];
  const subjects = [
    {
      title: "Advanced  Database  Management",
      description:
        "This course will introduce the students the knowledge of various types of database systems with advanced querying for decision support system and information retrieval etc",
      file: "adbms",
    },
    {
      title: "Distributed  and  Cloud  Computing",
      description:
        "This course provides an introduction to the fundamentals of distributed systems and cloud computing. The main goal of a distributed system is to make it easy for users to access remote resources, and share them with other users in a controlled manner. The main purpose of cloud computing is the delivery of different services through the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software.",
      file: "dcs",
    },
    {
      title: "Advanced  Network  Engineering",
      description:
        "The objective of the course is to familiarize students with basics and Advance Networking. This course is designed to produce networking professionals capable of implementing, administering, and maintaining Networks and overall systems with the knowledge of the Windows Server 2008 through its internal working of the core components and introduction to Linux services, protocols and Microsoft Azure Cloud services",
      file: "ane",
    },
  ];
  const roadmaps = [
    {
      title: "Frontend Development",
      description: "",
      file: "frontend.pdf",
    },
    {
      title: "Backend Development",
      description: "",
      file: "backend.pdf",
    },
    {
      title: "Fullstack Development",
      description: "",
      file: "full-stack.pdf",
    },
    {
      title: "React",
      description: "",
      file: "react.pdf",
    },
    {
      title: "DevOps ",
      description: "",
      file: "devops.pdf",
    },
    {
      title: "Flutter Development ",
      description: "",
      file: "flutter.pdf",
    },
    {
      title: "Android Development ",
      description: "",
      file: "android.pdf",
    },
    {
      title: "SQL ",
      description: "",
      file: "sql.pdf",
    },
    {
      title: "Blockchain Development ",
      description: "",
      file: "blockchain.pdf",
    },
  ];
  const [selectedContent, setContent] = useState({
    title: "",
    description: "",
    file: "",
  });
  const [selectedBranch, setBranch] = useState("Computer Science");
  function handleContentClick(content: any) {
    setContent(content);
  }

  return (
    <div>
      <div className="w-[calc(75vw)] flex flex-row  items-center pt-[10px] border-b border-zinc-800">
        {branches.map((branch) => (
          <div className="flex flex-col justify-center items-center">
            <button
              className={`pb-3 px-4 text-sm ${
                selectedBranch == branch
                  ? "text-white font-semibold"
                  : "text-white font-extralight"
              }`}
              onClick={() => setBranch(branch)}
            >
              {branch}
            </button>
            <div
              className={`w-full h-[1px]  ${
                selectedBranch == branch ? "bg-primary-green-dark " : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex flex-row w-[calc(75vw)] h-[2000px] pb-10">
        <div className="w-[calc(20vw)] pr-12">
          {/* Section 1 content */}
          <div className="pl-8 text-zinc-500 flex flex-col justify-items-start">
            <h2 className="pt-10 py-3 px-4 text-zinc-200 font-semibold text-sm">
              Subjects
            </h2>
            {subjects.map((subject) => (
              <div key={subject.title}>
                <button
                  className={`py-2 w-full text-start  px-4 text-sm ${
                    selectedContent.file == subject.file
                      ? "bg-primary-green primary-green font-semibold rounded-lg"
                      : "text-white font-extralight"
                  }`}
                  onClick={() => handleContentClick(subject)}
                >
                  {subject.title}
                </button>
              </div>
            ))}
            <h2 className="pt-10 py-4 px-4 text-zinc-200 font-semibold text-sm">
              Roadmaps
            </h2>
            {roadmaps.map((subject) => (
              <div key={subject.title}>
                <button
                  className={`py-2 w-full text-start  px-4 text-sm ${
                    selectedContent.file == subject.file
                      ? "bg-primary-green primary-green font-semibold rounded-lg"
                      : "text-white font-extralight"
                  }`}
                  onClick={() => handleContentClick(subject)}
                >
                  {subject.title}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[calc(60vw)] h-[2000px] px-10 ">
          {/* <div>
            <FileUpload />
          </div> */}
          <div className="text-md primary-green pt-8 font-semibold">
            {selectedContent.title}
          </div>
          <div className="text-md text-zinc-400 font-light pt-5 pb-8">
            {selectedContent.description}
          </div>
          <div>
            {selectedContent.file == "" ? (
              <div className="flex justify-center items-center h-96 text-2xl">
                <h1>Please select a topic...</h1>
              </div>
            ) : (
              <PdfViewer pdfFileName={selectedContent.file}></PdfViewer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
