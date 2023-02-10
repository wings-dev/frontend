let PostedData = '';
let TotalVars = '&page=1';
let StartDate = '';
let EndDate = '';
let Adult = 2;
let Child = 0;
let Baby = 0;
let Coupon = null;
let MinPrices = null;
let MaxPrices = null;

function GetURLData() {
    let SelectedPerson = new URLSearchParams(localStorage.getItem('SelectedPerson'));
    let URL = new URLSearchParams(window.location.search);
    let _regions = JSON.parse(URL.get('destination')) || [];
    let _in = URL.get('check_in');
    let _out = URL.get('check_out');
    let minprices = URL.get('min_price');
    let maxprices = URL.get('max_price');

    let URLDate = false;
    if (_in != null && _out != null && _in != '' && _out != '') {
        URLDate = true;
        StartDate === '' && (StartDate = _in);
        EndDate === '' && (EndDate = _out);
    }

    let PlacesTotal = [..._regions];
    let Person = [Number(SelectedPerson.get('min_adult')) || 2, Number(SelectedPerson.get('min_child')), Number(SelectedPerson.get('min_baby'))];
    let Features = JSON.parse(URL.get('amenites')) || [];
    let Dates = [StartDate, EndDate];
    let Order = JSON.parse(URL.get('order')) || 0;
    let Page = JSON.parse(URL.get('page'));
    let Data = {
        Dates: $.grep(Dates, function (v) {
            return v != null && v != '';
        }),
        Person: $.grep(Person, function (v) {
            return v > 0;
        }),
        Pricesmin: minprices,
        Pricesmax: maxprices,
        Places: {
            Region: _regions,
            Total: $.grep(PlacesTotal, function (v) {
                return v > 0;
            })
        }, Features: $.grep(Features, function (v) {
            return v > 0;
        }), Slug: window.location.pathname, Order: Order, URLDates: [_in, _out], URLDate: URLDate, Page: Page
    };
    return Data;
}

function SearchForm_DateSet(date1, date2) {
    StartDate = date1;
    EndDate = date2;
}

function HomeForm_PeopleInputControl(Post) {
    let count = 0;
    Adult = 0;
    Child = 0;
    Baby = 0;
    let PeopleData = '';
    let PeopleText = '';
    document.querySelectorAll('.Search-item-person .person').forEach((e) => {
        let Value = Number(e.value);
        count += Value;
        switch (e.id) {
            case 'Search_PeopleAdult':
                Adult = Adult + Value;
                break;
            case 'Search_PeopleChild':
                Child = Child + Value;
                break;
            case 'Search_PeopleBaby':
                Baby = Baby + Value;
        }
    });
    let textContainer = $('.Search-item-person-info .dropdown-toggle-title');
    let inputSampleText = "Kişi sayısı seçiniz..";
    let container = $('.Search-item-people .dropdown-toggle');
    if (count > 0) {
        textContainer.text('');
        Adult != 0 && (PeopleData += '&min_adult=' + Adult) && (PeopleText += Adult + ' ' + "Yetişkin" + ', ');
        Child != 0 && (PeopleData += '&min_child=' + Child) && (PeopleText += Child + ' ' + "Çocuk" + ', ');
        Baby != 0 && (PeopleData += '&min_baby=' + Baby) && (PeopleText += Baby + ' ' + "Bebek");
        textContainer.append(PeopleText);
        Post !== false && localStorage.setItem('SelectedPerson', PeopleData);
        !container.hasClass('selected') && container.addClass('selected');
    } else {
        textContainer.text(inputSampleText);
        Post !== false && localStorage.removeItem('SelectedPerson');
        container.removeClass('selected');
    }
}

function FilterStorageControl(Name, Inputs) {
    let Regions = [];
    let Features = [];
    let Selected = '';
    if (Inputs.length) {
        Inputs.forEach((element) => {
            let type = element.getAttribute('data-type');
            if (type === 'location_2') Regions.push(element.value);
            if (type === 'amenites') Features.push(element.value);
        });
        if (Name === 'SelectedPlaces') {
            if (Regions.length) Selected += '&destination=[' + Regions + ']';
        }
        if (Name === 'SelectedFeatures') {
            if (Features.length) Selected += '&amenites=[' + Features + ']';
        }
        localStorage.setItem(Name, Selected);
    } else {
        if (Name === 'SelectedPlaces') {
            Regions = [];
        }
        if (Name === 'SelectedFeatures') {
            Features = [];
        }
        localStorage.setItem(Name, Selected);
    }
}

