import { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import * as emailjs from 'emailjs-com'

class PopUpModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            fullName: '',
            email: '',
            number: '',
            message: ''
        }

        this.closeModal = this.closeModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleMsgChange = this.handleMsgChange.bind(this)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true });
        }, 3000);
    }

    async handleSubmit(event){
        event.preventDefault();
        //template id: template_zzwalgn
        //User id: user_gmIwtNEzJxAm37BFG2Qhy
        //Service id: service_e2trhcg
        
        // console.log('Full name: ' + this.state.fullName)
        // console.log('Email: ' + this.state.email)
        // console.log('Number: ' + this.state.number)
        // console.log('Message: ' + this.state.message)

        const templateId = 'template_zzwalgn';
        const userId = 'user_gmIwtNEzJxAm37BFG2Qhy';
        const serviceId = 'service_e2trhcg';

        const templateParams = {
            fullname: this.state.fullName,
            emailid: this.state.email,
            num: this.state.number,
            msg: this.state.message
        }

        await emailjs.send(
            serviceId, templateId,
            templateParams, userId
            ).then(res => {
              // Email successfully sent alert
              console.log('Email sent successfully!');
            })
            // Email Failed to send Error alert
            .catch(err => {
              console.log(err);
            })

            this.setState({showModal: false})

    }

    handleNameChange(event){
        event.preventDefault();
        this.setState({fullName: event.target.value})
        //console.log(this.state.fullName)
    }

    handleEmailChange(event) {
        event.preventDefault();
        this.setState({email: event.target.value})
        //console.log(this.state.email)
    }

    handlePhoneChange(event) {
        event.preventDefault();
        this.setState({number: event.target.value})
        //console.log(this.state.number)
    }

    handleMsgChange(event) {
        event.preventDefault();
        this.setState({message: event.target.value})
        //console.log(this.state.message)
    }

    closeModal() {
        this.setState({showModal: false})
    }

    render() {
        return(
             
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.showModal}
                animation={false}
             >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Us
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form>

      <Form.Group>
        <Form.Label>Full Name</Form.Label>
        <Form.Control onChange={this.handleNameChange} value={this.state.fullName} type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={this.handleEmailChange} value={this.state.email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone number</Form.Label>
        <Form.Control onChange={this.handlePhoneChange} value={this.state.number}  type="number" placeholder="Enter your phone number" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control onChange={this.handleMsgChange} value={this.state.message}  type="text" placeholder="Please enter your queries" />
      </Form.Group>

      <Button variant="primary" type="submit" block onClick={this.handleSubmit}>
        Submit
      </Button>
    </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={this.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
            
        );
    }

}

export default PopUpModal;