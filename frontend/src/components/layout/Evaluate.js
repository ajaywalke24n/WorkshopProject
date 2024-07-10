import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import API from '../../services/API';
import Input from '../forms/Input';
import '../../styles/styles.css'

const Evaluate = () => {
    const [data1, setData1] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const operation = location.state.operation;
    const data2 = location.state.data2;

    const handleRedirect = async () => {
        console.log(operation, data2);
        data2.map(async (t) => {
            const r = t.student.rollNo;
            const e1 = t.student.email;
            await API.get('/student/change-label', {params:{rollNo:r, email:e1}});
        })
        navigate('/');
    }
    const updateData = (index, field, value) => {
        setData1((prevData) => {
            const newData = [...prevData];
            newData[index] = {...newData[index], [field] : value}
            return newData;
        })
    }
    const handleSubmit = async () => {
        try {
            console.log(data1)
            const conf = window.confirm('Do you want to continue0');
            if(conf) {
                data1.map(async (student, index) => {
                    const r = data2[index]?.student.rollNo;
                    const e1 = data2[index]?.student.email;
                    const i = parseInt(student.ideation);
                    const e = parseInt(student.execution);
                    const v = parseInt(student.viva);
                    const p = parseInt(student.pitch);
                    const Total = i + e + v + p
                    // console.log(r, e, i, e, v, p, Total);
                    const {data} = await API.post('/student/edit-student', {rollNo:r, email:e1, ideation:i, execution:e, viva:v, pitch:p, total:Total, isAssigned:true, isAvailable:true});
                    if(!data?.success) {
                        alert(data?.message);
                    }
                    await API.get('/email/send-email', {params:{email:e1, total : parseInt(Total)}}); // send the email to the student
                  }
                )
                alert('Students Evaluation Saved')
                navigate('/');
            }
            }
        catch(error) {
            alert(error);
        }
    }
    useEffect(() => {
        // loadData();
    })
  return (
      <div>
      <div className='evaluate-header'><button className='button' onClick={handleRedirect}>HOME</button></div>
      <div className='evaluate-container'>
        {
            data2?.map((temp, index) => 
            {
                const student = temp.student;
                // console.log(student);
                return (
                    <div className='evaluate-box'>
                    <Input
                        labelFor='Roll No'
                        labelText='Roll No'
                        inputType='text'
                        name='rollno'
                        width1='50px'
                        height1='30px'
                        value={student.rollNo}
                        />
                    <Input
                        labelFor='Email'
                        labelText='Email'
                        inputType='email'
                        name='email'
                        width1='200px'
                        height1='30px'
                        value={student.email}
                        />
                    <Input
                        labelFor='Ideation'
                        labelText='Ideation'
                        inputType='number'
                        name='Ideation'
                        width1='100px'
                        height1='30px'
                        value={data1[index]?.ideation || ''}
                        onChange={(e) => updateData(index, 'ideation', e.target.value)}
                        />
                    <Input
                        labelFor='Execution'
                        labelText='Execution'
                        inputType='number'
                        name='execution'
                        width1='100px'
                        height1='30px'
                        value={data1[index]?.execution || ''}
                        onChange={(e) => updateData(index, 'execution', e.target.value)}
                        />
                    <Input
                        labelFor='Viva'
                        labelText='Viva'
                        inputType='number'
                        name='viva'
                        width1='100px'
                        height1='30px'
                        value={data1[index]?.viva || ''}
                        onChange={(e) => updateData(index, 'viva', e.target.value)}
                        />
                    <Input
                        labelFor='Pitch'
                        labelText='Pitch'
                        inputType='number'
                        name='pitch'
                        width1='100px'
                        height1='30px'
                        value={data1[index]?.pitch || ''}
                        onChange={(e) => updateData(index, 'pitch', e.target.value)}
                        />
                    <Input
                        labelFor='Total'
                        labelText='Total'
                        inputType='number'
                        name='total'
                        width1='100px'
                        height1='30px'
                        value={parseInt(data1[index]?.ideation)+parseInt(data1[index]?.execution)+parseInt(data1[index]?.viva)+parseInt(data1[index]?.pitch)}
                        />
                </div>
            )
        })
        }
      </div>
      <div className='evaluate-submit'><button className='button' onClick={handleSubmit}>Submit</button></div>
    </div>
  )
}

export default Evaluate

// const data3 = [{
//     'rollNo' : 1,
//     'email' : "aj@gmail.com"
// },
// {
//     'rollNo' : 2,
//     'email' : "aj2@gmail.com"
// },
// {
//     'rollNo' : 3,
//     'email' : "aj3@gmail.com"
// },
// {
//     'rollNo' : 4,
//     'email' : "aj4@gmail.com"
// }
// ]