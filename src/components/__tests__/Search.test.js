import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body component with Search Button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Pizzas" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});

// it("Should filter Top Rated Restaurant", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );
//   const topRatedBtn = screen.getByRole("button", {
//     name: "Top rated Restaurants",
//   });
// });