function HomeForm_VillaFeaturesControl(Post) {
    let container = $('.Search-item-more .dropdown-toggle');
    let textContainer = $('.Search-item-more .dropdown-toggle-title');
    let input = document.querySelectorAll('.Search-item-more .dropdown-menu input:checked');
    let inputSampleText = "Gelişmiş Arama";
    let FeaturesText = '';
    if (input.length) {
        container.addClass('selected');
        textContainer.text('');
        input.forEach((element) => (FeaturesText += element.nextElementSibling.nextElementSibling.innerText + ', '));
        textContainer.append(FeaturesText);
        Post !== false && FilterStorageControl('SelectedFeatures', input);
    } else {
        container.removeClass('selected');
        textContainer.text(inputSampleText);
        Post !== false && FilterStorageControl('SelectedFeatures', input);
    }
}

function HomeForm_RegionControl(Post) {
    let container = $('.Search-item-region .dropdown-toggle');
    let textContainer = $('.Search-item-region .dropdown-toggle-title');
    let input = document.querySelectorAll('.Search-item-region .dropdown-menu input:checked');
    let inputSampleText = "Gelişmiş Arama";
    let FeaturesText = '';
    if (input.length) {
        container.addClass('selected');
        textContainer.text('');
        input.forEach((element) => (FeaturesText += element.nextElementSibling.nextElementSibling.innerText + ', '));
        textContainer.append(FeaturesText);
        Post !== false && FilterStorageControl('SelectedPlaces', input);
    } else {
        container.removeClass('selected');
        textContainer.text(inputSampleText);
        Post !== false && FilterStorageControl('SelectedPlaces', input);
    }
}

function FilterFeatures(e) {
    var n = $(e).val().toLowerCase();
    n.length ? $('#filterVillaFeatures').addClass('search-active') : $('#filterVillaFeatures').removeClass('search-active');
    $('#filterVillaFeatures_List .check-text').filter(function () {
        $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(n) > -1);
    });
    if ($('#filterVillaFeatures_List li:not([style*="display: none"])').length) {
        $('#filterVillaFeatures_List .filter-not-fount').hide();
        $('#filterVillaFeatures_List .check-title').show();
    } else {
        $('#filterVillaFeatures_List .filter-not-fount').show();
        $('#filterVillaFeatures_List .check-title').hide();
    }
}

function filterClear() {
    $('.Search-filter input').prop('checked', false);

    $('.js-minFiyat').val('')
    $('.js-maxFiyat').val('')

    var $jrs = $(".js-range-slider");

    let my_range = $jrs.data("ionRangeSlider");
    my_range.update({
        from: '',
        to: ''
    });


    HomeForm_VillaFeaturesControl();
}

function Paginations(page = 0) {
    let Link = window.location;
    let first = 'page=' + $('.pagination .active').attr('href');
    let last = 'page=' + page;
    let Href = '';
    let Data = GetURLData();
    if (Link.search != '') {
        if (Link.href.search('page') != -1) {
            Href = linkControl(Link.href.replace(first, last));
        } else {
            Href = linkControl(Link.href + '&' + last);
        }
    } else {
        Href = linkControl(Link.href + '/?' + last);
    }
    if (Data.Page == 0 || Data.Page == 1) {
        Href = Href.replace('&page=0', '').replace('/?page=0', '/').replace('&page=1', '').replace('/?page=1', '/');
    }
    Href != '' && (document.location.href = Href);
}

function linkControl(Address) {
    return Address.replace('&&', '&').replace('??', '?').replace('&?', '&').replace('?&', '?').replace('//?', '/?').replace('/?/?', '/?');
}

