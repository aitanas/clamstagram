import React from "react";

function Story(props) {
  return(
    <React.Fragment>
      <h3> {props.userName}</h3>
      <div id="content">{props.content}</div>
      <hr />
    </React.Fragment>
  );
}

Story.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired
};

export default Story;