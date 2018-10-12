import React, { Component } from 'react'

export default class UserListComponent extends Component {
  render() {
    return (
        <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
        <td>
<a href="" className="btn btn-primary">Edit</a> ||  
<a href="" className="btn btn-danger">Delete</a>

        </td>
        
        </tr>
    )
  }
}
