function modal_upload_files() {
	var s = '';
	//s+='<div class="row">';
	//s+='<div class="col-xs-12">';
	s+='<div class="modal_upload">';
	s+='<h1><span>Upload your project files</span></h1>';
	s+='<h4>We accept the following file formats:</h4>';
	s+='<ul class="tags ul-inline">';
	s+='<li>.ai</li>';
	s+='<li>.psd</li>';
	s+='<li>.eps</li>';
	s+='<li>.pdf</li>';
	s+='<li>.jpg</li>';
	s+='<li>.png</li>';
	s+='<li>.zip</li>';
	s+='<li>.rar</li>';
	s+='</ul>';
	s+='<article>';
	
	s+='<label class="icon-upload" for="fileupload">';
	s+='<input id="fileupload" type="file" name="files[]" multiple>';
	s+='</label>';
	
	s+='<div id="progress" class="progress">';
	s+='<div class="progress-bar progress-bar-success"></div>';
	s+='</div>'; // end #progress
	s+='<div id="files" class="files"></div>';
	s+='</article>';
	s+='<h2><small>Drag & drop or <label for="fileupload">click</label> to upload</small></h2>';
	s+='<p><small>Maximum allowable file size is 20mb. Please contact us for info regarding submitting larger files.</small></p>';
	s+='</div>';
	//s+='</div>'; // end col-xs-12
	//s+='</div>'; // end row
	return s;
}



        
        
        
        
    
    
    
    
        
    
    
    