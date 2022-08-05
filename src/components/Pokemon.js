
const Pokemon  = (props) => {

  const typeToComponent = (typeList) =>
  {
   return typeList.map((type) => {return <span className={type.toLowerCase()+" badge"} key={typeList.indexOf(type)}>{type}</span>});
  }
  
  return (
    <>
    <li className="collection-item avatar col s12 m6 l4">
      <img src={props.img} alt="" className="circle"/>
      <span className="title">#{props.id}. {props.name}</span>
      <span className="type">{typeToComponent(props.type)}</span>
      <span className="biometrics">Height: <b>{props.height}</b> Weight: <b>{props.weight}</b></span>
    </li>
    </>
  );
};


export default Pokemon;
