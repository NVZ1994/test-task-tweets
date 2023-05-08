import { ErrorWrapper } from "components/Error/Error.styled";

export const Error = () => (
  <ErrorWrapper>
    <p>Sorry, an error occurred while loading the data.</p>
    <p>Please try again later or refresh the page.</p>
  </ErrorWrapper>
);
