pm.test("Answer POST Req Status code is 201", function () {
    pm.response.to.have.status(201);
}); 

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});
