


const ItemCard = ({item}) => {

    return (
        <div className='col-3 m-2'>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <button className='btn btn-primary'>Ver más</button>
        </div>
    )
}

export default ItemCard