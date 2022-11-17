const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1/souldletestdb")

const Product = require('database/models/Products')

async function run(){
    try{
	var date = new Date();
	
    //create Service
    const Service1 = await Product.create({
		Name: "Lash Lift",
        Category: "Lashes",
		Description: "The natural lash is lifted from the roots semi-permanently. Lasts 1 to 3 months.",
    	Duration: "1 Hour",
		Price: 550
    });
    await Service1.save()
    console.log(Service1)

    //create Service
    const Service2 = await Product.create({
		Name: "Classic Full Set",
        Category: "Lashes",
		Description: "Fully covered lash line with 1:1 eyelash extension-to-natural lashes ratio. Lasts 2 to 6 weeks. Follows the natural shape of your eye.",
    	Duration: "2 Hours",
		Price: 800
    });
    await Service2.save()
    console.log(Service2)
	
	//create Service
    const Service3 = await Product.create({
		Name: "Hybrid Lashes",
        Category: "Lashes",
		Description: "A combination of Classic and Volume lashes.",
    	Duration: "2 Hours",
		Price: 1200

    });
    await Service3.save()
    console.log(Service3)
	
	
	const Service4 = await Product.create({
		Name: "Wet Mascara Set",
        Category: "Lashes",
		Description: "The Wet Mascara appears similar to Classic Full Set, but they are thicker and bolder looking because of the wider appearance of the lash bundles. ",
    	Duration: "2 Hours",
		Price: 1300

    });
    await Service4.save()
    console.log(Service4)
	
	const Service5 = await Product.create({
		Name: "Volume Lashes",
        Category: "Lashes",
		Description: "This set has a fully covered lash line with 3:1 or 4:1 eyelash extension-to-natural lashes ratio. Lasts 2 to 6 weeks.",
    	Duration: "2 Hours",
		Price: 1400

    });
    await Service5.save()
    console.log(Service5)
	
	const Service6 = await Product.create({
		Name: "Classic Full Set Retouch",
        Category: "Lashes Retouch",
		Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Classic Full Set (for ex. Hybrid Lashes, Wet Set or Volume Lashes), you will be charged with a new set price.",
    	Duration: "1 Hour",
		Price: 500

    });
    await Service6.save()
    console.log(Service6)
	
	const Service7 = await Product.create({
		Name: "Hybrid Lashes Retouch",
        Category: "Lashes Retouch",
		Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Hybrid Lashes (for ex. Classic Full Set, Wet Set or Volume Lashes), you will be charged with a new set price.",
    	Duration: "1 Hour",
		Price: 600


    });
    await Service7.save()
    console.log(Service7)
	
	const Service8 = await Product.create({
		Name: "Wet Mascara Set Retouch",
        Category: "Lashes Retouch",
		Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Hybrid Lashes (for ex. Classic Full Set, Wet Set or Volume Lashes), you will be charged with a new set price.",
    	Duration: "1 Hour",
		Price: 680


    });
    await Service8.save()
    console.log(Service8)
	
	const Service9 = await Product.create({
		Name: "Volume Lashes Retouch",
        Category: "Lashes Retouch",
		Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Hybrid Lashes (for ex. Classic Full Set, Wet Set or Volume Lashes), you will be charged with a new set price.",
    	Duration: "2 Hours",
		Price: 700


    });
    await Service9.save()
    console.log(Service9)
	
	const Service10 = await Product.create({
		Name: "Microblading",
        Category: "Brows",
		Description: "Microblading is a form of semi-permanent tattoo for eyebrows which uses individually drawn thin and crisp lines that resembles hair strokes to give the illusion of realistic, natural (yet full) looking brows. Although it’s not as deep as a traditional tattoo, it is still classed as a ‘tattoo’ as pigment is implanted under the skin’s surface. Inclusions: 1 Session, 1 Free Retouch (valid until 45th day of initial treatment) Effect: Natural looking hair-like strokes, Light finish to bold brow look Perfect for: Thin to no brows at all, Not to dense but not too sparse brows, Clients who want more natural style, Clients who don’t always wear makeup but want their brows to be always in shape",
    	Duration: "3 Hours",
		Price: 4000


    });
    await Service10.save()
    console.log(Service10)
	
	const Service11 = await Product.create({
		Name: "PhiShading",
        Category: "Brows",
		Description: "PhiShading is a technique that involves a combination of Microblading and brow shading together. This technique creates more denser, fuller looking brows that appear to be powdered, but with hair strokes (Microblading). This treatment is recommended for people with oily skin and is ideal for people who have no natural eyebrows. This technique involves filling in or thickening of areas with a soft or darker color which varies in transparency. Inclusions: 1 Session, 1 Free Retouch (valid until 45th day of initial treatment)Effect: Gradient effect, Well-defined brow Perfect for: Oily skin, All types of brow growth, With old tattoo, Clients who are tired of fillings brows regularly with makeup",
    	Duration: "3 Hours",
		Price: 5000


    });
    await Service11.save()
    console.log(Service11)
	
	const Service12 = await Product.create({
		Name: "Brows Retouch (45 days healed)",
        Category: "Brows Retouch",
		Description: "",
		Duration: "1 Hour",
    	Price: 0

    });
    await Service12.save()
    console.log(Service12)
	
	const Service13 = await Product.create({
		Name: "Brows Retouch (> 45 days healed)",
        Category: "Brows Retouch",
		Description: "1 Hour",
		Duration: "",
    	Price: 1500
    });
    await Service13.save()
    console.log(Service13)
	
	const Service14 = await Product.create({
		Name: "Regular Manicure",
        Category: "Nails",
		Description: "",
		Duration: "30 Minutes",
    	Price: 150

    });
    await Service14.save()
    console.log(Service14)
	
	const Service15 = await Product.create({
		Name: "Regular Pedicure",
        Category: "Nails",
		Description: "30 Minutes",
		Duration: "",
    	Price: 200

    });
    await Service15.save()
    console.log(Service15)
	
	const Service16 = await Product.create({
		Name: "Regular Manicure-Pedicure Set",
        Category: "Nails",
		Description: "1 Hour",
		Duration: "",
    	Price: 300

    });
    await Service16.save()
    console.log(Service16)
	
	const Service17 = await Product.create({
		Name: "Gel Manicure",
        Category: "Nails",
		Description: "",
		Duration: "40 Minutes",
    	Price: 450

    });
    await Service17.save()
    console.log(Service17)
	
	const Service18 = await Product.create({
		Name: "Gel Pedicure",
        Category: "Nails",
		Description: "40 Minutes",
		Duration: "",
    	Price: 500

    });
    await Service18.save()
    console.log(Service18)
	
	const Service19 = await Product.create({
		Name: "Gel Manicure-Pedicure Set",
        Category: "Nails",
		Description: "",
		Duration: "1 Hour and 30 Minutes",
    	Price: 800

    });
    await Service19.save()
    console.log(Service19)
	
	const Service20 = await Product.create({
		Name: "Hard Gel Manicure",
        Category: "Nails",
		Description: "",
		Duration: "2 Hours",
    	Price: 600

    });
    await Service20.save()
    console.log(Service20)
	
	const Service21 = await Product.create({
		Name: "Hard Gel Manicure with Nail Polish",
        Category: "Nails",
		Description: "",
		Duration: "2 Hours",
    	Price: 750

    });
    await Service21.save()
    console.log(Service21)
	
	const Service22 = await Product.create({
		Name: "Nail Extensions (Soft Gel, Polygel, Hardgel)",
        Category: "Nails",
		Description: "",
		Duration: "3 Hours",
    	Price: 1200

    });
    await Service22.save()
    console.log(Service22)
	
	const Service23 = await Product.create({
		Name: "Regular Manicure - Gel Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "1 Hour",
    	Price: 600

    });
    await Service23.save()
    console.log(Service23)
	
	const Service24 = await Product.create({
		Name: "Gel Manicure and Regular Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "1 Hour",
    	Price: 600

    });
    await Service24.save()
    console.log(Service24)
	
	const Service25 = await Product.create({
		Name: "Hard Gel Manicure and Gel Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "1 Hour",
    	Price: 1050

    });
    await Service25.save()
    console.log(Service25)
	
	const Service26 = await Product.create({
		Name: "Hard Gel Manicure with Nail Polish and Regular Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "1 Hour",
    	Price: 900

    });
    await Service26.save()
    console.log(Service26)
	
	const Service27 = await Product.create({
		Name: "Hard Gel Manicure with Nail Polish and Gel Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "1 Hour",
    	Price: 1200

    });
    await Service27.save()
    console.log(Service27)
	
	const Service28 = await Product.create({
		Name: "Polygel Nail Extensions and Gel Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "3 Hours",
    	Price: 1500

    });
    await Service28.save()
    console.log(Service28)
	
	//create Service
    const Service29 = await Product.create({
		Name: "Polygel Nail Extensions and Regular Pedicure",
        Category: "Nails",
		Description: "",
		Duration: "3 Hours",
    	Price: 1350

    });
    await Service29.save()
    console.log(Service29)
	
    } catch (e) {
        console.log(e.message)
    }
}
run()
	
