import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/Chart/Chart'
import { productData } from '../../components/Chart/dummyData'
import productImage from '../../images/product.png'
import {Publish} from '@material-ui/icons'
export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                <button className="addProductButton">Add Product</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productImageWithTitle">
                        <img src={productImage} className="productTopRightImage" alt="" />
                        <span src="productTopRightTitle">Samsung Galaxy S20 Ultra</span>
                    </div>
                    <div className="productTopInfo">
                        <div className="productTopItem">
                            <span className="productHeading">Product id</span>
                            <span>12</span>
                        </div>
                        <div className="productTopItem">
                            <span className="productHeading">Product Sales</span>
                            <span>12</span>
                        </div>
                        <div className="productTopItem">
                            <span className="productHeading">Product Stock</span>
                            <span>Yes</span>
                        </div>
                        <div className="productTopItem">
                            <span className="productHeading">In active</span>
                            <span>No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product name</label>
                        <input type="text" placeholder="Samsung Galaxy" />
                        <label htmlFor="inStock">In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label htmlFor="active">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={productImage} alt="" className="productImageUpload"/>
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" name="file" id="file" style={{display: 'none'}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
