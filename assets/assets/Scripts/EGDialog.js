
//confirm dialogdan sonra islem iptali gerceklestiginde cagirilacak olan fonksyiondur. Callbak ve title parametresi boş gecilebilir.
function IptalDialog(html, title, callback) {
    if (title === undefined) {
        var title = "Uyarı Mesajı"
    } else if (typeof (title) == "function") {
        callback = title;
    }
    //  $("#_Dialog").attr("title", "");
    $("#_Dialog").html("<span class=\"ui-icon ui-icon-notice\" style=\"float:left\"></span>" + html);
    $("#_Dialog").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        position: ['top', 'top'],
        show: 'shake',
        hide: 'puff',
        width: 400,
        height: 400,
        open: function (event, ui) {
            $(this).parent().find('.ui-dialog-title').html("<span class=\"ui-icon ui-icon-info\" style=\"float:left\"></span>" + title);
        },
        buttons: [{
            text: "Kapat",
            icons: {
                primary: "ui-icon-close"
            },
            class: "kapatButton",
            click: function () {
                $(this).dialog('close');
                if (callback !== undefined) {
                    callback();
                }

            }
        }
        ]
    });
}
//popup acar
//header: popup basligi
//html: popoupin icerisine strinh html verilir.
//popSize string deger alir popup boyutunu belirler(small,medium, large)
function CreatePopup(header, html, popSize) {
    
    if (header == undefined) {
        header = "";
    }
    if (html == undefined) {
        html = "";
    }
    var size = "";
    if (popSize == "small") {
        size = " modal-sm";
    }
    if (popSize == "medium") {
        size = " modal-md";
    }
    if (popSize == "large") {
        size = " modal-lg";
    }
    else {
        size = "";
    }
    var stringHtml = "<div class='modal fade' id='myModal'>" +
                      "<div class='modal-dialog " + size + "  '>" +
                        "<div class='modal-content'>" +
                          "<div class='modal-header'>" +
                            "<button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>" +
                            "<h4 class='modal-title'>" + header + "</h4>" +
                          "</div>" +
                          "<div class='modal-body'>" +
                            html +
                          "</div>" +
                          "<div class='modal-footer'>" +
                          "</div>" +
                        "</div>" +
                      "</div>" +
                    "</div>";
    $("body").append(stringHtml);
    $('#myModal').modal('show');
}
//kullaniciya bilgi mesaji vermek icin popup acar
function BilgiDialog(header, html) {
    $("#myModal").remove();
    if (header == undefined) {
        header = "Bilgi Mesajı";
    }
    if (html == undefined) {
        html = "";
    }
    var stringHtml = "<div class='modal fade ' id='myModal'>" +
  "<div class='modal-dialog modal-sm'>" +
    "<div class='modal-content'>" +
      "<div class='modal-header' style='background-color:#eff3f8'>" +
        "<button type='button' class='close red' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>" +
        "<h4 class='modal-title blue'><i class='ace-icon fa fa-check blue'></i>&nbsp" + header + "</h4>" +
      "</div>" +
      "<div class='modal-body'>" +
        html +
      "</div>" +
      "<div class='modal-footer'>" +
      "</div>" +
    "</div>" +
  "</div>" +
"</div>";
    $("body").append(stringHtml);
    $('#myModal').modal('show');
}
//uyari mesaji verir
function BilgiDialogUyari(header, html) {
    $("#myModal").remove();
    if (header == undefined) {
        header = "Hata Mesajı";
    }
    if (html == undefined) {
        html = "";
    }
    var stringHtml = "<div class='modal fade' id='myModal'>" +
  "<div class='modal-dialog modal-sm'>" +
    "<div class='modal-content'>" +
      "<div class='modal-header' style='background-color:#eff3f8'>" +
        "<button  type='button' class='close red' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>" +
        "<h4 class='modal-title red'><i class='glyphicon glyphicon-exclamation-sign red'></i>&nbsp" + header + "</h4>" +
      "</div>" +
      "<div class='modal-body'>" +
        html +
      "</div>" +
      "<div class='modal-footer'  style='background-color:#eff3f8'>" +
      "</div>" +
    "</div>" +
  "</div>" +
"</div>";
    $("body").append(stringHtml);
    $('#myModal').modal('show');
}
//kullaniciya onay  mesaji vermek icin. Title parametresi bos gecilebilir. Callback parametresine kullanici onay verdiği anda yapilacak olan fonksiyon verilir.
function ConfirmDialog(header, html) {
    //onceki modalı temizle
    $("#myModal").remove();
    if (header == undefined) {
        header = "Onay Mesajı";
    }
    if (html == undefined) {
        html = "";
    }
    var stringHtml = "<div class='modal fade' id='myModal'>" +
"<div class='modal-dialog modal-sm'>" +
"<div class='modal-content'>" +
  "<div class='modal-header' style='background-color:#eff3f8'>" +
    "<button  type='button' class='close red' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>" +
    "<h4 class='modal-title green'><i class='glyphicon glyphicon-question-sign green'></i>&nbsp" + header + "</h4>" +
  "</div>" +
  "<div class='modal-body'>" +
    html +
  "</div>" +
  "<div class='modal-footer'  style='background-color:#eff3f8'>" +

  "<a href='#' class='btn '>Kapat</a>" +
        "<a href='#' class='btn btn-primary'>Onayla</a>" +
        "</div>" +
"</div>" +
"</div>" +
"</div>";
    $("body").append(stringHtml);
    $('#myModal').modal('show');
}