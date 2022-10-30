import { screen } from "@testing-library/react";
import React from "react";
import LandingComp from "../../components/LandingComp";
import { renderWithProviders } from "../../services/testUtils/Provider";

type Props = {};

const renderLandingComp = (props: Partial<Props>) => {
  const defaultProps: Props = {};

  return renderWithProviders(<LandingComp {...defaultProps} {...props} />, "/");
};

describe("<LandingComp />", () => {
  test("should display a Landing Page", async () => {
    renderLandingComp({});
    expect(screen.getByRole("link", { name: /how it works/i })).toBeVisible();
    expect(screen.getByText(/click on/i, { exact: false })).toBeVisible();
    expect(screen.getByRole("button", { name: /login/i })).toBeVisible();
  });
});
