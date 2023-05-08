import { Button } from "components/LoadMoreBtn/LoadMoreBtn.styled";

function LoadMore({ handleClick }) {
  return (
    <Button type="button" onClick={handleClick}>
      Load More
    </Button>
  );
}

export default LoadMore;
