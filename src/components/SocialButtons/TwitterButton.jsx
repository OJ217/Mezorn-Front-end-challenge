function TwitterButton(props) {
  return (
    <a
      className=" text-[#ffffff] bg-[#9a9999] w-[40px] h-[40px] flex justify-center items-center no-underline rounded-full transition ease-out duration-[0.6s] hover:bg-[#aeadad] cursor-pointer"
      href={props.twitterLink}
      target="”_blank”"
      title="Visit me on Twitter"
    >
      <i className="fab fa-twitter text-[1.6em]"></i>
    </a>
  );
}

export default TwitterButton;
