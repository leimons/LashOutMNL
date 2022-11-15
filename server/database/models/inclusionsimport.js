const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/LashOutMNL")

const Inclusion = require('database/models/Inclusions')

async function run(){
    try{
//create Service
    const Addon1 = await Inclusion.create({
		mainProduct: "",
		Name: "Hair and Shoe Cover"
		Description: "Required for all services",
    	Price: 50
	
    });
    await Addon1.save()
    console.log(Addon1)
	
	//create Service
    const Addon2 = await Inclusion.create({
		mainProduct: "Lash Lift",
		Name: "Tint",
		Description: "Add on for Lash Lift",
    	Price: 50
	
    });
    await Addon2.save()
    console.log(Addon2)
	
	const Addon3 = await Inclusion.create({
		mainProduct: "",
		Name: "Brow Threading",
		Description: "Add on for Lash Services",
    	Price: 100
	
    });
    await Addon3.save()
    console.log(Addon3)
	
	const Addon4 = await Product.create({
		mainProduct: "",
		Name: "Lash Removal",
		Description: "Add on for Lash Services",
    	Price: 300
	
    });
    await Addon4.save()
    console.log(Addon4)
	
	const Addon5 = await Product.create({
		mainProduct: "",
		Name: "Brow Lamination",
		Description: "Add on for Lash Services",
    	Price: 500
	
    });
    await Addon5.save()
    console.log(Addon5)
	
	const Addon6 = await Product.create({
		mainProduct: "",
		Name: "Design: Cat eye",
		Description: "Add on for Lash services",
    	Price: 100
	
    });
    await Addon6.save()
    console.log(Addon6)
	
	const Addon7 = await Product.create({
		mainProduct: "",
		Name: "Design: Doll eye",
		Description: "Add on for Lash services",
    	Price: 100
	
    });
    await Addon7.save()
    console.log(Addon7)
	
	const Addon8 = await Product.create({
		mainProduct: "",
		Name: "Gel Removal",
		Description: "Add on for Nails Services",
    	Price: 100
	
    });
    await Addon8.save()
    console.log(Addon8)
	
	const Addon9 = await Product.create({
		mainProduct: "",
		Name: "Nail Extensions Removal",
		Description: "Add on for Nails Services",
    	Price: 300
	
    });
    await Addon9.save()
    console.log(Addon9)
	
	const Addon10 = await Product.create({
		mainProduct: "",
		Name: "Nail Art",
		Description: "Add on for Nails Services",
    	Price: 200
    });
    await Addon10.save()
    console.log(Addon10)
	
	const Addon11 = await Product.create({
		mainProduct: "",
		Name: "French Tip",
		Description: "Add on for Nails Services",
    	Price: 100
	
    });
    await Addon11.save()
    console.log(Addon11)
	
	} catch (e) {
        console.log(e.message)
    }
}
run()