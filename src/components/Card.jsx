import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";

function Card() {
  return (
    <div className="my-[100px] mx-[10px] max-w-[620px] rounded-[5px] bg-white overflow-hidden">
      <ImageContainer
        imgSrc="https://about.me/cdn-cgi/image/q=40,dpr=2,f=auto,fit=cover,w=620,h=413.3333333333333,gravity=0.227x0.007/https://assets.about.me/background/users/g/a/n/gantulga.tsevegjav_1583298852_983.jpg"
        name="gantulga tsevegjav"
        position="Software Engineer, Web Developer, and Director in Ulaanbaatar,
            Mongolia"
      />
      <TextContainer
        companyWebLink="https://mezorn.com/"
        buttonText="Visit my company website"
        mainText="What's up, I'm Gantulga. I'm a senior web developer living in
          Ulaanbaatar, Mongolia. I am a fan of technology, entrepreneurship, and
          design. I'm also interested in programming and education. You can
          visit my company website with a click on the button above."
        facebookLink="https://www.facebook.com/gantulga.tsevegjav"
        instagramLink="https://www.instagram.com/gantulga.tse/"
        twitterLink="https://twitter.com/gantulga_tse"
      />
    </div>
  );
}

export default Card;
