import { screen } from "@testing-library/react";
import React from "react";
import RepoListing from "../../components/RepoListing";
import { renderWithProviders } from "../../services/testUtils/Provider";

type Props = {};

const renderRepoListing = (props: Partial<Props>) => {
  const defaultProps: Props = {};

  return renderWithProviders(<RepoListing {...defaultProps} {...props} />, '/');
};

describe("<RepoListing />", () => {
  test("should display a RepoListing Page", async () => {
    renderRepoListing(<RepoListing />);

    expect((await screen.findAllByRole('list')).length).not.toBe(0)
  });
});
