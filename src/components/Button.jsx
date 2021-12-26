function Button(props) {
  return (
    <div className="w-[420px] my-0 mx-auto bg-[#4a4a49] rounded-[5px] pt-[16px] pb-[16px] text-[18px] overflow-hidden text-center transition ease-out duration-[0.6s] button hover:bg-[#5c5c5c] cursor-pointer">
      <a
        className=" text-[#ffffff] no-underline font-[raleway]"
        href={props.companyWebLink}
        target="”_blank”"
      >
        <i className="far fa-building mr-[10px]"></i> {props.buttonText}
      </a>
    </div>
  );
}

export default Button;
