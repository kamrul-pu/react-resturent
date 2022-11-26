import React from "react";
// import DISHES from "../../data/dishes";
// import COMMENTS from "../../data/comments";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/actionTypes';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment,
            }
        }),
        deleteComment: (dishId) => ({

        })
    }
}

class Menu extends React.Component {
    state = {
        // dishes: DISHES,
        selected_dish: null,
        modalOpen: false,
        // comments: COMMENTS,
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
        const menu = this.props.dishes.map(item => {
            return <MenuItem dish={item}
                key={item.id}
                // DishSelect={() => this.onDishSelect(item)} 
                DishSelect={this.onDishSelect} />
        });
        let dish_detail = null;
        if (this.state.selected_dish) {
            const comments = this.props.comments.filter(comment => {
                return comment.dishId === this.state.selected_dish.id;
            })
            dish_detail = <DishDetail dish={this.state.selected_dish} comments={comments} addComment={this.props.addComment} />
        }

        return (
            <div className="container">
                <div className="row">
                    <CardColumns >
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

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

//Backup before redux
// import React from "react";
// import DISHES from "../../data/dishes";
// import COMMENTS from "../../data/comments";
// import MenuItem from "./MenuItem";
// import DishDetail from "./DishDetail";
// import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//     return {
//         dishes: state.dishes,
//         coments: state.comments,
//     }
// }

// class Menu extends React.Component {
//     state = {
//         dishes: DISHES,
//         selected_dish: null,
//         modalOpen: false,
//         comments: COMMENTS,
//     }

//     onDishSelect = dish => {
//         console.log(dish);
//         this.setState({
//             selected_dish: dish,
//             modalOpen: !this.state.modalOpen,
//         });
//         // this.toggleModal;
//     }

//     toggleModal = () => {
//         this.setState({
//             modalOpen: !this.state.modalOpen,
//         })
//     }

//     render() {
//         document.title = "Menu Item";
//         const menu = this.state.dishes.map(item => {
//             return <MenuItem dish={item}
//                 key={item.id}
//                 // DishSelect={() => this.onDishSelect(item)}
//                 DishSelect={this.onDishSelect} />
//         });
//         let dish_detail = null;
//         if (this.state.selected_dish) {
//             const comments = this.state.comments.filter(comment => {
//                 return comment.dishId === this.state.selected_dish.id;
//             })
//             dish_detail = <DishDetail dish={this.state.selected_dish} comments={comments} />
//         }

//         return (
//             <div className="container">
//                 <div className="row">
//                     <CardColumns>
//                         {menu}
//                     </CardColumns>
//                     <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
//                         <ModalBody>
//                             {dish_detail}
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button color="secondary" onClick={this.toggleModal}>
//                                 Close
//                             </Button>
//                         </ModalFooter>
//                     </Modal>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Menu;