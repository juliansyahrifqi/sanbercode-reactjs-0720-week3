import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      hitung: 100,
      time: new Date().toLocaleTimeString(),
      show: true
    };
  }

  componentDidMount(){
    const {mulaiHitung} = this.props
    if (this.props.start !== undefined) {
        this.setState({hitung: mulaiHitung})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
      if(this.state.hitung < 0) {
        clearInterval(this.timerID);
      }   
  }

  tick() {
      if(this.state.hitung > 0) {
        this.setState({
            hitung: this.state.hitung - 1,
            time: new Date().toLocaleTimeString() 
        });
      }
  }

  render() {
    const {hitung} = this.state
    return ( 
        <table style={{width: "40%", margin: "0 auto"}}>
            <tr>
                <td><b>sekarang jam: </b> {this.state.time}</td>
                <td style={{textAlign: "right"}}><b>hitung mundur </b>{hitung}</td> 
            </tr>
        </table>
    )
  }
}

export default Timer;