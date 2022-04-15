import React, { Component } from "react";
import SignIn from "./SignIn";
import * as FaIcons from 'react-icons/fa'; 
import { IoSettingsOutline } from 'react-icons/io5';


class Buttonlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <>  
        <IoSettingsOutline className="icon" size="28" color="gray" onClick={this.openModal}/>
        <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default Buttonlog;

// isModalOpen를 state에 담아서 true일땐 modal이 나오고 false일땐 사라지는 버튼

// <SignIn isOpen={this.state.isModalOpen} close={this.closeModal} /> 를 프롭스로 전송
