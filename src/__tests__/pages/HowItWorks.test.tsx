/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import HowItWorks from "../../pages/HowItWorks";

type Props = {};

const renderHowItWorks = (props: Partial<Props>) => {
  const defaultProps: Props = {};

  return render(<HowItWorks {...defaultProps} {...props} />);
};

describe("<HowItWorks />", () => {
  test("should display a Page, with About and How it works steps", async () => {
    const {} = renderHowItWorks({});

    // screen.getByRole("list", { name: "" });
    expect(screen.getByText(/This Application/i)).toBeInTheDocument();
    // expect(screen.getByText(/How It Works/i)).toBeInTheDocument();
    // expect(
    //   screen.getByRole("paragraph", {
    //     description: /Having successfully/i,
    //     exact: false,
    //   })
    // ).toBeInTheDocument();
  });
});
