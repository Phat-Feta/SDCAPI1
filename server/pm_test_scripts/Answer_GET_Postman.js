

// http://localhost:3000/api/fec2/hr-rf/qa/questions/30/answers
pm.test("Answer GET Req Status code is 200", function () {
    pm.response.to.have.status(200);
}); 

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});
