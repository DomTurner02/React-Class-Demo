import axios from 'axios';
import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function SingleProductScreen({product}) {

    const params = useParams();

    const productId = params.id;

    const [products, SetProducts] = useState([]);

    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async() => {
            const {data} = await axios.get(`https://localhost:7214/api/products/${productId}`);
            console.log(data);
            SetProducts(data);
            if (data) {
                SetLoading(false);
            }
        }

        fetchProduct();
    }, []);

    return <div>
        {loading ? <Loader /> : (
            <h1>{product.name}</h1>
            <img src={product.image} alt="game"></img>
            <p>{product.description}</p>
            <h2>£{product.price}</h2>
        )}
    </div>;
}

export default SingleProductScreen;
