import React, {Component} from 'react';
import {render} from 'react-dom';

import 'antd/dist/antd.css';

import './Test5Style.less'

import IncidenceRelation from './IncidenceRelation'
// import BoardStructure from './BoardStructure'
//
// import SituationOfOffice from './ShareholderRating';
// import GradeOfShareHolder from './GradeOfShareHolder';
// import OwnFund from './OwnFund';
// import ShareholderStrength from './ShareholderStrength';
// import ScaleWithShareHoldingAndPledge from './ScaleWithShareHoldingAndPledge';
// import ScaleWithShareHolder from './ScaleWithShareHolder';


class Counter extends Component {
    render() {
        return <div>
            <IncidenceRelation></IncidenceRelation>{/*关联关系图*/}
            {/*<BoardStructure></BoardStructure>/!*董事会结构*!/*/}
            {/*<ShareholderStrength></ShareholderStrength>/!*股东实力*!/*/}
            {/*<GradeOfShareHolder></GradeOfShareHolder>/!*股东控股评级*!/*/}
            {/*<SituationOfOffice></SituationOfOffice>/!*管理层在股东单位任职情况*!/*/}
            {/*<OwnFund></OwnFund>/!*股东占股*!/*/}
            {/*<ScaleWithShareHoldingAndPledge></ScaleWithShareHoldingAndPledge>/!*实际控制人持股及质押比例*!/*/}
            {/*<ScaleWithShareHolder></ScaleWithShareHolder>/!*股东占比*!/*/}
        </div>
    }
}

render(<Counter initialCount='1'/>, document.getElementById('root'));


//http://168.61.9.138:8061/cams/swagger-ui.html#