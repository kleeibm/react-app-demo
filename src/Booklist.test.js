// Unit Test - single JavaScript function, no external dependencies
// Still Unit Tests, but the Unit looks a little different
// React Component is the "unit" -> modern version of React -> just a function

const { render, screen } = require("@testing-library/react");
const { default: userEvent } = require("@testing-library/user-event");
import BookList from "./BookList";

// describe is totally optional
describe("BookList", () => {
    test("allows a user to enter title and author", () => {
        // Arrange   - Setup
        render(<BookList />);

        // Act       - Execute
        // mimic a user typing into the title field
        const titleField = screen.getByLabelText("Title");
        userEvent.type(titleField, "Accelerate");
        // mimic a user typing into the author field
        const authorField = screen.getByLabelText("Author");
        userEvent.type(authorField, "Jez Humble");
        // mimic a user clicking on the submit button:
        userEvent.click(screen.getByRole("button"));

        // Assert    - Assert
        expect(screen.getByText(/Accelerate - Jez Humble/)).toBeVisible();
    });
});