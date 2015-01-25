<!DOCTYPE html>
<html lang="tr">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Bitirme Projesi</title>

        <link href="<?php echo asset_url('assets/css/bootstrap.min.css'); ?>" rel="stylesheet" />
        <link href="<?php echo asset_url('assets/css/font-awesome.min.css'); ?>" rel="stylesheet" />
        <link href="<?php echo asset_url('assets/css/jquery-ui.min.css'); ?>" rel="stylesheet" />

        <link href="<?php echo asset_url('assets/css/ace-fonts.css'); ?>" rel="stylesheet" />
        <link href="<?php echo asset_url('assets/css/ace.min.css'); ?>" rel="stylesheet" />
        <link href="<?php echo asset_url('assets/css/ace-skins.min.css'); ?>" rel="stylesheet" />
        <link href="<?php echo asset_url('assets/css/ace-rtl.min.css'); ?>" rel="stylesheet" />

        <link href="<?php echo asset_url('assets/css/prettify.css'); ?>" rel="stylesheet" />
        <link href="<?php echo asset_url('assets/css/ace-skins.min.css'); ?>" rel="stylesheet" />

        <script src="<?php echo asset_url('assets/Scripts/jquery-2.1.0.js'); ?>"></script>
        <script src="<?php echo asset_url('assets/Scripts/jquery-ui-1.10.3.custom.js'); ?>"></script>
        <script src="<?php echo asset_url('assets/Scripts/jquery-ui-1.10.3.custom.min.js'); ?>"></script>
        <script src="<?php echo asset_url('assets/Scripts/jquery.maskMoney.js'); ?>"></script>
        <script src="<?php echo asset_url('assets/Scripts/jquery.validate.js'); ?>"></script>
        <script src="<?php echo asset_url('assets/Scripts/messages_tr.js'); ?>"></script>
        <script src="<?php echo asset_url('assets/Scripts/modernizr-2.7.1.js'); ?>"></script>

    </head>
    <body>
        <div id="navbar" class="navbar navbar-default">
            <script type="text/javascript">
                try{ace.settings.check('navbar' , 'fixed')}catch(e){}
            </script>

            <div class="navbar-container" id="navbar-container">
                <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler">
                    <span class="sr-only">Toggle sidebar</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <div class="navbar-header pull-left">
                    <a href="<?php echo base_url(); ?>" class="navbar-brand">
                        <small>
                            <i class="fa fa-home"></i>
                            2014-2015 BAHAR DÖNEMİ BİTİRME PROJESİ
                        </small>
                    </a>
                </div>

                <div class="navbar-buttons navbar-header pull-right" role="navigation">
                    <ul class="nav ace-nav">
                        <li class="light-blue">
                            <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                                <img class="nav-user-photo" src="<?php echo asset_url('images/default-user.png'); ?>"/>
                                <span class="user-info">
                                    <small>Hoşgeldiniz,</small>
                                    Sayın Kullanıcı
                                </span>

                                <i class="ace-icon fa fa-caret-down"></i>
                            </a>

                            <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                                <li>
                                    <a href="#">
                                        <i class="ace-icon fa fa-cog"></i>
                                        Ayarlar
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="ace-icon fa fa-user"></i>
                                        Profil
                                    </a>
                                </li>

                                <li class="divider"></li>
                                <li>
                                    <a href="<?php echo base_url('login'); ?>">
                                        <i class="ace-icon glyphicon glyphicon-log-in"></i>
                                        Giriş
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="ace-icon glyphicon glyphicon-log-out"></i>
                                        Çıkış
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
        	<div class="row">
