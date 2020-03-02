<template>        

    <gmap-map
            :center="center"
            :zoom="zoom"
            style="width: 1200px; height: 800px"
    >

            <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
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
                center: {lat: 48.864716, lng: 2.349014},
                zoom:11,
                markers: [
                    {position: {lat:48.864716,lng:2.349014}},
                    {position: {lat:48.764716,lng:2.449014}},
                ]
            }
        }
    }
</script>

<style>

</style>