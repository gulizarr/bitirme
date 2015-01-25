<?php
class Homepage extends CI_Controller {

	function __construct(){
		parent::__construct();
	}

	public function index(){
		
		$this->load->view('template/header');
		$this->load->view('homepage/index');
		$this->load->view('template/footer');
	} 
    public function txt_okuma(){
	    $array = array(array());		
		$data = array();
		$index = 0;

		$filename = base_url("sample.txt");
		$lines = file($filename);

		foreach ($lines as $name) {
			$line = explode(';', (string)$name);

			$array[$index]["ders_kodu"] = $line[0];
			$array[$index]["ders_adi"] = $line[1];
			$array[$index]["ders_kredi"] = $line[2];
			$array[$index]["ogrenci_not"] = $line[3];

			$index = $index + 1;
		}
		$data["ogrenci_notlari"] = $array;

    }
}