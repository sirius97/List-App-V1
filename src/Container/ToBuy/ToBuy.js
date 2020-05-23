import React,{Component} from 'react';
import Item from './Item/Item';
import Aux from '../../Hoc/Auxi';
import Modal from '../../Component/Modal/Modal';
import BoughtSummary from '../../Component/BoughtSummary/BoughtSummary';
import classes from './ToBuy.css';



class ToBuy extends Component {
    state = {
        items: [{
            id: 1,
            name: '',
            quantity : 0
        }],
        bought: null,
        count : 1,
        show: false
    }

   addItemNameHandler = (event,id) => {

            let updatedState = [...this.state.items]
            let indexEle = updatedState.findIndex(el => (el.id === id))         
            updatedState[indexEle].name = event.target.value
            updatedState[indexEle].quantity = 0
            this.setState({
                items: updatedState
            })

    }



    onClickHandler = () => {
        let newElement = [...this.state.items]
        let id = this.state.count + 1
        let element = { id: id , name: "", quantity: 0}
        newElement.push(element)
        this.setState({
            items: newElement,
            count : this.state.count + 1
        })
 
    }
   
        deleteHandler = (index) => {
            console.log("Inside delete")
            let updatedState = [...this.state.items]
            updatedState.splice(index,1)
            this.setState({
                items: updatedState
            })
  
        }

         boughtUpdate = []

        doneBuyingHandler = (index,id) => {
            console.log("Inside done")
            let updatedState = [...this.state.items]
            let indexi = updatedState.findIndex(el => (el.id === id))
            let boughtItem = updatedState.splice(indexi,1)
            console.log(index,indexi)
                this.boughtUpdate.push(...boughtItem)

            this.setState({
               bought: this.boughtUpdate,
                items: updatedState,
              })
              console.log("bought:", this.state.bought)
        }

        seeBoughtHandler = () => {
            this.setState({
                show: true
            })
        }

        backclickedHandler = () => {
            this.setState({
                show: false
            })
        }

        incrementHandler = (id) => {
                let itemsInr = [...this.state.items]
                let indexInr = itemsInr.findIndex(el => (el.id === id))
                itemsInr[indexInr].quantity += 1
                this.setState({
                    items : itemsInr
                })
        }

        decrementHandler = (id) => {
            console.log("inside decremnt Handle")
            let itemsDec = [...this.state.items]
            let indexDec = itemsDec.findIndex(el => (el.id === id))
            if(itemsDec[indexDec].quantity > 0){
                itemsDec[indexDec].quantity -= 1
            }
            console.log(itemsDec[indexDec].quantity)
            this.setState({
                items : itemsDec
            })
        }
   
    render(){

        let items = this.state.items.map((el,index) => {
            return <Item 
            delete = {() => this.deleteHandler(index)}
            done = {() => this.doneBuyingHandler(index,el.id)}
            key = {el.id} 
            changeName = {(event,id) => this.addItemNameHandler(event,el.id)}
            increment = {() => this.incrementHandler(el.id)}
            decremet ={() => this.decrementHandler(el.id)}
            name = {el.name}
            quantity = {el.quantity} 
            
            />
        })
        let boughtSummary = <p>It's Empty Here Start Buying!!</p>
        if(this.state.bought){
            boughtSummary = <BoughtSummary bought = {this.state.bought}/>
        }
        

        return(
        <Aux>
            <div className = {classes.ToBuy}>
                <button className = {classes.buttonA}
                onClick = {this.onClickHandler}>To Buy</button>
                {items}
            </div>
            <Modal show = {this.state.show} backclicked = {this.backclickedHandler}>
                {boughtSummary}
            </Modal>
            <div className={classes.Bought}>
            <button 
                style = {{borderRadius:'20%',padding:'10px',fontFamily:'Lobster',fontSize:'19px'}}
                onClick={this.seeBoughtHandler}>See Bought</button> 
            </div>
           
        </Aux>
        );
    }
}

export default ToBuy;