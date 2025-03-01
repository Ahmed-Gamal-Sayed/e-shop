export default function ProductCart({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => {
    setIsLiked(!isLiked); // Toggle the state
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card p-3 mb-3">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <div style={{ fontSize: "1.8rem" }}>{product.name}</div>

                <div style={{ fontSize: "1.5rem" }}>{product.desc}</div>

                <div className="d-flex justify-content-between align-items-center">
                  <div style={{ fontSize: "1.2rem" }}>
                    Price:{" "}
                    <span style={{ fontSize: "1rem" }}>{product.price}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div>
                      <button onClick={handleToggle}>
                        <FaHeart
                          className={
                            isLiked ? "text-success me-2" : "text-dark me-2"
                          }
                        />
                      </button>
                    </div>
                    <div>⭐ {product.star}</div>
                  </div>
                </div>

                <button className="btn btn-success w-100 mt-2 mb-3">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
