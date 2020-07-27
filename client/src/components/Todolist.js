import React, { useEffect,Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {v1 as uuid } from 'uuid';
import PropTypes from 'prop-types';
// import { render } from 'react-dom';
import { connect } from 'react-redux';
import { getItems,deleteItem} from '../actions/itemActions';
// import { IItemReduxProps, IShoppingList } from '../types/interfaces';


class Todolist extends Component{


  componentDidMount(){
    this.props.getItems();
  };
  onDeleteClick=(id) =>{
    this.props.deleteItem(id);
  }

  render(){
    const {items}=this.props.item;
    return (
          <Container>
            
          {/* <Button
          color="dark"
          style={{marginBottom:'2rem'}}
          onClick={()=>{
            const name=prompt('Enter Item');
            if(name){
              this.setState(state =>({
                items: [...state.items,{id:uuid(),name}]
              }));
            }
          }}>ADDITEM</Button> */}
          <ListGroup>
            <TransitionGroup className="todolist">
              {items.map(({ id, name }) => (
                <CSSTransition key={id} timeout={500} classNames="fade">
                  <ListGroupItem>
                  <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this,id)}
                      >
                        &times;
                      </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
          
          </Container>
        );

  }
}
Todolist.propTypes={
  getItems:PropTypes.func.isRequired,
  item:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.item
});
export default connect(mapStateToProps, { getItems ,deleteItem})(Todolist);





// const TODO-List = ({
//   getItems,
//   item,
//   isAuthenticated,
//   deleteItem
// }: IShoppingList) => {
//   useEffect(() => {
//     getItems();
//   }, [getItems]);

//   const handleDelete = (id: string) => {
//     deleteItem(id);
//   };

//   const { items } = item;
//   return (
//     <Container>
//       <ListGroup>
//         <TransitionGroup className="shopping-list">
//           {items.map(({ _id, name }) => (
//             <CSSTransition key={_id} timeout={500} classNames="fade">
//               <ListGroupItem>
//                 {isAuthenticated ? (
//                   <Button
//                     className="remove-btn"
//                     color="danger"
//                     size="sm"
//                     onClick={() => handleDelete(_id)}
//                   >
//                     &times;
//                   </Button>
//                 ) : null}
//                 {name}
//               </ListGroupItem>
//             </CSSTransition>
//           ))}
//         </TransitionGroup>
//       </ListGroup>
//     </Container>
//   );
// };



