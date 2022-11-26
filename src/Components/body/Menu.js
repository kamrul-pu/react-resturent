import React from "react";
// import DISHES from "../../data/dishes";
// import COMMENTS from "../../data/comments";
import Loading from "./Loading";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        deleteComment: (dishId) => ({

        }),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments()),
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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = "Menu Item";
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        } else {
            const menu = this.props.dishes.dishes.map(item => {
                return <MenuItem dish={item}
                    key={item.id}
                    // DishSelect={() => this.onDishSelect(item)} 
                    DishSelect={this.onDishSelect} />
            });
            let dish_detail = null;
            if (this.state.selected_dish) {
                const comments = this.props.comments.comments.filter(comment => {
                    return comment.dishId === this.state.selected_dish.id;
                })
                dish_detail = <DishDetail
                    dish={this.state.selected_dish} comments={comments}
                    addComment={this.props.addComment}
                    commentsIsLoading={this.props.comments.isLoading} />
            }

            return (
                <div className="container">
                    <div className="row">
                        <CardColumns className="col-sm-12 col-lg-4 col-md-6">
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