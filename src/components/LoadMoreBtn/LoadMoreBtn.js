import { LoadMoreButton } from "components/LoadMoreBtn/LoadMoreBtn.styled";

function LoadMore({ handleClick }) {
  return (
    <LoadMoreButton type="button" onClick={handleClick}>
      Load more
    </LoadMoreButton>
  );
}

export default LoadMore;
