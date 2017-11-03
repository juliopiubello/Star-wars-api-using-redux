import React, { Component } from 'react';
import {connect} from 'react-redux';

class StarsList extends Component{
    renderStars(starsData){
        console.log(starsData);
        const name = starsData.name;
        const gender = starsData.gender;
        const height = starsData.height;
        const mass = starsData.mass; 
        
        
        return(
            <tr key= {name}>
                <td> {name} </td>
                <td> {gender} </td>
                <td> {height} </td>
                <td> {mass} </td>
            </tr>
        );
    }



    render(){
        console.log(this.props.star); 
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> Genero </th>
                        <th> Altura </th>
                        <th> Massa </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        this.props.star.length !== 0 
                        ? this.props.star.map(star => {
                            return star.results.map(this.renderStars) 
                        })
                        : null
                    }
                </tbody>
            </table>
        );
    }
}




function mapStateToProps({ star }){
    return { star };
}
  
export default connect(mapStateToProps)(StarsList);
