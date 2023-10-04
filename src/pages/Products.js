import { Link } from 'react-router-dom';

const PRODUCTS = [
    {'id': 'p1', 'name' : 'Product 1'},
    {'id': 'p2', 'name' : 'Product 2'},
    {'id': 'p3', 'name' : 'Product 3'}
];
const ProductPage = () => {
    return (
        <>
        <h2>Product Page</h2>
        <ul>
            {PRODUCTS.map(prod => {
                return <li key={prod.id}>{prod.name}
                <Link to={`/products/${prod.id}`}>{prod.name}</Link>
                </li>

            })}
            {/* <li>Product 1 </li>
            <li>Product 2</li>
            <li>Product 3</li> */}
        </ul>
        </>
    )
}

export default ProductPage;