import React from "react";

const About = ({ match }) => {
  return <div>{match.params.username} 의 소개</div>;
};

export default About;

// class 형태로 component 를 만든다면 this.props.match 로 사용함
