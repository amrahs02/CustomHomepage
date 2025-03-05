import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SectionCard from "../components/SectionCard";
import Greeting from "./Greeting";
import NameClock from "./NameClock";
import Weather from "./Weather";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-[#1E1E1E] text-gray-200">
      {/* Header */}
      <header className="w-full flex flex-col items-center justify-center mb-3 text-center space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-4">
          <Greeting />
          {/* <Weather /> */}
          {/* <NameClock /> */}
        </div>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
      </header>

      {/* 🔥 Responsive Puzzle-Like Grid Layout */}
      <div className="w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-rows-auto">
        {/* 🔹 First Row - 4 Small Boxes */}
        <SectionCard
          title="Quick Links"
          bgColor="#333"
          textColor="#DDD5CB"
          links={[
            { name: "Google", url: "https://www.google.com" },
            { name: "Stack Overflow", url: "https://stackoverflow.com" },
            { name: "GitHub", url: "https://github.com" },
            { name: "MDN Docs", url: "https://developer.mozilla.org" },
            { name: "W3Schools", url: "https://www.w3schools.com" },
          ]}
          className="col-span-1 sm:col-span-2 row-span-1 rounded-tl-3xl"
        />

        <SectionCard
          title="Coding Challenges"
          bgColor="#2E2E2E"
          textColor="#F1F1F1"
          links={[
            { name: "LeetCode", url: "https://leetcode.com" },
            { name: "CodeWars", url: "https://www.codewars.com" },
            { name: "HackerRank", url: "https://www.hackerrank.com" },
            { name: "CodeChef", url: "https://www.codechef.com" },
            { name: "TopCoder", url: "https://www.topcoder.com" },
          ]}
          className="col-span-1 sm:col-span-2 row-span-1"
        />

        <SectionCard
          title="News & Trends"
          bgColor="#3A3A3A"
          textColor="#EAEAEA"
          links={[
            { name: "Dev.to", url: "https://dev.to" },
            { name: "Hacker News", url: "https://news.ycombinator.com" },
            { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
            { name: "CSS-Tricks", url: "https://css-tricks.com" },
            { name: "Medium", url: "https://medium.com/tag/development" },
          ]}
          className="col-span-1 row-span-1 rounded-tr-3xl"
        />

        <SectionCard
          title="Dev Tools"
          bgColor="#444444"
          textColor="#FFF"
          links={[
            { name: "Postman", url: "https://www.postman.com" },
            { name: "Regex101", url: "https://regex101.com" },
            { name: "JSON Formatter", url: "https://jsonformatter.org" },
            { name: "JWT Debugger", url: "https://jwt.io" },
            { name: "CodeSandbox", url: "https://codesandbox.io" },
          ]}
          className="col-span-1 row-span-1"
        />

        {/* 🔹 Second Row - 3 Larger Boxes */}
        <SectionCard
          title="Job Search"
          bgColor="#323132"
          textColor="#E1E1E1"
          links={[
            { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
            { name: "Indeed", url: "https://www.indeed.com" },
            { name: "AngelList", url: "https://angel.co/jobs" },
            { name: "WellFound", url: "https://wellfound.com/jobs" },
            { name: "Hired", url: "https://hired.com" },
          ]}
          className="col-span-1 sm:col-span-3 row-span-1 rounded-bl-3xl"
        />

        <SectionCard
          title="Notes & Tasks"
          bgColor="#323232"
          textColor="#EAEAEA"
          links={[
            { name: "Notion", url: "https://www.notion.so" },
            { name: "Todoist", url: "https://todoist.com" },
            { name: "Google Keep", url: "https://keep.google.com" },
            { name: "Evernote", url: "https://www.evernote.com" },
            { name: "Obsidian", url: "https://obsidian.md" },
          ]}
          className="col-span-1 sm:col-span-2 row-span-1"
        />

        <SectionCard
          title="Design & Inspiration"
          bgColor="#464646"
          textColor="#F5F5F5"
          links={[
            { name: "Figma", url: "https://www.figma.com" },
            { name: "Canva", url: "https://www.canva.com" },
            { name: "Coolors", url: "https://coolors.co/" },
            { name: "Dribbble", url: "https://dribbble.com" },
            { name: "Behance", url: "https://www.behance.net" },
          ]}
          className="col-span-1 row-span-2"
        />

        {/* 🔹 Third Row - 2 Medium Boxes */}
        <SectionCard
          title="Learning"
          bgColor="#2A2A2A"
          textColor="#F1F1F1"
          links={[
            { name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
            { name: "CS50", url: "https://cs50.harvard.edu/" },
            { name: "The Odin Project", url: "https://www.theodinproject.com" },
            { name: "Frontend Masters", url: "https://frontendmasters.com" },
            { name: "Egghead.io", url: "https://egghead.io" },
          ]}
          className="col-span-1 sm:col-span-2 row-span-1 rounded-br-3xl"
        />

        <SectionCard
          title="Project-Based Learning"
          bgColor="#3D3D3D"
          textColor="#FFF"
          links={[
            { name: "Dev Projects", url: "https://devprojects.com" },
            { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
            { name: "Buildspace", url: "https://buildspace.so/" },
            { name: "Full Stack Open", url: "https://fullstackopen.com" },
            { name: "App Ideas Collection", url: "https://github.com/florinpop17/app-ideas" },
          ]}
          className="col-span-1 sm:col-span-3 row-span-1"
        />

        {/* 🔹 Fourth Row - Full-Width Box */}
        <SectionCard
          title="Developer Resources"
          bgColor="#282828"
          textColor="#E0E0E0"
          links={[
            { name: "Awesome Lists", url: "https://github.com/sindresorhus/awesome" },
            { name: "Roadmap.sh", url: "https://roadmap.sh/" },
            { name: "DevDocs", url: "https://devdocs.io" },
            { name: "OverAPI", url: "https://overapi.com" },
            { name: "Refactoring Guru", url: "https://refactoring.guru" },
          ]}
          className="col-span-1 sm:col-span-6 row-span-1 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Homepage;
