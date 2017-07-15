import React from "react";
import Paper from "material-ui/Paper";

const TitleBar = props => {
  const style = {
    margin: "auto",
    width: "600px",
    padding: "5px",
    marginTop: "20px"
  };

  return (
    <Paper zDepth={3} style={style}>
      <h1>Antibody Helper</h1>
    </Paper>
  );
};

export default TitleBar;
