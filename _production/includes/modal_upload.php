<div class="modal" id="upload_files">
    <button class="close-button btn-trans btn" data-type="close" data-target="#upload_files" type="button" data-bodyclass="modalOn"></button>
    <div class="modal-content">
        <form class="container-fluid" id="modal-upload-form" action="dropzone_contact.php" name="upload-files-form" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
            <div class="modal_upload">
                <div class="box row">
                    <div class="box-1 col-xs-12">
                        <div class="box-content">
                            <h1><span>First: a little about you</span></h1>
                            <h5>So we know who the files are from.</h5>
                            <div class="fieldset">
                                <label for="ubizname">
                                    <legend class="required">Business Name:</legend>
                                    <input id="ubizname" type="text" name="ubizname" placeholder="Business Name*" required />
                                </label>
                                <label for="ubizphone">
                                    <legend class="required">Phone Number:</legend>
                                    <input id="ubizphone" type="tel" name="ubizphone" value="" placeholder="Phone Number*" required data-mask="(000) 000-0000" aria-required="true" maxlength="15" autocomplete="off" aria-invalid="true">
                                    <small>*in case there is an issue.</small>
                                </label>
                            </div>
                            <div class="fieldset">
                                <div class="g-recaptcha" data-sitekey="6LdDghsTAAAAAOHPuQ3LFiYmYWjbihqxzlLeRuzi" data-callback="correctCaptcha"></div>
                                <p><small>...just in case. &nbsp; &nbsp; :)</small></p>
                            </div>
                            <button type="button" modal-slide-button class="btn btn--small btn--icon btn--hover--left btn--solid" data-recaptcha data-target=".modal_upload .box" data-slideto="2">
                                <span class="btn__container">
                                    <span class="btn__text">
                                        Next
                                    </span>
                                <i class="btn__icon icon-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="box-2 col-xs-12">
                        <div class="box-content">
                            <h1><span>Upload your files</span></h1>
                            <h4>We accept the following file formats:</h4>
                            <ul class="tags ul-inline">
                                <li>.eps</li>
                                <li>.pdf</li>
                                <li>.jpg</li>
                                <li>.png</li>
                                <!--<li>.tif</li>-->
                                <li>.zip</li>
                                <li>.rar</li>
                            </ul>
                            <article class="modal--upload_files-container">
                                <div id="drop_area" class="hidden-xs">
                                    <div class="label-upload fileinput-button drop_area--label">
                                        <i class="icon-upload"></i>
                                        <p>Drop here</p>
                                    </div>
                                </div>
                                <span class="fileupload-process">
                                <div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                    <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>
                                </div>
                            </span>
                                <input type="file" id="fileupload1" class="hidden" name="my_field[]" value="" />
                                <ul id="files" class="files ul-list"></ul>
                            </article>
                            <h2><span class="hidden-xs">Drag &amp; drop or&nbsp;</span><label class="drop_area--label">click</label>&nbsp;to upload</h2>
                            <p>Maximum allowable file size is 40mb. Please contact us for info regarding submitting larger files.</p>
                            <input type="hidden" name="action" value="multiple" />
                           
                            <button type="button" modal-slide-button class="btn btn--small btn--icon btn--hover--left btn--solid" data-target=".modal_upload .box" data-slideto="3">
                                <span class="btn__container">
                                    <span class="btn__text">
                                        Next
                                    </span>
                                <i class="btn__icon icon-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="box-3 col-xs-12">
                        <div class="box-content">
                            <h1><span>Anything else?</span></h1>
                            <h4>Feel free to provide any special direction or information that you feel would be helpful.</h4>
                            <legend>Extra info here (if necessary):</legend>
                            <textarea id="ubizmessage" name="ubizmessage" placeholder="Extra info here (if necessary)."></textarea>
                            <button id="upload-button" type="submit" name="Submit" class="btn btn--small btn--icon btn--hover--up btn--solid btn--teal" data-target=".modal_upload .box" data-slideto="3">
                                <span class="btn__container">
                                    <span class="btn__text">
                                        Submit
                                    </span>
                                <i class="btn__icon icon-arrow-up"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="box-4 col-xs-12">
                        <div class="box-content">
                            <div class="uploading">
                                <i class="icon-loader"></i>
                                <span class="progressbar">
                                <span class="uploaded"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="box-5 col-xs-12">
                        <div class="box-content">
                            <h1><span></span></h1>
                            <div class="box-content">
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="radials ul-inline">
                    <li class="active" modal-slide-button data-target=".modal_upload .box" data-slideto="1"></li>
                    <li class="disabled" modal-slide-button data-target=".modal_upload .box" data-slideto="2"></li>
                    <li class="disabled" modal-slide-button data-target=".modal_upload .box" data-slideto="3"></li>
                </ul>
            </div>
        </form>
    </div>
</div>
