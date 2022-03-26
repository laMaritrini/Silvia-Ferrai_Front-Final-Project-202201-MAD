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
                <div>
                    <img
                        className="image"
                        src="https://comodibujar.club/wp-content/uploads/2020/09/kawaii-pizza.jpg"
                        alt="pizza"
                        // role="button"
                        // tabIndex={0}
                        // onKeyPress={pizza}
                        // onClick={pizza}
                    />
                    <p className="types__name">PIZZA</p>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://thumbs.dreamstime.com/z/ilustraci%C3%B3n-de-dibujos-animados-la-ensalada-c%C3%A9sar-dibujo-vectorial-linda-con-manos-simplificadas-elevadas-aislado-en-fondo-198051090.jpg"
                        alt="salad"
                    />
                    <p className="types__name">ENSALADA</p>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://st3.depositphotos.com/5261163/35893/v/450/depositphotos_358930662-stock-illustration-funny-cake-isolated-cartoon-character.jpg"
                        alt="postre"
                    />
                    <p className="types__name">POSTRE</p>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://i.pinimg.com/564x/ac/0d/67/ac0d67cdb9c4ba03f5f2f64984045ff5.jpg"
                        alt="café"
                    />

                    <div className="types__name"> CAFÉ</div>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://png.pngtree.com/png-vector/20191122/ourlarge/pngtree-emoji-of-the-smiling-soda-bottle-vector-or-color-illustration-png-image_2017017.jpg"
                        alt="refresco"
                    />
                    <div className="types__name">REFRESCO</div>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://img2.freepng.es/20191008/xvu/transparent-bottle-wine-bottle-cartoon-alcohol-dessert-wine-5da61bed5a2ee4.0625967515711672133694.jpg"
                        alt="vino"
                    />
                    <div className="types__name">VINO</div>
                </div>
                <div>
                    <img
                        className="image"
                        src="https://thumbs.dreamstime.com/z/personaje-de-dibujos-animados-feliz-la-cerveza-113397674.jpg"
                        alt="cerveza"
                    />
                    <div className="types__name">CERVEZA</div>
                </div>
            </div>

            <div className="products">
                <div>
                    <img
                        className="image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROeNrYNEGx8S1EsFI-fQewyByaeiwXBXK9-Q&usqp=CAU"
                        alt="cafe"
                    />
                    <div className="types__name">café</div>
                </div>
            </div>
        </>
    );
}

export default Products;
