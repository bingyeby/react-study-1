import React, { Component } from 'react';
import { render } from 'react-dom';


import Test6 from './Test6'
import Test7 from './Test7'

import SituationOfOffice from './SituationOfOffice';
import GradeOfShareHolder from './GradeOfShareHolder';
import OwnFund from './OwnFund';
import SituationOfOffice2 from './SituationOfOffice2';


class Counter extends Component {
    render() {
        return <div>
            <Test6></Test6>
            <Test7></Test7>
            <SituationOfOffice></SituationOfOffice>
            <GradeOfShareHolder></GradeOfShareHolder>
            <OwnFund></OwnFund>
            <SituationOfOffice2></SituationOfOffice2>
        </div>
    }
}

render(<Counter initialCount='1' />, document.getElementById('root'));
