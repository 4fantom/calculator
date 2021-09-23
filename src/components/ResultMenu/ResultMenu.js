import React from "react";
import './ResultMenu.css'
import { connect } from 'react-redux';


const ResultMenuContainer = (props) => {

    return <div className={'displayResultWrapper'}>
        <p className={'displayedInfo'}>{props.display}</p>
    </div>

}

const mapStateToProps = function(state) {
    return {
        display: state.calculator.display
    }
}

export default connect(mapStateToProps)(ResultMenuContainer);