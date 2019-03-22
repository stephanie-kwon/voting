import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css'

const buttonProps = {
    onClick() { alert('u clicked!!'); }
}
ReactDOM.render(<buttonProps/>, document.getElementById('vote'))




const Table = () => {
    return (
        <div id="voteTable">
            <table class="table col-5 mx-auto">
            <tbody>
                <tr>
                    <td>
                        React    
                        <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit" onClick={() => {alert('You picked React')}} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Vue
                        <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit" onClick={() => {alert('You picked Vue')}} />
                    </td>
                </tr>
                <tr>
                    <td>
                        angular
                        <input type="image" src="https://image.flaticon.com/icons/svg/149/149145.svg" className="plusLogo" alt="submit" onClick={() => {alert('You picked Angular')}} />
                    </td>
                </tr>
            </tbody>
             </table>
        </div>
    )
}

export default Table;