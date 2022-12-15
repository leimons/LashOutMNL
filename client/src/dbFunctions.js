import axios from 'axios';

class Appointment {
    static async addAllAppointment(value, image){
        await this.addAppointment(value)
        return this.uploadPayment(image)
          
    }
    static async addAppointment (query) {
        var url = "http://localhost:3000/api/addAppointment"
        var result = await axios.post(url, query);
        console.log(result)
        return result.data;
    }
    static uploadPayment (value){
        var url = "http://localhost:3000/api/uploadPayment"
        const formData = new FormData()
        formData.append('file', value)
        return axios.put (url, formData)
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