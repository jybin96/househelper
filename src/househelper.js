import React from 'react';
import Topmenu from './topmenu'
import './map.css'
import Map from './img/map.png'
import Leftmenu from './leftmenu'
export default class Househelper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
            count:0,
            count2:0
        }
    }
    back=()=>{
        if(this.state.show === true){
            var div =  document.getElementById('leftmenu');
            div.setAttribute('id','close');
            setTimeout(() => {
                div.style.display = 'none'
            }, 800);
            var div2 =  document.getElementById('sibal');
            div2.setAttribute('id','sibal2');
            this.setState({
                show:false,
                count:1
            })
        }else{
            console.log("asdasd");
            var div3 =  document.getElementById('close');
            div3.style.display = 'flex'
            console.log(div3);
            div3.setAttribute('id','close2');
            var div4 =  document.getElementById('sibal2');
            div4.setAttribute('id','sibal3');
            this.setState({
                show:true,
                count:1
            })
            setTimeout(() => {
                div3.setAttribute('id','leftmenu');
                div4.setAttribute('id','sibal');
            }, 1000);
        }
        
    }
    render(){
        return(
            <div className="main">
                <button id="sibal" onClick={this.back}> 
                  &gt;
                </button>
                <Topmenu/>
                <div className="map">
                 <img src={Map} height="100%" width="100%"/>   
                <div id="leftmenu">
                
                    <Leftmenu/>
                </div>
                </div>
                
            </div>
        )
    }
}