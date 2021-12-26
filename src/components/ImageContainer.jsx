import Description from "./Description";

function ImageContainer(props) {
  return (
    <div className=" relative">
      <img className=" w-full h-auto" src={props.imgSrc} alt="figure" />
      <Description name={props.name} position={props.position} />
    </div>
  );
}

export default ImageContainer;
