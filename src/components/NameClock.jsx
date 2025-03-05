import { useState, useEffect } from "react";

const NameClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl font-medium text-gray-300">
      🕒 {time.toLocaleTimeString()}
    </div>
  );
};

export default NameClock;
