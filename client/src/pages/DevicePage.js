import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12',
        price: 20000,
        rating: 5,
        img: 'https://cdn21vek.by/img/galleries/6941/525/iphone13128gbmlny3_apple_6155ca6711da1.jpeg'
    }
    const description = [
        {id:1, title: 'Оперативная память', description: '5 гб'},
        {id:2, title: 'Камера', description: '12 мп'},
        {id:3, title: 'Процессор', description: 'Пентиум 3'},
        {id:4, title: 'Кол-во ядер', description: '2'},
        {id:5, title: 'Аккумулятор', description: '4000'},
    ]

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={250} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Form className='d-flex flex-column align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Form>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От:{device.price} руб.</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h1>Характеристики</h1>
                {description.map((info , index) => {
                        return <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </Row>;
                    }
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;