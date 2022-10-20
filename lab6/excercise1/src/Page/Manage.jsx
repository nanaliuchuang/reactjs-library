import React from "react";
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const shopsAlbum = [
	{id:'1',src:'1.jpg',title:'Balo Case Logic',price:'600000',detail:'Chi tiết',category:'Balo Laptop'},
	{id:'2',src:'2.jpg',title:'Balo Crumpler',price:'520000',detail:'Chi tiết',category:'Balo Camera'},
	{id:'3',src:'3.jpg',title:'Balbrido Hy',price:'790000',detail:'Chi tiết',category:'Balo Laptop'},
	{id:'4',src:'7.jpg',title:'Balo Karrimor',price:'590000',detail:'Chi tiết',category:'Balo Laptop'},
	{id:'5',src:'5.jpg',title:'Túi Nomad',price:'420000',detail:'Chi tiết',category:'Túi sách'},
	{id:'6',src:'6.jpg',title:'Vali Kathmandu',price:'890000',detail:'Chi tiết',category:'Vali'},
	{id:'7',src:'7.jpg',title:'Balo Dakien Heli',price:'550000',detail:'Chi tiết',category:'Balo Laptop'},
	{id:'8',src:'8.jpg',title:'Túi Fashion',price:'470000',detail:'Chi tiết',category:'Túi'}
];
export default function Manage (){
    return(
        <div className="info">
            <h2 className="text-secondary pb-5 fw-semibold">Quản lý thông tin Balo</h2>
            <span className="bg-light p-2 ms-3 position-relative fw-lighter fs-5 fw-normal">Thêm Thông tin Balo mới</span>
        <form className="row g-3 needs-validation border border-secondary pt-2" novalidate>
  <div className="col-md-6 position-relative">
    <label for="validationTooltip01" className="form-label">Tên Balo:</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
  </div>
  <div className="col-md-4 position-relative">
    <label for="validationToltip05" className="form-label ">Loại Ba lô: </label>
    <select class="form-select" id="validationTooltip04" require>
      {shopsAlbum.map(shop =>(
        <option value="">{shop.title}</option>
      ))}  
    </select>
    
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div className="col-md-6 position-relative">
    <label for="validationTooltip03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationTooltip03" required/>
    <div className="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-1 position-relative">
    <label for="validationTooltip04" class="form-label">Hình:</label>
    <input className="custom-file-input" type="file"/>
  </div>
  <div className="col-lg-3 pt-4 ms-4 position-relative d-md-none d-lg-block">
  <p className="pt-3">Không có tệp nào được chọn</p>

  </div>
  <div className="col-12 mb-2">
    <button className="btn btn-secondary" type="submit">Thêm hoa</button>
  </div>
</form>
<h2 className="text-secondary my-2 pb-5 fw-semibold">Danh sách Balo</h2>
<Table striped bordered hover>
      <thead className="table-primary">
        <tr className="text-center">
          <th className="col-2"></th>
          <th>Mã Balo</th>
          <th>Tên Balo</th>
          <th>Giá</th>
          <th>Loại</th>
          <th>Hình</th>
        </tr>
      </thead>
      <tbody>
        {shopsAlbum.map(shop =>
        (<tr className="text-center">
          <td><i class="bi bi-pencil-square text-warning"></i> <i class="bi bi-x-circle-fill text-danger"></i></td>
          <td>{shop.id}</td>
          <td>{shop.title}</td>
          <td>{shop.price} <sup>đ</sup></td>
          <td>{shop.category}</td>
          <td><img src={`/img/${shop.src}`} className="w" /></td>
        </tr>
          ))}
      </tbody>
      <tbody>
        <td>1</td>
        <td></td>
        <td></td>
        <td>2</td>
        <td></td>
        <td></td>
      </tbody>
    </Table>
</div>
    )
}