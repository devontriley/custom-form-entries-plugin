class contactForm{constructor(e){this.form=e,this.fields=e.querySelectorAll(".field"),this.fieldsArr=[],this.errors=!1,this.success=e.querySelector(".form-success");for(var r=0;r<this.fields.length;r++)this.fieldsArr[r]={ele:this.fields[r],name:this.fields[r].querySelector("input")?this.fields[r].querySelector("input").name:this.fields[r].querySelector("textarea").name,input:this.fields[r].querySelector("input")?this.fields[r].querySelector("input"):this.fields[r].querySelector("textarea"),value:this.fields[r].querySelector("input")?this.fields[r].querySelector("input").value:this.fields[r].querySelector("textarea").value,inlineMsg:this.fields[r].querySelector(".inline-msg")};this.validationErrors={required:"Required",name:"At least 4 characters",email:"Enter a valid email address",invalid:"invalid characters",human:"incorrect"},e.addEventListener("submit",function(e){e.preventDefault(),this.clearErrors(),this.validateForm()}.bind(this))}clearErrors(){this.errors=!1;for(var e=0;e<this.fieldsArr.length;e++)this.fieldsArr[e].ele.classList.remove("error"),this.fieldsArr[e].inlineMsg&&(this.fieldsArr[e].inlineMsg.innerHTML="")}validateForm(){for(var e=0;e<this.fieldsArr.length;e++){var r=this.fieldsArr[e].input,i=r.value,t=this.fieldsArr[e].inlineMsg;switch(r.required&&!i&&(this.errors=!0,t.innerHTML=this.validationErrors.required,this.fieldsArr[e].ele.classList.add("error")),r.type){case"text":"full_name"==r.name&&(this.validateName(i)||(this.errors=!0,t.innerHTML=this.validationErrors.name,this.fieldsArr[e].ele.classList.add("error"))),"not_human"==r.name&&(i?"9"!==i&&(this.errors=!0,t.innerHTML=this.validationErrors.human,this.fieldsArr[e].ele.classList.add("error")):(this.errors=!0,t.innerHTML=this.validationErrors.required,this.fieldsArr[e].ele.classList.add("error")));break;case"email":this.validateEmail(i)||(this.errors=!0,t.innerHTML=this.validationErrors.email,this.fieldsArr[e].ele.classList.add("error"))}}this.errors||this.submitForm()}validateName(e){if(e)return!(e.length<=3)}validateEmail(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}validateChars(e){return/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(String(e).toLowerCase())}validateRequired(){}submitForm(){for(var e={action:"contact_form_submit"},r=0;r<this.fieldsArr.length;r++){var i=this.fieldsArr[r].name,t=this.fieldsArr[r].input.value;e[i]=t}console.log("submit"),jQuery.ajax({method:"post",url:ajaxurl,data:e,error:function(e,r,i){console.log(e,r,i)},success:function(e,r,i){console.log(e),this.success.innerHTML="<h3>Thank you for contacting us!</h3><p>We will be in touch shortly.</p>"}})}}if(document.getElementById("contact-form"))var contactFormObj=new contactForm(document.getElementById("contact-form"));