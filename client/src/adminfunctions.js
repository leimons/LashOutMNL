import axios from 'axios';

class Service {
	static login (password){
		var url = "http://localhost:3000/api/login"
		console.log("attempting to login")
		return axios.post(url,{password});
	}
    static addService (s_name, s_category, s_subcat, s_dur, s_prc, s_desc, s_onS, s_sale) {
        var url = "http://localhost:3000/api/addservice"
        console.log ("The Value is: " + value)
        return axios.post(url, {
            product: value,
            AmountDue: price
        });
    }
    static deleteService (s_name){
		var url = "http://localhost:3000/api/deleteservice"
		console.log(s_name + "has been deleted")
		return axios.post(url,{s_name});
	}
}

export default Appointment;