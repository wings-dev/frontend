<template>
  <section class="Filter">
    <div class="container">
      <div class="Filter-in">
        <div class="Filter-left Filters">
          <div class="Filter-left-head">
            <h4>Gelişmiş Arama</h4>
            <button type="button" class="Search-clear" onclick="filterClear()">Temizle</button>
            <button type="button" class="Search-filter-close" id="mobileFilterClose"><i
              class="icon-search-close"></i></button>
          </div>
          <div class="Filters-search mobile">
            <label for="">
              <i class="icon-search-new"></i>
              <input type="search" placeholder="Özellik arayın" onkeyup="destinationsFilter(this)">
            </label>
          </div>
          <div class="Filter-left-in">
            <div class="Filters-item Filters-item-notfound">
              <p class="Filters-item-notfound-text"><i class="icon-filter"></i>Sonuç bulunamadı</p>
            </div>

            <filter-item-checkbox-component title="BÖLGE" filterInputPlaceholder="Bölge Arayın" :checkboxes="destinations" :hideTitleBorder="true" @values="selectedValues.destinations = $event"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="TESİS TİPİ" :checkboxes="amenites.facilityTypes" @values="selectedValues.amenites.facilityTypes = $event"></filter-item-checkbox-component>

            <filter-price-between-component></filter-price-between-component>

            <filter-item-checkbox-component title="TESİS KONSEPTİ" :checkboxes="amenites.facilityConcepts" @values="selectedValues.amenites.facilityConcepts = $event"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="ÖNE ÇIKAN ÖZELLİKLER" :checkboxes="amenites.highlights" @values="selectedValues.amenites.highlights = $event"></filter-item-checkbox-component>

            <filter-item-checkbox-component title="OLANAKLAR" :checkboxes="amenites.facilities" @values="selectedValues.amenites.facilities = $event"></filter-item-checkbox-component>

          </div>

          <div class="Filters-button" type="button" onclick="RunFilter(this)">Filtele</div>
        </div>
        <div class="Filter-right">
          <div class="Filter-right-head">
            <div class="Filter-right-head-info">
              <i class="icon-list"></i>
              <p>450 villa listeleniyor</p>
            </div>
            <div class="Filter-right-head-buttons">

              <div class="Filter-right-head-buttons-item">
                <span class="Filter-right-head-buttons-item-title">Sırala:</span>
                <select class="selectpicker " id="v_filter">
                  <option value="0" selected="selected"> Fiyata Göre Artan</option>
                  <option value="1">Z-A</option>
                  <option value="2">A-z</option>
                </select>
              </div>
            </div>
          </div>

          <div class="Filter-right-selected" style="">
            <div class="Filter-right-selected-in">
              <a href="#" class="Filter-right-selected-item" id="it-1"
                 onclick="event.preventDefault(), Filters_ById('.RegionID_1'), $(this).remove()">Bölge:Antalya<i
                class="icon-search-close"></i></a>
              <a href="#" class="Filter-right-selected-item" id="it-3"
                 onclick="event.preventDefault(), Filters_ById('.RegionID_3'), $(this).remove()">Bölge:Kalkan<i
                class="icon-search-close"></i></a>
              <button type="button" id="Fetures_clear"
                      onclick="Filters_Clear(),$('.Filter-right-selected .Filter-right-selected-item').remove(),$(this).hide()">
                Temizle
              </button>
            </div>
          </div>



          <div class="F_villa ">

            <div class="F_villa-item">
              <div class="F_villa-item-img ">
                <div class="swiper-container villa-list-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                           data-src="/cdn/filterimg/villa-list.jpg"
                           data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                    </div>
                    <div class="swiper-slide">
                      <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                           data-src="/cdn/filterimg/villa-list.jpg"
                           data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                    </div>
                    <div class="swiper-slide">
                      <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                           data-src="/cdn/filterimg/villa-list.jpg"
                           data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                    </div>
                    <div class="swiper-slide">
                      <img class="lazyload" src="/cdn/filterimg/villa-list.jpg"
                           data-src="/cdn/filterimg/villa-list.jpg"
                           data-srcset="https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1920_1080.jpg 1920w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1606_903.jpg 1606w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1344_756.jpg 1344w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_1124_632.jpg 1124w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_940_529.jpg 940w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_787_443.jpg 787w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_658_370.jpg 658w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_550_309.jpg 550w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_460_259.jpg 460w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_385_217.jpg 385w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_322_181.jpg 322w, https://d1t2mawg5vwzes.cloudfront.net/website/20/property/8/131200/responsive-images/13___media_library_original_269_151.jpg 269w, data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHg9IjAiCiB5PSIwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIj4KCTxpbWFnZSB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBWUFCZ0FBRC8vZ0E3UTFKRlFWUlBVam9nWjJRdGFuQmxaeUIyTVM0d0lDaDFjMmx1WnlCSlNrY2dTbEJGUnlCMk9EQXBMQ0J4ZFdGc2FYUjVJRDBnT1RBSy85c0FRd0FEQWdJREFnSURBd01EQkFNREJBVUlCUVVFQkFVS0J3Y0dDQXdLREF3TENnc0xEUTRTRUEwT0VRNExDeEFXRUJFVEZCVVZGUXdQRnhnV0ZCZ1NGQlVVLzlzQVF3RURCQVFGQkFVSkJRVUpGQTBMRFJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVVGQlFVRkJRVUZCUVUvOEFBRVFnQUVnQWdBd0VSQUFJUkFRTVJBZi9FQUI4QUFBRUZBUUVCQVFFQkFBQUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVRQUFJQkF3TUNCQU1GQlFRRUFBQUJmUUVDQXdBRUVRVVNJVEZCQmhOUllRY2ljUlF5Z1pHaENDTkNzY0VWVXRId0pETmljb0lKQ2hZWEdCa2FKU1luS0NrcU5EVTJOemc1T2tORVJVWkhTRWxLVTFSVlZsZFlXVnBqWkdWbVoyaHBhbk4wZFhaM2VIbDZnNFNGaG9lSWlZcVNrNVNWbHBlWW1acWlvNlNscHFlb3FhcXlzN1MxdHJlNHVickN3OFRGeHNmSXljclMwOVRWMXRmWTJkcmg0dVBrNWVibjZPbnE4Zkx6OVBYMjkvajUrdi9FQUI4QkFBTUJBUUVCQVFFQkFRRUFBQUFBQUFBQkFnTUVCUVlIQ0FrS0MvL0VBTFVSQUFJQkFnUUVBd1FIQlFRRUFBRUNkd0FCQWdNUkJBVWhNUVlTUVZFSFlYRVRJaktCQ0JSQ2thR3h3UWtqTTFMd0ZXSnkwUW9XSkRUaEpmRVhHQmthSmljb0tTbzFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb0tEaElXR2g0aUppcEtUbEpXV2w1aVptcUtqcEtXbXA2aXBxckt6dExXMnQ3aTV1c0xEeE1YR3g4akp5dExUMU5YVzE5aloydUxqNU9YbTUranA2dkx6OVBYMjkvajUrdi9hQUF3REFRQUNFUU1SQUQ4QThDMFRVcks4dkd1THRmTVBwWHhXRncwdlk4dE0rNXhPSVh0ZWFScEcyMC9VcmxsdFI1Yk4ycm5kR2NaV21LZGVQTGVKUTFEdzFMSEcwU25PRG1wcEtTbTdFemNYQk5pV1dsWE56YXNFTzBKNjEzVW9WTE13bEtuY3cvRG1sTjV5K2N4aml6eTFkT0RtK1gzU01WRmMvdkhvR2hhSkFzMHIyYi9hR0FyU1VidThqbWJ2cEUyVTBXNG5pRWtzUlFzY2MxRUtjSU55UXBWSlNTaWRycFhnS3duMDVDNDJPdzV4VDlwYllwUjZuaTZxQjRkWTRHZlhGWllIWTJ4dTUwUHdlK1pyalBQUGV1dkVibkxSUFZkWVVDMWd3QVB3cm1OR2F1bmY2dUQ2Vms5aWovL1oiPgoJPC9pbWFnZT4KPC9zdmc+ 32w"/>
                    </div>
                  </div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                </div>
              </div>
              <div class="F_villa-item-right">
                <div class="F_villa-item-head">
                  <div class="F_villa-item-head-name">
                    <span>Tesis Kodu</span>
                    <a href="">VKV1020</a>
                    <div class="F_villa-item-head-name-star">
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star active"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <p>4.9</p>
                    </div>
                  </div>
                  <div class="F_villa-item-head-location">
                    <i class="icon-name-location"></i>
                    <div class="F_villa-item-head-location-text">
                      <p>KALKAN
                        <span>Turkey / Antalya</span>
                      </p>
                    </div>
                  </div>
                  <div class="F_villa-item-head-price F_villa-item-head-price-promotion">
                    <div class="F_villa-item-head-price-in">
                      <b>9.220₺</b>
                      <p>‘den başlayan fiyatlar</p>
                    </div>

                    <span>GECELİK</span>
                  </div>
                </div>
                <div class="F_villa-item-info">
                  <div class="F_villa-item-info-item">
                    <i class="icon-user-new"></i>
                    <span>4 Kişilik</span>
                  </div>
                  <div class="F_villa-item-info-item">
                    <i class="icon-bed-new"></i>
                    <span>2 Yatak Odası</span>
                  </div>
                  <div class="F_villa-item-info-item">
                    <i class="icon-shower-new"></i>
                    <span>2 Banyo</span>
                  </div>
                </div>
                <div class="F_villa-item-bottom">
                  <div class="F_villa-item-features">
                    <h6>Öne çıkan özellikleri</h6>
                    <div class="F_villa-item-features-in">
                      <p class="F_villa-item-features-item">Jakuzi</p>
                      <p class="F_villa-item-features-item">Deniz Manzaralı</p>
                      <p class="F_villa-item-features-item">Merkeze Yakın</p>
                      <p class="F_villa-item-features-item">Denize Yakın</p>
                      <p class="F_villa-item-features-item">Kapalı Otopark</p>
                      <p class="F_villa-item-features-item F_villa-item-features-more"><a href=""
                                                                                          class="">Tümünü
                        Gör</a></p>
                    </div>

                  </div>
                  <a href="" class="F_villa-item-show">Villayı İncele</a>
                </div>
              </div>
            </div>

            <div class="holiday-banner bg-light text-white position-relative rounded-lg overflow-hidden d-flex py-3 py-sm-4 ps-3 ps-sm-4 ps-xl-5 pe-3 pe-sm-4 my-4">
              <img src="/cdn/img/spacer.gif" data-src="/cdn/uploads/holiday-banner.jpg" alt=""
                   class="banner-image lazy cover flex-shrink-0 position-absolute top-0 start-0 w-100 h-100">
              <div class="d-flex flex-column position-relative ls-05 pt-3">
                <span class="fs-6 fw-medium lh-1">+1259 Seçenek ile</span>
                <span class="fs-6 fw-medium lh-1">Konaklamanın en keyifli halleri</span>
                <strong class="big-title fs-1 fw-bold lh-sm d-block mt-n1">OtelBnb’de</strong>
              </div>
              <svg class="align-self-end ms-auto" width="33px" height="36px" viewBox="0 0 14 15"
                   version="1.1" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="VillaListeleme" transform="translate(-626.000000, -202.000000)"
                     fill="#ffffff">
                    <g id="Group" transform="translate(626.000000, 202.000000)">
                      <path d="M14,13.3334991 C14,14.2539193 13.2166932,15 12.25,15 C11.2836548,15 10.5,14.2539193 10.5,13.3334991 C10.5,12.4130788 11.2836548,11.6666667 12.25,11.6666667 C13.2166932,11.6666667 14,12.4130788 14,13.3334991"
                            id="Fill-13"></path>
                      <path d="M6.12867316,9.20434506 C4.17402549,9.20434506 2.58538231,7.69131915 2.58538231,5.8369566 C2.58538231,3.97534751 4.17402549,2.46257148 6.12867316,2.46257148 C8.07544978,2.46257148 9.66435532,3.97534751 9.66435532,5.8369566 C9.66435532,7.69131915 8.07544978,9.20434506 6.12867316,9.20434506 M6.12867316,0 C2.74122939,0 0,2.61050069 0,5.8369566 C0,9.0559161 2.74122939,11.6666667 6.12867316,11.6666667 C9.50850825,11.6666667 12.25,9.0559161 12.25,5.8369566 C12.25,2.61050069 9.50850825,0 6.12867316,0"
                            id="Fill-15"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

          </div>

          <nav aria-label="..." class="my-3">
            <ul class="pagination d-flex flex-wrap justify-content-center align-items-center">
              <li class="page-item me-2 me-sm-3 mb-1">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-860.000000, -2875.000000)"
                         fill="#AFAFB6" fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="right-arrow-(3)-copy"
                             transform="translate(26.954957, 19.166042) scale(-1, 1) translate(-26.954957, -19.166042) translate(23.919953, 14.000000)">
                            <path d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                  id="Path"></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">1</a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary active">2</a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">3</a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1">
                <svg width="23px" height="5px" viewBox="0 0 23 5" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="VillaListeleme" transform="translate(-1109.000000, -2877.000000)"
                       fill="#AFAFB6">
                      <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                        <g id="Group-16" transform="translate(272.000000, 16.000000)">
                          <circle id="Oval" cx="2.5" cy="2.5" r="2.5"></circle>
                          <circle id="Oval-Copy" cx="11.5" cy="2.5" r="2.5"></circle>
                          <circle id="Oval-Copy-2" cx="20.5" cy="2.5" r="2.5"></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">14</a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1" aria-current="page">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">15</a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary">16</a>
              </li>
              <li class="page-item me-2 me-sm-3 mb-1">
                <a href="#!"
                   class="page-link rounded-sm d-flex align-items-center justify-content-center text-center border border-theme-light-2 text-secondary bg-theme-light-2">
                  <svg width="7px" height="11px" viewBox="0 0 7 11" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Anasayfa" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="VillaListeleme" transform="translate(-1374.000000, -2875.000000)"
                         fill="#AFAFB6" fill-rule="nonzero">
                        <g id="Group-27" transform="translate(837.000000, 2861.000000)">
                          <g id="Group-19" transform="translate(514.000000, 0.000000)">
                            <g id="right-arrow-(3)"
                               transform="translate(23.010038, 14.000000)">
                              <path d="M5.9052,4.762884 L1.307292,0.16506 C1.200948,0.058632 1.058988,0 0.90762,0 C0.756252,0 0.614292,0.058632 0.507948,0.16506 L0.169344,0.50358 C-0.050988,0.724164 -0.050988,1.082676 0.169344,1.302924 L4.03032,5.1639 L0.16506,9.02916 C0.058716,9.135588 0,9.277464 0,9.428748 C0,9.5802 0.058716,9.722076 0.16506,9.828588 L0.503664,10.167024 C0.610092,10.273452 0.751968,10.332084 0.903336,10.332084 C1.054704,10.332084 1.196664,10.273452 1.303008,10.167024 L5.9052,5.565 C6.011796,5.458236 6.070344,5.315688 6.07000944,5.164152 C6.070344,5.012028 6.011796,4.869564 5.9052,4.762884 Z"
                                    id="Path"></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FilterVillaComponent",
  data() {
    return {
      selectedValues: {
        destinations: [],
        amenites: {
          facilityTypes: [],
          facilityConcepts: [],
          highlights: [],
          facilities: [],
        },
        min_price: null,
        max_price: null
      },
      destinations: [
        {
          text: "Antalya",
          code: "antalya",
          selected: false,
          children: [
            {
              text: "Kaş",
              code: "kas",
              selected: false,
              children: [
                {
                  text: "Kalkan",
                  code: "kalkan",
                  selected: false,
                }
              ]
            }
          ]
        },
        {
          text: "Çavdır",
          code: "cavdir",
          selected: false,
          children: [
            {
              text: "Fethiye",
              code: "fethiye",
              selected: false,
            },
            {
              text: "Marmaris",
              code: "marmaris",
              selected: false,
            }
          ]
        }
      ],
      amenites: {
        facilityTypes: [
          {
            text: "Villa",
            code: "villa",
            selected: false,
          },
          {
            text: "Ev",
            code: "ev",
            selected: false,
          },
          {
            text: "Suite",
            code: "suite",
            selected: false,
          },
          {
            text: "Dubleks",
            code: "dubleks",
            selected: false,
          },
          {
            text: "Bungalov",
            code: "bungalov",
            selected: false,
          },
        ],
        facilityConcepts: [
          {
            text: "Deniz manzaralı villa ve evler",
            code: "Deniz manzaralı villa ve evler",
            selected: false,
          },
          {
            text: "Merkezi konumdaki evler",
            code: "Merkezi konumdaki evler",
            selected: false,
          },
          {
            text: "Lüks tatil villaları",
            code: "Lüks tatil villaları",
            selected: false,
          },
          {
            text: "Lüks tatil villaları",
            code: "Lüks tatil villaları",
            selected: false,
          },
          {
            text: "Muhafazakar villa",
            code: "Muhafazakar villa",
            selected: false,
          },
        ],
        highlights: [
          {
            text: "Özel Havuz",
            code: "Şezlong",
            selected: false,
          },
          {
            text: "Şezlong",
            code: "Şezlong",
            selected: false,
          },
          {
            text: "Ortak Havuz",
            code: "Ortak Havuz",
            selected: false,
          },
          {
            text: "Isıtmalı Havuz",
            code: "Isıtmalı Havuz",
            selected: false,
          },
          {
            text: "Kapalı Havuz",
            code: "Kapalı Havuz",
            selected: false,
          },
        ],
        facilities: [
          {
            text: "Çamaşır Makinesi",
            code: "Çamaşır Makinesi",
            selected: false,
          },
          {
            text: "Hamam",
            code: "Hamam",
            selected: false,
          },
          {
            text: "Sauna",
            code: "Sauna",
            selected: false,
          },
          {
            text: "Küvetli Banyo",
            code: "Küvetli Banyo",
            selected: false,
          },
          {
            text: "Fırın",
            code: "Fırın",
            selected: false,
          },
        ],
      }
    }
  },
  computed: {
    combinedAmenites() {

    }
  }
}
</script>

<style scoped>

</style>
