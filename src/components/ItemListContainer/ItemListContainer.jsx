import { useEffect } from 'react'
import './ItemListContainer.scss'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Loader from '../Loader/Loader'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
  
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- Armar una referencia (sync)
        const productosRef = collection(db, "productos")
        const q = categoryId
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        // 2.- Consumir esa referencia (async)
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <div className="container my-5">
            {loading 
                ? <Loader />
                : <ItemList items={productos}/>
            }
        </div>
    )
}