import FacebookButton from "./SocialButtons/FacebookButton";
import InstagramButton from "./SocialButtons/InstagramButton";
import TwitterButton from "./SocialButtons/TwitterButton";

function SocialContainer(props) {
  return (
    <div className="flex justify-center items-center gap-[20px]">
      <FacebookButton facebookLink={props.facebookLink} />
      <InstagramButton instagramLink={props.instagramLink} />
      <TwitterButton twitterLink={props.twitterLink} />
    </div>
  );
}

export default SocialContainer;
