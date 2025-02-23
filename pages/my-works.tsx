import CommonHead from "@/components/CommonHead/CommonHead";
import MyWorkComp from "@/components/MyWorkComp/MyWorkComp";
import Wrapper from "@/layout/Wrapper/Wrapper";
import React from "react";

const MyWorks = () => {
  return (
    <Wrapper>
      <CommonHead headText="My works" subText="Showcase About Works"/>
      <MyWorkComp />
    </Wrapper>
  );
};

export default MyWorks;
