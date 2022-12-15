import axios from 'axios';

class Service {
	static login (pass){
		var url = "http://localhost:3000/api/login"
		console.log("attempting to login")
		return axios.post(url,{pass});
	}
	static editService(s_id,s_name, s_category, s_subcategory, s_duration, s_price, s_description, s_onsale, s_saleprice){
		var url = "http://localhost:3000/api/editservice"
		console.log("adminfunctions "+ s_id + s_name + s_category+ s_subcategory+ s_duration + s_price + s_description+ s_onsale + s_saleprice);
		return axios.put(url,{
			_id: s_id, 
			Service: s_name, 
			Category: s_category, 
			Subcategory: s_subcategory, 
			Duration: s_duration, 
			Price: s_price, 
			Description: s_description, 
			OnSale: s_onsale, 
			SalePrice: s_saleprice
		});
	}
	static deleteService (s_id,s_name){
		var url = "http://localhost:3000/api/deleteservice";
		return axios.post(url,{_id: s_id, Service: s_name});
	}
	static editPass(oldpass, ps_pass){
		var url = "http://localhost:3000/api/editpassword"
		return axios.put(url,{
			OldPass: oldpass,
			Password: ps_pass,
		});
	}
	static addService (s_name, s_category, s_subcategory, s_duration, s_price, s_description, s_onsale, s_saleprice) {
        var url = "http://localhost:3000/api/addservice"
        return axios.post(url, {
            Service: s_name,
			Category: s_category,
			Subcategory: s_subcategory,
			Duration: s_duration,
			Price: s_price,
			Description: s_description,
			OnSale: s_onsale,
			SalePrice: s_saleprice
        });
    }
	
	/*
	ADDED THIS BUT NOT SURE IF CORRECT
	
	static getAppointment (c_refnum, c_name, c_email, c_contact, c_time, c_date, c_service, c_status) {
        var url = "http://localhost:3000/api/getappointment"
        return axios.post(url, {
            refNum: c_refnum, 
			ClientName: c_name, 
			ClientEmail: c_email, 
			ClientContact: c_contact, 
			ClientTime: c_time, 
			ClientDate: c_date, 
			ClientServices: c_service, 
			ClientStat: c_status
        });
    }
	
	
    
	static addBeautician (b_name, b_services) (
		var url = "http://localhost:3000/api/addbeautician"
		return axios.post(url, {
            		Name: b_name,
			Services: b_services
        });	
	}
	static deleteBeautician (b_id, b_name){
		var url = "http://localhost:3000/api/deletebeautician"
		return axios.post(url,{b_name});
		console.log(b_id + " "+ b_name + "has been deleted");
	}
	static editBeautician (b_id, b_name, b_services){
		var url = "http://localhost:3000/api/deletebeautician"
		console.log(b_name + "will be edited")
		return axios.post(url,{
			_id: b_id,
			Name: b_name,
			Services: b_services
		});
	}
	static addInclusion (i_cat, i_name, i_price) (
		var url = "http://localhost:3000/api/addinclusion"
		return axios.post(url, {
			Category: i_cat,
            Name: i_name,
			Price: i_price
        });	
	}
	static deleteInclusion (i_id, i_name){
		var url = "http://localhost:3000/api/deleteinclusion"
		return axios.post(url,{i_id, i_name});
		console.log(i_name + "has been deleted")
	}
	static editInclusion (i_id, i_name, i_category, i_price){
		var url = "http://localhost:3000/api/editinclusion"
		return axios.post(url,{
			_id: i_id,
			Name: i_name,
			Category: i_category,
			Price i_price
		});
		console.log(i_name + "has been edited")
	}
	static addPromo (p_category, p_name, p_percent) (
		var url = "http://localhost:3000/api/addpromo"
		return axios.post(url, {
			Category: p_category,
            Name: p_name,
			Percent: p_price
        });	
	}
	static deletePromo (p_id, p_name){
		var url = "http://localhost:3000/api/deletepromo"
		return axios.post(url,{i_id, i_name});
		console.log(i_name + "has been deleted")
	}
	static editPromo (p_id, p_name, p_category, p_percent){
		var url = "http://localhost:3000/api/editpromo"
		return axios.post(url,{
			_id: p_id,
			Name: p_name,
			Category: p_category,
			Percent: p_percent
		});
		console.log(i_name + "has been edited")
	}
	*/
	
}

export default Service;
