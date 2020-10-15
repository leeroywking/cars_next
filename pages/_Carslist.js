const List = (props) => {
    if(!props.list){
        props.list = [{make:"nothing", model: "nothing", price:0}]
    }
    return <div>
        
        {props.list.length} cars in garage
        {props.list.map(car => <li>
            {car.make} {car.model} ${car.price}
        </li>)}
    </div>
}

export default List