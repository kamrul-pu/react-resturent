import React from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends React.Component {
    state = {
        dishes: DISHES,
        selected_dish: null,
    }

    onDishSelect = dish => {
        console.log(dish);
        this.setState({ selected_dish: dish });

    }



    render() {
        const menu = this.state.dishes.map(item => {
            return <MenuItem dish={item}
                key={item.id}
                // DishSelect={() => this.onDishSelect(item)} 
                DishSelect={this.onDishSelect} />
        });
        let dish_detail = null;
        if (this.state.selected_dish) {
            dish_detail = <DishDetail dish={this.state.selected_dish} />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dish_detail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;