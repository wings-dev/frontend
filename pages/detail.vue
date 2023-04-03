<template>
  <dynamic-abroad-detail-page :villa="componentData" :calendar="calendar" :price_list_1="price_list_1"></dynamic-abroad-detail-page>
</template>

<script>
import DynamicAbroadDetailPage from "@/components/dynamic-page/abroad-detail.vue";
export default {
  name: 'DetailPage',
  layout: 'no-search',

  head() {
    let site_id = process.env.SITE
    return {
      title: 'Yurtdışı Kiralık Villa Detay',
      meta: [
        { hid: 'description', name: 'description', content: 'anasayfa' },
        { hid: 'keywords', name: 'keywords', content: 'anasayfa1, anasayfa2, anasayfa3' }
      ],

    }
  },
  components: { DynamicAbroadDetailPage },
  data() {
    return {
      calendar: [
        {
          "dates": [
            "2023-07-31"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-08-01"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-02"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-03"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-04"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-05"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-06"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-07"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-08"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-09"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-10"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-11"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-12"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-05-01"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-05-02"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-03"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-04"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-05"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-07-23"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-07-24"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-25"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-26"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-27"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-28"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-29"
          ],
          "status": [
            3
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-08-28"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-08-29"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-30"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-08-31"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-09-01"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-09-02"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-07-10"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-07-11"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-12"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-13"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-14"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-15"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-16"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-07-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-07-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-20"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-21"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-22"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-23"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-24"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-25"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-26"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-27"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-28"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-07-29"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-04"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-09"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-10"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-11"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-12"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-09"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-10"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-11"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-12"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-04"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-04"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-09"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-10"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-11"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-12"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-16"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-17"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-20"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-21"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-22"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-23"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-09"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-10"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-11"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-12"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-16"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-17"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-20"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-21"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-22"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-23"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-16"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-17"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-20"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-21"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-22"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-16"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-17"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-20"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-21"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-22"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-04-13"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-04-14"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-15"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-16"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-17"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-20"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-21"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-04-22"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-05-15"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-05-16"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-17"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-05-17"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-05-18"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-19"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-05-22"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-05-23"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-24"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-05-24"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-05-25"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-26"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-05-27"
          ],
          "status": [
            2
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-06-05"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-06-06"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-06-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        },
        {
          "dates": [
            "2023-06-07"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            0
          ]
        },
        {
          "dates": [
            "2023-06-08"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            1
          ]
        },
        {
          "dates": [
            "2023-06-09"
          ],
          "status": [
            1
          ],
          "dateStatus": [
            2
          ]
        }
      ],
      price_list_1: [
        {
          "dates": "2023-04-14",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-15",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-16",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-17",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-18",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-19",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-20",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-21",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-22",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-23",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-24",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-25",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-26",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-27",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-28",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-29",
          "price": "1200₺"
        },
        {
          "dates": "2023-04-30",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-01",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-02",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-03",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-04",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-05",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-06",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-07",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-08",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-09",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-10",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-11",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-12",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-13",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-14",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-15",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-16",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-17",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-18",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-19",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-20",
          "price": "1200₺"
        },
        {
          "dates": "2023-05-21",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-22",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-23",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-24",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-25",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-26",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-27",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-28",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-29",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-30",
          "price": "1850₺"
        },
        {
          "dates": "2023-05-31",
          "price": "1850₺"
        },
        {
          "dates": "2023-06-01",
          "price": "1850₺"
        },
        {
          "dates": "2023-06-02",
          "price": "1850₺"
        },
        {
          "dates": "2023-06-03",
          "price": "1850₺"
        },
        {
          "dates": "2023-06-04",
          "price": "1850₺"
        },
        {
          "dates": "2023-06-05",
          "price": "1850₺"
        },
        {
          "dates": "2023-06-06",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-07",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-08",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-09",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-10",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-11",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-12",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-13",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-14",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-15",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-16",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-17",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-18",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-19",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-20",
          "price": "2250₺"
        },
        {
          "dates": "2023-06-21",
          "price": "3250₺"
        },
        {
          "dates": "2023-06-22",
          "price": "3250₺"
        },
        {
          "dates": "2023-06-23",
          "price": "3250₺"
        },
        {
          "dates": "2023-06-24",
          "price": "3250₺"
        },
        {
          "dates": "2023-06-25",
          "price": "3250₺"
        },
        {
          "dates": "2023-06-26",
          "price": "3250₺"
        },
        {
          "dates": "2023-06-27",
          "price": "4885₺"
        },
        {
          "dates": "2023-06-28",
          "price": "4885₺"
        },
        {
          "dates": "2023-06-29",
          "price": "4885₺"
        },
        {
          "dates": "2023-06-30",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-01",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-02",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-03",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-04",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-05",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-06",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-07",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-08",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-09",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-10",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-11",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-12",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-13",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-14",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-15",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-16",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-17",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-18",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-19",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-20",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-21",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-22",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-23",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-24",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-25",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-26",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-27",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-28",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-29",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-30",
          "price": "4885₺"
        },
        {
          "dates": "2023-07-31",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-01",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-02",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-03",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-04",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-05",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-06",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-07",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-08",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-09",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-10",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-11",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-12",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-13",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-14",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-15",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-16",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-17",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-18",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-19",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-20",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-21",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-22",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-23",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-24",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-25",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-26",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-27",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-28",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-29",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-30",
          "price": "4885₺"
        },
        {
          "dates": "2023-08-31",
          "price": "4885₺"
        },
        {
          "dates": "2023-09-01",
          "price": "4885₺"
        },
        {
          "dates": "2023-09-02",
          "price": "4885₺"
        },
        {
          "dates": "2023-09-03",
          "price": "4885₺"
        },
        {
          "dates": "2023-09-04",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-05",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-06",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-07",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-08",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-09",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-10",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-11",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-12",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-13",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-14",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-15",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-16",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-17",
          "price": "4314₺"
        },
        {
          "dates": "2023-09-18",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-19",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-20",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-21",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-22",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-23",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-24",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-25",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-26",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-27",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-28",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-29",
          "price": "3742₺"
        },
        {
          "dates": "2023-09-30",
          "price": "3742₺"
        },
        {
          "dates": "2023-10-01",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-02",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-03",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-04",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-05",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-06",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-07",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-08",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-09",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-10",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-11",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-12",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-13",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-14",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-15",
          "price": "2878₺"
        },
        {
          "dates": "2023-10-16",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-17",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-18",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-19",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-20",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-21",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-22",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-23",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-24",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-25",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-26",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-27",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-28",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-29",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-30",
          "price": "2592₺"
        },
        {
          "dates": "2023-10-31",
          "price": "2592₺"
        },
        {
          "dates": "2023-11-01",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-02",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-03",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-04",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-05",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-06",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-07",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-08",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-09",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-10",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-11",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-12",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-13",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-14",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-15",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-16",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-17",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-18",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-19",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-20",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-21",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-22",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-23",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-24",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-25",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-26",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-27",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-28",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-29",
          "price": "2285₺"
        },
        {
          "dates": "2023-11-30",
          "price": "2285₺"
        }
      ],
      componentData: {
        "code": 7435,
        "name": "VİLLA TLOS",
        "bathrooms": 2,
        "bedroom": 2,
        "max_adult": 4,
        "max_baby": 2,
        "checkin": "16:00:00",
        "checkout": "08:00:00",
        "checkin_end": "23:00:00",
        "checkout_end": "10:00:00",
        "floorplan": {
          "pool": [
            {
              "pool": " 52",
              "havuz-en": "4",
              "havuz-boy": "8",
              "havuz-derinlik": "1.50",
              "name": "Yüzme Havuzu"
            }
          ],
          "kat": [
            {
              "id": "14",
              "name": "Zemin Kat",
              "bolum": [
                {
                  "id": "21",
                  "name": "Havuz Alanı",
                  "donanim": [
                    "Jakuzi",
                    "Salıncak"
                  ],
                  "gorsel": [
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/conversions/1-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/1.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_269_151.jpg 269w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/conversions/3-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/3.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_269_151.jpg 269w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/conversions/5-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/5.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_269_151.jpg 269w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/conversions/6-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/6.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_269_151.jpg 269w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/conversions/9-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/9.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_269_151.jpg 269w"
                    }
                  ]
                },
                {
                  "id": "22",
                  "name": "Bahçe Alanı",
                  "donanim": [
                    "Barbekü/Mangal",
                    "Jakuzi",
                    "Salıncak"
                  ],
                  "gorsel": [
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/conversions/6-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/6.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_269_151.jpg 269w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/conversions/7-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/7.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_269_151.jpg 269w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/conversions/10-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/10.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_322_181.jpg 322w"
                    }
                  ]
                },
                {
                  "id": "23",
                  "name": "Salon",
                  "donanim": [
                    "Klima",
                    "TV",
                    "Wi-Fi"
                  ],
                  "gorsel": [
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/conversions/12-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/12.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/conversions/13-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/13.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/conversions/14-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/14.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/conversions/15-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/15.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/conversions/16-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/16.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_385_217.jpg 385w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/conversions/17-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/17.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_322_181.jpg 322w"
                    }
                  ]
                },
                {
                  "id": "24",
                  "name": "Mutfak",
                  "donanim": [
                    "Bulaşık Makinesi",
                    "Buzdolabı",
                    "Fırın",
                    "Su Isıtıcısı",
                    "Çamaşır Makinesi",
                    "Ocak",
                    "Ocak Davlumbazı",
                    "Tost Makinesi",
                    "Çaycı"
                  ],
                  "gorsel": [
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/conversions/18-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/18.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/conversions/19-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/19.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_385_217.jpg 385w"
                    }
                  ]
                },
                {
                  "id": "29",
                  "name": "1.Yatak Odası",
                  "donanim": [
                    "Klima",
                    "TV",
                    "Saç Kurutma Makinesi",
                    "Özel Banyo"
                  ],
                  "gorsel": [
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/conversions/20-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/20.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/conversions/21-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/21.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/conversions/22-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/22.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_385_217.jpg 385w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/conversions/23-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/23.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/conversions/24-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/24.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_322_181.jpg 322w"
                    }
                  ]
                },
                {
                  "id": "30",
                  "name": "2.Yatak Odası",
                  "donanim": [
                    "Klima",
                    "Saç Kurutma Makinesi",
                    "Özel Banyo"
                  ],
                  "gorsel": [
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/conversions/25-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/25.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_322_181.jpg 322w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/conversions/26-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/26.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_385_217.jpg 385w"
                    },
                    {
                      "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/conversions/27-preview.jpg",
                      "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/27.jpg",
                      "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_322_181.jpg 322w"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "amenites": {
          "amenite_100": {
            "tr": "Tesis Tipi",
            "en": "PROPERTY TYPE",
            "list": [
              "Villa"
            ]
          },
          "amenite_200": {
            "tr": "Tesis Kategorileri",
            "en": "PROPERTY CATEGORY",
            "list": [
              "Balayı Villaları",
              "Havuzu Görünmeyen (Muhafazakar)"
            ]
          },
          "amenite_301": {
            "tr": "Genel Kurallar",
            "en": "GENERAL RULES",
            "list": [
              "Evcil Hayvan Kabul Edilmez"
            ]
          },
          "amenite_302": {
            "tr": "Ücrete Dahil Olanlar",
            "en": "INCLUDED PRICE",
            "list": [
              "Wi-Fi",
              "Bahçe Bakımı",
              "Elektrik, Su, Tüpgaz Kullanımı",
              "Havuz Bakımı"
            ]
          },
          "amenite_303": {
            "tr": "Ücrete Dahil Olmayanlar",
            "en": "NOT INCLUDED PRICE"
          },
          "amenite_401": {
            "tr": "Öne Çıkan Özellikler",
            "en": "FEATURED ",
            "list": [
              "Jakuzi",
              "Bahçe Alanı"
            ]
          },
          "amenite_402": {
            "tr": "Isıtma Soğutma",
            "en": "AIR CONDITIONING"
          },
          "amenite_403": {
            "tr": "Mutfak",
            "en": "KITCHEN",
            "list": [
              "Tost Makinesi"
            ]
          },
          "amenite_404": {
            "tr": "Banyo",
            "en": "BATHROOM",
            "list": [
              "Jakuzi"
            ]
          },
          "amenite_405": {
            "tr": "Etkinlikler",
            "en": "ACTIVITIES",
            "list": [
              "Salıncak",
              "Barbekü/Mangal"
            ]
          },
          "amenite_406": {
            "tr": "Çocuklar İçin",
            "en": "FOR CHILD"
          },
          "amenite_407": {
            "tr": "Bebekler İçin",
            "en": "FOR BABY"
          },
          "amenite_408": {
            "tr": "Erişebilirlik",
            "en": "ACCESSIBILITY"
          },
          "amenite_409": {
            "tr": "Havuz",
            "en": "POOL",
            "list": [
              "Özel Havuz"
            ]
          },
          "amenite_410": {
            "tr": "SPA",
            "en": "SPA"
          },
          "amenite_411": {
            "tr": "Genel Özellikler",
            "en": "Security"
          },
          "amenite_412": {
            "tr": "Konum",
            "en": "Location"
          },
          "amenite_501": {
            "tr": "Satışçıya Özel Deniz Manzara",
            "en": "Satışçıya Özel Deniz Manzara"
          },
          "amenite_502": {
            "tr": "Satışçıya Özel Öncelik Sırası",
            "en": "Satışçıya Özel Öncelik Sırası",
            "list": [
              "Düşük"
            ]
          },
          "amenite_503": {
            "tr": "Satışçıya Özel Tekli Yatak",
            "en": "Satışçıya Özel Tekli Yatak",
            "list": [
              "2 Adet Tekli Yatak"
            ]
          },
          "amenite_504": {
            "tr": "Satışçıya Özel Double Yatak",
            "en": "Satışçıya Özel Double Yatak",
            "list": [
              "1 Adet Double Yatak"
            ]
          },
          "amenite_505": {
            "tr": "Satışçıya Özel Jakuzi",
            "en": "Satışçıya Özel Jakuzi",
            "list": [
              "1 Adet Jakuzi"
            ]
          }
        },
        "places": {
          "place_1": {
            "place_type": "Restaurant",
            "place": {
              "name": "Kelebekler Plajı",
              "distance": "30 km"
            }
          },
          "place_2": {
            "place_type": "Sağlık Merkezi",
            "place": {
              "name": "Fethiye Sağlık Ocağı",
              "distance": "34 km"
            }
          },
          "place_3": {
            "place_type": "Eczane",
            "place": {
              "name": "Abalı Eczanesi",
              "distance": "28 km"
            }
          },
          "place_4": {
            "place_type": "Plajlar",
            "place": {
              "name": "Çalış Plajı",
              "distance": "30 km"
            }
          },
          "place_5": {
            "place_type": "Havalimanı",
            "place": {
              "name": "Dalaman Havalimanı",
              "distance": "65 km"
            }
          },
          "place_6": {
            "place_type": "Otogar",
            "place": {
              "name": "Fethiye Otogarı",
              "distance": "27 km"
            }
          },
          "place_7": {
            "place_type": "Taksi Durağı",
            "place": {
              "name": "Fethiye Otogar Taksi",
              "distance": "27 km"
            }
          },
          "place_8": {
            "place_type": "Tarihi Yerler",
            "place": {
              "name": "Dalaman Tren İstasyonu",
              "distance": "66 km"
            }
          },
          "place_9": {
            "place_type": "Müzeler",
            "place": {
              "name": "Fethiye Arkeoloji Müzesi",
              "distance": "29 km"
            }
          },
          "place_10": {
            "place_type": "Yerel Market"
          },
          "place_11": {
            "place_type": "Süper Market",
            "place": {
              "name": "MM Migros",
              "distance": "49 km"
            }
          }
        },
        "location": {
          "longitude": "36.624684",
          "latitude": "29.369013",
          "country": {
            "id": 223,
            "name": "turkey"
          },
          "state": {
            "id": 3723,
            "name": "mugla"
          },
          "city": {
            "id": 40889,
            "name": "fethiye"
          },
          "district": {
            "id": 38,
            "name": "Seydikemer"
          }
        },
        "video": "",
        "images": [
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/conversions/1-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/1.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/8984/responsive-images/1___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/conversions/5-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/5.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9003/responsive-images/5___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/conversions/3-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/3.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9001/responsive-images/3___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/conversions/6-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/6.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9004/responsive-images/6___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/conversions/7-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/7.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9005/responsive-images/7___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/conversions/9-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/9.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9007/responsive-images/9___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/conversions/10-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/10.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9008/responsive-images/10___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/conversions/12-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/12.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9010/responsive-images/12___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/conversions/13-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/13.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9011/responsive-images/13___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/conversions/14-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/14.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9012/responsive-images/14___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/conversions/15-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/15.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9013/responsive-images/15___media_library_original_460_259.jpg 460w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/conversions/16-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/16.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9014/responsive-images/16___media_library_original_460_259.jpg 460w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/conversions/17-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/17.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9015/responsive-images/17___media_library_original_460_259.jpg 460w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/conversions/18-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/18.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9016/responsive-images/18___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/conversions/19-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/19.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9017/responsive-images/19___media_library_original_460_259.jpg 460w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/conversions/20-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/20.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9018/responsive-images/20___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/conversions/21-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/21.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9019/responsive-images/21___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/conversions/22-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/22.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9020/responsive-images/22___media_library_original_460_259.jpg 460w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/conversions/23-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/23.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9021/responsive-images/23___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/conversions/24-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/24.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9022/responsive-images/24___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/conversions/25-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/25.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9023/responsive-images/25___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/conversions/26-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/26.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9024/responsive-images/26___media_library_original_460_259.jpg 460w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/conversions/27-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/27.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9025/responsive-images/27___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/conversions/28-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/28.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/9026/responsive-images/28___media_library_original_269_151.jpg 269w"
          }
        ],
        "watermark_images": [
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/conversions/1-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/1.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278515/responsive-images/1___media_library_original_269_151.jpg 269w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/conversions/3-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/3.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278517/responsive-images/3___media_library_original_269_151.jpg 269w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/conversions/5-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/5.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278519/responsive-images/5___media_library_original_269_151.jpg 269w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/conversions/6-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/6.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278520/responsive-images/6___media_library_original_269_151.jpg 269w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/conversions/7-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/7.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278521/responsive-images/7___media_library_original_269_151.jpg 269w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/conversions/9-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/9.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278523/responsive-images/9___media_library_original_269_151.jpg 269w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/conversions/10-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/10.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278524/responsive-images/10___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/conversions/12-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/12.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278526/responsive-images/12___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/conversions/13-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/13.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278527/responsive-images/13___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/conversions/14-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/14.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278528/responsive-images/14___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/conversions/15-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/15.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278529/responsive-images/15___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/conversions/16-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/16.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278530/responsive-images/16___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/conversions/17-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/17.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278531/responsive-images/17___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/conversions/18-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/18.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278532/responsive-images/18___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/conversions/19-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/19.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278533/responsive-images/19___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/conversions/20-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/20.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278534/responsive-images/20___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/conversions/21-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/21.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278535/responsive-images/21___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/conversions/22-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/22.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278536/responsive-images/22___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/conversions/23-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/23.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278537/responsive-images/23___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/conversions/24-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/24.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278538/responsive-images/24___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/conversions/25-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/25.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278539/responsive-images/25___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/conversions/26-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/26.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1343_755.jpg 1343w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278540/responsive-images/26___media_library_original_385_217.jpg 385w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/conversions/27-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/27.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278541/responsive-images/27___media_library_original_322_181.jpg 322w"
          },
          {
            "preview_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/conversions/28-preview.jpg",
            "original_url": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/28.jpg",
            "responsive": "https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_269_151.jpg 269w, https://d1t2mawg5vwzes.cloudfront.net/property/485/278542/responsive-images/28___media_library_original_225_127.jpg 225w"
          }
        ]
      }
    }
  },



}
</script>
