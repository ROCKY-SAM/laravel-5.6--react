import React from 'react'
import ReactDom from 'react-dom'

export default class User extends React.Component{


constructor(){
    super();
    this.state = {
        data:[]
    }
}
componentWillMount(){
    let $this = this;
    axios.get('/api/users').then(response =>{
       
        $this.setState({
            data:response.data
        }).catch(error => {
            console.log(error)
        })
    })
    
}

    render(){
        return(
            <div>
                <div>
                    <h2>Users Listing</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((user,i) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
<a href="" className="btn btn-primary">Edit</a> ||  
<a href="" className="btn btn-danger">Delete</a>

                                </td>
                                
                                </tr>
                           
                            )
                            )}
                             
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

ReactDom.render(<User/>,document.getElementById('app'))