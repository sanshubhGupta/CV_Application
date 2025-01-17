import {useState} from 'react';
import PropTypes from 'prop-types';
import './resume.css';

function ResumePage({generalInfo, educationalInfo, practicalInfo}){
    const [variabul, setVariabul] = useState('sample');

    function handleClick(){
        setVariabul('boring')
    }

    return(
        <>
            <div id="page">
                <h1>Resume {variabul}</h1>
                <div id="generalInfo">
                    <h3>{generalInfo.name}</h3>
                </div>

                <div id="educationalInfo">
                    <h3>{educationalInfo.instituteName}</h3>
                </div>

                <div id="practicalInfo">
                    <h3>{practicalInfo.companyName}</h3>
                </div>
                
                <button onClick={handleClick}>change</button>
            </div>
        </>
    )
}

ResumePage.propTypes = {
    generalInfo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        contactNo: PropTypes.string.isRequired,
    }).isRequired,
    educationalInfo : PropTypes.shape({
            instituteName : PropTypes.string.isRequired,
            yearStart : PropTypes.string.isRequired,
            yearEnd : PropTypes.string.isRequired,
            grade : PropTypes.string.isRequired
    }).isRequired,
    practicalInfo : PropTypes.shape({
            companyName: PropTypes.string.isRequired,
            positionTitle: PropTypes.string.isRequired,
            responsibilities: PropTypes.string.isRequired,
            dateFrom: PropTypes.string.isRequired,
            dateTo: PropTypes.string.isRequired,
    }).isRequired,
};

export default ResumePage;