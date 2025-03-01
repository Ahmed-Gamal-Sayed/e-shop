export default function Wishlist() {
    return (
        <div className="container" style={{ marginTop: '15px', }}>
            <div className="d-flex justify-content-between align-items-center">
                <div>All Favorits</div>
                <div>
                    <button className="btn btn-error">Delete All Favorits</button>
                </div>
            </div>
        </div>
    );
}