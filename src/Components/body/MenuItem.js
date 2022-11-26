import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';


const MenuItem = (props) => {
    // console.log(props);
    return (
        <div>
            <Card className="col-4 col-md-6 col-sm-12" style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg
                        width="100%" alt={props.dish.name} src={props.dish.image}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle
                            style={{ cursor: "pointer" }}
                            // onClick={props.DishSelect}
                            onClick={() => props.DishSelect(props.dish)}
                        >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MenuItem;