# WorkshopProject
Initial Workshop Team Project

# Team Members ->
1. Ajay Walke
2. Vaibhav Tiwari
3. Aditya Dhir
4. Purushottam Jha

# Statement of Project
Created an application for evaluating the students and assigning them marks. Following are the key features added:
- Assigner can select the students from the existing db and evaluate them.
- Once the evaluation is done particular student will be notified through email.
- Featuer of addition of new students to db.
- Filters are there to search a student.
- If a student is select by one assigner then it can't be selected by another one.

# Design

# Key Features
### Backend Documentation
1. `/api/v1/test` :: created for testing purpose
2. `/api/v1/student` :: created to fetch the particular student details
    - `get-student` 
    - `add-student`
    - `edit-student`
    - `remove-student`
    - `change-label`
3. `/api/v1/view` :: created to view all students details
    - `/view-all`
    - `/assigned` : fetch all students whose evaluation is done
    - `/not-assigned` : fetch all students whose view evaluation is remaining 
4. `/api/v1/email` :: to send notification to student when the evaluation is done
   - `/send-email` : will send the email to those whose evaluation is done.


# Technology Used
- NodeJs
- ExpressJs
- Mongodb
- ReactJs

# Live Demo(deployment link)
 
