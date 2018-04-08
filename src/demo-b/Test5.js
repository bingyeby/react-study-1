import React, {Component} from 'react';
import {render} from 'react-dom';

import 'antd/dist/antd.css';

import './Test5Style.less'

import IncidenceRelation from './IncidenceRelation'
// import BoardStructure from './BoardStructure'
//
// import SituationOfOffice from './ShareholderRating';
// import OwnFund from './OwnFund';
import ShareholderStrength from './ShareholderStrength';
import ShareholderStrengthPrivateEnterprise from './ShareholderStrengthPrivateEnterprise';
import GradeOfShareHolder from './GradeOfShareHolder';


import GradeOfShareHolderPrivateEnterprise from './GradeOfShareHolderPrivateEnterprise';



// import ScaleWithShareHoldingAndPledge from './ScaleWithShareHoldingAndPledge';
// import ScaleWithShareHolder from './ScaleWithShareHolder';


class Counter extends Component {
    render() {
        return <div>
            {/*<BoardStructure></BoardStructure>/!*董事会结构*!/*/}
            <ShareholderStrength></ShareholderStrength>{/*股东实力*/}

            <ShareholderStrengthPrivateEnterprise></ShareholderStrengthPrivateEnterprise>{/*股东实力*/}

            <GradeOfShareHolder></GradeOfShareHolder>{/*股东控股评级*/}
            <GradeOfShareHolderPrivateEnterprise></GradeOfShareHolderPrivateEnterprise>{/*股东控股评级*/}


            {/*<IncidenceRelation></IncidenceRelation>/!*关联关系图*!/*/}
            {/*<SituationOfOffice></SituationOfOffice>/!*管理层在股东单位任职情况*!/*/}
            {/*<OwnFund></OwnFund>/!*股东占股*!/*/}
            {/*<ScaleWithShareHoldingAndPledge></ScaleWithShareHoldingAndPledge>/!*实际控制人持股及质押比例*!/*/}
            {/*<ScaleWithShareHolder></ScaleWithShareHolder>/!*股东占比*!/*/}
        </div>
    }
}

render(<Counter initialCount='1'/>, document.getElementById('root'));


//http://168.61.9.138:8061/cams/swagger-ui.html#