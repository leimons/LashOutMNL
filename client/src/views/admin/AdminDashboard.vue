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
            <h1 id="welcome">Welcome, Name</h1>
            
            <div class="body">
                <div class="header">
                    <h3>Current Appointments</h3>
                    <div class="filter-options">
                        <button>Day</button>
                        <button>Service</button>
                        <button>Beautician</button>
                    </div>
                </div>

                <div class="appointments">
                    <AppointmentCard
                    />

                    <AppointmentCard
                    />
                </div>
                
            </div>
        </div>
    </AdminLayout>
</template>

<style>
    .container{
        padding: 30px;
        padding-top: 80px;
    }
    #welcome{
        font-style: italic;
    }
    .header{
        margin-top: 40px;
        display: grid;
        grid-template-columns: auto 550px;
    }
    button{
        margin-left: 20px;
    }
    .text{
        font-size: 20px;
        font-weight: 500;
    }
    .fields{
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
    }
    .appointments{
        margin-top:30px;
        display: flex;
        flex-direction: column;
    }
</style>