
//url : datanin gonderileceği controller sinifi
//data: controllera gonderilecek olan parametreleri iceren object
//property 2 boyutlu array alir arrayın ilk elemani gridin headerlarini ikinci elemani ise gridin doldurulacak olan modelin icindeki propertyleri alı
function CreateStandartGrid(url, data, property) {
    var array = CallStandartAjax(url, data);
    var htmlTable = "";
    if (array != null) {
        htmlTable = '<div class="row">' +
                                    '<div class="col-xs-12">' +
                                       ' <div style="overflow-y: scroll">' +
                                         ' <table class="table table-striped table-bordered table-hover">' +
                                         ' <thead style="background-color: lightsalmon">' +
                                           '          <tr>';
        for (var i = 0; i < property.length; i++) {
            htmlTable = htmlTable + '<th  style="text-align:right">' + property[i][0] + '</th>';
        }
        htmlTable = htmlTable + ' </tr>' +
                                             '    </thead>' +
                                              '   <tbody>';
        for (var i = 0; i < array.length; i++) {
            htmlTable = htmlTable + '<tr>';
            for (var j = 0; j < property.length; j++) {
                if (property[j][2] == undefined) {
                    htmlTable = htmlTable + '<td style="text-align:right" class=' + [property[j][1]] + '>' + array[i][property[j][1]] + '</td>';
                }
                else {
                    htmlTable = htmlTable + '<td style="text-align:right" class=' + [property[j][2]] + '>' + array[i][property[j][1]] + '</td>';
                }
            }
            htmlTable = htmlTable + ' </tr>';
        }
        htmlTable = htmlTable + ' </tbody>' +
                                            ' </table>' +
                                        ' </div>' +
                                    ' </div>' +
                                ' </div>';
        return htmlTable;
    }
    else {

        htmlTable = '<div class="row">' +
                                  '<div class="col-xs-12">' +
                                     ' <div style="overflow-y: scroll">' +
                                       ' <table class="table table-striped table-bordered table-hover">' +
                                       ' <thead style="background-color: lightsalmon">' +
                                         '          <tr>';
        for (var i = 0; i < property.length; i++) {
            htmlTable = htmlTable + '<th style="text-align:right">' + property[i][0] + '</th>';
        }
        htmlTable = htmlTable + ' </tr></thead><tbody>';
        htmlTable = htmlTable + ' </tbody>' +
                                            ' </table>' + '<div class="alert alert-danger" role="alert"><strong>Kayıt Bulunamadı!</strong></div>' +
                                        ' </div>' +
                                    ' </div>' +
                                ' </div>';
        return htmlTable;

    }
}
//url : datanin gonderileceği controller sinifi
//data: controllera gonderilecek olan parametreleri iceren object
//property: 2 boyutlu array alir arrayın ilk elemani gridin headerlarini ikinci elemani ise gridin doldurulacak olan modelin icindeki propertyleri alır.
//id: event fonksiyonuna gonderilecek olan parametre
//event(row icin): (onclick,onchange) 
//function Name: event oldugu anda calistiralacak olan fonksiyon
function CreateStandartGridWithFunction(url, data, property, id, event, functionName) {
    var array = CallStandartAjax(url, data);
    var htmlTable = "";
    if (array != null) {
        htmlTable = '<div class="row">' +
                                   '<div class="col-xs-12">' +
                                      ' <div style="overflow-y: scroll">' +
                                        ' <table class="table table-striped table-bordered table-hover">' +
                                        ' <thead style="background-color: lightsalmon">' +
                                          '          <tr>';
        for (var i = 0; i < property.length; i++) {
            if (property[i][0] == "Satış Türü" || property[i][0] == "Bölge" || property[i][0] == "Pano" || property[i][0] == "Kömür Cinsi")
                htmlTable += '<th style="text-align:right">' + property[i][0] + '</th>';
            else
                htmlTable += '<th style="text-align:right" class="hidden-480">' + property[i][0] + '</th>';
        }
        htmlTable = htmlTable + ' </tr></thead><tbody>';
        for (var i = 0; i < array.length; i++) {
            htmlTable = htmlTable + '<tr id=' + array[i][id].toString() + ' ' + event + '="' + functionName + '(\'' + array[i][id].toString() + '\')" style="cursor: pointer">';
            for (var j = 0; j < property.length; j++) {
                if (property[j][2] == undefined) {
                    htmlTable = htmlTable + '<td style="text-align:right" class=' + property[j][1]  + '>' + array[i][property[j][1]] + '</td>';
                }
                else {
                    htmlTable = htmlTable + '<td style="text-align:right" class=' + property[j][2] + '>' + array[i][property[j][1]] + '</td>';
                }
            }
            htmlTable = htmlTable + ' </tr>';
        }
        htmlTable = htmlTable + ' </tbody>' +
                                            ' </table>' +
                                        ' </div>' +
                                    ' </div>' +
                                ' </div>';
        return htmlTable;
    }
    else {

        htmlTable = '<div class="row">' +
                             '<div class="col-xs-12">' +
                                ' <div style="overflow-y: scroll">' +
                                  ' <table class="table table-striped table-bordered table-hover">' +
                                  ' <thead style="background-color: lightsalmon">' +
                                    '          <tr>';
        for (var i = 0; i < property.length; i++) {
            htmlTable = htmlTable + '<th style="text-align:right">' + property[i][0] + '</th>';
        }
        htmlTable = htmlTable + '</tr></thead><tbody>';
        htmlTable = htmlTable + '</tbody>' +
                                            ' </table>' + '<div class="alert alert-danger" role="alert"><strong>Kayıt Bulunamadı!</strong></div>' +
                                        ' </div>' +
                                    ' </div>' +
                                ' </div>';
        return htmlTable;


    }
}

