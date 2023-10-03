import React, { useState, useEffect } from "react";
import { useBlockProps } from "@wordpress/block-editor";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format the time as per your requirements
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div
      {...useBlockProps({
        className: "daxor__block__clock",
      })}
    >
      <h1>Current Time:</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;
