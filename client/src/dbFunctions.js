import axios from 'axios';

class Appointment {
    static addAppointment (value) {
        var url = "http://localhost:3000/api/addAppointment"
        return axios.post(url, {
            name: value.ClientName,
            email: value.ClientEmail,
            contact: value.ClientContact,
            service: value.Product,
            inclusions: value.Inclusions,
            AmountDue: value.AmountDue,
            schedule: value.Schedule,
        }); 
    }
    static uploadPayment (value){
        var url = "http://localhost:3000/api/uploadPayment"
        const formData = new FormData()
        formData.append('file', value)
        return axios.post (url, formData)
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