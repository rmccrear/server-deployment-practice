const supertest = require("supertest");
const express = require("express");
const farmRoutes = require("./farmRoutes");

jest.mock("./data");

const app = express();
app.use("/api/v1/farms", farmRoutes);
const request = supertest(app);

describe("Farm listing", ()=>{
    test("It can get farms", (done)=> {
        request.get("/api/v1/farms/organic")
            .expect(200)
            .expect((res)=>{
                res.body.length=2;
            })
            .then((res)=>{
                expect(res.body.length).toBe(2)
                expect(res.body[0].googleLink).toBeTruthy();
                done();
            }).catch((err)=>done(err))
    });
})
