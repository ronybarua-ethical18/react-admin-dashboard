import './ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../components/Chart/dummyData'
import { Link } from "react-router-dom";
import { useState } from 'react'
export default function ProductList() {
    const [data, setData] = useState(productRows)
    const handleClick = (id) => {
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 230, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={params.row.img} className="productListImage" alt="" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200, },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={() => {
                            handleClick(params.row.id)
                        }
                        } />
                    </>
                )
            }
        }
    ];
    return (
        <div className="productList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={9} checkboxSelection />
        </div>
    )
}
