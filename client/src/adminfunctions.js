import axios from 'axios';

class Service {
	static login (password){
		var url = "http://localhost:3000/api/login"
		console.log("attempting to login")
		return axios.post(url,{password});
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
		console.log("adminfunctions" + s_id + s_name);
		return axios.post(url,{_id: s_id, Service: s_name});
	}
	/*
    static addService (s_name, s_category, s_subcat, s_dur, s_prc, s_desc, s_onS, s_sale) {
        var url = "http://localhost:3000/api/addservice"
        console.log ("The Value is: " + value)
        return axios.post(url, {
            Service: s_name,
			Category: s_category,
			Subcategory: s_subcat,
			Duration: s_dur,
			Price: s_prc,
			Description: s_desc,
			OnSale: s_onS,
			SalePrice: s_sale
        });
    }
    static deleteService (s_name){
		var url = "http://localhost:3000/api/deleteservice"
		console.log(s_name + "has been deleted")
		return axios.post(url,{s_name});
	}
	static addBeautician (b_name) (
		var url = "http://localhost:3000/api/addbeautician"
		return axios.post(url, {
            Name: b_name
        });	
	}
	static deleteBeautician (b_name){
		var url = "http://localhost:3000/api/deletebeautician"
		console.log(b_name + "has been deleted")
		return axios.post(url,{b_name});
	}
	static editBeautician (b_name){
		var url = "http://localhost:3000/api/deletebeautician"
		console.log(b_name + "will be edited")
		return axios.post(url,{b_name});
	}
	static addInclusion (i_cat, i_name, i_price) (
		var url = "http://localhost:3000/api/addinclusion"
		return axios.post(url, {
			Category: i_cat,
            Name: i_name,
			Price: i_price
        });	
	}
	static deleteInclusion (i_name){
		var url = "http://localhost:3000/api/deleteinclusion"
		console.log(i_name + "has been deleted")
		return axios.post(url,{i_name});
	}
	static editInclusion (i_name, i_category, i_price){
		var url = "http://localhost:3000/api/editinclusion"
		console.log(i_name + "will be edited")
		return axios.post(url,{i_name});
	}
	*/
	
}

export default Service;
