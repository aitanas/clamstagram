import React from "react";
import PropTypes from "prop-types";


function Story(props) {
  return(
    <React.Fragment>
      <img src={props.content}  alt="content placeholder" className="avatar" height="50px" width="50px"/>
      <h3> {props.userName}</h3>
      <hr />
    </React.Fragment>
  );
}

Story.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Story;