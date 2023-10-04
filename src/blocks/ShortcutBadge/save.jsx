import React from "react";
import { Link, Card, Flex, Button, Text } from "@radix-ui/themes";
import "./saveStyle.scss";

export default function save(props) {
  return (
    <div className="daxor__block__shortcut-badge">
      <Link href={props.attributes.value} target="_blank" rel="noreferrer">
        <Card>
          <Flex align="center" justify="center">
            <Text>{props.attributes.label}</Text>
          </Flex>
        </Card>
      </Link>
    </div>
  );
}