function RunFilter(e) {
    const ID = e && e.id;
    const FindVillaBtn = ID === 'searchVilla' ? true : false;
    // const SearchURL = document.getElementById('HBForm_Regions_Input').getAttribute('data-href') || getTranslateText(213);
    let Link = window.location;
    let URL;
    let Query = '';
    let Data = GetURLData();

    if (FindVillaBtn) {
        localStorage.removeItem('SelectedPlaces');
        HomeForm_VillaFeaturesControl(true);
        HomeForm_RegionControl(true);
        HomeForm_PeopleInputControl(true);
    }
    if (Data.URLDate || FindVillaBtn) {
        Data.Dates.length === 2 && (Query += '&check_in=' + Data.Dates[0] + '&check_out=' + Data.Dates[1]);
        Data.Person.length && (Query += localStorage.getItem('SelectedPerson') || '');
    }

    if (MinPrices !== null || MaxPrices !== null) {

        Query += '&min_price=' + MinPrices + '&max_price=' + MaxPrices;
    }

    Query += localStorage.getItem('SelectedPlaces') || '';
    Query += localStorage.getItem('SelectedFeatures') || '';
    URL = Link.origin + (Query != '' ? '/?' + Query : '');
    window.document.location = linkControl(URL);

    // console.log('TEST', linkControl(URL),'Link',Link.origin,'window.document.location',window.document.location)
    // alert('das')
    return false;
}

$('.Filters-range').on('change', function () {
    MinPrices = $('.js-minFiyat').val()
    MaxPrices = $('.js-maxFiyat').val()
})


