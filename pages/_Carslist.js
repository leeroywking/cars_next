const List = (props) => {
    return <div>
        {props.list.length} cars in garage
        {props.list.map(car => <li>
            {car.make} {car.model} ${car.price}
        </li>)}
    </div>
}

export default List