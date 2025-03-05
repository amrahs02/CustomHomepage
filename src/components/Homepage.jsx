import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SectionCard from "../components/SectionCard";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `https://www.google.com/search?q=${searchQuery}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#1E1E1E] text-gray-200">
      {/* Header */}
      <header className="mb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide">Developer Hub</h1>
        <p className="mt-2 text-gray-400 text-base sm:text-lg">Your Minimal & Functional Start Page</p>
      </header>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

      {/* 🔥 Responsive Grid Layout */}
      <div className="w-full max-w-6xl grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto">
        
        {/* 🔹 First Row - 4 Small Boxes */}
        <SectionCard title="Search & Browse" bgColor="#252526" textColor="#DDD5CB"
          links={[
            { name: "Google", url: "https://www.google.com" },
            { name: "Grok AI", url: "https://x.com/grok" },
            { name: "Claude AI", url: "https://claude.ai/" },
            { name: "Firefox", url: "https://www.mozilla.org/en-US/firefox/new/" }
          ]}
          className="lg:col-span-2 sm:row-span-1"
        />

        <SectionCard title="Social & Messaging" bgColor="#2E2E2E" textColor="#F1F1F1"
          links={[
            { name: "WhatsApp", url: "https://web.whatsapp.com/" },
            { name: "Telegram", url: "https://web.telegram.org" },
            { name: "X (Twitter)", url: "https://x.com" },
            { name: "Instagram", url: "https://www.instagram.com" }
          ]}
          className="lg:col-span-2 sm:row-span-1"
        />

        <SectionCard title="Shopping" bgColor="#3A3A3A" textColor="#EAEAEA"
          links={[
            { name: "Amazon", url: "https://www.amazon.in" },
            { name: "Flipkart", url: "https://www.flipkart.com" },
            { name: "Myntra", url: "https://www.myntra.com" }
          ]}
          className="lg:col-span-1"
        />

        <SectionCard title="Travel" bgColor="#444444" textColor="#FFF"
          links={[
            { name: "Ixigo", url: "https://www.ixigo.com" }
          ]}
          className="lg:col-span-1"
        />

        {/* 🔹 Second Row - Jobs & Careers (Updated Section) */}
        <SectionCard title="Jobs & Careers" description="Find the best job opportunities." bgColor="#1F1F1F" textColor="#E1E1E1"
          links={[
            { name: "LinkedIn", url: "https://www.linkedin.com" },
            { name: "Naukri", url: "https://www.naukri.com" },
            { name: "Indeed", url: "https://www.indeed.com" },
            { name: "WellFound", url: "https://wellfound.com/jobs" },
            { name: "Placify", url: "https://www.placify.in/" },
            { name: "Job4Freshers", url: "https://job4freshers.co.in/" },
            { name: "Job with Sanika", url: "https://t.me/jobwithsanika" },
            { name: "Oceans of Jobs", url: "https://t.me/oceansofjobs" },
            { name: "RemoteOK", url: "https://remoteok.io/" },
            { name: "JobEngine", url: "https://www.jobengine.ai/" },
            { name: "OffCampusPhoodenge", url: "https://www.offcampusphoodenge.com/" },
            { name: "Devtown", url: "https://www.devtown.in/" },
            { name: "JobLelo", url: "https://joblelo.com/" },
            { name: "AKTU Papers", url: "https://aktupapers.in/" }
          ]}
          className="lg:col-span-3 sm:row-span-1"
        />

        <SectionCard title="Coding & Tech" bgColor="#464646" textColor="#F5F5F5"
          links={[
            { name: "GitHub", url: "https://github.com" },
            { name: "LeetCode", url: "https://leetcode.com" },
            { name: "CodeChef", url: "https://www.codechef.com" },
            { name: "CodeForces", url: "https://codeforces.com" }
          ]}
          className="lg:col-span-1 sm:row-span-2"
        />

        {/* 🔹 Third Row - 2 Medium Boxes */}
        <SectionCard title="Company Portals" bgColor="#2A2A2A" textColor="#F1F1F1"
          links={[
            { name: "Accenture", url: "https://www.accenture.com" },
            { name: "Capgemini", url: "https://www.capgemini.com" },
            { name: "Wipro", url: "https://www.wipro.com" },
            { name: "Cisco", url: "https://www.cisco.com" }
          ]}
          className="lg:col-span-2 sm:row-span-1"
        />

        <SectionCard title="Learning & Challenges" bgColor="#3D3D3D" textColor="#FFF"
          links={[
            { name: "Striver 400 Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/" },
            { name: "Striver 100 Sheet", url: "https://takeuforward.org/interview-experience/100-coding-problems/" },
            { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org" },
            { name: "MonkeyType", url: "https://www.monkeytype.com" }
          ]}
          className="lg:col-span-3 sm:row-span-1"
        />

      </div>
    </div>
  );
};

export default Homepage;
