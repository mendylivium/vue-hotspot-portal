<script setup>
import { useRoute } from 'vue-router';
import '../../assets/tplink/portal1/css/background.css'
import '../../assets/tplink/portal1/css/mikhmon-ui-light.css'

const route = useRoute();
const ratesRaw = route.params.rates.split(',');
const rates = [];

ratesRaw.forEach(rate => {
    rates.push({
        price: rate.split('-')[0],
        time: rate.split('-')[1]
    });
});

</script>

<template>
    <main class="container">
        <div class="row">
            <div class="col-8 mr-a" id="main" style="float:none;">
                <div class="row">
                    <div class="col-6 col-md-12">
                        <div class="card box-shadow">
                            <div class="card-header bg-primary">
                                <marquee width="100%" direction="left" height="30%">
                                    <h3 id="pisowifi_name">{{ $route.params.title }}</h3>
                                </marquee>
                            </div>
                            <div class="card-body">
                                <p>Enter Voucher Code Here</p>
                                <form :action="$route.query.target ?? '/'">
                                    <input class="form-control-md mr-t-10 plch-center" id="vouchie" name="username"
                                        type="text" placeholder="Voucher" />
                                    <div style="display:none"><input type="text" id="cid" name="clientMac" />
                                        <input type="password" name="password" />
                                    </div>

                                    <button type="submit" class="w-12 btn-md bg-success pd-5">Connect</button>
                                </form>
                            </div>
                        </div>

                        <div class="card box-shadow">
                            <div class="card-header bg-warning">
                                <h3>PISO WIFI RATES</h3>
                            </div>
                            <div id="rates_piso">
                                <table id="customers" align="center" border="1">
                                    <tr>
                                        <th>
                                            <h3>PRICE</h3>
                                        </th>
                                        <th>
                                            <h3>TIME</h3>
                                        </th>
                                    </tr>
                                    <tr v-for="rates in rate">
                                        <td>
                                            ₱ {{ rate.price }}
                                        </td>
                                        <td>
                                            {{ rate.time }}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
#customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#customers tr:hover {
    background-color: #ddd;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #ffffff;
    color: black;
}

* {
    box-sizing: border-box;
}

body {
    font-family: Verdana, sans-serif;
}

.mySlides {
    display: none;
}

img {
    vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
    max-width: 1000px;
    position: relative;
    margin: auto;
}

/* Caption text */
.text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

/* The dots/bullets/indicators */


.active {
    background-color: #717171;
}

/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 4.5s;
    animation-name: fade;
    animation-duration: 4.5s;
}

@-webkit-keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
    .text {
        font-size: 11px
    }
}
</style>