
function TonToKgItem(miktar) {
    miktar = miktar = parseFloat(miktar);
    var newmiktar = miktar * 1000;
    newmiktar = newmiktar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    debugger;
    return newmiktar
}
function SplitDateOnlyDateItem(time) {
    if (time != null) {
        var temp = time.toString().split("T");
        var date = temp[0].split("-");
        var year = date[0];
        var month = date[1];
        var day = date[2];
        var time = temp[1].split(":");
        var hour = time[0];
        var minute = time[1];
        var newDate = day + "." + month + "." + year;
        return newDate;
    }
}

function JsonMoneyToMoneyItem(money) {
    var newMoney = money.toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return newMoney;
}

function TextFormat() {
    TonToKg($(".Ton"));
    //JsonMoneyToMoney($(".Money"));
    SplitDateOnlyDate($(".Date"));
    MoneyFormat($(".Money"));
}

//obj olarak kolonun classlarini alir
function MoneyFormat(obj) {
    obj.each(function () {
        if ($(this).text() != "") {
            var money = $(this).text();
            money = parseFloat(money);
            var newmoney = money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            $(this).text(newmoney);
        }
    });
}

function TonToKg(obj) {
    obj.each(function () {
        if ($(this).text() != "") {
            var miktar = $(this).text();
            miktar = miktar = parseFloat(miktar);
            var newmiktar = miktar * 1000;
            newmiktar = newmiktar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            $(this).text(newmiktar);
        }
    });
}

function JsonMoneyToMoney(obj) {
    obj.each(function () {
        if ($(this).text() != "") {
            var money = $(this).text();
            var newMoney = money.toString().replace(",", ".").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            $(this).text(newMoney);
        }
    });
}
/*function SplitDateOnlyDate(obj) {
    obj.each(function () {
        if ($(this).text() != "") {
            var time = $(this).text();
            var temp = time.toString().split("T");
            var date = temp[0].split("-");
            var year = date[0];
            var month = date[1];
            var day = date[2];
            var time = temp[1].split(":");
            var hour = time[0];
            var minute = time[1];
            var newDate = day + "." + month + "." + year;
            $(this).text(newDate);
        }
    });

}*/
function EGAlert(html) {
    stringHtml = '<div class="alert alert-danger" role="alert"><strong>' + html + '</strong></div>';
    return html;
}
//script tarafinda excele aktarirken karakter sorununu cözmek icin kullanilir.
function EnCodeForExcelData(html) {
    while (html.indexOf('ç') != -1) html = html.replace('ç', '&ccedil;');
    while (html.indexOf('ğ') != -1) html = html.replace('ğ', '&#287;');
    while (html.indexOf('ı') != -1) html = html.replace('ı', '&#305;');
    while (html.indexOf('ö') != -1) html = html.replace('ö', '&ouml;');
    while (html.indexOf('ş') != -1) html = html.replace('ş', '&#351;');
    while (html.indexOf('ü') != -1) html = html.replace('ü', '&uuml;');

    while (html.indexOf('Ç') != -1) html = html.replace('Ç', '&Ccedil;');
    while (html.indexOf('Ğ') != -1) html = html.replace('Ğ', '&#286;');
    while (html.indexOf('İ') != -1) html = html.replace('İ', '&#304;');
    while (html.indexOf('Ö') != -1) html = html.replace('Ö', '&Ouml;');
    while (html.indexOf('Ş') != -1) html = html.replace('Ş', '&#350;');
    while (html.indexOf('Ü') != -1) html = html.replace('Ü', '&Uuml;');
    while (html.indexOf(' ') != -1) html = html.replace(' ', '&nbsp;');
    return html;
}


//ajax icin controller sinifinin urlini ve gönderilecek olan data(parametre) objesini alir. dönen datayi return eder.
function CallStandartAjax(_url, _data) {
    var tempData = null;
    $.ajax({
        url: _url,
        data: _data,
        contentType: "json",
        async: false,
        success: function (resp) {
            var $msg = resp.Message;
            var $data = resp.Data;
            if ($msg != null) {
                alert($msg);
            }
            else {
                if ($data != null) {
                    tempData = $data;
                }
            }
        }
    });
    return tempData;
}

