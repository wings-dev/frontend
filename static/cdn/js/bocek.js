let b_v;

$.notify = function(deg1, deg2) {
    if (typeof swal == 'undefined')
        $.boceksoft.include('js', '/js/sweetalert.min.js', '', undefined, "$.notify('" + deg1 + "','" + deg2 + "');");
    else
        swal({
            title: (deg2 == "danger" ? "Hata" : "Başarılı"),
            text: deg1,
            icon: (deg2 == "danger" ? "error" : deg2)
        });
}
$.boceksoft = {
    /*!
     * Böceksoft JS
     * version: 2.0.61
     * Requires jQuery v3.7
     * Must-Haves :
     *          https://cdn/js/validator.js 
     *          https://cdn/js/jquery.form.js 
     *          https://cdn/js/bootbox.min.js
     *          https://cdn/js/bootbox.min.js
     *          https://cdn/js/sweetalert.min.js
     *          https://cdn/css/jquery/jquery.fancybox.min.css
     *          https://cdn/js/jquery/jquery.fancybox.min.js
     * Copyright (c) 2021 Böceksoft Digital Solutions
     */
    variables: {
        frontendMode: true,
        devoloperMode: false,
        scriptsPath: (true == true ? "../cdn/uploads/" : "/"),
        currentLang: window.location.pathname.split("/")[1],
        dataUrl: $("#rzvForm").data("url"),
        calendarFiyatlarDovizIcon: "",
        calendarFiyatlarDovizGiris: "",
        calendarFiyatlarDovizCikis: "",
        calendarFiyatlarTarihler: undefined,
        activedays: [],
        calendarFiyatlar: undefined,
        giristarihler: undefined,
        cikistarihler: undefined,
        dolutarihler: undefined,
        Rgiristarihler: undefined,
        Rcikistarihler: undefined,
        RezervasyonBekleyenler: undefined,
        RezervasyonSaatler: undefined,
        aynilar: [],
        aynilar_dolu_opsiyon: [],
        aynilar_opsiyon_dolu: [],
        ajaxAutoAjax: undefined,
        rzvhesaplabtnhtml: $(".rzvForm .rezervBtn").html(),
        Calendardate1: undefined,
        Calendardate2: undefined,
        includefiles: []
    },
    include: function(type, name, path, version, event, evalCode) {
        if (b_v.frontendMode == true && path.substr(0, 1) == "/")
            path = path.substr(1, path.length - 1);
        let control = b_v.includefiles.filter(x => x.type == type && x.path == path);
        if (control.length == 0) {
            b_v.includefiles.push({
                type: type,
                path: path,
                loaded: (type == "css" ? true : false)
            });
            if (type == "css") {
                if ($("link[data-" + name + "='true']").length > 0)
                    $("link[data-" + name + "='true']").eq(0).before('<link href="' + path + '" rel="stylesheet" type="text/css">');
                else
                    $("head").append('<link href="' + path + '" rel="stylesheet" type="text/css">');
                eval(evalCode);
            } else if (type == "js")
                $.getScript(path + (version != "" ? "?v=" + version : "")).done(function(e) {
                    eval(evalCode);
                    b_v.includefiles.filter(x => x.type == type && x.path == path)[0].loaded = true;
                });
        } else if (control[0].loaded == true)
            eval(evalCode);
        else
            setTimeout(function() {
                console.log(type + '=' + path);
                $.boceksoft.include(type, name, path, version, event, evalCode);
            }, 300);
    },
    cookie: function(cname, cvalue, exdays) {
        if (cvalue != undefined && cvalue != null) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            return "";
        } else {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1);
                if (c.indexOf(name) == 0)
                    return c.substring(name.length, c.length);
            }
            return "";
        }
    },
    formAjax: function() {
        $("[data-ajax='true']").validator().on("submit", function(e) {
            if (e.isDefaultPrevented()) {} else {
                var result_type = $(this).data("result-type").replace("notify", "alert"),
                    form = $(this),
                    refresh = $(this).data("refresh"),
                    duration = $(this).data("result-duration") != undefined ? $(this).data("result-duration") : 500,
                    developmentmode = form.data("development-mode"),
                    redirect = form.data("redirect"),
                    txt = form.find("button[type='submit']").html();
                $(this).ajaxSubmit({
                    beforeSend: function() {
                        $(".loading-absolute").fadeIn();
                        form.find("button[type='submit']")
                            .attr("disabled", true)
                            .html("<i class='fa fa-spinner fa-spin'></i>&nbsp;" + (b_v.currentLang == "en" ? "Loading..." : (b_v.currentLang == "de" ? "Loading..." : "Yükleniyor...")));
                    },
                    success: function(e) {
                        if (developmentmode == true) {
                            console.log(e);
                        } else {
                            var arr = e.split(";/");
                            if (arr[0] == "0") {
                                //Hata Yoksa
                                form.trigger("reset");
                                if (!form.data("onsuccess") == '') {
                                    eval(form.data("onsuccess").replace("{response}", arr[1]));
                                }
                                if (result_type == "modal") {
                                    bootbox.alert({
                                        title: (b_v.currentLang == "en" ? "Info" : (b_v.currentLang == "de" ? "Die Info" : "Bilgi")),
                                        message: arr[1],
                                        backdrop: true,
                                        callback: function() {
                                            if (refresh == true) {
                                                location.reload();
                                            }
                                            if (redirect != null) {
                                                window.location.href = redirect;
                                            }
                                        }
                                    });
                                } else if (result_type == "swal") {
                                    swal({
                                        title: (b_v.currentLang == "en" ? "Success" : (b_v.currentLang == "de" ? "Erfolg" : "Başarılı")),
                                        text: arr[1],
                                        icon: "success"
                                    }).then(function(value) {
                                        if (refresh == true) {
                                            location.reload();
                                        }
                                        if (redirect != null) {
                                            window.location.href = redirect;
                                        }
                                    });

                                } else if (result_type == "alert") {
                                    $(".error_message_").fadeOut().remove();
                                    $(".status_message_").fadeOut().remove();
                                    $(".success_message_").fadeOut().remove();
                                    var html = "<div class='row success_message_ mt-2  ' style='display:none;'><div class='col-sm-12'><div class='alert alert-success'><p style='margin:0;'>" + arr[1] + "</p></div></div></div>";
                                    form.append(html);
                                    $(".success_message_").fadeIn(function() {
                                        setTimeout(function() {
                                            $(".success_message_").fadeOut();
                                            if (refresh == true) {
                                                location.reload();
                                            }
                                            if (redirect != null) {
                                                window.location.href = redirect;
                                            }
                                        }, duration);
                                    });
                                } else if (result_type == "url") {
                                    if (arr.length > 2)
                                        if (arr[2] == "hemenode") {
                                            window.location = form.data("hemenkirala").replace("{rezid}", form.find("input[name='kayitId']").val());
                                            return false;
                                        }

                                    $("body").append("<form id='a1' method='" + form.attr("method") + "' action='" + form.data("url") + "'><input name='villaname' value='" + form.find("input[name='villaname']").val() + "' /><input name='reservationdate1' value='" + form.find("input[name='reservationdate1']").val() + "' /><input name='reservationdate2' value='" + form.find("input[name='reservationdate2']").val() + "' /><input name='kayitid' value='" + form.find("input[name='kayitId']").val() + "' /></form>");
                                    $("#a1").trigger("submit");
                                }
                            } else {
                                //Hata Varsa
                                if (result_type == "modal") {
                                    bootbox.alert({
                                        title: (b_v.currentLang == "en" ? "Error!" : (b_v.currentLang == "de " ? "Error!" : "Hata!")),
                                        message: arr[1],
                                        backdrop: true
                                    });
                                } else if (result_type == "swal" || result_type == "url") {
                                    swal((b_v.currentLang == "en" ? "Error!" : (b_v.currentLang == "de " ? "Error!" : "Hata!")), arr[1], 'error');
                                } else if (result_type == "alert") {
                                    $(".error_message_").fadeOut().remove();
                                    $(".status_message_").fadeOut().remove();
                                    $(".success_message_").fadeOut().remove();
                                    var html = "<div class='row error_message_ mt-2 ' style='display:none;'><div class='col-sm-12'><div class='alert alert-danger'><p style='margin:0;'>" + arr[1] + "</p></div></div></div>";
                                    form.append(html);
                                    $(".error_message_").fadeIn(function() {
                                        setTimeout(function() {
                                            $(".error_message_").fadeOut();
                                        }, duration);
                                    });
                                }
                            }
                        }
                    },
                    error: function(xhr, status, text) {
                        if (status == "timeout") {
                            if (result_type == "modal") {
                                bootbox.alert({
                                    title: (b_v.currentLang == "en" ? "Error!" : (b_v.currentLang == "de " ? "Error!" : "Hata!")),
                                    message: (b_v.currentLang == "en" ? "Timeout!" : "Zaman Aşımı!"),
                                    backdrop: true
                                });
                            } else if (result_type == "swal") {
                                swal((b_v.currentLang == "en" ? "Timeout!" : "Zaman Aşımı!"), arr[1], 'warning');
                            } else if (result_type == "alert") {
                                $(".error_message_").fadeOut().remove();
                                $(".status_message_").fadeOut().remove();
                                $(".success_message_").fadeOut().remove();
                                var html = "<div class='row error_message_ mt-2 ' style='display:none;'><div class='col-sm-12'><div class='alert alert-danger'><p style='margin:0;'>" + (b_v.currentLang == "en" ? "Timeout!" : "Zaman Aşımı!") + "</p></div></div></div>";
                                form.append(html);
                                $(".error_message_").fadeIn(function() {
                                    setTimeout(function() {
                                        $(".error_message_").fadeOut();
                                    }, duration);
                                });

                            }
                        } else {
                            console.log(xhr.responseText);
                            if (result_type == "modal") {
                                bootbox.alert({
                                    title: (b_v.currentLang == "en" ? "Info" : (b_v.currentLang == "de" ? "Die Info" : "Bilgi")),
                                    message: (b_v.currentLang == "en" ? "Error! Error Code :" : "Hata! Hata Kodu: ") + xhr.status,
                                    backdrop: true
                                });
                            } else if (result_type == "alert") {
                                $(".error_message_").fadeOut().remove();
                                $(".status_message_").fadeOut().remove();
                                $(".success_message_").fadeOut().remove();
                                var html = "<div class='row error_message_ mt-2 ' style='display:none;'><div class='col-sm-12'><div class='alert alert-danger'><p style='margin:0;'> Connection error. Error code " + xhr.status + "</p></div></div></div>";
                                form.append(html);
                                $(".error_message_").fadeIn(function() {
                                    setTimeout(function() {
                                        $(".error_message_").fadeOut();
                                    }, duration);
                                });
                            }
                        }
                    },
                    complete: function() {
                        $(".loading-absolute").fadeOut();
                        form.find("button[type='submit']")
                            .attr("disabled", false)
                            .html(txt);
                    }
                });
            }
            return false;
        });
    },
    recaptcha: function() {
        if ($("form[data-recaptcha][data-recaptcha-id]").length > 0) {
            var evX = `
                setTimeout(function(){
                    $("form[data-recaptcha][data-recaptcha-id]").each(function(){
                        var $this=$(this);
                        grecaptcha.render($this.data("recaptcha-id"), {
                            'sitekey': $this.data("recaptcha")
                        });
                    });
                },500);
            `;
            $.boceksoft.include('js', 'recaptcha', 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit', '', undefined, evX);
        }
    },
    ChangeUrl: function(page, url) {
        function changeDesc(array, key, val) {
            for (var i in array) {
                if (array[i].key == key) {
                    array[i].val = val;
                    break;
                }
            }
        }
        let urlx = url.split("?")[0];
        let urlArr = [];
        let urlPar = "";
        if (url.split("?")[1] != "") {
            urlPar = "?";
            let ss = url.split("?")[1].split("&");
            for (let i = 0; i < ss.length; i++)
                if (ss[i].split("=")[1] != "") {
                    let uac = urlArr.filter(x => x.key == ss[i].split("=")[0])[0];
                    if (uac != undefined)
                        changeDesc(urlArr, ss[i].split("=")[0], uac.val + ',' + ss[i].split("=")[1]);
                    else
                        urlArr.push({
                            key: ss[i].split("=")[0],
                            val: ss[i].split("=")[1]
                        });
                }
            for (var i = 0; i < urlArr.length; i++) {
                urlPar += (urlPar != "?" ? "&" : "") + urlArr[i].key + "=" + urlArr[i].val;
            }
        }
        if (typeof(history.pushState) != "undefined") {
            let obj = { Page: page, Url: urlx + urlPar };
            history.pushState(obj, obj.Page, obj.Url);
        } else {
            window.location.href = "/";
            // alert("Browser does not support HTML5.");
        }
    },
    ajaxAuto: function(element) {
        var x = $(element);
        var pressHtml = x.data("press");
        x.find("input,select").on("change", function() {
            var a = x.serialize();
            if (x.attr("action") != undefined) {
                $.boceksoft.ChangeUrl('Page1', x.attr("action") + "?" + a);
            } else {
                $.boceksoft.ChangeUrl('Page1', "?" + a);
            }
            if (b_v.ajaxAutoAjax != null && b_v.ajaxAutoAjax != undefined)
                b_v.ajaxAutoAjax.abort();
            b_v.ajaxAutoAjax = $.ajax({
                type: x.attr("method"),
                url: x.data("fakeaction"),
                data: a,
                beforeSend: function() {
                    $(pressHtml).html('<div class="text-center" style="width:100%;"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
                },
                success: function(result) {
                    if (x.data("fakeaction") == "/ajax/filtre") {
                        var sonuc = result.split(";/;/");
                        $(".totalCount").html(sonuc[0]);
                        $(pressHtml).html(sonuc[1]);
                        $(".pagination").html(sonuc[2]);
                        $('[data-toggle="tooltip"]').tooltip();
                        //$.boceksoft.dovizDegistir($.boceksoft.cookie("doviz_code")); -document.cookie :  lazım olursa donuşturülecek.
                    } else {
                        $(pressHtml).html(result);
                    }
                    eval(x.data("onsuccess"));
                },
                error: function(xhr, status, text) {
                    $(pressHtml).html("<div class=\"row\"><div class=\"col-sm-12\"><div class=\"alert alert-danger\">" + (b_v.currentLang == "en" ? "Error! There was a problem retrieving data. (Error code :" : "Hata! Verileri alırken bir sorun oluştu. (Hata Kodu :") + " + xhr.status + " + Text + " + text + </div></div></div>");
                }
            });
        });
    },
    instagram: function() {
        $.ajax({
            type: 'post',
            url: '/ajax/instagramOptions',
            success: function(e) {
                var arr = e.split(";/");
                var options = {
                    items: arr[0],
                    itemPadding: "3px",
                    userId: arr[1],
                    access_token: arr[2],
                    imageHeight: arr[3] + "px"
                };
                $.ajax({
                    type: "GET",
                    dataType: "jsonp",
                    cache: false,
                    url: "https://graph.instagram.com/me/media/?fields=id,caption,media_type,media_url&access_token=" + options.access_token,
                    success: function(x) {
                        var veriler = x;
                        console.log(veriler);
                        $.boceksoftx = {
                            instagramMedia: function(element) {
                                var el = $(element);
                                var c = '';
                                $("body").append(c);

                                for (var i = 0; i < (options.items > veriler.data.length ? veriler.data.length : options.items); i++) {
                                    var __item = veriler.data[i];
                                    var likeCount = "<svg style='width: 22px;position: absolute;top: 30px;left: 40px;fill: white;' viewBox='0 0 24 24'><path d='M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z'></path></svg><i style='position: absolute;font-style: normal;top: 29px;left: 69px;font-size: 20px;'>1</i>";
                                    var reviewCount = "<svg style='width: 22px;position: absolute;top: 30px;right: 56px;fill: white;' viewBox='0 0 24 24'><path d='M1,11.9C1,17.9,5.8,23,12,23c1.9,0,3.7-1,5.3-1.8l5,1.3l0,0c0.1,0,0.1,0,0.2,0c0.4,0,0.6-0.3,0.6-0.6c0-0.1,0-0.1,0-0.2l-1.3-4.9c0.9-1.6,1.4-2.9,1.4-4.8C23,5.8,18,1,12,1C5.9,1,1,5.9,1,11.9z M2.4,11.9c0-5.2,4.3-9.5,9.5-9.5c5.3,0,9.6,4.2,9.6,9.5c0,1.7-0.5,3-1.3,4.4l0,0c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1,0,0.1l0,0l1.1,4.1l-4.1-1.1l0,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.3,0.1l0,0c-1.4,0.8-3.1,1.8-4.8,1.8C6.7,21.6,2.4,17.2,2.4,11.9z'></path></svg><i style='position: absolute;font-style: normal;top: 29px;right: 32px;font-size: 20px;'>1</i>";
                                    if (__item.caption != null) {
                                        var captionx = '<span class="__text">' + __item.caption + '</span>';
                                    } else {
                                        var captionx = "";
                                    }

                                    var html = ``;
                                    if (__item.media_type == "CAROUSEL_ALBUM") {
                                        html = `
                                            <div class="item">
                                                <a href="javascript:void(0)" onclick="$.boceksoftx.loadmedia('','${__item.id}',${i});">\
                                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${__item.media_url}" data-srcauto="0" alt="" class="lazy cover w-100" width="280" height="280">
                                                <div class="shadow">
                                                    <div class="caption">
                                                        ${likeCount}
                                                            --  
                                                        ${reviewCount}
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    } else if (__item.media_type == "IMAGE") {
                                        html = `
                                            <div class="item">
                                                <a href="javascript:void(0)" onclick="$.boceksoftx.loadmedia('','${__item.id}',${i});">\
                                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${__item.media_url}" data-srcauto="0" alt="" class="lazy cover w-100" width="280" height="280">
                                                    <div class="shadow">
                                                        <div class="caption">
                                                            ${likeCount}
                                                                --  
                                                            ${reviewCount}
                                                            <span>' +${__item.caption} + '</span>\
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        `;

                                    } else if (__item.media_type == "VIDEO") {
                                        html = `
                                            <div class="item">
                                                <a href="javascript:void(0)" onclick="$.boceksoftx.loadmedia('${__item.link}','${__item.id}',${i});">
                                                    <video class="control-video" poster="${__item.media_url}" muted="" id="video-'${__item.id}">
                                                        <source src="${__item.media_url}" type="video/mp4">
                                                    </video>
                                                    <div class="shadow">
                                                        <div class="caption">
                                                            ${likeCount}
                                                                --  
                                                            ${reviewCount}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        `;
                                    }
                                    el.append(html);
                                }


                                if (element.indexOf("carousel") > -1)
                                    $(element).owlCarousel({
                                        loop: true,
                                        margin: 0,
                                        nav: false,
                                        dots: false,
                                        autoplay: false,
                                        responsive: {
                                            0: {
                                                items: 1.4
                                            },
                                            400: {
                                                items: 2
                                            },
                                            600: {
                                                items: 3
                                            },
                                            991: {
                                                items: 4
                                            },
                                            1200: {
                                                items: 5
                                            },
                                            1400: {
                                                items: 6
                                            }
                                        }
                                    });

                            },
                            loadmedia: function(url, id, index) {
                                if ($(".boceksoft_bg").length == 0)
                                    $("body").append("<div class='boceksoft_bg'></div><div class='boceksoft-instagram-wrap'><div class='boceksoft-instagram-media'></div></div>");
                                $(".boceksoft-instagram-media").html("");

                                $(".boceksoft_bg").on("click", function(e) {
                                    $(this).next(".boceksoft-instagram-wrap").fadeOut(300).remove();
                                    $(this).fadeOut(300).remove();
                                });
                            }
                        }
                        $.boceksoftx.instagramMedia(".instagram-carousel");
                    }
                });


            }
        });
    },
    hesapla: function(date1, date2, id) {
        $(".rzvForm .hata").html("");
        if (date1 != "" && date2 != "") {
            var data = ($("#rzvForm").length > 0 ? $("#rzvForm").serialize() : $("#rzvForm2").serialize());
            if ($.variable.hesaplaajax != undefined)
                $.variable.hesaplaajax.abort();
            $.variable.hesaplaajax = $.ajax({
                type: 'post',
                url: '/ajax/fiyat_hesapla',
                cache: false,
                data: data,
                beforeSend: function() {
                    $(".rzvForm [type='button']").removeClass("d-none");
                    $(".rzvForm [type='submit']").addClass("d-none");
                    $(".rzvForm .rezervBtn").html("Yükleniyor...");
                    $(".rzvForm [type='button']").removeClass("d-none");
                    $(".loadingx").removeClass("d-none");
                    $(".hesaplama_sonuclari").addClass("d-none");
                    $(".hemen_kirala_btns").addClass("d-none");
                    $("#rzvForm .col-sm-12:last").remove();
                    $(".rzvForm .hata").hide();
                    $(".hesaplama_sonuclari ul li").eq(2).find("strong").html("-");
                    $(".hesaplama_sonuclari ul li").eq(3).find("strong").html("-");
                },
                success: function(cevap) {
                    $(".rzvForm .rezervBtn").html(b_v.rzvhesaplabtnhtml);
                    var arr = JSON.parse(cevap)[0];
                    if (arr["hata"] != undefined && arr["hata"] != "") {
                        $(".rzvForm .hata").show();
                        $(".rzvForm .fiyathesaplabtn").removeClass("d-none");
                        $(".rzvForm .hata").html("<div class='col-xs-12'><div class='alert alert-danger' style='margin: 10px 0;line-height: 18px;font-size: 15px;width:100%;'>" + arr["hata"] + "</div></div>");
                    } else {
                        if ($("input[name='qq']").val() != "1") {
                            $(".rzvForm .hata").hide();
                            $(".rzvForm [type='button']").addClass("d-none");
                            $(".rzvForm [type='submit']").removeClass("d-none");
                            $("input[name='temizlik']").val("Fiyata Dahil");
                            $("input[name='elektrik']").val("Fiyata Dahil");
                            $(".hesaplama_sonuclari").removeClass("d-none");
                            if (arr["hemenkirala"] == "true")
                                $(".hemen_kirala_btns").removeClass("d-none");

                            $(".hesaplama_sonuclari .return_priceday").html(arr["gunlukTutar"] + " x " + arr["toplamGun"] + (b_v.currentLang == "en" ? "Night" : " Gece"));
                            $(".hesaplama_sonuclari .return_price").html(arr["toplamTutar"]);

                            $(".hesaplama_sonuclari").each(function() {
                                $(this).find(".hs_item").eq(0).find("strong").html(arr["toplamGun"] + (b_v.currentLang == "en" ? "Night" : " Gece"));
                                $(this).find(".hs_item").eq(1).find("strong").html(arr["toplamTutar"]);

                                $(this).find(".hs_item").eq(4).find("strong").html(arr["onOdeme"]);
                                $(this).find(".hs_item").eq(5).find("strong").html(arr["KalanOdeme"]);
                                $(this).find(".hs_item").eq(6).find("strong").html(arr["toplamTutar"]);

                                if (arr["elektrik"] != undefined && arr["elektrik"] != "")
                                    $(this).find(".hs_item").eq(2).removeClass("d-none"),
                                    $(this).find(".hs_item").eq(2).find("strong").html(arr["elektrik"]),
                                    $(this).find(".hs_item").eq(6).find("strong").html(arr["elektrikToplamOdeme"]),
                                    $(this).find(".hs_item").eq(5).find("strong").html(arr["elektrikKalanOdeme"]),
                                    $("input[name='elektrik']").val(arr["elektrik"]);
                                else
                                    $(this).find(".hs_item").eq(2).hide();

                                if (arr["temizlik"] != undefined && arr["temizlik"] != "")
                                    $(this).find(".hs_item").eq(3).removeClass("d-none"),
                                    $(this).find(".hs_item").eq(3).find("strong").html(arr["temizlik"]),
                                    $(this).find(".hs_item").eq(6).find("strong").html(arr["elektrikTemizlikToplamOdeme"]),
                                    $(this).find(".hs_item").eq(5).find("strong").html(arr["elektrikTemizlikKalanOdeme"]),
                                    $("input[name='temizlik']").val(arr["temizlik"]);
                                else
                                    $(this).find(".hs_item").eq(2).hide();


                                if (arr["indirimTipi"] == "promosyon" || arr["indirimTipi"] == "indirim") {
                                    $(this).find(".hs_item").eq(0).html("<td><span style='margin-top: 10px;padding:0;'>" + arr["toplamGun"] + (b_v.currentLang == "en" ? "Night :" : " Gece :") + "</span></td><td class='text-right'><s style='display: block;color: red;float: right;'>" + arr["toplamTutar"] + "</s><span style='float: right; display: block;clear: both;'>" + arr["indirimlifiyati"] + "</span></td>");
                                }

                            });
                            if (arr["uyari"] != undefined && arr["uyari"] != "")
                                $(".rzvForm .hata").html("<div class='col-xs-12'><div class='alert alert-info' style='margin: 10px 0;line-height: 18px;font-size: 15px;width:100%; margin-bottom:30px;'>" + arr["uyari"] + "</div></div>");
                            if (arr["uyariIslem"] == "OdemeliVar")
                                $("#rzvForm").data("url", b_v.dataUrl + "?o=1");
                            else
                                $("#rzvForm").data("url", b_v.dataUrl);
                        }
                    }
                },
                error: function(xhr, status, text) {
                    $(".rzvForm .hata").show();
                    if (status == "timeout")
                        $(".rzvForm .hata").html("<div class='col-xs-12'><div class='alert alert-danger' style='margin: 10px 0;line-height: 18px;font-size: 15px;width:100%; margin-bottom:30px;'>" + (b_v.currentLang == "en" ? "Timeout!" : "Zaman Aşımı!") + "</div></div>");
                    else
                        $(".rzvForm .hata").html("<div class='col-xs-12'><div class='alert alert-danger' style='margin: 10px 0;line-height: 18px;font-size: 15px;width:100%; margin-bottom:30px;'>" + xhr.status + "</div></div>");
                },
                complete: function() {
                    $(".loadingx").hide();
                }
            });
        } else {
            $.notify((b_v.currentLang == "en" ? "Please specify the date of arrival and departure!" : "Lütfen giriş ve çıkış tarihinizi belirtiniz!"), "danger")
        }
    },
    talepgonder: function(btn) {
        $.ajax({
            type: 'post',
            url: '/ajax/talepgonder',
            data: $("#rzvForm").serialize(),
            beforeSend: function() {
                btn.addClass("disabled").prop("disabled", true).html((b_v.currentLang == "en" ? 'Sending<img src="/img/spacer.gif" style="background-image:url(\'/img/simple_loading.gif\');width: 29px;height: 29px;background-position: bottom center;background-size: contain;">' : (b_v.currentLang == "de" ? 'Senden<img src="/img/spacer.gif" style="background-image:url(\'/img/simple_loading.gif\');width: 29px;height: 29px;background-position: bottom center;background-size: contain;">' : 'Gönderiliyor<img src="/img/spacer.gif" style="background-image:url(\'/img/simple_loading.gif\');width: 29px;height: 29px;background-position: bottom center;background-size: contain;">')));
            },
            success: function(e) {
                var r = e.split(";/");
                if (r[0] == "0") {
                    if (r[2] == "hemenode")
                        window.location = $("#rzvForm").data("hemenkirala").replace("{rezid}", r[1]);
                    else {
                        $("#rzvForm").attr("action", $("#rzvForm").data("url"));
                        $("#rzvForm").append("<input type='hidden' name='kayitid' value='" + r[1] + "' />");
                        $("#rzvForm").submit();
                    }
                } else
                    swal("UYARI", r[1], "error");
            },
            complete: function() {
                btn.removeClass("disabled").prop("disabled", false).html((b_v.currentLang == "en" ? "Send Reservation Request" : (b_v.currentLang == "de" ? "Reservierungsanfrage senden" : "Rezervasyon Talebi Gönder")));
            }
        });
    },
    favori: function(baslik, title, url, resim, bolgebaslik, id, tip) {
        if (!$.boceksoft.cookie("favoriList") == "")
            var arr = JSON.parse($.boceksoft.cookie("favoriList"));
        else
            var arr = [];
        var item = {
            id: id,
            tip: tip,
            baslik: baslik,
            title: title,
            url: url,
            resim: resim,
            bolgebaslik: bolgebaslik
        }
        var silindex = -1;
        for (var i = 0; i < arr.length; i++)
            if (arr[i]["id"] == item.id && arr[i]["tip"] == item.tip)
                silindex = i;
        if (silindex == -1)
            arr.push(item);
        else
            arr.splice(silindex, 1);
        $.boceksoft.cookie("favoriList", JSON.stringify(arr), 7);
        $.boceksoft.favorigetir();
        $(".ui-tooltip").fadeOut();
    },
    favorigetir: function() {
        $("#favoriteList ul").html("<li style='COLOR: #005a82;'>" + (b_v.currentLang == "en" ? "There is no product in your favorite list." : "Favori listenizde herhangi bir ürün bulunmamaktadır.") + "</li>");
        $(".fav-btn").removeClass("active added");
        $(".fav-btn").attr("title", "Favoriye Ekle");
        if (!$.boceksoft.cookie("favoriList") == "") {
            var arr = JSON.parse($.boceksoft.cookie("favoriList"));
            $("#favoriteList ul").html("");
            if (arr.length > 0) {
                for (let index = 0; index < arr.length; index++) {
                    const item = arr[index];
                    $("#favoriteList ul").append(`
                    <li>
                        <div class="d-flex align-items-center position-relative text-dark">
                            <a href="/${item["url"]}"" title="${item["title"]}"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${b_v.scriptsPath}${item["resim"]}" alt="${item["title"]}" width="50" height="50" class="lazy t-cover"></a>
                            <a href="/${item["url"]}"" title="${item["title"]}" class="d-flex flex-column ms-1">
                                <span class="fs-8 fw-6">${item["baslik"]}</span>
                                <span class="fs-8"><i class="fal fa-map-pin"></i> ${item["bolgebaslik"]}</span>
                            </a>
                            <button class="btn shadow-none p-1 ms-auto favoriDel"  onclick="$.boceksoft.favori(\'${item["baslik"]}\',\'${item["title"]}\',\'${item["url"]}\',\'${item["resim"]}\',\'${item["bolgebaslik"]}\',${item["id"]},\'${item["tip"]}\')"><i class="far fa-times"></i></button>
                        </div>
                    </li>`);
                    $(window).trigger("scroll");

                    $("." + item["tip"] + "_" + item["id"]).addClass("active added");
                    $("." + item["tip"] + "_" + item["id"]).attr("title", "Favoriden Çıkar")
                }
                $("#favoriteList ul").append('<li class="btn btn-bvk-gradient-success w-100 fs-14 ls-09" onclick="$.boceksoft.karsilastir();$(\'.compare-panel\').addClass(\'panel-all-show\');">' + (window.location.pathname.split('/')[1] == "en" ? "COMPARE" : (window.location.pathname.split('/')[1] == "ru" ? "СРАВНИТЬ" : "KARŞILAŞTIR")) + '</li>');
            } else {
                $("#favoriteList ul").append('<li> Henüz Hiç Favori Eklemediniz.</li>');

            }
        }

    },
    karsilastir: function() {
        var arr = JSON.parse($.boceksoft.cookie("favoriList"));
        $(".compare-panel table").html("<tbody><tr><td><div class='loading'></div></td></tr></tbody>");
        var favoriId = "";
        for (let index = 0; index < arr.length; index++) {
            const item = arr[index];
            favoriId += (favoriId != "" ? "," : "") + item["id"];
        }
        $("ul.compare-panel-actions li .mix").html(arr.length);
        $.ajax({
            type: 'post',
            url: '/ajax/karsilastir',
            data: 'id=' + favoriId,
            success: function(result) {
                $(".compare-panel-btn").attr("loading", "ready");
                $(".compare-panel table").html(result);
            },
            complete: function() {
                $("body").css("cursor", "default");
            }
        });
    },
    lazyLoad: function(x) {
        $(window).scroll(function() {
            var item = $(".lazy");
            $(item).each(function(i) {
                if (!$(this).hasClass("loaded") && ($(this).data("loadmin") != undefined ? parseInt($(this).data("loadmin")) : $(window).width()) <= $(window).width()) {
                    var element = $(this);
                    var srcyebas = element.data("srcyebas"); //true ise eğer sadece Width ini alır.
                    var contain = element.data("contain"); //1 ise eğer contain seklinde getirir.
                    var background = element.data("background"); //1 ise eğer arkaplan resmine koyar (11x11)
                    var srcauto = element.data("srcauto"); //0 ise eğer Otomatik boyutlandırmayı kapatır (11x11)                  
                    srcauto = "0"; //0 ise eğer Otomatik boyutlandırmayı kapatır (11x11)                  
                    var backgroundColor = element.data("bgcolor"); //bos degilse ve contain 1 ise eğer xc1 e x255,255,255 tarzında ekleme yapar
                    if (backgroundColor == undefined) backgroundColor = "";
                    var bottom_of_object = $(this).offset().top;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if (bottom_of_window > bottom_of_object && $(this).data("src") != undefined) {
                        var im = $(this).data("src");
                        if ((srcauto == undefined || (srcauto != "false" && srcauto != false)) && im.indexOf("/uploads") > -1 && im.indexOf(".svg") == -1)
                            if ((srcyebas == undefined || srcyebas == "false") && element.height() > 10) {
                                im = im.replace("/view", "/{WxH}").replace("/thumbs", "/{WxH}").replace("/small", "/{WxH}");
                                if (im.indexOf("{WxH}") == -1)
                                    im = im.replace("/uploads", "/uploads/{WxH}");
                                if (element.prop("tagName") == "IMG" && background != "1")
                                    srcyebas = "true";
                            } else if (element.width() > 10) {
                            im = im.replace("/view", "/{W}").replace("/thumbs", "/{W}").replace("/small", "/{W}");
                            if (im.indexOf("{W}") == -1)
                                im = im.replace("/uploads", "/uploads/{W}");
                        }
                        if (im.indexOf("{WxH}") > -1 || im.indexOf("{W}") > -1)
                            im = im.replace("{WxH}", element.width() + 'x' + element.height() + (contain == "1" ? "xc1" + (backgroundColor.indexOf(",") > 0 ? "x" + backgroundColor : "") : "")).replace("{W}", element.width());
                        var img = new Image();
                        img.src = im;
                        img.onload = function(e) {
                            if (srcyebas != null)
                                element.attr("src", im);
                            else
                                element.css({ 'background-image': 'url(\'' + im + '\')' });
                            element.removeClass("loadingimg");
                            element.addClass("loaded");
                        }, img.onerror = function() {
                            im = "/img/no.png";
                            if (srcyebas != null)
                                element.attr("src", im);
                            else
                                element.css({ 'background-image': 'url(\'' + im + '\')' });
                            element.removeClass("loadingimg");
                            element.addClass("loaded");
                        }
                    }
                }
            });
        });
        $(window).trigger("scroll");
    },
    odeme: function(email, onaykodu) {
        if (email != '' && onaykodu != '') {
            $.ajax({
                type: 'post',
                url: '/ajax/onaykontrol/',
                data: 'mail=' + email + '&kod=' + onaykodu,
                success: function(e) {
                    var arr = e.split(";/");
                    if (arr[0] == "1") {
                        window.location.href = arr[1];
                    } else {
                        alert(arr[1]);
                    }
                }
            });
        } else {
            alert("Email veya onaykodu alanı boş olamaz.");
        }
    },
    hemenKirala: function() {

        var deg = $("select[name='tur']").val();

        $.ajax({
            type: 'get',
            url: '/ajax/hemenKirala',
            data: 'id=' + $.boceksoft.urlVeri("id") + '&tarihler=' + $.boceksoft.urlVeri("tarihler") + '&yetiskin=' + $.boceksoft.urlVeri("yetiskin") + '&cocuk=' + $.boceksoft.urlVeri("cocuk") + '&tur=' + deg,
            beforeSend: function() {
                $(".bas").html('<div class="text-center"><img src="' + b_v.scriptsPath + '/img/loader.gif" style="max-width:100%;display: inline-block;margin: 0 auto;float: none;" /></div>');
            },
            success: function(e) {
                $(".bas").html(e);
                $(".bookingForm").validator("destroy");
                $(".bookingForm").validator();
                var grayThemeCreditly = Creditly.initialize(
                    '.creditly-wrapper.gray-theme .expiration-month-and-year',
                    '.creditly-wrapper.gray-theme .credit-card-number',
                    '.creditly-wrapper.gray-theme .security-code',
                    '.creditly-wrapper.gray-theme .card-type'
                );
            },
            error: function() {

            }
        });


    },
    orderby: function(deg) {
        $("input[name='order_by']").val(deg).trigger("change");
    },
    getComments: function(id, page, islm) {
        $.ajax({
            type: 'post',
            url: '/ajax/getcomments',
            data: 'id=' + id + '&page=' + page + '&islm=' + islm,
            beforeSend: function() {
                $(".commentArea").css("background", "white");
                $(".commentArea").html('<div class="text-center" style="width:100%;"><img src="' + b_v.scriptsPath + '/img/loader.gif" style="max-width:100%;display: inline-block;margin: 0 auto;float: none;" /></div>');
            },
            success: function(e) {
                $(".commentArea").html(e);
                //$('.ItemRating').barrating({
                //    theme: 'bootstrap-stars',
                //    readonly: true
                //
                //});
            },
            error: function() {
                $.notify((b_v.currentLang == "en" ? "An error occurred while fetching comments." : "Yorumlar getirilirken bir hata oluştu."), 'danger');
            }


        });



    },
    levDist: function(s, t) {
        var d = [],
            n = s.length,
            m = t.length;
        if (n == 0) return m;
        if (m == 0) return n;
        for (var i = n; i >= 0; i--) d[i] = [];
        for (var i = n; i >= 0; i--) d[i][0] = i;
        for (var j = m; j >= 0; j--) d[0][j] = j;
        for (var i = 1; i <= n; i++) {
            var s_i = s.charAt(i - 1);
            for (var j = 1; j <= m; j++) {
                if (i == j && d[i][j] > 4) return n;
                var t_j = t.charAt(j - 1);
                var cost = (s_i == t_j) ? 0 : 1;
                var mi = d[i - 1][j] + 1;
                var b = d[i][j - 1] + 1;
                var c = d[i - 1][j - 1] + cost;
                if (b < mi) mi = b;
                if (c < mi) mi = c;
                d[i][j] = mi;
                if (i > 1 && j > 1 && s_i == t.charAt(j - 2) && s.charAt(i - 2) == t_j) {
                    d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + cost);
                }
            }
        }
        return d[n][m];
    },
    liveSearch: function() {
        $(".searchSuggestions input").on("click", function() {
            if ($(".searchSuggestions input").attr("loading") == undefined) {
                $(".searchSuggestions input").attr("loading", "loading");
                if (b_v.frontendMode == true) {
                    liveFn("Böceksoft Test Villası##Böceksoft Test Villası##detay.html##Muğla / Fethiye##villa1.jpg##BC1030;/Villa Hayat##Villa Hayat##detay.html##Muğla / Fethiye##villa1.jpg##BC1030");
                } else {
                    $.ajax({
                        type: 'post',
                        url: '/ajax/arama',
                        success: function(result) {
                            liveFn(result);
                        }
                    });
                }

                function liveFn(result) {
                    $(".searchSuggestions input").attr("loading", "ready");
                    var rows = result.split(";/");
                    var jsonObj = [];
                    for (i = 0; i < rows.length; i++) {
                        var row = rows[i].split("##");
                        var obj = {};
                        obj["baslik"] = row[0];
                        obj["title"] = row[1];
                        obj["url"] = row[2];
                        obj["bolgebaslik"] = row[3];
                        obj["resim"] = row[4];
                        obj["evkodu"] = row[5];
                        jsonObj.push(obj);
                    }
                    String.prototype.turkishToLower = function() {
                        var string = this;
                        var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
                        string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter) { return letters[letter]; })
                        return string.toLowerCase();
                    }

                    $("input[name='searchlocationcode']").on("keyup", function() {
                        var deg = $(this).val().turkishToLower();
                        if (deg.length > 1) {
                            $("ul.SpeedSearchList").html("");
                            var sonuclar = jsonObj.filter(function(n) {
                                return (n.baslik.turkishToLower().indexOf(deg) > -1 || n.evkodu.turkishToLower().indexOf(deg) > -1);
                            });
                            var baslikgoresonuc = 0;
                            var bolgegoresonuc = 0;
                            if (sonuclar.length == 0)
                                sonuclar = $.merge(sonuclar, $.grep(jsonObj, function(e) {
                                    return $.grep(deg.split(" "), function(tez) {
                                        if ($.grep((e.bolgebaslik != undefined ? e.bolgebaslik : "").turkishToLower().split(" "), function(e2) { return $.boceksoft.levDist(e2, tez) <= 2 && tez.length > 2 || e2 == tez || e2.indexOf(tez) > (e2 == tez ? 99 : -1) }).length > 0)
                                            bolgegoresonuc++;
                                        if ($.grep((e.baslik != undefined ? e.baslik : "").turkishToLower().split(" "), function(e2) { return $.boceksoft.levDist(e2, tez) <= 2 && tez.length > 2 || e2 == tez || e2.indexOf(tez) > (e2 == tez ? 99 : -1) }).length > 0)
                                            baslikgoresonuc++;
                                        return $.grep((e.bolgebaslik != undefined ? e.bolgebaslik : "").turkishToLower().split(" "), function(e2) { return $.boceksoft.levDist(e2, tez) <= 2 && tez.length > 2 || e2 == tez || e2.indexOf(tez) > (e2 == tez ? 99 : -1) }).length > 0 ||
                                            $.grep((e.baslik != undefined ? e.baslik : "").turkishToLower().split(" "), function(e2) { return $.boceksoft.levDist(e2, tez) <= 2 && tez.length > 2 || e2 == tez || e2.indexOf(tez) > (e2 == tez ? 99 : -1) }).length > 0
                                    }).length == deg.split(" ").length && $.grep(sonuclar, function(e2) { return e2.baslik == e.baslik }).length == 0
                                }));
                            sonuclar.sort(function(a, b) {
                                if (baslikgoresonuc > bolgegoresonuc || (baslikgoresonuc == 0 && bolgegoresonuc == 0))
                                    return a.baslik.length - b.baslik.length;
                                else
                                    return a.bolgebaslik.length - b.bolgebaslik.length;
                            });

                            for (var z = 0; z < (sonuclar.length > 9 ? 10 : sonuclar.length); z++) {
                                var html = `
                                    <li>
                                        <a href="${sonuclar[z].url}" class="d-flex align-items-center position-relative text-dark mb-2">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${b_v.scriptsPath+(sonuclar[z].resim != "" ? sonuclar[z].resim.split(",")[0] : sonuclar[z].resim)}" alt="${sonuclar[z].title }" width="50" height="50" class="lazy t-cover">
                                            <div class="d-flex flex-column ms-1">
                                                <span class="fs-8 fw-6">${sonuclar[z].baslik}</span>
                                                <span class="fs-8"><i class="fal fa-map-pin"></i> ${sonuclar[z].bolgebaslik}</span>
                                            </div>
                                        </a>
                                    </li>
                                `;
                                $("ul.SpeedSearchList").append(html);
                            }
                            $(".SpeedSearchList").fadeIn(300);
                            $(window).trigger("scroll");
                            $("ul.SpeedSearchList").on("scroll", function() {
                                $(window).trigger("scroll");
                            });
                        } else {
                            $(".SpeedSearchList").fadeOut(300);
                        }
                    });

                    if ($(".searchSuggestions input").is(":focus"))
                        $("input[name='searchlocationcode']").trigger("keyup");
                }
            }
        });
        if ($(".searchSuggestions input").is(":focus"))
            $(".searchSuggestions input").trigger("click");
    },
    villasCalendar: function(id, doviz, girisSaati, cikisSaati, villaAdi) {
        if ($(".modalRezervationForm").length > 0)
            $(".modalRezervationForm .girisSaati").html(girisSaati),
            $(".modalRezervationForm .cikisSaati").html(cikisSaati),
            $("#calendarModal .villaCalendar .calendarInfo .villaName").html(villaAdi),
            $(".modalRezervationForm .homesIdValue").val(id);
        if (b_v.frontendMode == false)
            $.ajax({
                type: 'post',
                url: '/ajax/villatarih',
                data: 'id=' + id + "&doviz=" + doviz,
                success: function(e) {
                    takvimcalistir(e);
                }
            });
        else
            takvimcalistir("########################");

        function takvimcalistir(e) {
            var arr = e.split("##");
            b_v.giristarihler = arr[0].split(","),
                b_v.cikistarihler = arr[1].split(","),
                b_v.dolutarihler = arr[2].split(","),
                b_v.Rgiristarihler = arr[3].split(","),
                b_v.Rcikistarihler = arr[4].split(","),
                b_v.RezervasyonBekleyenler = arr[5].split(","),
                b_v.RezervasyonSaatler = arr[6].split(","),
                b_v.calendarFiyatlarTarihler = arr[8].split(","),
                b_v.calendarFiyatlar = arr[9].split(","),
                b_v.calendarFiyatlarDovizIcon = arr[10];
            b_v.calendarFiyatlarDovizGiris = arr[11];
            b_v.calendarFiyatlarDovizCikis = arr[12];
            b_v.activedays = [];
            if (arr[7] != "")
                b_v.activedays = $.parseJSON(arr[7]);
            b_v.aynilar = [];
            $.each(b_v.giristarihler, function(indexInArray, valueOfElement) {
                if ($.inArray(b_v.giristarihler[indexInArray], b_v.cikistarihler) > -1)
                    b_v.aynilar.push(b_v.giristarihler[indexInArray]);
            });
            b_v.aynilar_dolu_opsiyon = [];
            $.each(b_v.cikistarihler, function(indexInArray, valueOfElement) {
                if ($.inArray(b_v.cikistarihler[indexInArray], b_v.Rgiristarihler) > -1)
                    b_v.aynilar_dolu_opsiyon.push(b_v.cikistarihler[indexInArray]);
            });
            b_v.aynilar_opsiyon_dolu = [];
            $.each(b_v.Rcikistarihler, function(indexInArray, valueOfElement) {
                if ($.inArray(b_v.Rcikistarihler[indexInArray], b_v.giristarihler) > -1)
                    b_v.aynilar_opsiyon_dolu.push(b_v.Rcikistarihler[indexInArray]);
            });
            $.boceksoft.villasCalendarEvents("#reservationdate1", "#reservationdate2");
            if ($("#calendarReservationdate1").length > 0)
                $.boceksoft.villasCalendarEvents("#calendarReservationdate1", "#calendarReservationdate2");

            if ($.boceksoft.urlVeri("q") != "") {
                var a = $.boceksoft.urlVeri("q").split("-");
                $("#reservationdate1").val(a[0]);
                $("#reservationdate2").val(a[1]);
                $("#reservationdate2").trigger("change");
            }

            var genislik = $(window).width();
            if ($("#calendar").data("datepicker") != "false") {
                let calendarItem = 1;
                if ($("#calendar").data("calendar-item") != undefined) {
                    calendarItem = $("#calendar").data("calendar-item");
                    if ($("#calendar").data("calendar-responsive") != undefined) {
                        let calendarResonsiveItem = $.parseJSON($("#calendar").data("calendar-responsive").replace(/'/g, '"'));
                        calendarResonsiveItem.forEach(element => {
                            if (element.size >= $(window).width())
                                calendarItem = element.item;
                        });
                    }
                }
                $("#calendar").datepicker({
                    monthNamesShort: (b_v.currentLang == "en" ? $.datepicker.regional["en"].monthNames : $.datepicker.regional["tr"].monthNames),
                    numberOfMonths: calendarItem,
                    minDate: '0',
                    dateFormat: 'dd.mm.yy',
                    beforeShowDay: function(date) {
                        return $.boceksoft.calendarBeforeShowDay(date, "", "", false);
                    },
                    onSelect: function(setDate) {
                        var ssx = setDate.split('.');
                        if (b_v.Calendardate1 == undefined)
                            b_v.Calendardate1 = ssx[2] + "-" + ssx[1] + "-" + ssx[0] + "T00:00:00";
                        else if (b_v.Calendardate2 == undefined && b_v.Calendardate1 != ssx[2] + "-" + ssx[1] + "-" + ssx[0])
                            b_v.Calendardate2 = ssx[2] + "-" + ssx[1] + "-" + ssx[0] + "T00:00:00";
                        else
                            b_v.Calendardate1 = ssx[2] + "-" + ssx[1] + "-" + ssx[0] + "T00:00:00",
                            b_v.Calendardate2 = undefined;
                        if (b_v.Calendardate1 != undefined && b_v.Calendardate2 != undefined) {
                            var datex1 = new Date(b_v.Calendardate1.replace(' ', 'T'));
                            var datex2 = new Date(b_v.Calendardate2.replace(' ', 'T'));
                            var event1 = "#calendarReservationdate1",
                                event2 = "#calendarReservationdate2";
                            var event1Input = "reservationdate1",
                                event2Input = "reservationdate2";
                            if (datex1 > datex2)
                                event1 = "#calendarReservationdate2", event2 = "#calendarReservationdate1", event1Input = "reservationdate2", event2Input = "reservationdate1";
                            $(event1).data("id", $("#reservationdate1").data("id"));
                            $(event2).data("id", $("#reservationdate1").data("id"));
                            if ($(event1).data("label-show") == "1")
                                $(event1).parents("label").eq(0).find(".date").html((datex1.getDate() < 10 ? "0" : "") + datex1.getDate() + "." + ((datex1.getMonth() + 1) < 10 ? "0" : "") + (datex1.getMonth() + 1) + "." + datex1.getFullYear()),
                                $(event1).parents("label").eq(0).find(".dateName").html($.boceksoft.dateName(datex1.getDay()));
                            if ($(event2).data("label-show") == "1")
                                $(event2).parents("label").eq(0).find(".date").html((datex2.getDate() < 10 ? "0" : "") + datex2.getDate() + "." + ((datex2.getMonth() + 1) < 10 ? "0" : "") + (datex2.getMonth() + 1) + "." + datex2.getFullYear()),
                                $(event2).parents("label").eq(0).find(".dateName").html($.boceksoft.dateName(datex2.getDay()));
                            $("[name='" + event1Input + "']").val((datex1.getDate() < 10 ? "0" : "") + datex1.getDate() + "." + ((datex1.getMonth() + 1) < 10 ? "0" : "") + (datex1.getMonth() + 1) + "." + datex1.getFullYear());
                            $("[name='" + event2Input + "']").val((datex2.getDate() < 10 ? "0" : "") + datex2.getDate() + "." + ((datex2.getMonth() + 1) < 10 ? "0" : "") + (datex2.getMonth() + 1) + "." + datex2.getFullYear());
                            $(event1).trigger("change");
                            $(".modalRezervationForm .contactForm form .successDate").hide(),
                                $(".modalRezervationForm .contactForm form [type='submit']").addClass("d-none");
                            if ($(".modalRezervationForm").length > 0)
                                if ($(window).height() > 380)
                                    $(".modalRezervationForm").addClass("show");
                                else
                                    $("#reservationdate1").trigger("click");
                            else
                                $("#reservationdate1").trigger("change");
                        }
                    }
                });
                $("#calendarModal .villaCalendar .loading").hide();
                $(document).on("mouseover", ".daterangepicker td", function() {
                    var a = new Date($(this).data("date"));
                    var gun = parseInt(a.getDate());
                    var yil = a.getFullYear();
                    var ay = a.getMonth() + 1;
                    var actualDate = yil + "-" + ay + "-" + gun;
                    if (b_v.RezervasyonBekleyenler.indexOf(actualDate) >= 0) {
                        var ArrayIndexControl = parseInt((b_v.RezervasyonBekleyenler.indexOf(actualDate)));
                        var attr = b_v.RezervasyonSaatler[ArrayIndexControl];
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Waiting for Payment (Time remaining ' + attr + ' hours)' : 'Ödeme Bekliyor (Kalan süre ' + attr + ' saat ' + ')'));
                    } else if (aynilar.indexOf(actualDate) >= 0 || b_v.aynilar_dolu_opsiyon.indexOf(actualDate) >= 0 || b_v.aynilar_opsiyon_dolu.indexOf(actualDate) >= 0)
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Entry / Exit Day' : 'Giriş/Çıkış Günü'));
                    else if (b_v.giristarihler.indexOf(actualDate) >= 0)
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Entry Date' : 'Giriş Tarihi'));
                    else if (b_v.cikistarihler.indexOf(actualDate) >= 0)
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Exit Date' : 'Çıkış Tarihi'));
                    else if (b_v.dolutarihler.indexOf(actualDate) >= 0)
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Not Avaible' : 'Müsait Değil'));
                    else if (b_v.Rgiristarihler.indexOf(actualDate) >= 0)
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Entry Date' : 'Giriş Tarihi'));
                    else if (b_v.Rcikistarihler.indexOf(actualDate) >= 0)
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Exit Date' : 'Çıkış Tarihi'));
                    else
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Avaible' : 'Müsait'));
                });
                $(document).on("mouseover", ".ui-datepicker tbody tr td a", function() {
                    var gun = $(this).html();
                    var gun = parseInt(gun);
                    var yil = $(this).parent("td").attr("data-year");
                    var ay = $(this).parent("td").attr("data-month");
                    ay = parseInt(ay) + parseInt(1);
                    var actualDate = yil + "-" + ay + "-" + gun;
                    if (b_v.RezervasyonBekleyenler.indexOf(actualDate) >= 0) {
                        var ArrayIndexControl = parseInt((b_v.RezervasyonBekleyenler.indexOf(actualDate)));
                        var attr = b_v.RezervasyonSaatler[ArrayIndexControl];
                        $(this).attr('data-content', (b_v.currentLang == "en" ? 'Waiting for Payment (Time remaining ' + attr + ' hours)' : 'Ödeme Bekliyor (Kalan süre ' + attr + ' saat ' + ')'));
                    }
                });
            }
        }
    },
    villasCalendarEvents: function(date1Event, date2Event) {
        $(date1Event).datepicker({
            minDate: +0,
            numberOfMonths: 1,
            beforeShowDay: function(date) {
                return $.boceksoft.calendarBeforeShowDay(date, date1Event, date2Event, true);
            },
            onSelect: function() {
                var start_date = $(date1Event).val();
                var a = start_date.substring(0, 2);
                var b = start_date.substring(3, 5);
                var c = start_date.substring(6, 10);
                var start_date = new Date(c + "-" + b + "-" + a);
                var end_date = new Date(c + "-" + b + "-" + a);
                if ($(date2Event).val() == "" || start_date > end_date) {
                    var start_time = new Date(start_date);
                    start_time.setDate(start_time.getDate() + 1);
                    var ay = ((start_time.getMonth() + 1).toString().length == 1) ? "0" + (start_time.getMonth() + 1).toString() : (start_time.getMonth() + 1).toString();
                    var gun = (start_time.getDate().toString().length == 1) ? "0" + start_time.getDate().toString() : start_time.getDate().toString();
                    $(date2Event).val(gun + "." + ay + "." + start_time.getFullYear());
                }
                if ($(date1Event).data("label-show") == "1") {
                    $(date1Event).parent().find("button span").html(a + "." + b + "." + c);
                }
                $("[name='reservationdate1']").val(a + "." + b + "." + c);
            },
            onClose: function(selectedDate) {
                setTimeout(function() {
                    $(date1Event).trigger("change");
                    $(date2Event).datepicker("option", "minDate", selectedDate).focus();
                }, 1);
            }
        });
        $(date2Event).datepicker({
            minDate: 0,
            numberOfMonths: 1,
            monthNamesShort: $.datepicker.regional["tr"].monthNames,
            onSelect: function() {
                var start_date = $(date2Event).val();
                var a = start_date.substring(0, 2);
                var b = start_date.substring(3, 5);
                var c = start_date.substring(6, 10);
                var start_date = new Date(c + "-" + b + "-" + a);
                if ($(date2Event).data("label-show") == "1") {
                    $(date2Event).parent().find("button span").html(a + "." + b + "." + c);
                }
                $("[name='reservationdate2']").val(a + "." + b + "." + c);
            },
            beforeShowDay: function(date) {
                return $.boceksoft.calendarBeforeShowDay(date, date1Event, date2Event, true);
            },
            onClose: function(selectedDate) {
                setTimeout(function() {
                    $(date2Event).trigger("change");
                }, 1);
            }
        });
        $(date1Event + "," + date2Event).on("change", function() {
            $("#rzvForm #hu").parent().remove();
            var par = $(date1Event).val().split(".");
            var par2 = $(date2Event).val().split(".");
            var pickerdate1 = new Date(par[2], parseInt(par[1]) - 1, par[0]);
            var pickerdate2 = new Date(par2[2], parseInt(par2[1]) - 1, par2[0]);
            var v = 1;
            //Kuralları Dön
            for (var i = 0; i < b_v.activedays.length; i++) {
                var d1 = b_v.activedays[i].date1.split(".");
                var date1 = new Date(d1[2], d1[1] - 1, d1[0]);
                var d2 = b_v.activedays[i].date2.split(".");
                var date2 = new Date(d2[2], d2[1] - 1, d2[0]);
                //Bu Tarih kuralın geçerli olduğu tarihler arasında mı?
                if (pickerdate1 >= date1 && pickerdate1 <= date2) {
                    v = 0;
                    var tt = [];
                    //Evet ise kurala ait maddeleri dön
                    for (var z = 0; z < b_v.activedays[i].maddeler.length; z++) {
                        var gecti = 0;
                        var errmsg = [];
                        //Madde Giriş Tarihi Maddesi ise ona göre yol izle
                        if (b_v.activedays[i].maddeler[z].id == "1") {
                            var q1 = b_v.activedays[i].maddeler[z].value.split(";/");
                            for (var t = 0; t < q1.length; t++) {
                                var item = q1[t].split(":");
                                if (pickerdate1.getDay() == item[0] && (Math.round((pickerdate2 - pickerdate1) / 1000 / 60 / 60 / 24) - 1) >= parseInt(item[1]) - 1) {
                                    gecti = 1;
                                }
                            }

                            if (gecti == 0) {
                                q1 = b_v.activedays[i].maddeler[z].value.split(";/");
                                var txt = "";
                                var gun = $.boceksoft.dateName(pickerdate1.getDay());
                                var girisyapabilir = 0;
                                for (t = 0; t < q1.length; t++) {
                                    item = q1[t].split(":");
                                    if (pickerdate1.getDay() == item[0])
                                        girisyapabilir = 1;
                                }
                                if (girisyapabilir == 0)
                                    errmsg.push((b_v.currentLang == "en" ? "You cannot enter this villa on " + gun : "Bu villaya " + gun + " günü giriş yapamazsınız.")),
                                    $(".modalRezervationForm").removeClass("show"),
                                    swal((b_v.currentLang == "en" ? "You cannot enter this villa on " + gun : "Bu villaya " + gun + " günü giriş yapamazsınız."));
                                else
                                    for (t = 0; t < q1.length; t++) {
                                        item = q1[t].split(":");
                                        if (pickerdate1.getDay() == item[0] && (Math.round((pickerdate2 - pickerdate1) / 1000 / 60 / 60 / 24) - 1) < parseInt(item[1]))
                                            errmsg.push((b_v.currentLang == "en" ? "Minimum rental for " + gun + " is " + item[1] + " nights" : gun + " girişleri için minumum konaklama " + item[1] + " gecedir.")),
                                            $(".modalRezervationForm").removeClass("show"),
                                            swal((b_v.currentLang == "en" ? "Minimum rental for " + gun + " is " + item[1] + " nights" : gun + " girişleri için minumum konaklama " + item[1] + " gecedir."));

                                    }
                            }
                        }
                        tt.push((gecti == 1 ? "true" : "false"));
                    }
                    if (tt.indexOf("false") > -1)
                        v = 0;
                    else
                        v = 1;
                }
            }
            if (v == 0) {
                $("body").append("<input name='qq' value='1' type='hidden' />");
                $("#afterCalculate").hide();
                var html = "<ul id='hu' style='margin-bottom: 35px;'>";
                for (var b = 0; b < errmsg.length; b++)
                    html += "<li style='background: #e9291e;color: white;padding: 10px;'>" + errmsg[b] + "</li>";
                html += "</ul>";
                console.log(html);
                $("#rzvForm .rzvContainer").append("<div class='col-xs-12'>" + html + "</div>");
                $("#rzvForm .calculateBtn").addClass("btn disabled");
            } else {
                $("input[name='qq']").remove();
                $("#rzvForm .calculateBtn").removeClass("btn disabled");
                if ($(date1Event).val() != "" && $(date2Event).val() != "")
                    $.boceksoft.hesapla($(date1Event).val(), $(date2Event).val(), $(date1Event).data("id"));
                $("input[name='reservationdate1'][type='hidden']").val($(date1Event).val());
                $("input[name='reservationdate2'][type='hidden']").val($(date2Event).val());
            }
        });
    },
    calendarBeforeShowDay: function(date, tarih1Event, tarih2Event, tarihSecimi) {
        if (tarihSecimi) {
            b_v.Calendardate1 = $.datepicker.parseDate("dd.mm.yy", ($(tarih1Event).val() != undefined ? $(tarih1Event).val() : ""));
            b_v.Calendardate2 = $.datepicker.parseDate("dd.mm.yy", ($(tarih2Event).val() != undefined ? $(tarih2Event).val() : ""));
        }
        var m = date.getMonth(),
            d = date.getDate(),
            y = date.getFullYear();
        var EkTitle = "";
        var EkClass = "";
        var EndReturnClass = "";
        var nowDate = new Date(y + '/' + (m + 1) + '/' + d + '');
        if (!tarihSecimi)
            if (b_v.Calendardate1 != undefined && b_v.Calendardate2 != undefined)
                EndReturnClass = ((nowDate == new Date(b_v.Calendardate1)) || (new Date(b_v.Calendardate1) >= nowDate && new Date(b_v.Calendardate2) <= nowDate) || (nowDate >= new Date(b_v.Calendardate1) && nowDate <= new Date(b_v.Calendardate2))) ? ((nowDate > new Date(b_v.Calendardate1) && nowDate < new Date(b_v.Calendardate2)) || (nowDate > new Date(b_v.Calendardate2) && nowDate < new Date(b_v.Calendardate1)) ? "dp-highlight2" : ((nowDate > new Date(b_v.Calendardate1)) ? "dp-highlight-cikis" : "dp-highlight-giris")) + " dp-highlight" : "";
        EkClass = EndReturnClass;

        var priceDateIndex = $.inArray(y + '-' + (m + 1) + '-' + d, b_v.calendarFiyatlarTarihler);
        if (priceDateIndex > 0)
            EkTitle = $.boceksoft.doviz_cevir(b_v.calendarFiyatlar[priceDateIndex], b_v.calendarFiyatlarDovizGiris, b_v.calendarFiyatlarDovizCikis, b_v.calendarFiyatlarDovizIcon, true);
        for (i = 0; i < b_v.dolutarihler.length; i++)
            if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.aynilar) >= 0)
                return [true, 'jutdolus2 ui-datepicker-unselectable tooltip-g ' + EkClass, ''];
            else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.aynilar_dolu_opsiyon) >= 0)
            return [true, 'dcikisogiris  tooltip-g ' + EkClass, ''];
        else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.aynilar_opsiyon_dolu) >= 0)
            return [true, 'ocikisdgiris  tooltip-g ' + EkClass, ''];
        else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.giristarihler) >= 0)
            return [true, 'jutcikis ' + EkClass, EkTitle];
        else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.cikistarihler) >= 0)
            return [true, 'jutgiris ' + EkClass, EkTitle];
        else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.dolutarihler) != -1)
            return [true, 'jutdolus ui-datepicker-unselectable tooltip-g ', ''];
        for (i = 0; i < b_v.RezervasyonBekleyenler.length; i++)
            if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.Rgiristarihler) >= 0)
                return [true, 'jutrzvcikis tooltip-r ' + EkClass, EkTitle];
            else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.Rcikistarihler) >= 0)
            return [true, 'jutrzvgiris tooltip-r ' + EkClass, EkTitle];
        else if ($.inArray(y + '-' + (m + 1) + '-' + d, b_v.RezervasyonBekleyenler) != -1)
            return [true, 'jutrzrv ui-datepicker-unselectable tooltip-r ', ''];
        if (tarihSecimi)
            return [true, b_v.Calendardate1 && ((date.getTime() == b_v.Calendardate1.getTime()) || (b_v.Calendardate2 && date >= b_v.Calendardate1 && date <= b_v.Calendardate2)) ? "dp-highlight" : "", EkTitle];
        else
            return [true, EndReturnClass, EkTitle];
    },
    dateName: function(getDay) {
        var veri = getDay.toString();
        if (veri == "0")
            return "Pazar";
        else if (veri == "1")
            return "Pazartesi";
        else if (veri == "2")
            return "Salı";
        else if (veri == "3")
            return "Çarşamba";
        else if (veri == "4")
            return "Perşembe";
        else if (veri == "5")
            return "Cuma";
        else
            return "Cumartesi";
    },
    showCalendarModal: function(id, doviz, girisSaati, cikisSaati, villaAdi) {
        b_v.Calendardate1 = undefined, b_v.Calendardate2 = undefined;
        $("#calendarModal").addClass("show"),
            $("#calendarModal .villaCalendar .loading").show(),
            $("#calendarModal .calendarBody").html("<div id='calendar' class='calendarpage' data-calendar-item='6' data-id='" + id + "' data-villa-adi='" + villaAdi + "' data-doviz='" + doviz + "' data-giris='" + girisSaati + "' data-cikis='" + cikisSaati + "'></div>");
        $.boceksoft.villasCalendar(id, doviz, girisSaati, cikisSaati, villaAdi);
    },
    urlVeri: function(a) {
        var b = new RegExp("[?&]" + a + "=([^&#]*)").exec(window.location.href);
        return b ? b[1] || 0 : ""
    },
    shuffle: function(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },
    whatsapp: function() {
        var date = new Date();
        if ($("a.whatsappChat,.whatsappBtn").attr("loading") == undefined) {
            $("a.whatsappChat,.whatsappBtn").attr("loading", "loading");
            $.ajax({
                url: "/ajax/whatsapp",
                success: function(xml) {
                    $("a.whatsappChat,.whatsappBtn").attr("loading", "ready");
                    if (xml != "") {
                        $xml = $(xml);
                        var whatsappAktif = false;
                        var temsilciler = [];
                        var lastwphref = "";
                        $xml.find("data").find("user").each(function(e) {
                            if ($xml.find("data").find("user").eq(e).find("activeTime").text() != undefined && $xml.find("data").find("user").eq(e).find("activeTime").text() != "") {
                                var TemsilciTimes = $xml.find("data").find("user").eq(e).find("activeTime").text().split(" - ");
                                if (TemsilciTimes.length == 2)
                                    if (TemsilciTimes[0].indexOf(":") > 1 && TemsilciTimes[1].indexOf(":") > 1) {
                                        var nowTime = parseInt(date.getHours() + '' + (date.getMinutes() < 10 ? "0" : "") + '' + parseInt(date.getMinutes()));

                                        var BasTarih = TemsilciTimes[0].split(":");
                                        var StrTime = BasTarih[0] + '' + (parseInt(BasTarih[1]) < 10 ? "0" : "") + '' + parseInt(BasTarih[1])
                                        var BitTarih = TemsilciTimes[1].split(":");
                                        var EndTime = (parseInt(BitTarih[0]) == 0 ? "24" : BitTarih[0]) + '' + (parseInt(BitTarih[1]) < 10 ? "0" : "") + '' + parseInt(BitTarih[1]);

                                        if (parseInt(nowTime) >= parseInt(StrTime) && parseInt(nowTime) <= parseInt(EndTime) || (parseInt(StrTime) > parseInt(EndTime) && (parseInt(nowTime) >= parseInt(StrTime) || parseInt(nowTime) <= parseInt(EndTime)))) {
                                            whatsappAktif = true;
                                            var wptemsilci = "";
                                            lastwphref = "https://wa.me/" + $xml.find("data").find("user").eq(e).find("phone").text().replace("+", "").replace(/ /g, "") + "?text=" + $("#WhatsappPanelIletisim").data("whatsapp-text");
                                            wptemsilci += "<li>";
                                            wptemsilci += "<a onclick='gtag_report_conversion();' target='_blank' href='https://wa.me/" + $xml.find("data").find("user").eq(e).find("phone").text().replace("+", "").replace(/ /g, "") + "?text=" + $("#WhatsappPanelIletisim").data("whatsapp-text") + "'>";
                                            wptemsilci += "<img src='/img/spacer.gif' class='lazy' data-src='/img/whatsapp.png' />";
                                            wptemsilci += "<span>" + $xml.find("data").find("user").eq(e).find("name").text() + "</span>";
                                            wptemsilci += "<img src='/img/spacer.gif' class='lazy' data-src='/uploads/" + $xml.find("data").find("user").eq(e).find("profile").text() + "' />";
                                            wptemsilci += "</a>";
                                            wptemsilci += "</li>";
                                            temsilciler.push(wptemsilci);
                                        }

                                    }
                            }
                        });
                        $.boceksoft.shuffle(temsilciler);
                        var whatsappIletisim = "<ul>";
                        for (i = 0; i < temsilciler.length; i++)
                            whatsappIletisim += temsilciler[i];
                        whatsappIletisim += "</ul>";
                        if (whatsappAktif == true)
                            $("#WhatsappPanelIletisim .temsilciler").html(whatsappIletisim);
                        else
                            $("a.whatsappChat,.whatsappBtn").addClass("d-none d-sm-none d-md-none d-xs-none d-xl-none");
                        if (temsilciler.length == 1) {
                            $("a.whatsappChat").attr("href", lastwphref).attr("target", "_blank").removeAttr("onclick");
                        }
                    }
                    $(window).trigger("scroll");
                }
            });
        }

    },
    doviz_kurlari: function() {
        $.ajax({
            url: "/ajax/dovizkurlar",
            type: "POST",
            data: "",
            success: function(e) {
                var arr = JSON.parse(e);
                $("[data-click-btn][data-doviz-code='tl']").data("kur", arr["tl"]);
                $("[data-click-btn][data-doviz-code='dolar']").data("kur", arr["dolar"]);
                $("[data-click-btn][data-doviz-code='euro']").data("kur", arr["euro"]);
                $("[data-click-btn][data-doviz-code='pound']").data("kur", arr["pound"]);
                $("[data-now-currency]").html(arr["currency"]);
            }
        });
    },
    doviz_cevir: function(tutar, giris, cikis, birim, birimgoster) {
        var birimFiyati = parseFloat(tutar) / parseFloat(cikis.toString().replace(",", "."));
        var sonuc = (Math.round(parseFloat(birimFiyati) * parseFloat(giris.toString().replace(",", ".")))).toString();
        if (birimgoster == true)
            sonuc = (birim != "TL" && birim != "â‚º" && birim != "₺" ? birim + " " : "") + sonuc + (birim == "TL" || birim == "â‚º" || birim == "₺" ? " " + birim : "");
        return sonuc;
    },
    event_click: function() {
        $("[data-click-btn]").on("click", function() {
            var event = $(this);
            var eventIslem = event.data("click-btn");
            if (eventIslem == "doviz") {
                var eventIcon = event.data("doviz-icon"),
                    eventKur = event.data("kur"),
                    eventDovizCode = event.data("doviz-code");
                $("[data-doviz][data-doviz-goster]").each(function() {
                    var eachEvent = $(this);
                    var eachDoviz = eachEvent.data("doviz"),
                        eachKur = eachEvent.data("kur"),
                        eachPrice = eachEvent.data("price"),
                        eachDovizGoster = eachEvent.data("doviz-goster");
                    eachEvent.html($.boceksoft.doviz_cevir(eachPrice, (eachKur != "0" ? eachKur : $("[data-click-btn][data-doviz-code='" + eachDoviz + "']").data("kur")), eventKur, eventIcon, (eachDovizGoster == "1" ? true : false)));
                });
                $("[data-now-currency]").html("Yükleniyor...");
                $.ajax({
                    url: "/exchange/" + (eventDovizCode != "tl" ? (eventDovizCode != "dolar" ? (eventDovizCode != "pound" ? "euro" : "gbp") : "dolar") : "tl"),
                    data: "yonlendirme=0",
                    type: "get",
                    success: function() {
                        if ($("#reservationdate2").length > 0 && $("#reservationdate2").val() != "")
                            $("#reservationdate2").trigger("change");
                        $("[data-now-currency]").html(event.html());
                    }
                });
            }
        });
    },
    includeControl: function() {
        if ($("[data-ajax='true']").length > 0) {
            $("[data-ajax='true']").on("click", function() {
                if (!$("[data-ajax='true']").hasClass("trueclick")) {
                    $.boceksoft.include('js', 'validator', b_v.scriptsPath + '/js/validator.js', '', undefined, "");
                    $.boceksoft.include('js', 'jquery.form', b_v.scriptsPath + '/js/jquery.form.js', '', undefined, "");
                    $.boceksoft.include('js', 'bootbox', b_v.scriptsPath + '/js/bootbox.min.js', '', undefined, "");
                    $.boceksoft.include('js', 'sweetalert', b_v.scriptsPath + '/js/sweetalert.min.js', '', $(this), '$("[data-ajax=\'true\']").addClass("trueclick");$.boceksoft.formAjax();');
                    return false;
                }
            });
        }
        $(document).on("click", "[data-fancybox]", function() {
            if ($(this).data("load") == "false" || $(this).data("load") == undefined) {
                $("[data-fancybox]").data("load", "true");
                $.boceksoft.include('css', 'fancybox', b_v.scriptsPath + '../css/jquery/jquery.fancybox.min.css', '', $(this), "");
                $.boceksoft.include('js', 'fancybox', b_v.scriptsPath + '../js/jquery/jquery.fancybox.min.js', '', $(this), " event.click()");
                return false;
            }
        });
    },
    formAutoFill: function(form, data, cat) {
        data.split("&").filter(function(e) {
            let x = e.split("="),
                u = form.find("[name='" + x[0] + "']"),
                i = "val";
            console.log(x[1]);
            console.log(("[name='" + x[0] + "'][value='" + x[1].replace(/,/g, "'],[name='" + x[0] + "'][value='") + "']"));
            if (cat == "listingload" && (x[0] == "tip" || x[0] == "bolge" ||
                    x[0] == "indirimliVillalar" || x[0] == "esnekTarih") || u.length > 0)
                u = form.find("[name='" + x[0] + "'][value='" + x[1].replace(/,/g, "'],[name='" + x[0] + "'][value='") + "']"),
                i = "checked";
            if (i == "val") u.val(x[1]);
            else if (i == "checked") u.prop("checked", true);
            if (u.length > 0) return true;
            return false;
        });
    },
    onReady: function() {
        if ($("#listingForm").length > 0 && document.location.href.indexOf("?") > -1)
            $.boceksoft.formAutoFill($("#listingForm"), document.location.href.split("?")[1], "listingload");

        $.boceksoft.includeControl();
        $.boceksoft.recaptcha();
        $.boceksoft.lazyLoad(".lazy");
        $.boceksoft.favorigetir();
        if (!b_v.frontendMode) {
            $.boceksoft.instagram();
            $.boceksoft.whatsapp();
            $.boceksoft.doviz_kurlari();
        }
        $.boceksoft.liveSearch();
        if ($(".commentArea").data("id") != undefined)
            $.boceksoft.getComments($(".commentArea").data("id"), 1, $(".commentArea").data("islm"));
        if ($("#calendar").data("id") != undefined)
            $.boceksoft.villasCalendar($("#calendar").data("id"), $("#calendar").data("doviz"), $("#calendar").data("giris"), $("#calendar").data("cikis"), $("#calendar").data("villa-adi"));
        $.boceksoft.ajaxAuto("[data-ajaxAuto='true']");
        $.boceksoft.event_click();
    }
};

$(document).ready(function() {
    b_v = $.boceksoft.variables; //kısa kod kullanımı için.
    $.boceksoft.onReady();
});



var bocekObj = {};
$.variable = new Proxy(bocekObj, {
    set: function(target, key, value) {
        if (target[key] == undefined)
            $("body").append(`<input type="hidden" id="bocek_proxy_${key}" name="bocek_proxy_${key}" value="${value}"/>`);
        //console.log(target[key] + ":" + value); //Eski ve Yeni Hali İçin
        $("#bocek_proxy_" + key).val(value).trigger("change");
        target[key] = value;
        return true;
    },
});
$.variableChange = new Proxy(bocekObj, {
    set: function(target, key, value) {
        $(document).on("change", "#bocek_proxy_" + key, function() {
            let oldvalue = target[key];
            let newvalue = $("#bocek_proxy_" + key).val();
            if (typeof(value) == "function")
                value(oldvalue, newvalue);
            else
                eval(value);
        });
        return true;
    },
});