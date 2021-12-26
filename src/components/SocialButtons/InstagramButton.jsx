function InstagramButton(props) {
  return (
    <a
      className=" text-[#ffffff] bg-[#9a9999] w-[40px] h-[40px] flex justify-center items-center no-underline transition ease-out duration-[0.6s] rounded-full hover:bg-[#aeadad] cursor-pointer"
      href={props.instagramLink}
      target="”_blank”"
      title="Visit me on Instagran"
    >
      <i className="fab fa-instagram text-[1.6em]"></i>
    </a>
  );
}

export default InstagramButton;
