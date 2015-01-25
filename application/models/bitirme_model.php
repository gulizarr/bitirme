<?php 
class Bitirme_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function login_control($username,$pass){
    	$this->db->select("*");
    	$this->db->from("sekreter");
    	$this->db->where("KULLANICI_ADI",$username);
        $this->db->where("SIFRE",$pass);
        $query=$this->db->get()->result_array();
        return $query;
    }
}