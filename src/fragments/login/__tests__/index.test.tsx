import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginFragment from "..";
import { withQueryClient } from "../../../utils/test-utils";
import userEvent from "@testing-library/user-event";

const mockMutate = vi.fn();

vi.mock("../hooks/use-queries.ts", () => ({
  useLogin: () => ({
    mutate: mockMutate,
    isPending: false,
  }),
}));

vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => vi.fn(),
}));
describe("Login Page", () => {
  test("should render with positif case", async () => {
    mockMutate.mockImplementation((_, options) => {
      options?.onSuccess?.({
        token: "abc123",
      });
    });
    render(withQueryClient(<LoginFragment />));

    const usernameField = screen.getByRole("textbox", {
      name: /username/i,
    });

    await userEvent.type(usernameField, "admin");

    const passwordField = screen.getByLabelText(/password/i);

    await userEvent.type(passwordField, "admin");

    const buttonSubmit = screen.getByRole("button");

    await userEvent.click(buttonSubmit);

    expect(usernameField).toHaveValue("adminadmin");
    expect(passwordField).toHaveValue("admin123admin");
  });

  test("sould render with submit failed", async () => {
    mockMutate.mockImplementation((_, options) => {
      options?.onSuccess?.(null);
    });
    render(withQueryClient(<LoginFragment />));

    const usernameField = screen.getByRole("textbox", {
      name: /username/i,
    });

    await userEvent.type(usernameField, "admin");

    const passwordField = screen.getByLabelText(/password/i);

    await userEvent.type(passwordField, "admin");

    const buttonSubmit = screen.getByRole("button");

    await userEvent.click(buttonSubmit);

    expect(usernameField).toHaveValue("adminadmin");
    expect(passwordField).toHaveValue("admin123admin");
  });

  test("should change type passeordfield", async () => {
    render(withQueryClient(<LoginFragment />));

    const passwordBtn = screen.getByTestId("password-action");

    await userEvent.click(passwordBtn);
  });
});
