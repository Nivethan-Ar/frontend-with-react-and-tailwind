interface Props{
  title:string
  containerStyles:string
}

function Cards(props:Props) {
  const { title, containerStyles } = props;

  return (
    <div className={`flex justify-start items-end p-4 h-28  bg-blend-soft-light bg-black/40 bg-cover ${containerStyles}`}>

      <h2 className="text-white uppercase w-24">{title}</h2>
    </div>
  );
}

export default Cards;