/*
ALL MASK SCRİPTS
*/
//ornek kullanim $("#Telefon").mask("(999) 999-9999");
(function ($) {
    function getPasteEvent() {
        var el = document.createElement('input'),
            name = 'onpaste';
        el.setAttribute(name, '');
        return (typeof el[name] === 'function') ? 'paste' : 'input';
    }

    var pasteEventName = getPasteEvent() + ".mask",
        ua = navigator.userAgent,
        iPhone = /iphone/i.test(ua),
        android = /android/i.test(ua),
        caretTimeoutId;

    $.mask = {
        //Predefined character definitions
        definitions: {
            '9': "[0-9]",
            'a': "[A-Za-z]",
            '*': "[A-Za-z0-9]"
        },
        dataName: "rawMaskFn",
        placeholder: '_',
    };

    $.fn.extend({
        //Helper Function for Caret positioning
        caret: function (begin, end) {
            var range;

            if (this.length === 0 || this.is(":hidden")) {
                return;
            }

            if (typeof begin == 'number') {
                end = (typeof end === 'number') ? end : begin;
                return this.each(function () {
                    if (this.setSelectionRange) {
                        this.setSelectionRange(begin, end);
                    } else if (this.createTextRange) {
                        range = this.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select();
                    }
                });
            } else {
                if (this[0].setSelectionRange) {
                    begin = this[0].selectionStart;
                    end = this[0].selectionEnd;
                } else if (document.selection && document.selection.createRange) {
                    range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length;
                }
                return { begin: begin, end: end };
            }
        },
        unmask: function () {
            return this.trigger("unmask");
        },
        mask: function (mask, settings) {
            var input,
                defs,
                tests,
                partialPosition,
                firstNonMaskPos,
                len;

            if (!mask && this.length > 0) {
                input = $(this[0]);
                return input.data($.mask.dataName)();
            }
            settings = $.extend({
                placeholder: $.mask.placeholder, // Load default placeholder
                completed: null
            }, settings);


            defs = $.mask.definitions;
            tests = [];
            partialPosition = len = mask.length;
            firstNonMaskPos = null;

            $.each(mask.split(""), function (i, c) {
                if (c == '?') {
                    len--;
                    partialPosition = i;
                } else if (defs[c]) {
                    tests.push(new RegExp(defs[c]));
                    if (firstNonMaskPos === null) {
                        firstNonMaskPos = tests.length - 1;
                    }
                } else {
                    tests.push(null);
                }
            });

            return this.trigger("unmask").each(function () {
                var input = $(this),
                    buffer = $.map(
                    mask.split(""),
                    function (c, i) {
                        if (c != '?') {
                            return defs[c] ? settings.placeholder : c;
                        }
                    }),
                    focusText = input.val();

                function seekNext(pos) {
                    while (++pos < len && !tests[pos]);
                    return pos;
                }

                function seekPrev(pos) {
                    while (--pos >= 0 && !tests[pos]);
                    return pos;
                }

                function shiftL(begin, end) {
                    var i,
                        j;

                    if (begin < 0) {
                        return;
                    }

                    for (i = begin, j = seekNext(end) ; i < len; i++) {
                        if (tests[i]) {
                            if (j < len && tests[i].test(buffer[j])) {
                                buffer[i] = buffer[j];
                                buffer[j] = settings.placeholder;
                            } else {
                                break;
                            }

                            j = seekNext(j);
                        }
                    }
                    writeBuffer();
                    input.caret(Math.max(firstNonMaskPos, begin));
                }

                function shiftR(pos) {
                    var i,
                        c,
                        j,
                        t;

                    for (i = pos, c = settings.placeholder; i < len; i++) {
                        if (tests[i]) {
                            j = seekNext(i);
                            t = buffer[i];
                            buffer[i] = c;
                            if (j < len && tests[j].test(t)) {
                                c = t;
                            } else {
                                break;
                            }
                        }
                    }
                }

                function keydownEvent(e) {
                    var k = e.which,
                        pos,
                        begin,
                        end;

                    //backspace, delete, and escape get special treatment
                    if (k === 8 || k === 46 || (iPhone && k === 127)) {
                        pos = input.caret();
                        begin = pos.begin;
                        end = pos.end;

                        if (end - begin === 0) {
                            begin = k !== 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
                            end = k === 46 ? seekNext(end) : end;
                        }
                        clearBuffer(begin, end);
                        shiftL(begin, end - 1);

                        e.preventDefault();
                    } else if (k == 27) {//escape
                        input.val(focusText);
                        input.caret(0, checkVal());
                        e.preventDefault();
                    }
                }

                function keypressEvent(e) {
                    var k = e.which,
                        pos = input.caret(),
                        p,
                        c,
                        next;

                    if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
                        return;
                    } else if (k) {
                        if (pos.end - pos.begin !== 0) {
                            clearBuffer(pos.begin, pos.end);
                            shiftL(pos.begin, pos.end - 1);
                        }

                        p = seekNext(pos.begin - 1);
                        if (p < len) {
                            c = String.fromCharCode(k);
                            if (tests[p].test(c)) {
                                shiftR(p);

                                buffer[p] = c;
                                writeBuffer();
                                next = seekNext(p);

                                if (android) {
                                    setTimeout($.proxy($.fn.caret, input, next), 0);
                                } else {
                                    input.caret(next);
                                }

                                if (settings.completed && next >= len) {
                                    settings.completed.call(input);
                                }
                            }
                        }
                        e.preventDefault();
                    }
                }

                function clearBuffer(start, end) {
                    var i;
                    for (i = start; i < end && i < len; i++) {
                        if (tests[i]) {
                            buffer[i] = settings.placeholder;
                        }
                    }
                }

                function writeBuffer() { input.val(buffer.join('')); }

                function checkVal(allow) {
                    //try to place characters where they belong
                    var test = input.val(),
                        lastMatch = -1,
                        i,
                        c;

                    for (i = 0, pos = 0; i < len; i++) {
                        if (tests[i]) {
                            buffer[i] = settings.placeholder;
                            while (pos++ < test.length) {
                                c = test.charAt(pos - 1);
                                if (tests[i].test(c)) {
                                    buffer[i] = c;
                                    lastMatch = i;
                                    break;
                                }
                            }
                            if (pos > test.length) {
                                break;
                            }
                        } else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
                            pos++;
                            lastMatch = i;
                        }
                    }
                    if (allow) {
                        writeBuffer();
                    } else if (lastMatch + 1 < partialPosition) {
                        input.val("");
                        clearBuffer(0, len);
                    } else {
                        writeBuffer();
                        input.val(input.val().substring(0, lastMatch + 1));
                    }
                    return (partialPosition ? i : firstNonMaskPos);
                }

                input.data($.mask.dataName, function () {
                    return $.map(buffer, function (c, i) {
                        return tests[i] && c != settings.placeholder ? c : null;
                    }).join('');
                });

                if (!input.attr("readonly"))
                    input
                    .one("unmask", function () {
                        input
                            .unbind(".mask")
                            .removeData($.mask.dataName);
                    })
                    .bind("focus.mask", function () {
                        clearTimeout(caretTimeoutId);
                        var pos,
                            moveCaret;

                        focusText = input.val();
                        pos = checkVal();

                        caretTimeoutId = setTimeout(function () {
                            writeBuffer();
                            if (pos == mask.length) {
                                input.caret(0, pos);
                            } else {
                                input.caret(pos);
                            }
                        }, 10);
                    })
                    .bind("blur.mask", function () {
                        checkVal();
                        if (input.val() != focusText)
                            input.change();
                    })
                    .bind("keydown.mask", keydownEvent)
                    .bind("keypress.mask", keypressEvent)
                    .bind(pasteEventName, function () {
                        setTimeout(function () {
                            var pos = checkVal(true);
                            input.caret(pos);
                            if (settings.completed && pos == input.val().length)
                                settings.completed.call(input);
                        }, 0);
                    });
                checkVal(); //Perform initial check for existing values
            });
        }
    });


})(jQuery);
/*
ENCODE/DECODE FUNCTIONS
*/
function encodeStr(uncoded) {
    uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g, "");
    var coded = "";
    var chr;
    for (var i = uncoded.length - 1; i >= 0; i--) {
        chr = uncoded.charCodeAt(i);
        coded += (chr >= 65 && chr <= 90) ?
          key.charAt(chr - 65 + 26 * Math.floor(Math.random() * 2)) :
          String.fromCharCode(chr);
    }
    return encodeURIComponent(coded);
}
function decodeStr(coded) {
    coded = decodeURIComponent(coded);
    var uncoded = "";
    var chr;
    for (var i = coded.length - 1; i >= 0; i--) {
        chr = coded.charAt(i);
        uncoded += (chr >= "a" && chr <= "z" || chr >= "A" && chr <= "Z") ?
          String.fromCharCode(65 + key.indexOf(chr) % 26) :
          chr;
    }
    return uncoded;
}



