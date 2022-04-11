// reusable card component
const GroceryItem = (props) => {
  //console.log("fhuehfujj",props)
  const {imgURL,title,sellingPrice,mrp,discount} = props
       //console.log("ffff",title)
  return <>
  <div className="main_div">
    <div>
    <div>
       <img src={props[0].imgURL} />
       <h4>{props[0].title}</h4>
    </div>
    <div className="price">
      <h5>{props[0].sellingPrice}</h5>
      <p>{props[0].mrp}</p>
      <p>{props[0].discount}</p>
    </div>
    </div>
   <div>
   <div>
       <img src={props[1].imgURL} />
       <h4>{props[1].title}</h4>
    </div>
    <div className="price">
      <h5>{props[1].sellingPrice}</h5>
      <p>{props[1].mrp}</p>
      <p>{props[1].discount}</p>
    </div>
   </div>
   <div>
   <div>
       <img src={props[2].imgURL} />
       <h4>{props[2].title}</h4>
    </div>
    <div className="price">
      <h5>{props[2].sellingPrice}</h5>
      <p>{props[2].mrp}</p>
      <p>{props[2].discount}</p>
    </div>
   </div>
    <div>
    <div>
       <img src={props[3].imgURL} />
       <h4>{props[3].title}</h4>
    </div>
    <div className="price">
      <h5>{props[3].sellingPrice}</h5>
      <p>{props[3].mrp}</p>
      <p>{props[3].discount}</p>
    </div>
    </div>
    <div><div>
       <img src={props[4].imgURL} />
       <h4>{props[4].title}</h4>
    </div>
    <div className="price">
      <h5>{props[4].sellingPrice}</h5>
      <p>{props[4].mrp}</p>
      <p>{props[4].discount}</p>
    </div></div>
    <div><div>
       <img src={props[5].imgURL} />
       <h4>{props[5].title}</h4>
    </div>
    <div className="price">
      <h5>{props[5].sellingPrice}</h5>
      <p>{props[5].mrp}</p>
      <p>{props[5].discount}</p>
    </div></div>
    <div><div>
       <img src={props[6].imgURL} />
       <h4>{props[6].title}</h4>
    </div>
    <div className="price">
      <h5>{props[6].sellingPrice}</h5>
      <p>{props[6].mrp}</p>
      <p>{props[6].discount}</p>
    </div></div>
    <div><div>
       <img src={props[7].imgURL} />
       <h4>{props[7].title}</h4>
    </div>
    <div className="price">
      <h5>{props[7].sellingPrice}</h5>
      <p>{props[7].mrp}</p>
      <p>{props[7].discount}</p>
    </div></div>
   <div> <div>
       <img src={props[8].imgURL} />
       <h4>{props[8].title}</h4>
    </div>
    <div className="price">
      <h5>{props[8].sellingPrice}</h5>
      <p>{props[8].mrp}</p>
      <p>{props[8].discount}</p>
    </div></div>
   <div> <div>
       <img src={props[9].imgURL} />
       <h4>{props[9].title}</h4>
    </div>
    <div className="price">
      <h5>{props[9].sellingPrice}</h5>
      <p>{props[9].mrp}</p>
      <p>{props[9].discount}</p>
    </div></div>
  </div>
  </>;
};
export default GroceryItem;