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
	/*
    static addService (s_name, s_category, s_subcategorty, s_duration, s_price, s_description, s_onsale, s_saleprice) {
        var url = "http://localhost:3000/api/addservice"
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
	static addBeautician (na, mna, mnt, tua, tut, wea, wet, tha, tht, fra, frt, saa, sat, sua, sut) (
		var url = "http://localhost:3000/api/addbeautician"
		return axios.post(url, {
            Name: na,
			MondayAvailability: mna,
			MondayTime: mnt,
			TuesdayAvailability: tua,
			TuesdayTime: tut, 
			WednesdayAvailability: wea,
			WednesdayTime: wet,
			ThursdayAvailability: tha, 
			ThursdayTime: tht,
			FridayAvailability: fra,
			FridayTime: frt,
			SaturdayAvailability: saa,
			SaturdayTime: sat,
			SundayAvailability: sua,
			SundayTime: sut
        });	
	}
	static deleteBeautician (b_id, b_name){
		var url = "http://localhost:3000/api/deletebeautician"
		return axios.post(url,{b_name});
		console.log(b_id + " "+ b_name + "has been deleted");
	}
	static editBeautician (b_id, na, mna, mnt, tua, tut, wea, wet, tha, tht, fra, frt, saa, sat, sua, sut){
		var url = "http://localhost:3000/api/deletebeautician"
		console.log(b_name + "will be edited")
		return axios.post(url,{
			_id: b_id,
			Name: na,
			MondayAvailability: mna,
			MondayTime: mnt,
			TuesdayAvailability: tua,
			TuesdayTime: tut, 
			WednesdayAvailability: wea,
			WednesdayTime: wet,
			ThursdayAvailability: tha, 
			ThursdayTime: tht,
			FridayAvailability: fra,
			FridayTime: frt,
			SaturdayAvailability: saa,
			SaturdayTime: sat,
			SundayAvailability: sua,
			SundayTime: sut
			
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
	static editPass(ps_id,ps_pass){
		var url = "http://localhost:3000/api/editpassword"
		return axios.put(url,{
			_id: ps_id,
			Pass: ps_pass,
		});
	}
	*/
	
}

export default Service;
