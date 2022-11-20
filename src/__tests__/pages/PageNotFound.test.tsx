import { screen } from "@testing-library/react";
import React from "react";
import PageNotFound from "../../pages/PageNotFound";
import { renderWithProviders } from "../../services/testUtils/Provider";

type Props = {};

const renderPageNotFound = (props: Partial<Props>) => {
  const defaultProps: Props = {};

  return renderWithProviders(<PageNotFound {...defaultProps} {...props} />, '/')
};

describe("<PageNotFound />", () => {
  test("should display a Page, with About and How it works steps", async () => {
    renderPageNotFound({});

    expect(screen.getByText(/voodoo lord/i)).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /conjure path/i})).toBeInTheDocument();
  });
});
