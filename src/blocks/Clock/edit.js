import React, { useState, useEffect } from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

const Clock = (props) => {
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
    <div {...useBlockProps({ className: props.className })}>
      <Card>
        <Flex direction="column" gap="2" align="center" justify="center">
          <Heading as="h2">Current Time:</Heading>
          <Text size="4" as="p">
            {formattedTime}
          </Text>
        </Flex>
      </Card>
    </div>
  );
};

export default Clock;
