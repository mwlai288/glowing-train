import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
// import Overdrive from 'react-overdrive';


class MealList extends Component {
  state = {
    user: [],
    userId: "",
    redirect: false,
    meals: []
}
    
componentWillMount() {
   const id = this.props.match.params.userId;
   axios.get(`/api/user/${id}`).then((res) => {
   this.setState({
      user: res.data,
      meals: res.data.meals,
      userId: id,
      likes: res.data.likes
     })
  })    
}

deleteMeal = () => {
  const userId = this.props.match.params.userId;
  const mealId = this.props.match.params.mealId;
  axios.delete(`/api/user/${userId}/meal/${mealId}`).then(res => {
    this.setState({ redirect: true })
  })
}

// Like = () => {
//     this.setState({
//         likes: this.state.likes + 1        
//       });
// }

// Dislike = () => {
//     likes: this.state.likes - 1
// }

    render() {
        if(this.state.redirect){
            return <Redirect to={'/'}/>;
        } else {
        return (
            <div>
                <NewMeal>
                    <Link to={`/user/${this.state.user._id}/newmeal`}> New Meal</Link>
                </NewMeal>
                {this.state.meals.map((meals, i) => (
            <div key={i}>
                <br/>
                <MealName>{meals.name}</MealName>
            {/* <Overdrive id={meals._id}> */}
                <Link to={`/user/${this.state.user._id}/meal/${meals._id}`}> 
                    <FoodImage src={meals.image} alt=''/> 
                </Link> 
            {/* </Overdrive> */}
                <br/>     
            {/* <button onClick={this.Like}>+1</button>{meals.likes}<button onClick={this.Dislike}>-1</button> */}
            <button onClick={this.deleteMeal}>DELETE</button>
            </div>
                ))}
            </div>
        );}
    }
}

export default MealList;

const FoodImage = styled.img`
    width: 300px;
    height: 300px;
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
`

const MealName = styled.div`
    padding: 1rem;
`
const NewMeal = styled.div`
    text-align: center;
`