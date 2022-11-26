import React, { Component } from "react";
import { Form, Button, Input } from 'reactstrap';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = event => {
        // console.log(this.state);
        this.props.addComment(this.props.dishId, this.state.rating, this.state.author, this.state.comment);
        this.setState({
            author: '',
            rating: '',
            comment: '',
        })
        event.preventDefault();
    }
    render() {
        console.log("Commenct Props", this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input type="text" name="author"
                        value={this.state.author} placeholder="Your Name"
                        required
                        onChange={this.handleInputChange} /> <br />
                    <Input type="select" name="rating"
                        value={this.state.rating} onChange={this.handleInputChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input> <br />
                    <Input type="textarea" name="comment"
                        value={this.state.comment} placeholder="Your Comment" required
                        onChange={this.handleInputChange} /><br />
                    <Button type="submit">Submit Comment</Button>

                </Form>
            </div>
        );
    }
}

export default CommentForm;