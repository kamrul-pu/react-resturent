import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = (props) => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>

                    <CardText>
                        <p>Price: {props.dish.price}/= </p>
                        <p>{props.dish.description}</p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;