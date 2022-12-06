<script>
    import AppointmentCard from '@/components/Admin/AppointmentCard.vue';
    import AdminLayout from '@/layouts/AdminLayout.vue';

    export default {
        name: 'AdminDashboard',
            components: {
        AdminLayout,
        AppointmentCard
        }
    }
</script>

<template>
    <AdminLayout>
        <div class="container">
            <h1 id="welcome">Welcome, <u> Name </u></h1>
            
            <div class="body">

                <div class="header">
                    <h3>Current Appointments</h3>

                    <div class="filter-options">
                        <button> <i class="uil uil-filter"></i> Day</button>
                        <button> <i class="uil uil-filter"></i> Service</button>
                        <button> <i class="uil uil-filter"></i> Beautician</button>
                    </div>
                </div>

                <div class="label-header">
                        <h4> BookingID </h4>
                        <h4> Name </h4>
                        <h4> Phone Number </h4>
                        <h4> Time </h4>
                        <h4> Date </h4>
                        <h4> Service </h4>
                        <h4> Status </h4>
                </div>

                <!-- TO DO: add appointments card -->
                <div class="appointments">
                    <AppointmentCard    />
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
        font-style: italic;
        font-size: 40px;
    }
    .header{
        margin-top: 40px;
        display: grid;
        grid-template-columns: auto 550px;
        font-size: 20px;
        
    }
    .label-header{
        margin-left: 10px;
        margin-top: 30px;
        margin-bottom: 30px;
        display: grid;
        width: full;
        height: 10px;
        grid-template-columns: auto auto auto auto auto auto auto;
        align-items: center;
    }
    button{
        margin-left: 60px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: none;
        font-size: 12px;
        padding: 3px 24px;
    }
    button:hover {
        cursor: pointer;
        background: #e9d9bd;
    }
    .text{
        font-size: 20px;
        font-weight: 500;
    }
    .fields{
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto;
    }
    .appointments{
        margin-top:30px;
        display: flex;
        flex-direction: column;
    }
</style>