function Description(props) {
  return (
    <div className=" absolute text-white z-10 text-center bottom-0 left-0 right-0 p-[20px] leading-none font-bold drop-shadow-[2px_2px_3px_rgba(0,0,0,0.5)]">
      <h1 className=" text-[20px] tracking-[2px] uppercase">{props.name}</h1>
      <h2 className=" text-[16px] mt-[8px]">{props.position}</h2>
    </div>
  );
}

export default Description;
