/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../redux/products/actionCreators';
// import { RootState } from '../redux/store';
// import { ArticleI } from '../interfaces/ticket';

function Products() {
    // const product = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, [dispatch]);
    // console.log(product);

    // function pizza(product: ArticleI[]) {
    //     if (product.type === 'pizza') {
    //         product.map((item: { item: any }) => <div>{item.item}</div>);
    //     }
    // }

    return (
        <>
            <div className="types">
                <div
                // role="button"
                // tabIndex={0}
                // onKeyPress={pizza}
                // onClick={pizza}
                >
                    PIZZA
                </div>
                <div>ENSALADA</div>
                <div>POSTRE</div>
                <div>CAFÉ</div>
                <div>REFRESCO</div>
                <div>VINO</div>
                <div>CERVEZA</div>
            </div>

            <div className="products">
                <div>café</div>
            </div>
        </>
    );
}

export default Products;
