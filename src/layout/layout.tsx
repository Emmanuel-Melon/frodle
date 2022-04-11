import React, { ReactChild } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../components/ui/navbar";
import Head from "next/head";

type LayoutProps = {
  children: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Neno</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons8-n-32.png" />
      </Head>
      <Flex
        width="100%"
        height="100%"
        minHeight="100vh"
        alignItems="center"
        direction="column"
        margin={0}
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189764/neno/images/Cloudy.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        gap={6}
      >
        <Navbar />
        <Flex width="100%" height="100%" direction="column" alignItems="center">
          {children}
        </Flex>
      </Flex>
    </>
  );
}
