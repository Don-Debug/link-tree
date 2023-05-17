"use client";

import { Box } from "@chakra-ui/react";
import Links from "./components/Links";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Box bgGradient="linear(to-t, #1f1f1f, #3A019E)">
        <Profile />
        <Links />
      </Box>
    </>
  );
}
