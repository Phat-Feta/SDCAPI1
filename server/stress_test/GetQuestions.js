import http from 'k6/http';
import { check, group, sleep } from 'k6';
export const options = {
  stages: [
    { duration: '1s', target: 1000 }, // simulate ramp-up of traffic from 1 to 1000 users over 1 second.
    { duration: '28s', target: 1000 }, // stay at 1000 users for 5 seconds
    { duration: '1s', target: 0 } // ramp-down to 0 users
  ],
//  thresholds: {
//     http_req_duration: ['p(90)<1500'], // 90% of requests must complete below 1.5s
//   },
};


export default () => {
  const res = http.get(`http://localhost:4880/api/fec2/hr-rf/qa/questions?product_id=201`, {
  });           //call the api and set the response to res
  sleep(2);
  // check(res, {
  //   'is status 200': (r) => r.status===200
  // });
};
