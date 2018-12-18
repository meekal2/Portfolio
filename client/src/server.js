import axios from "axios";

export function sendMessage(req) {
  console.log(req);
  return axios.post(
    "http://portfolioapi-prod.us-west-1.elasticbeanstalk.com/api/test/send",
    req
  );
}
