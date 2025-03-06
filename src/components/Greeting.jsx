// Greeting Component
const Greeting = () => {
  const hours = new Date().getHours();
  let greeting = "Good Evening";

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-medium text-gray-300 whitespace-nowrap">
      {greeting}
    </div>
  );
};

export default Greeting;