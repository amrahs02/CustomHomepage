import { useState, useEffect } from "react";

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="text-xl font-medium text-gray-300 bg-[#252526] px-4 py-2 rounded-tl-3xl">
      {time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit", // Ensure seconds are displayed
      })}
    </div>
  );
};

export default TimeDisplay;
