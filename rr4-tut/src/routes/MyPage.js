import React from "react";
import { Redirect } from "react-router-dom";

const logged = false;

const MyPage = () => {
  return <div>{!logged && <Redirect to="/login" />}마이 페이지</div>;
};

export default MyPage;
