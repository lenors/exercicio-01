 import React, {Component} from 'react';
 class App extends Component {
  state = {
     nome: ['leno'],
     idade:[22],
     comida:['bife'],
     
   }
   render(){
    return(
       <div>
       <h1>{this.state.nome}</h1>
       <h2>{this.state.idade}</h2>
       <h3>{this.state.comida}</h3>
       </div>
     )
   }
 }

export default App;
