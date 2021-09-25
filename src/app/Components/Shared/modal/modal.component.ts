import { MethodCall } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { emit } from 'process';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult: string = '';
  @Input() modalTitle='';
  @Input() modalHeading='';
  @Input() modalContent='';
  @Input() okayButtonRedirectLink='';
  @Output() emittOpenMethod=new EventEmitter<any>();
 
  constructor(private modalService:NgbModal) { 
    this.emittOpenMethod.emit(this.open)
  }

  public openModal()
  {
    document.getElementById('btn_open_modal').click();
  }
   open(content:any) {
    this.modalService.open(content);
  }
  
  

  ngOnInit(): void {
  }

}
