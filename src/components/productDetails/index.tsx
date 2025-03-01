export default function ProductDetails() {
    const { index } = useContext(indexContext)
    for (let i = 0; i < products.length; i++) {
        if (index === products[i].id) {
            let product = products[i];
            return (
                <div className="container" key={product.id} style={{ marginTop: '15px', }}>
                    <div className="d-flex align-items-center justify-content-evenly">
                        <img src={product.img} className='h-auto' alt='name' style={{ maxWidth: '50vw', maxHeight: '50vh', objectFit: 'fill', objectPosition: 'center' }} />
                        <div>
                            <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{product.name}</p>
                            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{product.desc}</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Category: <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.category}</span></p>
                            <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Price: <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{product.price}</span></p>
                            <button style={{ width: '100%', letterSpacing: '3px' }} className='btn btn-success'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}