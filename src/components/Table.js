import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            countReact: 0,
            countVue: 0,
            countAngular: 0
        }
        this.incrementReact = this.incrementReact.bind(this)
        this.incrementVue = this.incrementVue.bind(this)
        this.incrementAngular = this.incrementAngular.bind(this)
    }
    incrementReact(){
        this.setState({
            countReact: this.state.countReact+1
        })
    }
    incrementVue(){
        this.setState({
            countVue: this.state.countVue+1
        })
    }
    incrementAngular(){
        this.setState({
            countAngular: this.state.countAngular+1
        })
    }
    render(){
        return(
            <div id="voteTable">
                <table class="table col-5 mx-auto">
                <tbody>
                    <tr>
                        <td>
                        <div className="countHolder">
                            {this.state.countReact}
                        </div>
                        <span className="title">React</span> 
                        <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit"  onClick={this.incrementReact} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="countHolder">
                            {this.state.countVue}
                        </div>
                        <span className="title">Vue</span> 
                        <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit"  onClick={this.incrementVue}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div class="countHolder">
                            {this.state.countAngular}
                        </div>
                        <span className="title">Angular</span> 
                        <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit"  onClick={this.incrementAngular} />
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default Counter;


// const Table = () => {
//     return (
//         <div id="voteTable">
//             <table class="table col-5 mx-auto">
//             <tbody>
//                 <tr>
//                     <td>
//                         React    
//                         <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit" onClick={() => {alert('You picked React')}} />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         Vue
//                         <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit" onClick={() => {alert('You picked Vue')}} />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         angular
//                         <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit" onClick={() => {alert('You picked Angular')}} />
//                     </td>
//                 </tr>
//             </tbody>
//              </table>
// //         </div>
//     )
// }

// export default Table;
