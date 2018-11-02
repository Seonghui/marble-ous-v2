import React from "react";
import DesignerMain from '../components/Designer/DesignerMain/DesignerMain';
import data from "../data.json";

const DesignerPage = ({ match }) => {
  return (
    <DesignerMain data={data.list}/>
  );
};

export default DesignerPage;
