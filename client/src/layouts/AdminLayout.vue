<script>
    export default {
        name: 'AdminLayout'
    }
</script>

<template>
    <nav>
        <img src="@/assets/images/logo.png" height="50" />

        <a>Appointments</a>     <!-- TODO: Add link to appointments page -->
        <a href="/admin/services">Services</a>
        <a>Calendar</a>         <!-- TODO: Add link to bookings page -->
        <a>Promos</a>           <!-- TODO: Add link to promos page -->

        <button class="small bg-primary200">Log out</button>
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
            margin-bottom: 40px;
        }

        nav > a {
            padding: 12px 5px;
            cursor: pointer;
        }

        nav > button {
            margin-top: auto;
            opacity: 0.8;
        }

    #admin-content {
        width: calc(100% - 200px);

        overflow: scroll;
        margin-left: 200px;
    }
</style>