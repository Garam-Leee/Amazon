import React from "react";
import { IoSettingsOutline } from 'react-icons/io5' 

import './topsection.css';  

const SelectBox = () => {
	return (
		<select className="dropSite">
			<option key="site" value="banana">
				사이트 바로가기
			</option>
			<option key="e-catalog" value="apple">e-catalog</option>
			<option key="contract" value="orange">계약관리</option>
		</select>
	);
};   

const Username = () => {
    var name="이가람 [ 주식회사 ]";
	return (
        <span className="left_name"> {name}</span>
	);
};  

export default function TopSection(props){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo"><img src="https://together.homecc.co.kr/resources/images/common/logo.png"/></div>
                    <div className="dropSite">
                        <SelectBox />
                    </div>
                </div>
                <div className="topRight">  
                    <div className="topRight_left">
                        <Username />
                    </div>
                    <div className="topRight_center">
                        <button className="logoutbtn">로그아웃</button>
                    </div>
                    <div className="topRight_right">
                        <IoSettingsOutline className="icon" size="28" color="gray" />
                    </div>
                </div>
            </div> 
        </div>
    )
}
