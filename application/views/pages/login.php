<div class="col-md-12">
	<div class="col-md-4">
		
	</div>
	<div class="col-md-4">
		<?php if(validation_errors() != NULL ): ?>
	    	<div class="alert">
	      		<button type="button" class="close" data-dismiss="alert">&times;</button>
	    		<?php echo validation_errors(); ?>
	    	</div>
	    <?php endif ?>
		<form action="<?php echo base_url('login'); ?>" method="post" class="form-horizontal" role="form" style="margin-top:40px;">
		<!--<?php echo form_open('login'); ?>-->
			<div class="form-group">
				<label class="col-sm-3 control-label no-padding-right" for="form-field-1"> Kullanıcı Adı </label>

				<div class="col-sm-9">
					<input type="text" id="kullanici_adi" name="kullanici_adi" placeholder="" class="form-control" />
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-3 control-label no-padding-right" for="form-field-1"> Şifre </label>

				<div class="col-sm-9">
					<input type="password" id="sifre" name="sifre" placeholder="" class="form-control" />
				</div>
			</div>

			<div class="form-group">
				<label class="col-sm-3 control-label no-padding-right" for="form-field-1">  </label>

				<div class="col-sm-9">
					<button class="btn btn-primary btn-block">Giriş </button>
				</div>
			</div>
		</form>	
	</div>
	<div class="col-md-4">

	</div>
</div>