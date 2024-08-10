import User from "@/components/User";
import { ID } from "@/mocks/handlers";
import { render } from "@/test-utils";

describe("<User/ >", () => {
    test("should render loading spinner then user info", async () => {
        const { findByText } = render(<User id={ID.success} />);
        const loadingIndicator = await findByText(/^loading/i);
        expect(loadingIndicator).toBeInTheDocument();
        const user = await findByText("John Doe");
        expect(user).toBeInTheDocument();
    });

    test("should render error message", async () => {
        const { findByText } = render(<User id={ID.failed} />);
        const loadingIndicator = await findByText(/^loading/i);
        expect(loadingIndicator).toBeInTheDocument();
        const errorMsg = await findByText("Something went wrong.");
        expect(errorMsg).toBeInTheDocument();
    });
});