//Grid icin tum fonksiyonlarin oldugu scriptleri icerir(paging,sorting vs)
var _pageSize = 0;
var _rowCount = 0;
var _currentPage = 0;
var _data = null;

function InitGrid(pageSize, rowCount, data) {
    _pageSize = pageSize;
    _rowCount = rowCount;
    _data = data;
    _currentPage = 0;
    //--------------------------------------------------------------------------------------
    //Grid Height:
    $(document).ready(sizeGrid);
    $(window).resize(sizeGrid);
    //--------------------------------------------------------------------------------------
    //Paging functions:
    $("#btnFirstPage").button({
        icons: {
            primary: "ui-icon-seek-first"
        }
    }).height(15).unbind("click").click(function () {
        FirstPage();
    });

    $("#btnPrevPage").button({
        icons: {
            primary: "ui-icon-triangle-1-w"
        }
    }).height(15).unbind("click").click(function () {
        PrevPage();
    });

    $("#btnNextPage").button({
        icons: {
            primary: "ui-icon-triangle-1-e"
        }
    }).height(15).unbind("click").click(function () {
        NextPage();
    });

    $("#btnLastPage").button({
        icons: {
            primary: "ui-icon-seek-end"
        }
    }).height(15).unbind("click").click(function () {
        LastPage()
    });

    //Sorting Titles:
    $(".gridHeader").find("a").each(function (index, a) {
        if ($(a).attr("sortField")) {
            $(a).attr("title", "Sırala");
            $(a).unbind("click").click(function () {
                SortGrid($(a).attr("sortField"));
            });
        }
    });

    NextPage();
}
//--------------------------------------------------------------------------------------
//Paging:
function NextPage() {
    _currentPage = _currentPage + 1;
    ShowPage();
    ShowButtons();
}

function PrevPage() {
    _currentPage = _currentPage - 1;
    ShowPage();
    ShowButtons();
}

function FirstPage() {
    _currentPage = 1;
    ShowPage();
    ShowButtons();
}

function LastPage() {
    if (_rowCount % _pageSize == 0)
        _currentPage = _rowCount / _pageSize;
    else
        _currentPage = parseInt(_rowCount / _pageSize) + 1;

    ShowPage();
    ShowButtons();
}

function ShowButtons() {
    $("#btnFirstPage").attr("disabled", "disabled");
    $("#btnPrevPage").attr("disabled", "disabled");
    $("#btnNextPage").attr("disabled", "disabled");
    $("#btnLastPage").attr("disabled", "disabled");

    if (_currentPage > 1) {
        $("#btnPrevPage").removeAttr("disabled");
        $("#btnFirstPage").removeAttr("disabled");
    }

    if (_rowCount > _currentPage * _pageSize) {
        $("#btnNextPage").removeAttr("disabled");
        $("#btnLastPage").removeAttr("disabled");
    }
}

function ShowPage() {
    var $tbl = $(".gridContent table");

    $tbl.find("tr").each(function (index, tr) {
        if (index == 0) {
            $(tr).css("display", "none"); // template row;
        }
        else if (index >= (_currentPage - 1) * _pageSize + 1 && index <= (_currentPage * _pageSize))
            $(tr).css("display", "");
        else
            $(tr).css("display", "none");
    });
}
//--------------------------------------------------------------------------------------
//Sorting:
var lastSortField = "";
var lastSortDirection = "0";

function SortGrid(sortField) {
    ShowLoading();

    var tmpArray = [];

    $.each(_data, function (index, item) {
        tmpArray[index] = { field: item[sortField], data: item };
    });

    if (lastSortField.toString() == sortField.toString()) {
        if (lastSortDirection == "0") {
            tmpArray.sort(ascending);
            lastSortDirection = "1";
        }
        else {
            tmpArray.sort(descending);
            lastSortDirection = "0";
        }
    }
    else {
        lastSortField = sortField;

        tmpArray.sort(ascending);
        lastSortDirection = "1";
    }

    //Convert to 1 dimension:
    var singleArray = [];
    for (var i = 0; i < tmpArray.length; i++)
        singleArray.push(tmpArray[i].data);

    //alert(JSON.stringify(singleArray));
    BindGrid(singleArray);  //Bu method sayfada olmalı!

    tmpArray = null;
    singleArray = null;

    HideLoading();
}

function descending(a, b) {
    var A = a.field.toLowerCase();
    var B = b.field.toLowerCase();

    if (A < B) return 1;
    if (A > B) return -1;
    return 0;

    //return b[0] < a[0];
}

function ascending(a, b) {
    var A = a.field.toLowerCase();
    var B = b.field.toLowerCase();

    if (A < B) return -1;
    if (A > B) return 1;
    return 0;

    //return a[0]>b[0];
}

//--------------------------------------------------------------------------------------
function sizeGrid() {
    var gridContentHeight = $(window).height() - $("#topbar").height() -
                $("#bottomBar").height() - $(".gridHeader").height() - $(".gridFooter").height() - 37 + "px";

    $(".gridContent").css("height", gridContentHeight).css("overflow-y", "scroll");
}