$(function () {
    $('.Search-item-person-item .minus-person').on('click', function (e) {
        e.preventDefault();
        let Value = Number(e.target.parentNode.parentNode.querySelector('input').value);
        if (Value != 0) {
            e.target.parentNode.parentNode.querySelector('input').value-- && Value--;
            e.target.parentNode.disabled = false;
            e.target.parentNode.parentNode.querySelector('.plus-person').disabled = false;
        }
        if (Value < 1) {
            e.target.parentNode.disabled = true;
        }
        HomeForm_PeopleInputControl();
    });
    $('.Search-item-person-item .plus-person').on('click', function (e) {
        e.preventDefault();
        let MaxLEngth = Number(e.target.parentNode.parentNode.querySelector('input').max) || 30;
        let Value = Number(e.target.parentNode.parentNode.querySelector('input').value);
        if (Value < MaxLEngth) {
            e.target.parentNode.parentNode.querySelector('input').value++ && Value++;
            HomeForm_PeopleInputControl();
            e.target.parentNode.disabled = false;
            e.target.parentNode.parentNode.querySelector('.minus-person').disabled = false;
        }
        if (Value == MaxLEngth) {
            e.target.parentNode.disabled = true;
        }
    });

    $('.Filters-item input[type=checkbox]').on('change', function (e) {
        let Element = $(this);
        let Type = Element.attr('data-type');
        let ID = Element.val();
        let Class = String;

        if (Element.closest('.Filter-left').length) {
            Class = Type === 'amenites' ? '.Filter .AmenitesID_' + ID : '.Filter .RegionID_' + ID;
            Type === 'amenites' ? Filter_VillaFeaturesControl() : Filter_RegionsControl();
        } else {
            Class = Type === 'amenites' ? '.Search .AmenitesID_' + ID : '.Search .RegionID_' + ID;
            Type === 'amenites' ? HomeForm_VillaFeaturesControl() : HomeForm_RegionControl();
        }
        $(Class).prop('checked', this.checked);
    });

    $('.dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });
    $('.Dropdown-close').on('click', function () {
        $(this).parents('.Search-item').find('button.dropdown-toggle').dropdown('toggle')
    })

    //TAKVİM
    var device = "d";
    var startDate, endDate, startSearchInstance, endSearchInstance;

    $("#search_arrival").val(StartDate)
    $("#search_departure").val(EndDate)

    var fillSearchInputs = function () {
        startSearchInstance.$elem.val(startDate ? moment(startDate).format('DD.MM.YYYY') : "");
        endSearchInstance.$elem.val(endDate ? moment(endDate).format('DD.MM.YYYY') : "");

    };

    $("#search_arrival").caleran({
        startEmpty: $("#search_arrival").val() === "",
        startDate: $("#search_arrival").val(),
        endDate: $("#search_departure").val(),
        minDate: moment(),
        enableKeyboard: false,
        showOn: "bottom",
        format: 'DD.MM.YYYY',
        autoAlign: false,
        isHotelBooking: true,
        oninit: function (instance) {
            startSearchInstance = instance;
            if (!instance.config.startEmpty && instance.config.startDate) {
                instance.$elem.val(instance.config.startDate.locale(instance.config.format).format(instance.config.format));
                startDate = instance.config.startDate.clone();
            }
        },

        onbeforeshow: function (instance) {
            if (startDate) {
                startSearchInstance.config.startDate = startDate;
                endSearchInstance.config.startDate = startDate;
            }
            if (endDate) {
                startSearchInstance.config.endDate = endDate.clone();
                endSearchInstance.config.endDate = endDate.clone();
            }
            fillSearchInputs();
            instance.updateHeader();
            instance.reDrawCells();


            // StartDate =
        },
        onfirstselect: function (instance, start) {
            startDate = start.clone();
            startSearchInstance.globals.startSelected = false;
            startSearchInstance.hideDropdown();
            endSearchInstance.showDropdown();
            endSearchInstance.config.minDate = startDate.clone();
            endSearchInstance.config.startDate = startDate.clone();
            endSearchInstance.config.endDate = null;
            endSearchInstance.globals.startSelected = true;
            endSearchInstance.globals.endSelected = false;
            endSearchInstance.globals.firstValueSelected = true;
            endSearchInstance.setDisplayDate(start);
            if (endDate && startDate.isAfter(endDate)) {
                endSearchInstance.globals.endDate = endDate.clone();
            }
            endSearchInstance.updateHeader();
            endSearchInstance.reDrawCells();
            fillSearchInputs();
            showTooltip = true
            tooltipsSearchForm()
        }
    });

    $("#search_departure").caleran({
        startEmpty: $("#search_departure").val() === "",
        startDate: $("#search_arrival").val(),
        endDate: $("#search_departure").val(),
        minDate: moment(),
        format: 'DD.MM.YYYY',
        enableKeyboard: false,
        autoCloseOnSelect: true,
        showOn: "bottom", autoAlign: false,
        isHotelBooking: true,
        oninit: function (instance) {
            instance.container.addClass('reservationSearchCalendar')
            endSearchInstance = instance;
            if (!instance.config.startEmpty && instance.config.endDate) {
                instance.$elem.val(instance.config.endDate.locale(instance.config.format).format(instance.config.format));
                endDate = instance.config.endDate.clone();
            }
        },
        ondraw: function (caleran) {
            //Tooltip
            if ($('.reservationSearchCalendar .caleran-hovered').length == 1) {
                $(".caleran-tooltip-content-form").text("Arrival Date")
            } else {
                $(".caleran-tooltip-content-form").text($('.reservationSearchCalendar .caleran-hovered').length + " Nights")
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startSearchInstance.config.startDate = startDate;
                endSearchInstance.config.startDate = startDate;
            }
            if (endDate) {
                startSearchInstance.config.endDate = endDate.clone();
                endSearchInstance.config.endDate = endDate.clone();
            }
            fillSearchInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onfirstselect: function () {

        },
        onafterselect: function (instance, start, end) {
            startDate = start.clone();
            endDate = end.clone();
            endSearchInstance.hideDropdown();
            startSearchInstance.config.endDate = endDate.clone();
            startSearchInstance.globals.firstValueSelected = true;
            fillSearchInputs();
            endSearchInstance.globals.startSelected = true;
            endSearchInstance.globals.endSelected = true;
            showTooltip = false
            $(".caleran-tooltip-form").hide();
            StartDate = $('#search_arrival').val()
            EndDate = $('#search_departure').val()
        }
    });

    if (device == "m") {
        $("#search_arrival_mobile").caleran({
            startEmpty: $("#search_arrival_mobile").val() === "",
            startDate: $("#search_arrival_mobile").val(),
            endDate: $("#search_departure_mobile").val(),
            minDate: moment(),
            enableKeyboard: false,
            showOn: "bottom", autoAlign: false,
            isHotelBooking: true,
            calendarCount: 1,
            oninit: function (instance) {
                startSearchInstance = instance;
                if (!instance.config.startEmpty && instance.config.startDate) {
                    instance.$elem.val(instance.config.startDate.locale(instance.config.format).format(instance.config.format));
                    startDate = instance.config.startDate.clone();
                }
            },
            onbeforeshow: function (instance) {
                if (startDate) {
                    startSearchInstance.config.startDate = startDate;
                    endSearchInstance.config.startDate = startDate;
                }
                if (endDate) {
                    startSearchInstance.config.endDate = endDate.clone();
                    endSearchInstance.config.endDate = endDate.clone();
                }
                fillSearchInputs();
                instance.updateHeader();
                instance.reDrawCells();
            },
            onfirstselect: function (instance, start) {
                startDate = start.clone();
                startSearchInstance.globals.startSelected = false;
                startSearchInstance.hideDropdown();
                endSearchInstance.showDropdown();
                endSearchInstance.config.minDate = startDate.clone();
                endSearchInstance.config.startDate = startDate.clone();
                endSearchInstance.config.endDate = null;
                endSearchInstance.globals.startSelected = true;
                endSearchInstance.globals.endSelected = false;
                endSearchInstance.globals.firstValueSelected = true;
                endSearchInstance.setDisplayDate(start);
                if (endDate && startDate.isAfter(endDate)) {
                    endSearchInstance.globals.endDate = endDate.clone();
                }
                endSearchInstance.updateHeader();
                endSearchInstance.reDrawCells();
                fillSearchInputs();
            }
        });
        $("#search_departure_mobile").caleran({
            startEmpty: $("#search_departure_mobile").val() === "",
            startDate: $("#search_arrival_mobile").val(),
            endDate: $("#search_departure_mobile").val(),
            minDate: moment(),
            enableKeyboard: false,
            autoCloseOnSelect: true,
            calendarCount: 1,
            showOn: "bottom", autoAlign: false,
            isHotelBooking: true,
            oninit: function (instance) {
                endSearchInstance = instance;
                if (!instance.config.startEmpty && instance.config.endDate) {
                    instance.$elem.val(instance.config.endDate.locale(instance.config.format).format(instance.config.format));
                    endDate = instance.config.endDate.clone();
                }
            },
            onbeforeshow: function (instance) {
                if (startDate) {
                    startSearchInstance.config.startDate = startDate;
                    endSearchInstance.config.startDate = startDate;
                }
                if (endDate) {
                    startSearchInstance.config.endDate = endDate.clone();
                    endSearchInstance.config.endDate = endDate.clone();
                }
                fillSearchInputs();
                instance.updateHeader();
                instance.reDrawCells();
            },
            onafterselect: function (instance, start, end) {
                startDate = start.clone();
                endDate = end.clone();
                endSearchInstance.hideDropdown();
                startSearchInstance.config.endDate = endDate.clone();
                startSearchInstance.globals.firstValueSelected = true;
                fillSearchInputs();
                endSearchInstance.globals.startSelected = true;
                endSearchInstance.globals.endSelected = false;
            }
        });
    }

    var showTooltip = true, currentCell = null, hoverCell;

    function tooltipsSearchForm() {
        if (endSearchInstance.globals.isMobile == false) {

            $(".reservationSearchCalendar .caleran-day").hover(function () {
                if (showTooltip) {
                    $(".caleran-tooltip-form").css({
                        top: $(this).offset().top + $(this).outerHeight(),
                        left: $(this).offset().left - (($(".caleran-tooltip-form").outerWidth() - $(this).outerWidth()) / 2)
                    }).show();
                }
                currentCell = $(this);
            }, function () {
                $(".caleran-tooltip-form").hide();
            });
        }

    }

    //TAKVİM


    $('#mobileFilter').on('click', function () {
        $('.Filter-left').toggle()
        $('body').toggleClass('over')
    })

    $('#mobileFilterClose').on('click', function () {
        $('.Filter-left').toggle()
        $('body').toggleClass('over')
    })

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log('mobile')
        $('.Filter-left .Filters-region').remove()
    }

});