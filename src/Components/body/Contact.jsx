import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, } from 'reactstrap';


// import { LocalForm, Control, Errors } from 'react-redux-form';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel',
            message: '',

        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }
    render() {
        document.title = "Contact";
        return (
            <div className='container'>
                <div className="row row-content" style={{ textAlign: 'left', paddingLeft: '20px' }}>
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 md-7">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} value={this.state.firstname} type='text' name='firstname' placeholder='First Name' />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} value={this.state.lastname} type='text' name='lastname' placeholder='Last Name' />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}>Telephone Number</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} value={this.state.telnum} type='telephone' name='telnum' placeholder='Telephone Number' />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} value={this.state.email} type='email' name='email' placeholder='Email' />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input onChange={this.handleInputChange} type='checkbox' name="agree" value={this.state.agree} /><strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input onChange={this.handleInputChange} type='select' name='contactType' value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input onChange={this.handleInputChange} value={this.state.message} type='textarea' name='message' rows="12" />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;
