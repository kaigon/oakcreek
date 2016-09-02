<!DOCTYPE html><!--[if lte IE 9]><html class="no-js ie9" lang=""><![endif]--><!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]--> <?php date_default_timezone_set('UTC'); ?> <head><meta charset="UTF-8"><title>Oakcreek Printing and Mailing</title><meta name="description" content="We are a full service printing and mailing company based in Lincoln, NE. No matter your project's size or scope we have the capacity to meet your needs."><meta name="author" content="Lincoln Journal Star"><meta name="viewport" content="width=device-width,initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,700" rel="stylesheet" type="text/css"><link rel="stylesheet" href="style.css"><script>!function(e){function t(t,n,r,o){"use strict";function a(){for(var e,n=0;s.length>n;n++)s[n].href&&s[n].href.indexOf(t)>-1&&(e=!0);e?c.media=r||"all":setTimeout(a)}var c=e.document.createElement("link"),i=n||e.document.getElementsByTagName("script")[0],s=e.document.styleSheets;return c.rel="stylesheet",c.href=t,c.media="only x",c.onload=o||null,i.parentNode.insertBefore(c,i),a(),c}var n=function(r,o){"use strict";if(r&&3===r.length){var a=e.navigator,c=e.Image,i=!(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||e.opera&&-1===a.userAgent.indexOf("Chrome")||-1!==a.userAgent.indexOf("Series40")),s=new c;s.onerror=function(){n.method="png",n.href=r[2],t(r[2])},s.onload=function(){var e=1===s.width&&1===s.height,a=r[e&&i?0:e?1:2];n.method=e&&i?"svg":e?"datapng":"png",n.href=a,t(a,null,null,o)},s.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",document.documentElement.className+=" grunticon"}};n.loadCSS=t,e.grunticon=n}(this),function(e,t){"use strict";var n=t.document,r="grunticon:",o=function(e){if(n.attachEvent?"complete"===n.readyState:"loading"!==n.readyState)e();else{var t=!1;n.addEventListener("readystatechange",function(){t||(t=!0,e())},!1)}},a=function(e){return t.document.querySelector('link[href$="'+e+'"]')},c=function(e){var t,n,o,a,c,i,s={};if(t=e.sheet,!t)return s;n=t.cssRules?t.cssRules:t.rules;for(var u=0;n.length>u;u++)o=n[u].cssText,a=r+n[u].selectorText,c=o.split(");")[0].match(/US\-ASCII\,([^"']+)/),c&&c[1]&&(i=decodeURIComponent(c[1]),s[a]=i);return s},i=function(e){var t,o,a;o="data-grunticon-embed";for(var c in e)if(a=c.slice(r.length),t=n.querySelectorAll(a+"["+o+"]"),t.length)for(var i=0;t.length>i;i++)t[i].innerHTML=e[c],t[i].style.backgroundImage="none",t[i].removeAttribute(o);return t},s=function(t){"svg"===e.method&&o(function(){i(c(a(e.href))),"function"==typeof t&&t()})};e.embedIcons=i,e.getCSS=a,e.getIcons=c,e.ready=o,e.svgLoadedCallback=s,e.embedSVG=s}(grunticon,this),grunticon(["img/icons.data.svg.css","img/icons.data.png.css","img/icons.fallback.css"],grunticon.svgLoadedCallback)</script><noscript><link href="img/icons.fallback.css" rel="stylesheet"></noscript></head> <?php
    // Include and instantiate the class.
    require_once 'Mobile_Detect.php';
    $detect = new Mobile_Detect;
    $mobile = false;
    $phone = false;
    $tablet = false;
    $class = 'class="';
    if ( $detect->isMobile() ) {
        $mobile = true; 
        $class.="is_mobile ";
    }
    if( $detect->isMobile() && !$detect->isTablet() ){
     $phone = true; 
     $class.="is_phone ";
    }
    if ( $detect->isTablet() ) {
        $tablet = true; 
        $class.="is_tablet ";
    }
    $class.='"';
    ?> <body <?php if($mobile===true || $phone===true || $tablet===true){echo $class;} ?>><!--[if lte IE 8]><div class="browsehappy"><div><h2>You are using an <strong>outdated</strong> browser.</h2><p class="browserupgrade">We are sorry, your browser is incompatible with our site's layout / functionality.</p><p>Please <a href="http://browsehappy.com/">upgrade your browser</a>.</p><img src="img/logo_color.png" alt="Oakcreek Printing and Mailing"></div></div><![endif]--><header class="header"><div class="container-fluid"><div class="row middle-xs"><div class="col-xs-6 col-sm-12 col-md-3"><figure class="logo"><img src="img/logo_inverted.png" alt="Oakcreek Printing and Mailing"></figure></div><div class="col-xs-6 col-sm-12 col-md-9 nav-popout full"><div class="nav-menu"><i class="icon-menu" data-grunticon-embed></i> <span>menu</span> <i class="close-button" data-type="close"></i></div><nav><ul><li><a data-scrollto="services" title="Services" class="btn btn--link btn--small btn--trans"><span class="btn__container"><span class="btn__text">Services</span></span></a></li><li><a data-scrollto="guidelines" title="Guidelines" class="btn btn--link btn--small btn--trans"><span class="btn__container"><span class="btn__text">Guidelines</span></span></a></li><li><a data-scrollto="contact" title="Contact Us" class="btn btn--small btn--link btn--solid btn--icon btn--hover--down"><span class="btn__container"><i class="btn__icon icon-email_solid"></i> <span class="btn__text">Contact Us</span></span></a></li></ul></nav></div></div></div></header><section class="hero"><main class="container-fluid"><div class="row bottom-xs"><div class="col-xs-12 col-md-8"> <?php if($phone===true): ?> <h1>Get it <span><strong>done</strong>.</span></h1><h3>Whatever your project. Start to finish. Regardless of scale.</h3> <?php else: ?> <h1>Get your <span>project <strong>done</strong>.</span></h1><h3>Start to finish. <span>Regardless of scale.</span></h3> <?php endif; ?> <button type="button" class="btn btn--solid btn--hover--grow btn--dark-teal btn--icon" data-scrollto="contact"><div class="btn__container"><div class="btn__text"><i class="icon-email_solid"></i><span>Request a <em class="hidden-xs">free</em> consultation</span></div></div></button></div></div></main> <?php if($tablet===true): ?> <svg viewBox="0 0 1614 907" preserveAspectRatio="none" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="section__svg"><defs><clipPath id="clippath"><polygon fill="none" class="section__svg-path" points="0 907,1590 907,500 0,0 0"></polygon></clipPath></defs><image xlink:href="img/bg_hero_blur_tablet.jpg" id="hero-svg-image" width="1614" height="907" x="0" y="0" clip-path="url(#clippath)"></image></svg> <?php elseif($mobile===false): ?> <svg viewBox="0 0 1614 907" preserveAspectRatio="none" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="section__svg"><defs><clipPath id="clippath"><polygon fill="none" class="section__svg-path" points="0 907,1590 907,500 0,0 0"></polygon></clipPath></defs><image xlink:href="img/bg_hero_blur.jpg" id="hero-svg-image" width="1614" height="907" x="0" y="0" clip-path="url(#clippath)"></image></svg> <?php endif; ?> </section><section class="services" id="services"><header class="container-fluid"><div class="row"><div class="col-xs-12 col-sm-8 col-md-6"><h2>Services</h2><h3>We've served the Midwest market for more than 20 years. Whatever your project needs, we can help.</h3></div></div></header><main class="container-fluid"><div class="row"><div class="col-xs-12 col-sm-6 col-lg-4"><div class="box"><div class="box-flip"><div class="box-front"><i class="icon-s-print"></i><h4><strong>Printing</strong></h4><p>Our printing press is one of only 16 other operational flexo publication presses in the United States. It produces a better quality, clean print with absolutely no ink rub off. It's also environmentally friendly, using water-based inks and produces substantially less waste than other presses.</p></div> <?php /*
                                <div class="box-back">
                                    <a href="#" class="row middle-md icon-products_bg" data-modal="modal_printing">
                                        <span class="col-xs-12">
                                            View available products
                                            <i class="icon-plus"></i>
                                        </span>
                                    </a>
                                </div>
                                */ ?> </div></div></div><div class="col-xs-12 col-sm-6 col-lg-4"><div class="box"><div class="box-flip"><div class="box-front"><i class="icon-s-mailing"></i><h4><strong>Mailing</strong></h4><p>We are one of the largest mailers in the area, with just over one million pieces mailed out of our facility each month. Our knowledgeable staff handles all USPS relations so you don’t have to, allowing you to prevent unnecessary delays and additional costs.</p></div> <?php /*
                                <div class="box-back">
                                    <a href="#" class="row middle-md icon-products_bg" data-modal="modal_mailing">
                                        <span class="col-xs-12">
                                            View available products
                                            <i class="icon-plus"></i>
                                        </span>
                                    </a>
                                </div>
                                */ ?> </div></div></div><div class="col-xs-12 col-sm-6 col-lg-4"><div class="box"><div class="box-flip"><div class="box-front"><i class="icon-s-design"></i><h4><strong>Design</strong></h4><p>Whether making final adjustments, or starting from a blank page, our experienced design department can assist you with every aspect of your project. All files are converted digitally using our state-of-the-art MacDermid computerized plate making system.</p></div> <?php /*
                                <div class="box-back">
                                    <a href="#" class="row middle-md icon-products_bg" data-modal="modal_design">
                                        <span class="col-xs-12">
                                            View available products
                                            <i class="icon-plus"></i>
                                        </span>
                                    </a>
                                </div>
                                */ ?> </div></div></div><div class="col-xs-12 col-sm-6 col-lg-4"><div class="box"><div class="box-flip"><div class="box-front"><i class="icon-s-binding"></i><h4><strong>Binding</strong></h4><p>Our talents don’t end with exceptional printing and distribution. We offer a wide selection of binding styles and cover options as well, and we can help you choose the best style to ensure a long life for your product.</p></div> <?php /*
                                <div class="box-back">
                                    <a href="#" class="row middle-md icon-products_bg" data-modal="modal_binding">
                                        <span class="col-xs-12">
                                            View available products
                                            <i class="icon-plus"></i>
                                        </span>
                                    </a>
                                </div>
                                */ ?> </div></div></div><div class="col-xs-12 col-sm-6 col-lg-4"><div class="box"><div class="box-flip"><div class="box-front"><i class="icon-s-supplies"></i><h4><strong>Supplies</strong></h4><p>Packaging and shippings supplies come in a wide variety of shapes and sizes. Our experienced team can help ensure you make the right choice, saving you time and money while ensuring a safe, speedy delivery of your product.</p> <?php /*</div>
                                <div class="box-back">
                                    <a href="#" class="row middle-md icon-products_bg" data-modal="modal_supplies">
                                        <span class="col-xs-12">
                                    View available products
                                    <i class="icon-plus"></i>
                                </span>
                                    </a>
                                </div>
                            </div>*/ ?> </div></div></div></div></div></main></section><section class="customers"><main class="container-fluid"><h2>Our <strong>Happy</strong> Customers</h2><div class="row middle-xs"> <?php 
                        $customers = array( 
                            array("Beatrice Daily Sun","bds.png"),
                            array("The Columbus Telegram","columbus.png"),
                            array("Fremont Tribune","fremont.png"),
                            array("Lincoln Journal Star","journalstar.png"),
                            array("The Plattsmouth Journal","plattsmouth.png"),
                            array("Lincoln Living","lincolnliving.png"),
                            array("Southeast Community College","scc.png"),
                            array("Midwest Messenger","messenger.png"),
                            //array("L Magazine","lmagazine.png"),
                            //array("Gallup","gallup.png"),
                            //array("Nelnet","nelnet.png"),
                            //array("LES","les.png"),
                            //array("Lincoln Public Schools","lps.png"),
                            //array("Lincoln Parks and Rec","parksandrec.png"),
                            //array("YMCA","ymca.png"),
                        );
                       
                        shuffle($customers);
                        
                        foreach($customers as $k => $v){
                            echo '<div class="col-xs-6 col-sm-4 col-md-3 flex-col-5x">';
                            echo '<figure>';
                            echo '<img src="img/customers/'.$v[1].'" alt="'.$v[0].'" title="'.$v[0].'">';
                            echo '</figure>';
                            echo '</div>';
                        }
                    ?> </div></main><footer class="container-fluid"><div class="row"><div class="col-xs-12"><h3>We helped them get it done. Discover how we can help you!</h3><button type="button" class="btn btn--green btn--hover--grow btn--solid" data-scrollto="contact"><div class="btn__container"><div class="btn__text">Request a <span>free</span> consultation</div></div></button></div></div></footer></section><section class="guidelines"><header class="container-fluid"><div class="row"><div class="col-xs-12 col-sm-8 col-md-6"><h2>Submission Guidelines</h2><h3>Have your own design staff? That's great! Below are the requirements they'll need to follow in order to ensure the best results for your finished product.</h3></div></div></header><main class="container-fluid"><div class="row"><div class="col-xs-12 col-sm-3 col-md-2 col-lg-3 guidelines_buttons"><button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link"><div class="btn__container"><div class="btn__text">Fonts</div></div></button> <?php /*
                        <button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link">
                            <div class="btn__container">
                                <div class="btn__text">Hardware</div>
                            </div>
                        </button>
                        <button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link">
                            <div class="btn__container">
                                <div class="btn__text">Software</div>
                            </div>
                        </button>
                        */ ?> <button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link"><div class="btn__container"><div class="btn__text">Formats</div></div></button> <button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link"><div class="btn__container"><div class="btn__text">Color</div></div></button> <button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link"><div class="btn__container"><div class="btn__text">Photos</div></div></button> <?php /*
                        <button type="button" data-guidelines-toggle class="btn btn--trans btn--small btn--link">
                            <div class="btn__container">
                                <div class="btn__text">Templates</div>
                            </div>
                        </button>
                        <a href="files/pdf/guidelines.pdf" class="btn btn--small btn--trans btn--link">
                            <span class="btn__container">
                                        <span class="btn__text">
                                            <i class="icon-pdf"></i>View as pdf
                                        </span>
                            </span>
                        </a>
                        */ ?> </div><div class="col-xs-12 col-sm-9 col-md-8 col-lg-8 guidelines_articles"></div></div></main><footer class="container-fluid"><div class="row"><div class="col-xs-12"><h3>Need to submit files to our creative team?</h3><button type="button" class="btn btn--solid btn--light-brown btn--hover--grow" data-modal="upload_files"><div class="btn__container"><span class="btn__text">Upload project files</span></div></button> <button type="button" class="btn btn--invert btn--icon btn--hover--left btn--light-brown" data-scrollto="contact" title="Contact us"><div class="btn__container"><span class="btn__text">Got a question?</span> <i class="btn__icon icon-email"></i></div></button></div></div></footer><i class="icon-leaves"></i></section><section class="about"><main class="container-fluid"><div class="about__row"><div class="about__col about__col---has-bio about__col--10"><figure class="about__figure"><img src="img/about/1.jpg" alt="" class="about__img"></figure><div class="about__bio"><h3 class="about__bio--name">Matt Kasik</h3><p class="about__bio--title">Post and Pre-Press Manager <span><i class="icon-phone"></i> <a href="tel:4024737375">402.473.7375</a></span></p></div></div><div class="about__col hidden-xs about__col--14"><figure class="about__figure"><img src="img/about/2.jpg" alt="" class="about__img"></figure></div></div><div class="about__row"><div class="about__col about__col--16"><div class="about__row"><div class="about__col about__col--14"><figure class="about__figure"><img src="img/about/3.jpg" alt="" class="about__img"></figure></div><div class="about__col about__col--10"><figure class="about__figure"><img src="img/about/4.jpg" alt="" class="about__img"></figure></div></div><div class="about__row"><div class="about__col about__col--10"><figure class="about__figure"><img src="img/about/6.jpg" alt="" class="about__img"></figure></div><div class="about__col about__col--14"><div class="about__row"><div class="about__col"><figure class="about__figure"><img src="img/about/7.jpg" alt="" class="about__img"></figure></div></div><div class="about__row"><div class="about__col"><figure class="about__figure"><img src="img/about/8.jpg" alt="" class="about__img"></figure></div></div></div></div></div><div class="about__col hidden-xs about__col--8"><figure class="about__figure"><img src="img/about/5.jpg" alt="" class="about__img"></figure></div></div></main></section><section class="contact"> <?php if($phone!==true): echo '<div class="icon-tree">'; endif; ?> <header class="container-fluid"><div class="row"><div class="col-xs-12 col-md-5"><h2><span class="hidden-xs">Still have questions? </span>Ready to get started?</h2></div></div></header><main class="container-fluid"><div class="row between-md"><div class="col-xs-12 col-md-5"><h3>Talk to a specialist today and let us help you get your project done. We look forward to working with you.</h3><ul class="ul-list"><li><i class="icon-phone"></i> <a href="tel:4024737375">402.473.7375</a></li><li><i class="icon-email"></i> <a href="mailto:sales@oakcreekprinting.com" target="_blank">sales@oakcreekprinting.com</a></li></ul></div><div class="col-xs-12 col-md-6 col-md-push-1"><form id="ajax-contact" method="POST" action="mailer.php" accept-charset="utf-8" class="end-md"><div class="content row"><fieldset class="col-xs-12 col-sm-6"><legend class="required">Your name</legend><input type="text" name="name" id="name" value="" placeholder="Your Name*" required></fieldset><fieldset class="col-xs-12 col-sm-6"><legend class="required">Email Address</legend><input type="text" name="email" id="email" value="" placeholder="Email Address*" required></fieldset><fieldset class="col-xs-12 col-sm-6"><legend>Phone Number</legend><input type="tel" name="phone" id="phone" maxlength="15" autocomplete="off" value="" placeholder="Phone Number" data-mask="(000) 000-0000"></fieldset><fieldset class="col-xs-12 col-sm-6 hidden-xs"><legend>Your Company Name</legend><input type="text" name="company" id="company" value="" placeholder="Company Name"></fieldset><fieldset class="col-xs-12"><legend class="required">Your Message</legend><textarea required name="message" id="message" placeholder="Your Message*" rows="5"></textarea></fieldset><div class="col-xs-12 form-messages"><div class="alert alert-contact alert-contact--fail"><div class="alert-col alert-pre"><p>!</p></div><div class="alert-col alert-body"><p class="form-messages-content"></p></div></div></div><div class="col-xs-12"><button type="submit" class="btn btn--icon btn--solid btn--hover--up btn--bright-green btn--small" title="Submit"><div class="btn__container"><span class="btn__text">Submit</span> <i class="btn__icon icon-email_solid"></i></div></button></div></div> <?php /*
                            <div class="content--success form-messages">
                                <div class="content__reversed">
                                    <i class="checkmark">
                                        <span class="check"></span>
                                    </i>
                                    <p class="form-messages-content content__message"></p>
                                </div>
                            </div>
                            */ ?> </form></div></div></main> <?php if($mobile===false): ?> <footer><div class="container-fluid"><div class="row bottom-xs reverse"><div class="col-xs-12 col-sm-6 col-md-9"><p>926 P Street<br>Lincoln, NE 68508</p></div><div class="col-xs-12 col-sm-6 col-md-3"><map name="googlemap"><div class="embed-container embed-container_ar100"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.5251237429457!2d-96.70991458459181!3d40.81642797932069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c6b415f2fc603f0!2sOakcreek+Printing+Mailing!5e0!3m2!1sen!2sus!4v1457550269152" width="400" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></div></map></div></div></div></footer> <?php else: ?> <footer><div class="container-fluid"><div style="padding-bottom:4rem"><p>926 P Street<br>Lincoln, NE 68508</p><p><i class="icon-map"></i> <a href="https://www.google.com/maps/place/Oakcreek+Printing+Mailing/@40.816428,-96.707726,16z/data=!4m5!3m4!1s0x0:0x7c6b415f2fc603f0!8m2!3d40.816428!4d-96.7077259?hl=en-US">Find us!</a></p></div></div></footer> <?php endif; ?> <?php if($phone!==true): echo '</div>'; endif; ?> </section><section class="footer"><footer><div class="container-fluid"><div class="row middle-xs"><div class="col-xs-12"><p>&copy; <time></time> <strong>Oakcreek Printing and Mailing</strong> <span>We have the capacity to meet your needs.</span></p></div></div></div></footer></section> <?php 
                include('inc/modal_upload.php'); 
                //include('inc/modal_printing.php');
                //include('inc/modal_mailing.php');
                //include('inc/modal_design.php');
                //include('inc/modal_binding.php');
                //include('inc/modal_shipping.php');
                //include('inc/modal_supplies.php');
            ?> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js" async defer="defer"></script><script>window.jQuery||document.write('<script src="js/vendor/jquery-1.12.0.min.js" async defer><\/script>')</script><script src="https://www.google.com/recaptcha/api.js" async defer="defer"></script><script src="js/vendor/custom-modernizr.js" async defer="defer"></script><script src="js/production.min.js" async defer="defer"></script><script>window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)},ga.l=+new Date,ga("create","UA-54716522-2","auto"),ga("send","pageview")</script><script async src="https://www.google-analytics.com/analytics.js"></script></body></html>