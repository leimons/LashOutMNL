<script>
    export default {
        name: 'AdminLayout'
    }
</script>

<template>
    <nav>

        <!----===== Iconscout CSS ===== -->
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

        <img src="@/assets/images/logo.png" height="50" />

        <a href="/admin/home" > <i class="uil uil-apps"> </i> 
            Appointments 
        </a>     

        <a href="/admin/services"> <i class="uil uil-server-alt"></i>
            Services
        </a>

        <!-- TODO: Add link to bookings page -->
        <a href="/admin/calendar"> <i class="uil uil-schedule"></i>
            Calendar
        </a>
        
        
        <div class="settings-mode"> 
            <!-- TODO: Add link to account settings page -->
            <li> <a href="#">
                <i class="uil uil-user"></i>
                Account
            </a> </li>
            
            <li><a></a></li>


            <!-- TODO: Test if Log out works-->
             <a href="#"> <li>
                <i class="uil uil-signout"></i>
                Logout
            </li> </a> 
        </div>
    </nav>

    <div id="admin-content">
        <slot></slot>
    </div>
</template>

<style>
    nav {
        position: fixed;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 10px;

        width: 200px;
        height: calc(100vh);
        font-family: 'Nunito';

        background-color: var(--primary100);
        border-left: 1pt solid black;
        border-right: 1pt solid black;
        z-index: 0;
    }

        nav > img {
            margin-top: 20px;
            margin-bottom: 40px;
        }

        nav > a {
            padding: 12px 5px;
            cursor: pointer;
            font-weight: bold;
        }

        nav > button {
            margin-top: auto;
            opacity: 0.8;
        }
    
        .settings-mode{
            list-style: none;
            position: relative;
            margin-top: 360px;
            padding: 5px;
            padding-top: 10px;
            font-weight: bold;
        }
        
        .settings-mode li {
            margin-bottom: 15px;
        }

    #admin-content {
        width: calc(100% - 200px);

        margin-left: 200px;
    }
</style>