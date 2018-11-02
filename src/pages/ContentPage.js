import React from "react";
import Content from "../components/Content/ContentMain/ContentMain";
import data from "../data.json";

const ContentPage = ({ match }) => {
  const id = match.params.id;
  return (
    <Content data={data.list[id]} />
  );
};

export default ContentPage;
