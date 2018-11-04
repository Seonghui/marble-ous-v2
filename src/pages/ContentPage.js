import React from "react";
import ContentMain from "../components/Content/ContentMain/ContentMain";
import data from "../data.json";

const ContentPage = ({ match }) => {
  const id = match.params.id;
  return (
    <ContentMain data={data.list[id]} id={id}/>
  );
};

export default ContentPage;
