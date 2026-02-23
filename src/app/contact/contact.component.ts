import { Component, OnInit } from '@angular/core';
import { MailService } from "../mail.service";
import { UntypedFormGroup, Validators, UntypedFormControl } from "@angular/forms";
declare var $: any;
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent implements OnInit {

  url: any ="https://www.fiverr.com/vinayone_india";
  submitted = false;
  contactForm: UntypedFormGroup;
  options:any = ['Found on Google', 'I followed a link', 'Someone has reffered'];

  constructor(private mailservice: MailService) {
    this.mailForm();
   }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "notifications",
        message: "SUCESS - Your message sent!"

    },{
        type: "primary",
        timer: 500,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

getFiverrProfile(){
  window.open(this.url,'_blank');
}

mailForm(){
  this.contactForm = new UntypedFormGroup({
    name : new UntypedFormControl('',[Validators.required, Validators.minLength(4)]),
    contactnumber : new UntypedFormControl('',[Validators.required, Validators.minLength(9)]),
    email : new UntypedFormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    howfoundme : new UntypedFormControl('', Validators.required),
    feedback : new UntypedFormControl('', Validators.required)
  });
}

onSubmit(){
  this.submitted = true;
  if (!this.contactForm.valid) {
    return false;
  } else {
    this.mailservice.SendMail(this.contactForm.value)
    .subscribe(
      (res) => {
       console.log('Mail successfully sent!');
      }, (error) => {
        console.log(error);
      });
  }
  this.contactForm.reset();
  this.showNotification('bottom','left');
}



  ngOnInit(): void {
  }

}
