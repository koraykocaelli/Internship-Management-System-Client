import { Component, OnInit } from '@angular/core';
import { InternshipFormService } from '../../../services/common/models/internship-form.service';
import { CreateInternshipCommandRequest, Gender } from '../../../contracts/createInternshipCommandRequest';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';

@Component({
  selector: 'app-student-intership-info',
  templateUrl: './student-intership-info.component.html',
  styleUrl: './student-intership-info.component.scss'
})
export class StudentIntershipInfoComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService,  private internshipFormService: InternshipFormService,  private toastrService: CustomToastrService ) {
    super(spinner)
  }

  ngOnInit(): void {
      
  }

  create(
    age: HTMLInputElement,
    birthDate: HTMLInputElement,
    companyAddress: HTMLInputElement,
    companyName: HTMLInputElement,
    companyPhone: HTMLInputElement,
    department: HTMLInputElement,
    doesNotReceiveSalary: HTMLInputElement,
    emailSendingDate: HTMLInputElement,
    // fileUpload: HTMLInputElement,
    fullName: HTMLInputElement,
    gender: HTMLSelectElement,
    internshipEndDate: HTMLInputElement,
    internshipStartDate: HTMLInputElement,
    level: HTMLSelectElement,
    numberOfEmployees: HTMLInputElement,
    receivesHealthInsurance: HTMLInputElement,
    receivesSalary: HTMLInputElement,
    requestedGovernmentAidAmount: HTMLInputElement,
    studentGSMNumber: HTMLInputElement,
    studentNo: HTMLInputElement,
    tcNo: HTMLInputElement
  ) {
    this.showSpinner(SpinnerType.BallNewton);
    const create_internshipCommandRequest: CreateInternshipCommandRequest = {
      advisorID: '', 
      studentID: '',
      studentNo: studentNo.value,
      // formFile: fileUpload.files ? fileUpload.files[0] : null,
      fullName: fullName.value, 
      tcNo: tcNo.value,
      internshipStartDate: internshipStartDate.value,
      internshipEndDate: internshipEndDate.value,
      department: department.value,
      studentGSMNumber: studentGSMNumber.value,
      companyName: companyName.value,
      numberOfEmployees: parseInt(numberOfEmployees.value),
      companyPhone: companyPhone.value,
      companyAddress: companyAddress.value,
      requestedGovernmentAidAmount: parseInt(requestedGovernmentAidAmount.value),
      receivesSalary: receivesSalary.checked,
      doesNotReceiveSalary: doesNotReceiveSalary.checked,
      gender: gender.value === 'male' ? Gender.Male : Gender.Female,
      age: parseInt(age.value),
      receivesHealthInsurance: receivesHealthInsurance.checked,
      birthDate: birthDate.value,
      emailSendingDate: emailSendingDate.value,
      level: parseInt(level.value),
    };

      this.internshipFormService.create(create_internshipCommandRequest, () => this.hideSpinner(SpinnerType.BallNewton));
      this.toastrService.message("Formunuz Başarıyla Gönderilmiştir.","Form Gönderme Başarılı!", {
        messageType: ToastrMessageType.Info,
        position: ToastrPosition.TopRight
      })
  }
}
