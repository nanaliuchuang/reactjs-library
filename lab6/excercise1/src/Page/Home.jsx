import React from "react";
import { Card, Col , Row } from "react-bootstrap";
const shopsAlbum = [
	{id:'1',src:'1.jpg',title:'Balo Case Logic',price:'600000',detail:'Chi tiết'},
	{id:'2',src:'2.jpg',title:'Balo Crumpler',price:'520000',detail:'Chi tiết'},
	{id:'3',src:'3.jpg',title:'Balbrido Hy',price:'790000',detail:'Chi tiết'},
	{id:'4',src:'7.jpg',title:'Balo Karrimor',price:'590000',detail:'Chi tiết'},
	{id:'5',src:'5.jpg',title:'Túi Nomad',price:'420000',detail:'Chi tiết'},
	{id:'6',src:'6.jpg',title:'Vali Kathmandu',price:'890000',detail:'Chi tiết'},
	{id:'7',src:'7.jpg',title:'Balo Dakien Heli',price:'550000',detail:'Chi tiết'},
	{id:'8',src:'8.jpg',title:'Túi Fashion',price:'470000',detail:'Chi tiết'}
];
export default function Home (){
    return(
        <Row xs={1} md={2} lg={3} className="g-4">
        {shopsAlbum.map(shop => (
          <Col>
            <Card>
              <Card.Img variant="top" src={`/img/${shop.src}`} />
              <Card.Body className="text-center">
                <Card.Title className="text-dark">{shop.title}</Card.Title>
                <Card.Text className="text-danger fw-semibold">
                    {shop.price} <sup>đ</sup>
                </Card.Text>
                <a href="" className="text-info fw-semibold text-decoration-none me-3">{shop.detail}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
}