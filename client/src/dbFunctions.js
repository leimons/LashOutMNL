import axios from 'axios';

class Appointment {
    static addAppointment (value) {
        var url = "http://localhost:3000/api/addAppointment"
        return axios.post(url, {
            product: value
        });
    }
}

export default Appointment;