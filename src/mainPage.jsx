import {useState} from 'react';
import GeneralInfoForm from "./general_info";
import EducationalInfoForm from "./educational_info";
import PracticalInfoForm from "./practical_info";
import ResumePage from "./resume";
import './mainPage.css'

function MainPage() {
    const [firstFormData, setFirstFormData] = useState({
        name: 'vanshika', 
        email: 'example@email.com',
        contactNo: '9717000000'  
    })

    const [secondFormData, setSecondFormData] = useState({
        instituteName: 'DTU',
        yearStart: '2023',
        yearEnd: '2027',
        grade: '8.75' 
    })

    const [thirdFormData, setThirdFormData] = useState({
        companyName: 'Google',
        positionTitle: 'SWE',
        responsibilities: 'bestest',
        dateFrom: '2022',
        dateTo: '2024'
    })


    return (
    <div id="mainPage">
        <div id="forms">
            <GeneralInfoForm formData={firstFormData} setFormData={setFirstFormData}/>
            <EducationalInfoForm formData={secondFormData} setFormData={setSecondFormData}/>
            <PracticalInfoForm formData={thirdFormData} setFormData={setThirdFormData}/>
        </div>
        <div id="resumePage">
            <ResumePage generalInfo={firstFormData} educationalInfo={secondFormData} practicalInfo={thirdFormData}/>
        </div>
    </div>
    )
  }
  
  export default MainPage;
  