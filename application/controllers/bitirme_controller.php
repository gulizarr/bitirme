<?php
class Bitirme_controller extends CI_Controller {

	function __construct(){
		parent::__construct();
		$this->load->library('form_validation');
		$this->load->model('bitirme_model');
	}
	public function login(){

		$this->form_validation->set_rules('kullanici_adi', 'Username', 'trim|required|xss_clean');
		$this->form_validation->set_rules('sifre', 'Password', 'trim|required|xss_clean');
		if ($this->form_validation->run() !== FALSE)
		{
			$username = $this->input->post('kullanici_adi');
			$pass = $this->input->post('sifre');

			//$data = array('KULLANICI_ADI'=>$username,'SIFRE'=>md5($pass));

			$data=$this->bitirme_model->login_control($username,md5($pass));
			if(empty($data)){
				redirect(base_url('login'),'refresh');
			}
		    else{
		    	redirect(base_url('user_page'),'refresh');
		    }
		}

    	$this->load->view("template/header");
   		$this->load->view("pages/login");
        $this->load->view("template/footer");

	}
}