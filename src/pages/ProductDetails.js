import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const params = useParams();
    return (
    <>
    <h2>Product detail page</h2>
    <p>{params.productId}</p>
    </>
    )
}

export default ProductDetailsPage;