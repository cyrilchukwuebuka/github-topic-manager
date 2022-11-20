import { screen } from "@testing-library/react";
import React from "react";
import HowItWorks from "../../pages/HowItWorks";
import { renderWithProviders } from "../../services/testUtils/Provider";

type Props = {};

const renderHowItWorks = (props: Partial<Props>) => {
  const defaultProps: Props = {};

  return renderWithProviders(<HowItWorks {...defaultProps} {...props} />, '/');
};

describe("<HowItWorks />", () => {
  test("should display a Page, with About and How it works steps", async () => {
    renderHowItWorks({});

    expect(screen.getByText(/how it works/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();

    expect((await screen.findAllByRole("list")).length).not.toEqual(0);

    expect(
      screen.getByText(/this application streamlines/i, { exact: false })
    ).toBeInTheDocument();

    // legacy sample which I intentionally left for reference
    // eslint-disable-next-line testing-library/no-node-access
    // const container = document.querySelector("#about-message") as HTMLElement;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    // expect(getByText(container, /this application streamlines/i, { exact: false })).toBeInTheDocument();
  });
});
