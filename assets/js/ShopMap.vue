<template>        

    <gmap-map
            :center="center"
            :zoom="zoom"
            style="width: 100%; height: 100%"
    >

            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    icon="/star-red.png"
                    :draggable="true"
                    @click="toggleInfoWindow(m,index)"
            ></gmap-marker>

<!--        <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">-->
<!--            <info-content :content="infoContent"></info-content>-->

<!--        </gmap-info-window>-->

    </gmap-map>
</template>

<script>
    export default {
        data () {
            return {
                center: {lat: 10.0, lng: 10.0},
                zoom:5,
                markers: [
                    {position: {lat:10.0,lng:10.0}},
                    {position: {lat:11.0,lng:11.0}},
                ]
            }
        }
    }
</script>

<style>

</style>