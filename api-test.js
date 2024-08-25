// import necessary module
import { check } from "k6";
import http from "k6/http";

export default function () {
  // define URL and payload
  const url = "https://test-api.k6.io/auth/basic/login/";
  const payload = JSON.stringify({
    username: "test_case",
    password: "1234",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // send a post request and save response as a variable
  const res = http.post(url, payload, params);

  // log the request body
  console.log(res.body);

  // check that the response is 200
  check(res, {
    "response code was 200": (res) => res.status == 200,
  });
}
