import './NewProduct.css'

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label htmlFor="file">Image</label>
                    <input type="file" name="file" id="file" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="">Stock</label>
                    <input type="text" placeholder="Stock" />
                </div>
                <div className="newProductItem">
                    <label htmlFor="active">Active</label>
                    <select className="newProductSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newProductButton">Add product</button>
        </div>
    )
}
