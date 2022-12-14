<script>
    import AdminLayout from '@/layouts/AdminLayout.vue';
	import adminfunctions from '@/adminfunctions.js';
    export default {
        name: 'AdminDashboard',
            components: {
        AdminLayout
        },
		methods: {
		editpass(){
			var opass = this.password;
			var npass = this.npassword;
			if (npass != ""){
			var answer = adminfunctions.editPass(opass, npass);
			answer.then((response)=>{
					console.log(response);
                })
                .catch(() => {
                })
			}

		}
	}
    }
	
</script>


<template>
    <AdminLayout>
        <div class="container">
            <h1 id="welcome"><u> LashOut.MNL Beauty Lounge </u></h1>

            <!-- PROFILE CARD-->
            <div class="cont-left">
                <div class="profile-card">
                    <img src="@/assets/images/admin.png" alt="Admin" class="pic-frame" width="">
                    <div class="profile-desc">
                        <h2>Admin Name</h2>
                        <h3>Owner</h3>
                    </div>
				</div> 
            </div>

            <!-- PROFILE CHANGES -->
            <div class="cont-right">
                <div class="info-card">
                    <div class="label">
                        <h4>Full Name</h4>
                    </div>
                    <div class="input-box">
                        <input type="text" class="form-control" placeholder="Full Name">
                    </div>

                    <div class="label">
                        <h4>Old Password</h4>
                    </div>
                    <div class="input-box">
                        <input type="text" class="form-control" v-model="password" placeholder="Old Password">
                    </div>

                    <div class="label">
                        <h4>New Password</h4>
                    </div>
                    <div class="input-box">
                        <input type="text" class="form-control" v-model="npassword" placeholder="New Password" >
                    </div>
                    <button @click="editpass()"> Save Changes </button>
                    
				</div> 
            </div>

        </div>
    </AdminLayout>
</template>

<style>
    .container{
        padding: 30px;
        padding-top: 40px;
    }
    #welcome{
        font-style: oblique;
        font-size: 40px;
        font-weight: 200;
    }
    .profile-card{
        position: absolute;
        width: 300px;
        height: 400px;
        left: 286px;
        top: 150px; 
        align-content: center;
    }
    .profile-desc{
        padding-top: 20px;
        width: 300px;
        height: 400px;
        text-align: center;
    }
    .pic-frame{
        border-radius: 50%;
        border: 1px solid black;
        align-content: center;
        width: 200px;
        margin-left: 50px;
    }


    .info-card{
        position: absolute;
        width: 600px;
        height: 412px;
        left: 600px;
        top: 150px;
        padding:  50px;

        background: #F5F2ED;
        box-shadow: 10px 10px 14px rgba(0, 0, 0, 0.25);
        border-radius: 41px;
    }

    .label{
        padding-bottom: 10px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        text-transform: uppercase;
        color: #000000;
    }

    .input-box{
        padding-bottom: 30px;
        width: 400px;
    }

    .form-control{
        width: 500px;
    }

    button{
        position: absolute;
        width: 160px;
        height: 24px;
        margin-left: 170px;
        background: #F5CEC7;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: none;
        font-size: 12px;
        padding: 3px 24px;

    }
    button:hover {
        cursor: pointer;
        background: #f5b3c7;
    }

    
</style>
