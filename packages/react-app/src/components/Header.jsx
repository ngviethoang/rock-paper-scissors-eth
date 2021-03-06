import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/ngviethoang/rock-paper-scissors-eth" target="_blank" rel="noopener noreferrer">
      <PageHeader title="🏗 Rock Paper Scissors" subTitle="" style={{ cursor: "pointer" }} />
    </a>
  );
}
