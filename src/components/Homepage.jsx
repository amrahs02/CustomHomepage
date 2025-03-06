import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SectionCard from "../components/SectionCard";
import Greeting from "./Greeting";
import NameClock from "./NameClock";
import TimeDisplay from "./TimeDisplay";
import Weather from "./Weather";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 bg-[#1E1E1E] text-gray-200">
      {/* Header */}
      <header className="w-full flex flex-col items-center justify-evenly px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 gap-3 sm:flex-row sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <Greeting />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <TimeDisplay />
      </header>

      {/* Responsive Grid Layout */}
      <div className="w-full grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 auto-rows-fr">
        {/* First Row */}

        <SectionCard
          title="News & Trends"
          bgColor="#3A3A3A"
          textColor="#EAEAEA"
          links={[
            { name: "Dev.to", url: "https://dev.to" },
            { name: "Hacker News", url: "https://news.ycombinator.com" },
            { name: "Medium", url: "https://medium.com/tag/development" },
            { name: "The Hindu", url: "https://www.thehindu.com" },
            { name: "lallantop", url: "https://www.thelallantop.com" },
          ]}
          className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 rounded-tl-3xl    row-span-2 "
        />
        <SectionCard
          title="AI Tools"
          bgColor="#333"
          textColor="#F1F1F1"
          links={[
            { name: "Grok", url: "https://grok.com" },
            { name: "DeepSeek", url: "https://deepseek.com" },
            { name: "Claude", url: "https://claude.ai" },
            { name: "ChatGPT", url: "https://www.chat.com" },
          ]}
          className="col-span-1 sm:col-span-2 lg:col-span-2  xl:col-span-2 row-span-1  "
        />

        <SectionCard
          title="Coding Challenges"
          bgColor="#333"
          textColor="#F1F1F1"
          links={[
            { name: "LeetCode", url: "https://leetcode.com" },
            { name: "HackerRank", url: "https://www.hackerrank.com" },
            { name: "CodeChef", url: "https://www.codechef.com" },
            { name: "TopCoder", url: "https://www.topcoder.com" },
          ]}
          className="col-span-1 sm:col-span-1  lg:col-span-2 xl:col-span-2 row-span-1 "
        />

        <SectionCard
          title="Dev Tools"
          bgColor="#444444"
          textColor="#FFF"
          links={[
            { name: "Postman", url: "https://www.postman.com" },
            { name: "Regex101", url: "https://regex101.com" },
            { name: "CodeSandbox", url: "https://codesandbox.io" },
            { name: "CodePen", url: "https://codepen.io" },
            { name: "Repl.it", url: "https://repl.it" },
            { name: "Vercel", url: "https://vercel.com" },
            { name: "Firebase", url: "https://firebase.google.com" },
            {
              name: "MongoDB Atlas",
              url: "https://www.mongodb.com/cloud/atlas",
            },
          ]}
          className="col-span-1 sm:col-span-1 lg:col-span-1 rounded-tr-3xl  xl:col-span-1 row-span-2 "
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
          className="col-span-1 sm:col-span-1  lg:col-span-1 xl:col-span-1 row-span-1 "
        />

        <SectionCard
          title="Journal & News"
          bgColor="#323232"
          textColor="#EAEAEA"
          links={[
            { name: "The Verge", url: "https://www.theverge.com" },
            { name: "TechCrunch", url: "https://techcrunch.com" },
            { name: "Wired", url: "https://www.wired.com" },
            { name: "Ars Technica", url: "https://arstechnica.com" },
          ]}
          className="col-span-1 sm:col-span-1   lg:col-span-1 xl:col-span-1 row-span-2  "
        />

        {/* Second Row */}
        <SectionCard
          title="Job Search"
          bgColor="#323132"
          textColor="#E1E1E1"
          links={[
            { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/" },
            { name: "Indeed", url: "https://www.indeed.com" },
            { name: "WellFound", url: "https://wellfound.com/jobs" },
            { name: "Hired", url: "https://hired.com" },
            { name: "Glassdoor", url: "https://www.glassdoor.com" },
            { name: "Naukri", url: "https://www.naukri.com" },
            { name: "Monster", url: "https://www.monster.com" },
            { name: "Instahyre", url: "https://www.instahyre.com" },
            { name: "Remote OK", url: "https://remoteok.io" },
            { name: "We Work Remotely", url: "https://weworkremotely.com" },
            { name: "Twitter Jobs", url: "https://twitter.com/jobs" },
            { name: "GitHub Jobs", url: "https://jobs.github.com" },
          ]}
          className="col-span-1 sm:col-span-1 lg:col-span-1   xl:col-span-1 row-span-2  "
        />

        <SectionCard
          title="Startup Essentials"
          bgColor="#323132"
          textColor="#E1E1E1"
          links={[
            { name: "LinkedIn", url: "https://www.linkedin.com" },
            { name: "YouTube", url: "https://www.youtube.com" },
            { name: "Gmail", url: "https://mail.google.com" },
            { name: "Google Drive", url: "https://drive.google.com" },
            { name: "Google Docs", url: "https://docs.google.com" },
          ]}
          className="col-span-1 sm:col-span-1  lg:col-span-1 xl:col-span-1 row-span-1 "
        />

        {/* <SectionCard
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
          className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-2"
        /> */}

        {/* Third Row */}
        <SectionCard
          title="Project-Based Learning"
          bgColor="#3D3D3D"
          textColor="#FFF"
          links={[
            { name: "Dev Projects", url: "https://devprojects.com" },
            { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
            { name: "Buildspace", url: "https://buildspace.so/" },
            { name: "Full Stack Open", url: "https://fullstackopen.com" },
            {
              name: "App Ideas Collection",
              url: "https://github.com/florinpop17/app-ideas",
            },
          ]}
          className="col-span-1 sm:col-span-2  lg:col-span-2 xl:col-span-2 row-span-1"
        />

        <SectionCard
          title="My Favourite Tools"
          bgColor="#3D3D3D"
          textColor="#FFF"
          links={[]}
          className="col-span-1 sm:col-span-2 lg:col-span-2  xl:col-span-2 row-span-1"
        />

        {/* Fourth Row */}
        <SectionCard
          title="Developer Resources"
          bgColor="#444444"
          textColor="#E0E0E0"
          links={[
            {
              name: "Awesome Lists",
              url: "https://github.com/sindresorhus/awesome",
            },
            { name: "Roadmap.sh", url: "https://roadmap.sh/" },
            { name: "DevDocs", url: "https://devdocs.io" },
            { name: "OverAPI", url: "https://overapi.com" },
            { name: "Refactoring Guru", url: "https://refactoring.guru" },
          ]}
          className="col-span-1 sm:col-span-2  lg:col-span-2 xl:col-span-2 row-span-1 rounded-3xl"
        />

        <SectionCard
          title="Coder Communities"
          bgColor="#444444"
          textColor="#E0E0E0"
          links={[
            { name: "Stack Overflow", url: "https://stackoverflow.com" },
            { name: "GitHub", url: "https://github.com" },
            {
              name: "Reddit r/programming",
              url: "https://www.reddit.com/r/programming/",
            },
            { name: "Discord Dev Servers", url: "https://discord.com" },
          ]}
          className="col-span-1 sm:col-span-2  lg:col-span-1 xl:col-span-2 row-span-1 rounded-3xl"
        />
        <SectionCard
          title="Coder Communities"
          bgColor="#444444"
          textColor="#E0E0E0"
          links={[
            { name: "Stack Overflow", url: "https://stackoverflow.com" },
            { name: "GitHub", url: "https://github.com" },
            {
              name: "Reddit r/programming",
              url: "https://www.reddit.com/r/programming/",
            },
            { name: "Discord Dev Servers", url: "https://discord.com" },
          ]}
          className="col-span-1 sm:col-span-2 lg:col-span-1  xl:col-span-2 row-span-1 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Homepage;
