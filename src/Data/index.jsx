import Placeholder from '../Assets/placeholder.jpg';
import Flight from '../Assets/flight-information.jpg';
import SupportTicket from '../Assets/support-ticket-system.jpg';
import QCHC from '../Assets/qchc.jpg';

const ProjectsDetails = () => {

    const imageUrl = Placeholder

    //initialize objects
    const details = [
        {
            "id": 1,
            "number": "01",
            "name": "Business website",
            "year": 2023,
            "description": "In progress",
            "tech": "HTML, CSS, JavaScript, React",
            "image": imageUrl,
            "webUrl": "",
            "gitUrl": ""
        },
        {
            "id": 2,
            "number": "02",
            "name": "Flight Information",
            "year": 2021,
            "description": "This application allows a user to search their flight information which includes airports, airlines, and schedule by flight number. If the flight's location information is available, the real-time location of the airplane will be marked on the Google Map.",
            "tech": "HTML, CSS/Bootstrap, PHP, JavaScript, Aviationstack API, Google Maps API",
            "image": Flight,
            "webUrl": "http://ikumi.lovestoblog.com/APIproject/",
            "gitUrl": "https://github.com/IkumiMine/Flight-Information"
        },
        {
            "id": 3,
            "number": "03",
            "name": "QCHC website",
            "year": 2021,
            "description": "This is a group project to build a dynamic and data-driven web application with a booking system for the doctor's office. I created the FAQ page and admin dashboard as a developer and designer.",
            "tech": "HTML, CSS/Bootstrap, JavaScripot, PHP, MySQL, Fullcalendar, Swiftmailer",
            "image": QCHC,
            "webUrl": "http://ikumi.lovestoblog.com/project-querycrew/",
            "gitUrl": "https://github.com/IkumiMine/project-querycrew"
        },
        {
            "id": 4,
            "number": "04",
            "name": "Support Ticket System",
            "year": 2021,
            "description": "This is the ticket support system application. A logged-in user as staff can see a list of all tickets and detailed each ticket, and reply to them. A logged-in user as client can create a new ticket, see a list of their tickets and detailed each ticket, and reply to the message from staff.",
            "tech": "HTML, CSS/Bootstrap, PHP, XML",
            "image": SupportTicket,
            "webUrl": "http://ikumi.lovestoblog.com/assignment2/",
            "gitUrl": "https://github.com/IkumiMine/Support-Ticket-System"
        },
      
    ]
    return details;
}
    
export default ProjectsDetails;