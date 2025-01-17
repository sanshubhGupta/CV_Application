import './general_info.css'
import PropTypes from 'prop-types';

function GeneralInfoForm({formData, setFormData}){

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormData((prevData)=>({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted:', formData);
    }


    return(
    <div id='parent'>
        <form>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
            />
            <br/>

            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br/>

            <label htmlFor="contactNo">contactNo: </label>
            <input
                type="text"
                id="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
            />
            <br/>
            
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    )
}

GeneralInfoForm.propTypes = {
    formData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        contactNo: PropTypes.string.isRequired,
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
};

export default GeneralInfoForm;