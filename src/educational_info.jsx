import './general_info.css'
import PropTypes from 'prop-types';

function EducationalInfoForm({formData, setFormData}){

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data: ", formData);
    }

    return(
        <div id='parent'>
            <form>
                <label htmlFor="instituteName">Institute Name;</label>
                <input type="text" id="instituteName" value={formData.instituteName} onChange={handleChange}/>
                <br/>

                <label htmlFor="yearStart">Year Start:</label>
                <input type="text" id="yearStart" value={formData.yearStart} onChange={handleChange}/>
                <br/>

                <label htmlFor="yearEnd">Year End: </label>
                <input type="text" id="yearEnd" value={formData.yearEnd} onChange={handleChange}/>
                <br/>

                <label htmlFor="grade">Grade: </label>
                <input type="text" id="grade" value={formData.grade} onChange={handleChange}/>
                <br/>

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

EducationalInfoForm.propTypes = {
    formData : PropTypes.shape({
        instituteName : PropTypes.string.isRequired,
        yearStart : PropTypes.string.isRequired,
        yearEnd : PropTypes.string.isRequired,
        grade : PropTypes.string.isRequired
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
};

export default EducationalInfoForm;