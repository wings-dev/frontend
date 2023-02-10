var listSlider = new Swiper('.villa-list-slider', {
    direction: 'horizontal',
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

$('#Search .dropdown-menu input').click(function (e) {
    e.stopPropagation();
})
$(document).ready(function () {

    var Data = GetURLData();

    var $jrs = $(".js-range-slider");
    $jrs.ionRangeSlider({
        type: "double",
        grid: false,
        min: 5000,
        max: $jrs.data("max"),
        from: Data.Pricesmin,
        to: Data.Pricesmax,
        prefix: $jrs.data("prefix"),
        step: $jrs.data("step"),
    });
    $jrs.on("change", function () {
        $(".js-minFiyat").val($(this).data("from"));
        $(".js-maxFiyat").val($(this).data("to"));
        // $(".js-info .js-infoMin").html(from + $jrs.data("prefix"));
        // $(".js-info .js-infoMax").html(to + $jrs.data("prefix"));
    });
    $(".js-minFiyat").on("change", function () {
        let my_range = $jrs.data("ionRangeSlider");
        my_range.update({
            from: $(this).val()
        });
    });
    $(".js-maxFiyat").on("change", function () {
        let my_range = $jrs.data("ionRangeSlider");
        my_range.update({
            to: $(this).val()
        });
    });

});

function OrderBy(Order = 0) {
    let Link = window.location;
    let Page = GetURLData().Order;
    let first = 'order=' + Page;
    let last = 'order=' + Order;
    let Address = Link.href;
    if (Link.search != '') {
        Page != 0 && (Address = Address.replace('page=' + Page, 'page=1'));
        if (Address.search('order') != -1) {
            document.location.href = linkControl(Address.replace(first, last));
        } else {
            document.location.href = linkControl(Address + '&' + last);
        }
    } else {
        document.location.href = linkControl(Address + '/?' + last);
    }
}

$('#v_filter').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    // do something...
    var selectedItem = $('#v_filter').val();
    OrderBy(selectedItem || 0);
});

// Filtre İçinde Arama
function destinationsFilter(e) {

    var value = $(e).val().toLowerCase();

    $(e).parents('.Filters').find('.Filters-in').find('label').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        $(e).parents('.Filters').find('.Filters-in').find('.Filters-item-notfound').hide();

        var noResult = true;
        $(e).parents('.Filters').find('.Filters-in').find('label').each(function () {
            if ($(this).children(':visible').length != 0) {
                noResult = false;
            }
        });
        if (noResult) {
            $(e).parents('.Filters').find('.Filters-in').find('.Filters-item-notfound').show();
        }
    });


}

//Search için Özellik ve Bölge Arama
function destinationsSearchFilter(e) {

    var value = $(e).val().toLowerCase();

    $(e).parents('.filtered').find('.filtered-in').find('label').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        $(e).parents('.filtered').find('.Filters-item-notfound').hide();
        var noResult = true;
        $(e).parents('.filtered').find('.filtered-in').find('label').each(function () {
            if ($(this).children(':visible').length != 0) {
                noResult = false;
                $(e).parents('.filtered').find('.filtered-in').find('.Filters-amenites').show();
            }
        });
        if (noResult) {
            $(e).parents('.filtered').find('.Filters-item-notfound').show();
            $(e).parents('.filtered').find('.filtered-in').find('.Filters-amenites').hide();
        }

    });


}

function filterEachRegions() {
    let SelectedFilters = document.querySelectorAll('.Filters .Filters-region .input[type=checkbox]:checked');

    if (SelectedFilters.length) {
        SelectedFilters.forEach((Element) => {
            let Value = Element.value;
            let ID = '.Search .Search-item-region .RegionID_' + Value;
            $(ID).click();
        });
    }
}

function filterEach() {
    // $('#chose_17').attr('checked', true);
    let SelectedFilters = document.querySelectorAll('.Filter-left input:checked');
    let FiltersContainer = document.querySelector('.Filter-right-selected');
    let FiltersBtn = document.querySelector('#Fetures_clear');

    if (SelectedFilters.length) {
        SelectedFilters.forEach((Element) => {
            let Value = Element.value;
            let Name = Element.getAttribute('data-name');
            let Type = Element.getAttribute('data-type');
            let Text = Element.nextElementSibling.nextElementSibling.innerText;
            let ID = Type === 'amenites' ? '.AmenitesID_' + Value : '.RegionID_' + Value;

            let AddFiltre = '<a href="#" class="Filter-right-selected-item" id="it-' + Value + '" onclick="event.preventDefault(), Filters_ById(\'' + ID + '\'), $(this).remove()">' + Name + ':' + Text + '<i class="icon-cancel-circled"></i></a>';
            FiltersBtn.insertAdjacentHTML('beforebegin', AddFiltre);
        });

        FiltersContainer.style.display = 'block';
    }
}

function Filters_ById(ID) {
    $('.Filter-left ' + ID).click();
    let FiltersItem = document.querySelectorAll('.Filter-right-selected .Filter-right-selected-item');
    let FiltersContainer = document.querySelector('.Filter-right-selected');

    if (FiltersItem.length == 0) {
        FiltersContainer.style.display = 'none';
    }

    RunFilter();

    return false;
}

function Filters_Clear() {
    let FiltersContainer = document.querySelector('.Filter-right-selected');

    FiltersContainer.style.display = 'none';
    FilterStorageControl('SelectedRegions', []);
    FilterStorageControl('SelectedFeatures', []);
    SearchForm_DateSet('', '');

    document.location.href = window.location.href.split('?')[0];
    return false;
}

// ======================== Filter ====================== //
function Filter_RegionsControl() {
    let input = document.querySelectorAll('.Filters-region input:checked') || [];
    FilterStorageControl('SelectedPlaces', input);
}

function Filter_VillaFeaturesControl() {
    let input = document.querySelectorAll('.Filters-amenites input:checked') || [];
    FilterStorageControl('SelectedFeatures', input);
}

$(function () {
    let CurrentPage = GetURLData().Page;
    // Page 0 ve Page 1 sayfa yÃ¶nlendirme
    if (CurrentPage == 0 || CurrentPage == 1) {
        document.location.href = window.location.origin + window.location.pathname;
    }
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.jsMobileLink').attr('target', '_blank');
    }

    $('[page-item]').click(function (e) {
        e.preventDefault();
        Paginations($(this).attr('data-count'));
    });


    filterEachRegions();
});