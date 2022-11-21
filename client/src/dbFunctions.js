import axios from 'axios';

class Appointment {
    static addAppointment (value, price) {
        var url = "http://localhost:3000/api/addAppointment"
        return axios.post(url, {
            product: value,
            AmountDue: price
        });
    }
}

export default Appointment;