const Greeting = () => {
    const hours = new Date().getHours();
    let greeting = "Good Evening";
  
    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours < 18) {
      greeting = "Good Afternoon";
    }
  
    return (
      <div className="text-2xl w-full font-semibold text-gray-300">
        {greeting}, Sandeep Sharma!
      </div>
    );
  };
  
  export default Greeting;
  