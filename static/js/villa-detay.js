$(document).ready(function () {
    $(document).mouseup(function (e) {
        if ($(e.target).is(".search-engine .selection") || $(e.target).is(".search-engine .selection *")) {
            if ($(e.target).parents(".dropdown-wrapper").hasClass("show") && !$(e.target).is(".search-engine .selection input")) {
                $(e.target).parents(".dropdown-wrapper").removeClass("show");
                if ($(window).width() < 576) {
                    $("body").removeClass("overflow-hidden");
                }
            } else {
                $(".search-engine .dropdown-wrapper").removeClass("show");
                $(e.target).parents(".dropdown-wrapper").addClass("show");
                if ($(window).width() < 576) {
                    $("body").addClass("overflow-hidden");
                }
            }
        } else if (!$(e.target).is(".underbox") && !$(e.target).is(".underbox *")) {
            $(".search-engine .dropdown-wrapper").removeClass("show");
            if ($(window).width() < 576) {
                $("body").removeClass("overflow-hidden");
            }
        }
    });

    /* Turkish initialisation for the jQuery UI date picker plugin. */
    (function (factory) {
        if (typeof define === "function" && define.amd) {

            // AMD. Register as an anonymous module.
            define(["../widgets/datepicker"], factory);
        } else {
            // Browser globals
            factory(jQuery.datepicker);
        }
    }(function (datepicker) {
        datepicker.regional.tr = {
            closeText: "kapat",
            prevText: "geri",
            nextText: "ileri",
            currentText: "bugün",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
                "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
            ],
            monthNamesShort: ["Oca", "Şubat", "Mar", "Nis", "May", "Haz",
                "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"
            ],
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            weekHeader: "Hf",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        datepicker.setDefaults(datepicker.regional.tr);
        return datepicker.regional.tr;
    }));

    // Start Date Picker
    if ($("#searchdate1, #searchdate2").length > 0) {
        $("#searchdate1").datepicker({
            minDate: +0,
            monthNamesShort: $.datepicker.regional["tr"].monthNames,
            onSelect: function (selectedDate) {
                var start_date = $("#searchdate1").val();
                var a = start_date.substring(0, 2);
                var b = start_date.substring(3, 5);
                var c = start_date.substring(6, 10);

                var start_date = new Date(c + "-" + b + "-" + a);
                var ayadi_giris = $.datepicker.formatDate("M", start_date);
                $('.search-engine .dt .giris').parents('.dt').addClass('selected');
                $(".search-engine .dt .giris").html(a + " " + ayadi_giris);
                $("body").removeClass("overflow-hidden");
                if (selectedDate != '') {
                    $("#searchdate2").datepicker("option", "minDate", selectedDate).focus();
                    $(this).parents(".dropdown-wrapper").removeClass("show");
                    $(this).parents(".dropdown-wrapper.dt").next(".dropdown-wrapper.dt").addClass("show");
                    $("body").addClass("overflow-hidden");
                }
            }
        });
        $("#searchdate2").datepicker({
            minDate: +0,
            monthNamesShort: $.datepicker.regional["tr"].monthNames,
            onSelect: function (selectedDate) {
                var start_date = $("#searchdate2").val();
                var a = start_date.substring(0, 2);
                var b = start_date.substring(3, 5);
                var c = start_date.substring(6, 10);

                var start_date = new Date(c + "-" + b + "-" + a);
                var end_date = new Date(c + "-" + b + "-" + a);
                var ayadi_cikis = $.datepicker.formatDate("M", end_date);
                $(".search-engine .dt .cikis").html(a + " " + ayadi_cikis);
                $('.search-engine .dt .cikis').parents('.dt').addClass('selected');
                $("#searchdate2").trigger("change");
                $("body").removeClass("overflow-hidden");
                if (selectedDate != '') {
                    $(this).parents(".dropdown-wrapper").removeClass("show");
                }
            }
        });
    }
    function people_total() {
        $(".dropdown-wrapper.gst").each((index, item) => {
            let total = [];
            let thiss = $(item);
            thiss.find(".select-input").each((index, item) => {
                total.push($(item).val() + " " + $(item).data("text"));
                $(item).parents(".dropdown-wrapper.gst").find(".total").html(total);
                ($(item).val() != "") ? $(item).parents(".dropdown-wrapper").addClass("selected") : $(item).parents(".dropdown-wrapper").removeClass("selected");
            });
        })
    }
    people_total();
    $(".select-item .select-btn").click(function () {
        let min = parseInt($(this).parent().find("input").data("min")),
            max = parseInt($(this).parent().find("input").data("max")),
            val = parseInt($(this).parent().find("input").val());
        if ($(this).hasClass("plus")) {
            if (val < max) {
                val += 1;
                $(this).parent().find(".select-btn.minus").attr("disabled", false);
            }
            if (val == max) {
                $(this).attr("disabled", true);
            }

        } else {
            if (val > min) {
                val -= 1;
                $(this).parent().find(".select-btn.plus").attr("disabled", false);
            }
            if (val == min) {
                $(this).attr("disabled", true);
            }
        }
        (val != "") ? $(this).parents(".dropdown-wrapper").addClass("selected") : $(this).parents(".dropdown-wrapper").removeClass("selected")
        $(this).parent().find("input").val(val);
        people_total();
    });

    function isScrollEnd(container) {
        return container.scrollLeft + container.offsetWidth >= container.scrollWidth
    }

    function isScrollStart(container) {
        return container.scrollLeft <= 0
    }

    function hasScroll(container) {
        return container.scrollWidth > container.offsetWidth
    }

    function scrollCheck(scrollable, container) {
        if (hasScroll(container)) {
            if (isScrollStart(container)) {
                scrollable.classList.remove('start-shadow');
            } else {
                scrollable.classList.add('start-shadow');
            }
            if (isScrollEnd(container)) {
                scrollable.classList.remove('end-shadow');
            } else {
                scrollable.classList.add('end-shadow');
            }
        }
    }

    function tabMenuScroll() {
        let activeWidth = document.querySelector(".content-menubar #cm-tab .nav-link.active").parentElement.offsetWidth,
            isShow = document.querySelector(".content-menubar #cm-tab .nav-link.active").parentElement.offsetLeft + activeWidth - document.querySelector(".content-menubar #cm-tab").scrollLeft,
            wrapperWidth = document.querySelector(".content-menubar #cm-tab").offsetWidth;
        if ((isShow + 40) > wrapperWidth) {
            document.querySelector(".content-menubar #cm-tab").scrollLeft += activeWidth;
        } else if ((isShow - 40) < activeWidth) {
            document.querySelector(".content-menubar #cm-tab").scrollLeft -= activeWidth;
        }
    }

    var listSlide = null;
    function doListSlide() {
        if ($(window).width() > 575) {
            $('.list-slide').each(function () {
                listSlide = new Swiper(this, {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                    loop: ($(window).width() > 575) ? true : false, // itemlar 6'dan fazla ise 'loop' değeri false olmalıdır.
                    watchSlidesProgress: true,
                    navigation: {
                        nextEl: ".list-navigation-next",
                        prevEl: ".list-navigation-prev",
                    },
                    breakpoints: {
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1199: {
                            slidesPerView: 4,
                            spaceBetween: 0,
                        },
                    },
                });
            })
        }
        /* else {
                   $('.list-slide').each(function() {
                       this[0].swiper.destroy();
                   })
               } */
    }

    var rooms = new Swiper(".rooms", {
        slidesPerView: 1,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 17,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 17,
            }
        },
    });
    $("#availability-calendar").datepicker({ numberOfMonths: $(window).width() < 767 ? 1 : 6 });
    $(function () {
        $(".accordion").accordion({
            heightStyle: "content"
        });
    });

    tabMenuScroll();
    let = menuLink = document.querySelectorAll(".content-menubar .nav-link");
    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', tabMenuScroll);
    };

    const scrollables = document.querySelectorAll('.scroll-wrapper');
    scrollables.forEach(scrollable => {
        const container = scrollable.querySelector('.scroll-wrapper .scroll-content');
        container.addEventListener('scroll', () => scrollCheck(scrollable, container))
        new ResizeObserver(() => scrollCheck(scrollable, container)).observe(container)
    });

    doListSlide();
    $(window).resize(function () {
        doListSlide();
    });
})