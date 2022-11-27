<script>
    export default {
        name: 'AdminLayout'
    }
</script>

<template>
    <div style="display: flex;">
        <nav>
            <img src="@/assets/images/logo.png" height="50" />

            <a>Appointments</a>
            <a>Services</a>
            <a>Calendar</a>
            <a>Promos</a>

            <button class="small bg-primary200">Log out</button>
        </nav>

        <div style="overflow: scroll;">
            <slot></slot>
        </div>
    </div>

</template>

<style>
    body {
        overflow: hidden;
    }
    
    nav {
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
</style>