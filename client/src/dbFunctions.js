import axios from 'axios';

class Appointment {
    static addAppointment (value, price) {
        var url = "http://localhost:3000/api/addAppointment"
        return axios.post(url, {
            product: value,
            AmountDue: price
        });
    }
    static addInclusions (inclusion) {
        var url = "http://localhost:3000/api/addInclusions"
        return axios.post(url, {
            Inclusions: inclusion
        })
    }
}

export default Appointment;