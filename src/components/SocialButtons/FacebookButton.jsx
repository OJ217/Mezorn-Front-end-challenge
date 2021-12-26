function FacebookButton(props) {
  return (
    <a href={props.facebookLink} target="”_blank”" title="Visit me on Facebook">
      <i className="fab fa-facebook bg-[#ffffff] text-[#9a9999] text-[2.5em] transition ease-out duration-[0.6s] hover:text-[#aeadad] cursor-pointer"></i>
    </a>
  );
}

export default FacebookButton;
