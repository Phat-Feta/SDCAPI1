//http://localhost:3000/api/fec2/hr-rf/qa/questions?product_id=201
pm.test("Question GET Req Status code is 200", function () {
    pm.response.to.have.status(200);
}); 

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});

pm.test("Body is correct", function () {
    pm.response.to.have.body("");
});