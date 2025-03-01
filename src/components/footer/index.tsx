export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white py-4 margin-top-10">
        <div className="px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="row">
            <div className="col">
              <h3 className="overflow-hidden" style={{ letterSpacing: "5px" }}>
                E-<span style={{ color: "yellow" }}>SHOP</span>
              </h3>
              <p>Thsi Is Market Online Shop</p>
            </div>
          </div>
          <hr />
          <div className="text-center mt-3">
            <p>&copy; 2025 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
