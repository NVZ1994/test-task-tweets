import { Button } from "components/LoadMoreBtn/LoadMoreBtn.styled";

function LoadMore({ handleClick }) {
  return (
    <Button type="button" onClick={handleClick}>
      Load more
    </Button>
  );
}

export default LoadMore;
