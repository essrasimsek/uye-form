import React,{useState} from 'react' 
import { withRouter } from 'react-router-dom';


  class DetailPage extends React.Component{
    render(){
        return(
            <div>
        isim: {this.props.location.pathname.split("/")[2].split("-")[0]}
<br/>
soyisim: {this.props.location.pathname.split("/")[2].split("-")[1]}<br/>
yaş: {this.props.location.pathname.split("/")[2].split("-")[2]}
        </div>
        )
    }
}

export default withRouter(DetailPage);