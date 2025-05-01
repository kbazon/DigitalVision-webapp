const request = require("supertest");
const express = require("express");
const app = require("../indeks.js");

describe("POST /api/login", () => {
  it("should return success with valid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "ivan.pavic@gmail.com", password: "lozinka123" });

    expect(response.body.success).toBe(true);
  });
});
