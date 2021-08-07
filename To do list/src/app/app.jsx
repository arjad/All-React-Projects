import React from "react"
export default class App extends React.Component{
state={
    value:"",
    list:[]
}

handleChange=(e)=>{
    
    this.setState({
        value:e.target.value
    })

}

handleSubmit=(e)=>{
    e.preventDefault();
let newlist=this.state.list
let newvalue=this.state.value;
let time=new Date().toLocaleTimeString();

newlist.push([newvalue,time])

this.setState({
    list:newlist,
    value:"",
    index:0
})
}
handleup=(i)=>{
    if(i===0){alert('its on top already')}
    else{
    let newlist=this.state.list

    let temp=newlist[i]
    newlist[i]=newlist[i-1]
    newlist[i-1]=temp

    this.setState({
        list:newlist
    })
}
}
deletevalue=(i)=>{
    let newlist=this.state.list

    newlist.splice(i,1)

    this.setState({
        list:newlist
    })
}

handleEdit=(i)=>{
    this.setState({
        value:this.state.list[i][0],
        index:i,
    })
    }

    updatevalue=()=>{
        let newlist=this.state.list
        let newval=this.state.value
        let newindex=this.state.index
        newlist[newindex][0]=newval

        this.setState({
            list:newlist
        })

    }
    render(){
        console.log(this.state);
let response=this.state.list.map((listitem,i)=>{
    return(
        <tr>
            <td>{i}</td>
            <td>{listitem[0]}</td>
            <td>{listitem[1]}</td>
            <td>
          <button className="btn btn-primary" onClick={()=>{this.deletevalue(i)}}>Del</button>
          <button className="btn btn-success" onClick={()=>{this.handleup(i)}}>Shiftup</button>
          <button className="btn btn-primary" onClick={()=>{}}>Shiftdown</button>
          <button className="btn btn-success" onClick={()=>{this.handleEdit(i)}}>Edit</button> 
            </td>
        </tr>
    )
})

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.value}></input>
                    <button>save</button>
                </form>
                <button onClick={this.updatevalue}>update</button>
                <table className="table table-striped">
                <thead>
 <tr>
      <th scope="col">#</th>
      <th scope="col">Todo</th>
      <th scope="col">time</th>
      <th scope="col">
          handle
      </th>
    </tr>
  </thead>
  <tbody>
   {response}
  </tbody>
</table>
            </div>
        )
    }

}