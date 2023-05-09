import { useEffect, useState } from "react";

import { fetchUsers } from "../../services/Api/usersApi";
import useWindowResize from "services/hooks/useWindowResize";

import TweetCard from "components/Card/Card";
import LoadMore from "components/LoadMoreBtn/LoadMoreBtn";
import DropDown from "components/DropDown/DropDown";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { Link, List, Section } from "pages/TweetsPage/TweetsPage.styled";

import { Helmet } from "react-helmet";

function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [shownUsers, setShownUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { width } = useWindowResize();

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    async function fetchData() {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setShownUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const cardsPerPage = (width >= 800 && width < 1200) || width >= 1760 ? 4 : 3;

  const handleLoadMore = () => {
    setCurrentPage((page) => page + 1);
  };

  const dropDown = (event) => {
    const options = event.target.value;
    let shownUsers = users;

    switch (options) {
      case "all":
        shownUsers = users;
        break;
      case "follow":
        shownUsers = users.filter(
          (user) => !JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
        );
        break;
      case "following":
        shownUsers = users.filter((user) =>
          JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
        );
        break;
      default:
        console.error("Invalid options value");
        break;
    }

    setShownUsers(shownUsers);
    setCurrentPage(1);
  };

  const shownUserCards = shownUsers.slice(0, currentPage * cardsPerPage);

  return (
    <Section>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <Link to="/">Back</Link>
      <DropDown dropDown={dropDown} />
      {isLoading && <Loader />}
      {error && <Error />}
      <List>
        {shownUserCards.map((user) => (
          <li>
            <TweetCard key={user.id} user={user} />
          </li>
        ))}
      </List>
      {shownUsers.length > shownUserCards.length && (
        <LoadMore handleClick={handleLoadMore} />
      )}
    </Section>
  );
}

export default TweetsPage;
