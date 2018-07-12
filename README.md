# Persona

### Active Routes
- /app0 => MVP page
- / => login page
- /host => host view
- /waiter => waiter view

### Description
Persona is an application that captures an image of a face from a video then matches it to previously captured images and retrieves data associated with the person in the image. The primary use case is for restaurants and bars to be able to provide more personalized service to their patrons. Though, it can also be used by other retail businesses such as stores, dry cleaners, etc. Persona can also aid the business owners' planning by providing statistics such as new/return visitors, number of visits within a time period, visits with/without purchase and more. Persona's facial recognition capabilities are powered by the AWS Rekognition API. The User Interface uses React while a Node JS server manages routing of data through the application. A Mongo DB database stores the data for each customer's persona.

## Contents
- [Features](#features)
- [UI Wireframes](#ui-wireframes)
- [Data Flows](#data-flows)

## Features
* Compare a comparison image to all reference images
  * If not matched, save comparison image as reference image
  * If matched, return customer data associated with reference image
* Customer profile containing all preferences
  * Face ID
  * Create date
  * Name
  * Number of visits
  * Order details for each visit
  * Preferences
    * Table
    * Protein
    * Vegetable
    * Starch
    * Drink
    * Food allergies
    * Dietary restrictions
* Update profile with visit details
* 3 UI views
  * Hostess
  * Waiter
  * Customer
* 3 data views
  * Full order details
  * Summary with most common food and drink orders
  * Customer personal data

## UI Wireframes
Login and User Management

Login &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; User Profile <br />
![Login Screen](/planning/Login.png)  ![User Profile](/planning/User_Profile.png)

Update User Info Confirmation <br/>
![User Update Confirmation](/planning/User_Update_Confirmation.png)

Hostess Views

Image Capture &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Hostess View <br/>
![Image Capture](/planning/Image_Capture.png)  ![Hostess View](/planning/Hostess_View.png)

Waiter Views

Waiter View - Summary &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Waiter View - Detail <br/>
![Waiter View - Summary](/planning/Waiter_View-Summary.png)  ![Waiter View](/planning/Waiter_View-Detail.png)

Customer View

Customer Data Input <br/>
![Customer View](/planning/Customer_View.png)

## Data Flows
Phase-1

Capture Image and Display Image with Data <br/>
![Phase 1](/planning/Persona_Data_Flow-Phase_1.jpg)

#### Who maintains Persona?
This project is diligently maintained be the Persona team. :sweat_smile:

&nbsp; &nbsp; &nbsp; &nbsp;Front End: Duane &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Back End: Almaz   <br/>
&nbsp; &nbsp; &nbsp; &nbsp;<img src="/planning/Duane.png" width="125"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;<img src="/planning/Almaz.png" width="125">

|   &nbsp; &nbsp; &nbsp; &nbsp;Front End  &nbsp; &nbsp;  &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp; &nbsp;  Back End &nbsp; &nbsp; &nbsp; &nbsp; |
|-------------|------------|
|  &nbsp; &nbsp; &nbsp; &nbsp;React.js  &nbsp; &nbsp; &nbsp; &nbsp;   |  &nbsp; &nbsp; &nbsp; &nbsp;Mongo DB  &nbsp; &nbsp; &nbsp; &nbsp;  |
|  &nbsp; &nbsp; &nbsp; &nbsp;HTML   &nbsp; &nbsp; &nbsp; &nbsp;      |  &nbsp; &nbsp; &nbsp; &nbsp;Express.js  &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;CSS   &nbsp; &nbsp; &nbsp; &nbsp;       |  &nbsp; &nbsp; &nbsp; &nbsp;AWS S3      &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;Bootstrap  &nbsp; &nbsp; &nbsp; &nbsp;  |  &nbsp; &nbsp; &nbsp; &nbsp;AWS Rekognition &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;JavaScript &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;API  &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;AWS Rekognition &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;JavaScript &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;Git &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp;AXIOS  &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;AWS S3  &nbsp; &nbsp; &nbsp; &nbsp;   | &nbsp; &nbsp; &nbsp; &nbsp;Mongoose &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;AXIOS   &nbsp; &nbsp; &nbsp; &nbsp;   |  &nbsp; &nbsp; &nbsp; &nbsp;React.js  &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;GitHub   &nbsp; &nbsp; &nbsp; &nbsp;   |  &nbsp; &nbsp; &nbsp; &nbsp;Node.js  &nbsp; &nbsp; &nbsp; &nbsp;|
|  &nbsp; &nbsp; &nbsp; &nbsp;API   &nbsp; &nbsp; &nbsp; &nbsp;   |  &nbsp; &nbsp; &nbsp; &nbsp;GitHub  &nbsp; &nbsp; &nbsp; &nbsp;|


### Front End:

- Tailoring user experience;
- Bringing a designer’s concept to life with HTML, CSS, JavaScript and React.js;
- Production, modification, and maintenance of web application user interface;
- Implementing responsive design for mobile app;
- Contributing some back-end experience, collaborating on APIs, and AWS;
- Maintaining software workflow management with a project management tool like GitHub;
- Testing the site during development for usability and fixing any bugs.

### Back End:

- Database creation, integration, and management — MongoDB;
- Using back-end frameworks to build server-side software, like Express.js;
- Cloud computing integration — Amazon Web Services;
- Server-side programming languages — Node.js;
- Deployment, and maintenance;
- API integration
- Backup and restore technologies for website’s files and DB.

#### How to get help with Persona?
Just create an issue and we will investigate a resolution.
