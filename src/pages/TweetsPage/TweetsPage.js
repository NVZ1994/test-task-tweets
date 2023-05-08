import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { fetchUsers } from "services/api/usersApi";
import useWindowDimensions from "services/hooks/useWindowDimensions";
import TweetCard from "components/Card/Card";
import LoadMore from "components/LoadMoreBtn/LoadMoreBtn";
import Filter from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import {
  HiddenTitle,
  Link,
  List,
  Section,
} from "pages/TweetsPage/TweetsPage.styled";

import { Helmet } from "react-helmet";

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setVisibleUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const cardsPerPage = (width >= 904 && width < 1332) || width >= 1760 ? 4 : 3;

  const handleLoadMore = () => {
    setCurrentPage((page) => page + 1);
  };

  const dropDownFilter = (e) => {
    const filter = e.target.value;
    if (filter === "all") {
      setVisibleUsers(users);
    } else if (filter === "follow") {
      setVisibleUsers(
        users.filter(
          (user) => !JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
        )
      );
    } else if (filter === "following") {
      setVisibleUsers(
        users.filter((user) =>
          JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
        )
      );
    } else {
      console.error("invalid filter value");
    }
    setCurrentPage(1);
  };

  const visibleUserCards = visibleUsers.slice(0, currentPage * cardsPerPage);

  return (
    <Section>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <HiddenTitle>Tweets Page</HiddenTitle>
      <Link to="/">
        <MdOutlineArrowBackIosNew />
      </Link>
      <Filter filterHandle={dropDownFilter} />
      {isLoading && <Loader />}
      {error && <Error />}
      <List>
        {visibleUserCards.map((user) => (
          <li key={user.id}>
            <TweetCard user={user} />
          </li>
        ))}
      </List>
      {visibleUsers.length > visibleUserCards.length && (
        <LoadMore handleClick={handleLoadMore} />
      )}
    </Section>
  );
}

export default TweetsPage;
