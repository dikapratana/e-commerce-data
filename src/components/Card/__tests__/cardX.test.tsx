import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardX from "../cardX";

const mockNavigate = vi.fn();

vi.mock("@tanstack/react-router", () => ({
  useNavigate: () => mockNavigate,
}));

describe("CardX", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });
  test("should render title", () => {
    render(<CardX title="halo" />);
    expect(screen.getByRole("heading", { name: "halo" })).toBeInTheDocument();
  });

  test("should render backbutton and click navigate", async () => {
    render(<CardX backPath="/" />);
    const backbutton = screen.getByRole("img");

    await userEvent.click(backbutton);

    expect(mockNavigate).toHaveBeenCalledWith({ to: "/" });
  });

  test("should render total data badge", () => {
    render(<CardX totalData={3} />);
    expect(screen.getByText("3 Data")).toBeInTheDocument();
  });
});
