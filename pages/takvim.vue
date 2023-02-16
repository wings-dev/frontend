<template>

    <main class="main">
        <div class="w-50 m-4">
            <client-only>
                <v-calendar class="custom-calendar" :masks="masks" :attributes="attributes" :columns="2"
                    :disabled-dates="disabledDates" disable-page-swipe @update:to-page="update($event)">
                    <template v-slot:day-content="{ day, attributes }">
                        <div v-for="attr in attributes" :key="attr.key"
                            class="d-flex flex-column kapali-gun align-items-center justify-content-center h-100 z-10 overflow-hidden"
                            :class="{ giris: attr.customData.start, cikis: attr.customData.end, opsiyon: attr.customData.opsiyon }">
                            <span class="day-label text-sm fw-bold text-gray-900">{{ day.day }}</span>
                            <div class="flex-grow overflow-y-auto overflow-x-auto">
                                <p class="calendar-price" style="" :class="attr.customData.class">
                                    {{ attr.customData.title }}
                                </p>
                            </div>
                            <!-- A6AFC2 -->
                            <!-- 989FB5 -->
                        </div>
                    </template>
                </v-calendar>

                <v-date-picker v-model='date' :disabled-dates='disabledDates' is-range />
            </client-only>
            <!-- <template v-slot:day-content="{ day, attributes }">
                        <div v-for="attr in attributes" :key="attr.key"
                            class="d-flex flex-column align-items-center justify-content-center h-100 z-10 overflow-hidden"
                            :class="attr.customData.class">
                            <span class="day-label text-sm fw-bold text-gray-900">{{ day.day }}</span>
                            <div class="flex-grow overflow-y-auto overflow-x-auto">

                                <p class="calendar-price" style="" :class="attr.customData.class">
                                    {{ attr.customData.title }}
                                    {{ attr.customData.start }}
                                </p>
                            </div>
                           
                        </div>
                    </template> -->

            <!-- A6AFC2 -->
            <!-- 989FB5 -->
            <p>{{ new Date() }}</p>

        </div>
    </main>

</template>

<script>
export default {
    name: 'DetailPage',
    layout: 'no-search',
    data() {
        return {
            test: '',
            date: null,
            after_date: null,
            selectedDate: {
                start: null,
                end: new Date(2023, 1, 20)
            },
            disabledDates: [
                // { start: null, end: new Date() },
                { start: new Date(2023, 1, 18), end: new Date(2023, 1, 24) },
            ],
            masks: {
                weekdays: 'WWW',
            },
            attributes: [
                {
                    key: 1,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: true,
                        end: false,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 16),
                },
                {
                    key: 2,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 17),
                },
                {
                    key: 3,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 18),
                },
                {
                    key: 4,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: true,
                        opsiyon: false
                    },
                    dates: new Date(2023, 1, 19),
                },
                {
                    key: 7,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: true,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 6),
                },
                {
                    key: 8,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 7),
                },
                {
                    key: 9,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 8),
                },
                {
                    key: 10,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 9),
                },
                {
                    key: 11,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 10),
                },
                {
                    key: 12,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: false,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 11),
                },
                {
                    key: 13,
                    customData: {
                        title: '1800₺',
                        desc: 'test',
                        start: false,
                        end: true,
                        opsiyon: true
                    },
                    dates: new Date(2023, 2, 12),
                },

            ],

        }
    },
    methods: {
        update(day) {
            console.log('day', day)
            console.log(this.test)
        }
    }


}
</script>

<style>
.vc-container {
    --gray-500: #A6AFC2 !important;
    --gray-900: var(--bs-theme-first-dark) !important;
}

.vc-day {
    min-width: 48px !important;
    min-height: 48px !important;
}

.vc-pane-layout {
    gap: 20px;
}

.vc-weekday {
    margin-bottom: 15px !important;
}

.kapali-gun {
    background-color: #F2F5FB;
    position: relative;
}

.kapali-gun.opsiyon {
    background-color: #FFF8E7;
    position: relative;
}

.kapali-gun.giris {
    background-color: transparent;
    z-index: 1;
}

.kapali-gun.giris:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(225deg, #f3f3ff 49%, transparent 50%);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.kapali-gun.opsiyon.giris:before {
    background-image: linear-gradient(225deg, #FFF8E7 49%, transparent 50%);
}

.kapali-gun.cikis {
    background-color: transparent;
    z-index: 1;
}

.kapali-gun.cikis:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #f3f3ff 49%, transparent 50%);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
}

.kapali-gun.opsiyon.cikis:before {
    background-image: linear-gradient(45deg, #FFF8E7 49%, transparent 50%);
}

.calendar-price {
    font-weight: 400;
    font-size: 11px;
    color: #989FB5;
    margin-bottom: 0;
}
</style>

