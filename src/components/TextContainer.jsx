import Button from "./Button";
import SocialContainer from "./SocialContainer";

function TextContainer(props) {
  return (
    <div className="pt-[30px] pb-[50px] font-[400] px-[30px]">
      <Button
        companyWebLink={props.companyWebLink}
        buttonText={props.buttonText}
      />
      <p className="text-[16px] my-[30px] mx-auto text-left leading-[1.6] w-[420px]">
        {props.mainText}
      </p>
      <SocialContainer
        facebookLink={props.facebookLink}
        instagramLink={props.instagramLink}
        twitterLink={props.twitterLink}
      />
    </div>
  );
}

export default TextContainer;
