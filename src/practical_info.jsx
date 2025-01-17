import PropTypes from 'prop-types';
import './general_info.css';

function PracticalInfoForm({formData, setFormData}){

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevData)=>({
            ...prevData,
            [id]: value,
        }))
    }

    return(
        <div id="parent">
            <form>
                <label htmlFor="companyName">Company Name:</label>
                <input type="text" id='companyName' value={formData.companyName} onChange={handleChange}/>
                <br />

                <label htmlFor="positionTitle">Position Title:</label>
                <input type="text" id='positionTitle' value={formData.positionTitle} onChange={handleChange}/>
                <br />

                <label htmlFor="responsibilities">Responsibilites:</label>
                <input type="text" id='responsibilities' value={formData.responsibilities} onChange={handleChange}/>
                <br />

                <label htmlFor="dateFrom">From:</label>
                <input type="text" id='dateFrom' value={formData.dateFrom} onChange={handleChange}/>
                <br />

                <label htmlFor="dateTo">To:</label>
                <input type="text" id='dateTo' value={formData.dateTo}/>
                <br />
            </form>
        </div>
    )
}

PracticalInfoForm.propTypes = {
    formData : PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        positionTitle: PropTypes.string.isRequired,
        responsibilities: PropTypes.string.isRequired,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string.isRequired,
    }).isRequired,
    setFormData : PropTypes.func.isRequired
}

export default PracticalInfoForm;