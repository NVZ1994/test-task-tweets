import { Link, Text, Title, Wrapper } from "pages/HomePage/HomePage.styled";

function HomePage() {
  return (
    <section>
      <Wrapper>
        <Title>Welcome!</Title>
        <Text>
          <Link to="/tweets-page">Here</Link> you can see cards with tweets of
          users with their tweets and followers amount.
        </Text>
      </Wrapper>
    </section>
  );
}

export default HomePage;
