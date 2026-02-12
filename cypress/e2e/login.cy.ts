describe("Login Page", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("/login");
  });

  it("should render login form", () => {
    cy.contains("h4", "Masuk Ke E-Commerce").should("be.visible");
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get("#login").should("be.visible");
  });

  it("should login successfully and redirect to customer page", () => {
    cy.intercept("GET", "**/users?username=admin&password=admin123", {
      statusCode: 200,
      body: [
        {
          id: "u1",
          name: "Admin Sistem",
          username: "admin",
          password: "admin123",
          token: "fake-token-cypress",
        },
      ],
    }).as("loginSuccess");

    cy.get('input[name="username"]').clear().type("admin");
    cy.get('input[name="password"]').clear().type("admin123");
    cy.get("#login").click();

    cy.wait("@loginSuccess");
    cy.url().should("include", "/");
    cy.getCookie("token").should("exist");
  });

  it("should show error notification when credentials are invalid", () => {
    cy.intercept("GET", "**/users?username=admin&password=admin123", {
      statusCode: 200,
      body: [],
    }).as("loginFailed");

    cy.get('input[name="username"]').clear().type("admin");
    cy.get('input[name="password"]').clear().type("admin123");
    cy.get("#login").click();

    cy.wait("@loginFailed");
    cy.contains("Username atau Password salah").should("be.visible");
    cy.url().should("include", "/login");
  });
});
