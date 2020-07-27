import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import {v1 as uuid} from 'uuid';
// import { IItemReduxProps, IItemModal, ITarget } from '../types/interfaces';

class ItemModal extends Component{
  state={
    modal:false,
    name:''
  }

  toggle=()=>{
    console.log("Here");
    this.setState({
      modal:!this.state.modal
    });
  };

  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  };
  
  onSubmit=(e)=>{
    e.preventDefault();

    const newItem={
      id:uuid(),
      name:this.state.name
    };
    //ADD item 
    this.props.addItem(newItem);
    //close modal
    this.toggle();
  };

  render(){
    return (
          <div>
            <Button
                color="dark"
                style={{ marginBottom: '2rem' }}
                onClick={this.toggle}
              >
                Add Item
              </Button>
      
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.oggle}>Add To TODO List</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.OnSubmit}>
                  <FormGroup>
                    <Label for="item">Item</Label>
                    <Input
                      type="text"
                      name="name"
                      id="item"
                      placeholder="Add TODOLIST"
                      onChange={this.onChange}
                    />
                    <Button color="dark" 
                    style={{ marginTop: '2rem' }} 
                    block>
                      Add Item
                    </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        );
      };
      
  }
  
const mapStateToProps = (state) => ({
  item: state.item
});
export default connect(mapStateToProps, { addItem })(ItemModal);


// const ItemModal = ({ isAuthenticated, addItem }: IItemModal) => {
//   const [modal, setModal] = useState(false);
//   const [name, setName] = useState('');

//   const handleToggle = () => setModal(!modal);

//   const handleChangeName = (e: ITarget) => setName(e.target.value);

//   const handleOnSubmit = (e: any) => {
//     e.preventDefault();

//     const newItem = {
//       name
//     };

//     // Add item via addItem action
//     addItem(newItem);
//     // Close modal
//     handleToggle();
//   };

//   return (
//     <div>
//       {isAuthenticated ? (
//         <Button
//           color="dark"
//           style={{ marginBottom: '2rem' }}
//           onClick={handleToggle}
//         >
//           Add Item
//         </Button>
//       ) : (
//         <h4 className="mb-3 ml-4">Please log in to manage items</h4>
//       )}

//       <Modal isOpen={modal} toggle={handleToggle}>
//         <ModalHeader toggle={handleToggle}>Add To Shopping List</ModalHeader>
//         <ModalBody>
//           <Form onSubmit={handleOnSubmit}>
//             <FormGroup>
//               <Label for="item">Item</Label>
//               <Input
//                 type="text"
//                 name="name"
//                 id="item"
//                 placeholder="Add shopping item"
//                 onChange={handleChangeName}
//               />
//               <Button color="dark" style={{ marginTop: '2rem' }} block>
//                 Add Item
//               </Button>
//             </FormGroup>
//           </Form>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// };

// const mapStateToProps = (state: IItemReduxProps) => ({
//   item: state.item,
//   isAuthenticated: state.auth.isAuthenticated
// });

