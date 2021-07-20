import "./UserList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../components/Chart/dummyData'
import { Link } from "react-router-dom";
import {useState} from 'react'
const UserList = () => {
    const [data, setData] = useState(userRows)
    const handleClick = (id) =>{
        setData(data.filter((item) => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={params.row.avatar} className="userListImage" alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200, },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction', width: 160 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() =>{
                                handleClick(params.row.id)
                            }
                        }/>
                    </>
                )
            }
        }
    ];
    return (
        <div className="userList" style={{ width: '100%' }}>
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={9} checkboxSelection />
        </div>
    );
};

export default UserList;