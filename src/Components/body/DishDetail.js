import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
    document.title = "Dish Detail";
    return (

        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>

                    <CardText>
                        Price: {props.dish.price}/=
                    </CardText>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} />
                </CardBody>
            </Card>
        </div>
    );
}
export default DishDetail;