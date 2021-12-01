import React, { useEffect, useState } from 'react';
import { DataGrid, GridApi } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, setLoading } from '../../Redux/Users';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'first_name', headerName: 'First name', width: 150 },
    { field: 'last_name', headerName: 'Last name', width: 150 },
    {
      field: 'email',
      headerName: 'Email ID',
      type: 'email',
      width: 200,
    },
    {
      field: 'avatar',
      headerName: 'Image',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 360,
      type: "image",
      render: rowData => <img
      src={`https://reqres.in/img/faces/1-image.jpg`}
      srcSet={`https://reqres.in/img/faces/1-image.jpg`}
      loading="lazy"
    />
    }
  ];


const UserList = () => {
    const dispatch = useDispatch();
    const {loading, users} = useSelector(state => state.users);
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(loadUsers())
    }, [])
    const [rows, setRows] = useState([]);
    useEffect(() => {
        if (!loading && users && users.data) 
            setRows(users.data);
    }, [loading])
    // const data = {"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}};
    
  return (
    <div style={{ height: 500, width: '100%' }}>
      {!loading && 
      <React.Fragment>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[users.data && users.data.per_page]}
        />
      </React.Fragment>}
    </div>
    )
}

export default UserList;