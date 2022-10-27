import React from "react";
import { render, screen } from "@testing-library/react";
import HowItWorks from "../../pages/HowItWorks";

describe("<HowItWorks />", () => {
  test("should display a Page, with About and How it works steps", async () => {
    render(<HowItWorks />)

    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

    // expect(1).toBe(1);
  });
});
