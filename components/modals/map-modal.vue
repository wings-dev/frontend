<template>
    <b-modal id="locationMapModal" class="Login" size="xl" :hide-header="true" hide-footer @shown="onModalShown" @hidden="onModalHidden" modal-class="LocationMap-modal">
        <div class="LocationMap">
            <div class="LocationMap-head">
                <div class="LocationMap-head-title">
                    <h3>{{villaprefix ? villaprefix : '' }}{{ villacode }}</h3>
                    <p>{{ villalocationdistrict | titlecase }} / {{villalocationcity | titlecase}}</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="$bvModal.hide('locationMapModal')"><i class="icon-search-close"></i></button>
            </div>
            <div id="map-wrap">
                <div id="map" style="height: 100%; width: 100%;  border-radius: 11px;"></div>
            </div>
        </div>
    </b-modal>
</template>

<script>


export default {
    name: "LocationMapModal",
    props: ['villacode','villalocationcity','villalocationdistrict','villaprefix','latitude','longitude'],
    data() {
        return {
            map: null,
            mapCenter: [this.latitude,this.longitude],
            customIcon: null
        }
    },
    methods: {
        onModalShown() {
            this.$nextTick(() => {
                this.initMap();
            });
        },
        onModalHidden() {
            this.destroyMap();
        },
        initMap() {
            if (!this.map) {
                this.map = L.map("map", {
                    center: this.mapCenter,
                    zoom: 13,
                    maxZoom: 16
                });
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);

                L.marker(this.mapCenter, { icon: this.customIcon }).addTo(this.map);
            } else {
                this.map.invalidateSize();
            }
        },
        destroyMap() {
            if (this.map) {
                this.map.remove();
                this.map = null;
            }
        }
    },
    mounted() {
        this.customIcon = L.icon({
            iconUrl: `/img/site${process.env.SITE}/map-center.svg`,
            iconSize: [112, 112],
            iconAnchor: [56, 56]
        });
    }
}
</script>
