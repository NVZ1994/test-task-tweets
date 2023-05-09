import { useEffect, useState } from "react";

import {
  Button,
  Card,
  FrameBgc,
  Frame,
  Img,
  Count,
  Text,
  Info,
  Logo,
  PictureImg,
  LineImg,
} from "components/Card/Card.styled";

function TweetCard({ user }) {
  const { id, avatar, tweets, followers } = user;
  const [isFollowing, setIsFollowing] = useState(false);
  const [additional, setAdditional] = useState(0);
  const [btnCaption, setBtnCaption] = useState("Follow");
  const [btnColor, setBtnColor] = useState("#EBD8FF");

  useEffect(() => {
    setIsFollowing(JSON.parse(localStorage.getItem(`isFollowing${id}`)));
  }, [id]);

  useEffect(() => {
    if (isFollowing) {
      setAdditional(1);
      setBtnCaption("Following");
      setBtnColor("#5CD3A8");
    } else {
      setAdditional(0);
      setBtnCaption("Follow");
      setBtnColor("#EBD8FF");
    }
  }, [isFollowing]);

  const isFollowingToggle = () => {
    localStorage.setItem(`isFollowing${id}`, JSON.stringify(!isFollowing));
    setIsFollowing((state) => !state);
  };

  return (
    <Card>
      <Logo />
      <PictureImg />
      <LineImg />
      <FrameBgc />
      <Img src={avatar} alt="avatar" width={70} height={70} loading="lazy" />
      <Frame />
      <Info>
        <Text>
          <Count>{tweets}</Count>tweets
        </Text>
        <Text>
          <Count>{(followers + additional).toLocaleString("en-US")}</Count>
          followers
        </Text>
      </Info>
      <Button type="button" onClick={isFollowingToggle} color={btnColor}>
        {btnCaption}
      </Button>
    </Card>
  );
}

export default TweetCard;
