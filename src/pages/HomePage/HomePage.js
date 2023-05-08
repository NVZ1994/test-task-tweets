import { Helmet } from "react-helmet";
import { Link, Text, Title, Wrapper } from "./HomePage.styled";

function HomePage() {
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <Title>Welcome!</Title>
        <Text>
          <Link to="/tweets">Here</Link> you can see cards with tweets of users
          with their tweets and followers amount.
        </Text>
      </Wrapper>
    </section>
  );
}

export default HomePage;
