<div class="modal" id="upload_files">
    <button class="close-button btn-trans btn" data-type="close" data-target="#upload_files" type="button" data-bodyclass="modalOn"></button>
    <div class="modal-content">
        <?php /*
        <form class="container-fluid dropzone" id="modal-upload-form" action="upload.php" method="get" accept-charset="utf-8" enctype="multipart/form-data">
            <div class="modal_upload">
                <div class="box row">
                    <div class="box-1 col-xs-3">
                        <h1><span>First: a little about you</span></h1>
                        <div class="box-content">
                            <h5>So we know who the files are from.</h5>
                            <fieldset>
                                <label for="ubizname">
                                    <input id="ubizname" type="text" name="ubizname" placeholder="Business Name" required />
                                </label>
                                <label for="ubizphone">
                                    <input id="ubizphone" type="tel" name="ubizphone" value="" placeholder="Phone Number*" required data-mask="(000) 000-0000" aria-required="true" maxlength="15" autocomplete="off" aria-invalid="true">
                                    <small>*in case there is an issue.</small>
                                </label>
                            </fieldset>
                            <fieldset>
                                <div class="g-recaptcha" data-sitekey="6LdDghsTAAAAAOHPuQ3LFiYmYWjbihqxzlLeRuzi" data-callback="correctCaptcha"></div>
                                <p><small>...just in case. &nbsp; &nbsp; :)</small></p>
                            </fieldset>
                            <button type="button" modal-slide-button class="btn btn-sm btn-icon btn-icon_l" data-recaptcha data-target=".modal_upload .box" data-slideto="2"><span>Next</span><i class="icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="box-2 col-xs-3">
                        <h1><span>Upload your project files</span></h1>
                        <div class="box-content">
                            <h4>We accept the following file formats:</h4>
                            <ul class="tags ul-inline">
                                <li>.eps</li>
                                <li>.pdf</li>
                                <li>.jpg</li>
                                <li>.png</li>
                                <li>.zip</li>
                                <li>.rar</li>
                            </ul>
                            <article>
                                <label class="icon-upload fileinput-button" for="dnd_field">
                                    <input id="dnd_field" type="file" name="my_field" multiple="">

                                </label>
                                <div id="progress" class="progress">
                                    <div class="progress-bar progress-bar-success"></div>
                                </div>
                                <ul id="files" class="files ul-list"></ul>
                            </article>
                            <h2>Drag &amp; drop or <span><label for="dnd_field">click</label> to upload</span></h2>
                            <p>Maximum allowable file size is 40mb. Please contact us for info regarding submitting larger files.</p>
                            <button type="button" modal-slide-button class="btn btn-sm btn-icon btn-icon_l" data-target=".modal_upload .box" data-slideto="3"><span>Next</span><i class="icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="box-3 col-xs-3">
                        <h1><span>Anything else?</span></h1>
                        <div class="box-content">
                            <h4>Feel free to give any special direction or information that you feel would be helpful.</h4>
                            <textarea id="ubizmessage" name="additionalinfo" placeholder="Extra info here."></textarea>
                            <input type="hidden" name="action" value="xhr" />
                            <button id="dnd_upload" type="submit" class="btn btn-sm btn-icon btn-icon_u">
                                <span>Submit</span><i class="icon-arrow-up"></i>
                            </button>
                        </div>
                    </div>
                    <div class="box-4 col-xs-3">
                        <h1><span>Thank you!</span></h1>
                        <div class="box-content">
                            <h4>A member of our team will begin processing the file(s) shortly. If we run into any issues we will contact you.</h4>
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
        */ ?>
        <form class="container-fluid dropzone" id="modal-upload-form" action="upload.php" name="upload-form" method="POST" accept-charset="utf-8" enctype="multipart/form-data">
            <div class="modal_upload">
                <div class="box row">
                    
                    <div class="box-1 col-xs-3">
                        <h1><span>First: a little about you</span></h1>
                        <div class="box-content">
                            <h5>So we know who the files are from.</h5>
                            <fieldset>
                                <label for="ubizname">
                                    <input id="ubizname" type="text" name="ubizname" placeholder="Business Name" required />
                                </label>
                                <label for="ubizphone">
                                    <input id="ubizphone" type="tel" name="ubizphone" value="" placeholder="Phone Number*" required data-mask="(000) 000-0000" aria-required="true" maxlength="15" autocomplete="off" aria-invalid="true">
                                    <small>*in case there is an issue.</small>
                                </label>
                            </fieldset>
                            <fieldset>
                                <div class="g-recaptcha" data-sitekey="6LdDghsTAAAAAOHPuQ3LFiYmYWjbihqxzlLeRuzi" data-callback="correctCaptcha"></div>
                                <p><small>...just in case. &nbsp; &nbsp; :)</small></p>
                            </fieldset>
                            <button type="button" modal-slide-button class="btn btn-sm btn-icon btn-icon_l" data-recaptcha data-target=".modal_upload .box" data-slideto="2"><span>Next</span><i class="icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="box-2 col-xs-3">
                        <h1><span>Upload your project files</span></h1>
                        <div class="box-content">
                            <h4>We accept the following file formats:</h4>
                            <ul class="tags ul-inline">
                                <li>.eps</li>
                                <li>.pdf</li>
                                <li>.jpg</li>
                                <li>.png</li>
                                <li>.zip</li>
                                <li>.rar</li>
                            </ul>
                            <article class="modal--upload_files-container">
                                <div id="drop_area" class="hidden-xs">
                                    <label id="drop_area--label" class="label-upload fileinput-button" for="fileupload1">
                                        <i class="icon-upload"></i>
                                        <p>Drop here</p>
                                    </label>
                                </div>
                                <input type="file" id="fileupload1" class="hidden" name="my_field[]" value="" />
                                <input type="file" id="fileupload2" class="hidden" name="my_field[]" value="" />
                                <input type="file" id="fileupload3" class="hidden" name="my_field[]" value="" />
                                <input type="file" id="fileupload4" class="hidden" name="my_field[]" value="" />
                                <input type="file" id="fileupload5" class="hidden" name="my_field[]" value="" />
                                <ul id="files" class="files ul-list"></ul>
                            </article>
                            
                            <h2><span class="hidden-xs">Drag &amp; drop or</span> <label for="fileupload1">click</label> to upload</h2>
                            <p>Maximum allowable file size is 40mb. Please contact us for info regarding submitting larger files.</p>
                            <input type="hidden" name="action" value="multiple" />
                            <button type="button" modal-slide-button class="btn btn-sm btn-icon btn-icon_l" data-target=".modal_upload .box" data-slideto="3"><span>Next</span><i class="icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="box-3 col-xs-3">
                        <h1><span>Anything else?</span></h1>
                        <div class="box-content">
                            <h4>Feel free to give any special direction or information that you feel would be helpful.</h4>
                            <textarea id="ubizmessage" name="ubizmessage" placeholder="Extra info here (if necessary)."></textarea>
                            <button id="upload-button" type="submit" name="Submit" class="btn btn-sm btn-icon btn-icon_u">
                                <span>Submit</span>
                                <i class="icon-arrow-up"></i>
                            </button>
                        </div>
                    </div>
                    <div class="box-4 col-xs-3">
                        <h1><span>Thank you!</span></h1>
                        <div class="box-content">
                            <h4>A member of our team will begin processing the file(s) shortly. If we run into any issues we will contact you.</h4>
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
        <!--
        <form class="container-fluid dropzone" id="modal-upload-form" action="upload.php" method="get" accept-charset="utf-8" enctype="multipart/form-data">
            <div class="modal_upload">
                <div class="box row">
                    <div class="box-1 col-xs-3">
                        <h1><span>First: a little about you</span></h1>
                        <div class="box-content">
                            <h5>So we know who the files are from.</h5>
                            <fieldset>
                                <label for="ubizname">
                                    <input id="ubizname" type="text" name="ubizname" placeholder="Business Name" required />
                                </label>
                                <label for="ubizphone">
                                    <input id="ubizphone" type="tel" name="ubizphone" value="" placeholder="Phone Number*" required data-mask="(000) 000-0000" aria-required="true" maxlength="15" autocomplete="off" aria-invalid="true">
                                    <small>*in case there is an issue.</small>
                                </label>
                            </fieldset>
                            <fieldset>
                                <div class="g-recaptcha" data-sitekey="6LdDghsTAAAAAOHPuQ3LFiYmYWjbihqxzlLeRuzi" data-callback="correctCaptcha"></div>
                                <p><small>...just in case. &nbsp; &nbsp; :)</small></p>
                            </fieldset>
                            <button type="button" modal-slide-button class="btn btn-sm btn-icon btn-icon_l" data-recaptcha data-target=".modal_upload .box" data-slideto="2"><span>Next</span><i class="icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="box-2 col-xs-3">
                        <h1><span>Upload your project files</span></h1>
                        <div class="box-content">
                            <h4>We accept the following file formats:</h4>
                            <ul class="tags ul-inline">
                                <li>.eps</li>
                                <li>.pdf</li>
                                <li>.jpg</li>
                                <li>.png</li>
                                <li>.zip</li>
                                <li>.rar</li>
                            </ul>
                            <article>
                                <label class="icon-upload fileinput-button" for="fileupload">
                                    <input id="fileupload" type="file" name="files[]" multiple="">
                                </label>
                                <div id="progress" class="progress">
                                    <div class="progress-bar progress-bar-success"></div>
                                </div>
                                <ul id="files" class="files ul-list"></ul>
                            </article>
                            <h2>Drag &amp; drop or <span><label for="fileupload">click</label> to upload</span></h2>
                            <p>Maximum allowable file size is 40mb. Please contact us for info regarding submitting larger files.</p>
                            <button type="button" modal-slide-button class="btn btn-sm btn-icon btn-icon_l" data-target=".modal_upload .box" data-slideto="3"><span>Next</span><i class="icon-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="box-3 col-xs-3">
                        <h1><span>Anything else?</span></h1>
                        <div class="box-content">
                            <h4>Feel free to give any special direction or information that you feel would be helpful.</h4>
                            <textarea id="ubizmessage" name="additionalinfo" placeholder="Extra info here."></textarea>
                            <button type="submit" class="btn btn-sm btn-icon btn-icon_u"><span>Submit</span><i class="icon-arrow-up"></i></button>
                        </div>
                    </div>
                    <div class="box-4 col-xs-3">
                        <h1><span>Thank you!</span></h1>
                        <div class="box-content">
                            <h4>A member of our team will begin processing the file(s) shortly. If we run into any issues we will contact you.</h4>
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
        -->
    </div>
</div>
