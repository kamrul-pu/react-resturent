import React from "react";
import DISHES from "../../data/dishes";
import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

class Menu extends React.Component {
    state = {
        dishes: DISHES,
        selected_dish: null,
        modalOpen: false,
        comments: COMMENTS,
    }

    onDishSelect = dish => {
        console.log(dish);
        this.setState({
            selected_dish: dish,
            modalOpen: !this.state.modalOpen,
        });
        // this.toggleModal;
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }

    render() {
        document.title = "Menu Item";
        const menu = this.state.dishes.map(item => {
            return <MenuItem dish={item}
                key={item.id}
                // DishSelect={() => this.onDishSelect(item)} 
                DishSelect={this.onDishSelect} />
        });
        let dish_detail = null;
        if (this.state.selected_dish) {
            const comments = this.state.comments.filter(comment => {
                return comment.dishId === this.state.selected_dish.id;
            })
            dish_detail = <DishDetail dish={this.state.selected_dish} comments={comments} />
        }

        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dish_detail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;

// <div className="container">
//                 <div className="row">
//                     <div className="col-6">
//                         {menu}
//                     </div>
//                     <div className="col-6">
//                         {dish_detail}
//                     </div>
//                 </div>
//             </div>