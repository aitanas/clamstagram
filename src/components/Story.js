import React from "react";
import PropTypes from "prop-types";


function Story(props) {
  return(
    <React.Fragment>
      <div className="story">
        <img src={props.content}  alt="content placeholder" className="storyImg"/>
        <h3 className="story-text"> {props.userName}</h3>
      </div>
    </React.Fragment>
  );
}

Story.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Story;