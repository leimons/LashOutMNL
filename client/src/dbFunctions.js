import axios from 'axios';

class Appointment {
    static addAppointment (value) {
        var url = "http://localhost:3000/api/addAppointment"
        console.log (value)
        return axios.post(url, {
            name: value.ClientName,
            email: value.ClientEmail,
            contact: value.ClientContact,
            service: value.Product,
            inclusions: value.Inclusions,
            AmountDue: value.AmountDue,
            schedule: value.Schedule
        });
    }
    static addInclusions (inclusion) {
        var url = "http://localhost:3000/api/addInclusions"
        return axios.post(url, {
            Inclusions: inclusion
        })
    }
    static addAppointmentDate (date) {
       var url = "http://localhost:3000/api/addChosenDate"
       return axios.post(url, {
            chosenDate: date
        })
    }
}

export default Appointment;