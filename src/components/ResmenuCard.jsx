import ItemList from "./ItemList";

const ResmenuCard = ({resData, showList, setShowIndex}) => {


  const {title} = resData?.card?.card;
  const itemCards = resData?.card?.card?.itemCards || resData?.card?.card?.categories.map((i)=>i?.itemCards).flat();

  return (
    <div>
      <div className="flex items-center justify-between shadow-md bg-gray-100 p-2 my-2" onClick={setShowIndex}>
      <span className="text-xl font-medium">{title}{' '}({itemCards.length})</span>
      <span className="cursor-pointer">{showList? '⬆️':'⬇️'}</span>
      </div>
      {showList? itemCards.map((i) => (<ItemList key={i?.card?.info?.id} i={i?.card?.info}/>)): ''}
    </div>
  );
};

export default ResmenuCard;
