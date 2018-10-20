import React from "react";
import Content from "../components/Content/Content";
import data from "../data.json";

const ContentPage = ({ match }) => {
  const id = match.params.id;
  return (
    <div>
      <Content data={data.list[id]} />
    </div>
  );
};

export default ContentPage;
