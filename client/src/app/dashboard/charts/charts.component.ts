import { Component, OnInit } from '@angular/core';
import { GetJSONService} from '../../shared/get-json.service';
import * as moment from 'moment';
import {LoginuserService} from './../../shared/loginuser.service';
 import * as config from '../../config/multi_en_config.json';
@Component({
 selector: 'app-charts',
 templateUrl: './charts.component.html',
 styleUrls: ['./charts.component.css'],
 providers:[GetJSONService]
})
export class ChartsComponent implements OnInit {
  public word= (<any>config).charts;
 constructor(private getJSON: GetJSONService,private loginUserService:LoginuserService) { }


 public transactionDataJson:any = [[],[]];
 public totalChartLabels:Array<any> ;
 public totalChartDataE =[];
 public totalChartDataB =[];
 public totalChartLabelsWeek:Array<any> ;
 public totalChartOptions:any = {
   responsive: true
 };
 public totalChartColors:Array<any> = [
 { // grey
   backgroundColor: 'rgba(148,159,177,0.2)',
   borderColor: 'rgba(148,159,177,1)',
   pointBackgroundColor: 'rgba(148,159,177,1)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
 },
 { // dark grey
   backgroundColor: 'rgba(250,128,114,0.2)',
   borderColor: 'rgba(220,20,60,1)',
   pointBackgroundColor: 'rgba(250,128,114,1)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgba(250,128,114,1)'
 }
 ];

 public categoryChartLabels:any = [] ;
 public categoryChartData:Array<any>;
 public categoryChartDataE:any = [];
 public categoryChartDataB:any = [];
 public categoryChartType:string = 'line';


 public flagM: boolean = true;
 public flagW:boolean=false;
 public ToggleM(){this.flagM = true; this.flagW = false;
   this.totalChartData  = [[]]
 }
 public ToggleW(){this.flagW = true; this.flagM= false;
   this.categoryChartData  = [[],[]]
 }

 public totalChartLegend:boolean = true;
 public totalChartType:string = 'bar';
 public totalChartTypeWeek:string = 'bar';
 public totalChartMonth:number=0;
 public totalChartMonths:string="January";
 // events
 public chartClicked(e:any):void {
   console.log(e);
 }
 public chartHovered(e:any):void {
   console.log(e);
 }//
 public totalChartData: Array<any>;
 //public monthArray:[]
public totalspenttoday:number;
public totalbudgetyday:number;
public totalexpenseyday:number;
public topspentcategory:string;
public selectedtimetotalexpense:string;
public selectedtimetotalbudget:string;
public displaytitle:string;
public categoryLabelId:Array<any>;

// [3:32] 
public generateChart  (start):void {
  let add:number= this.flagM?30:7;
  this.categoryChartData = [[],[]]
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(add,'days').format('DD-MMM-YYYY');
  //s=moment(start).format('YYYY/MM/DD')
  let total = 0;let btotal=0;
  this.displaytitle ="Starting From  "+ moment(start).format('DD-MMM-YYYY')
   
   //console.log(num);
   let totalChartDataE=Array(add).fill(0);
   let totalChartDataB=Array(add).fill(0);
   this.categoryChartDataE=Array(add).fill(0);

   
   this.transactionDataJson.map((element) => {

     //console.log(moment(element.date).format('YYYY-MM-DD'))
     element.date = moment(element.date).format('DD-MMM-YYYY');

     
     if(moment(element.date).isAfter(start) && moment(element.date).isBefore(end))
     {
      let monthIndex = moment(element.date).diff(start,'days');
      

      this.categoryLabelId.map((categoryElement,categoryIndex)=>{
        //console.log(categoryElement, categoryIndex)
        if(categoryElement.categoryId==element.categoryId) {this.categoryChartDataE[categoryIndex]+=element.expense

            

        }
          
      })
       totalChartDataE[monthIndex]+=element.expense;
       total+=element.expense;
       btotal+=10000;
     }
   });
     this.categoryChartData = [{data:this.categoryChartDataE, label: 'expense'}, {data:this.categoryChartDataB, label:'budget'}]
        
   this.topspentcategory = this.categoryChartLabels[this.categoryChartDataE.indexOf(Math.max.apply(null, this.categoryChartDataE))]
   
   //console.log(this.doughnutChartData.indexOf(Math.max(this.doughnutChartData)))
  this.selectedtimetotalexpense = total.toString();
  this.selectedtimetotalbudget = btotal.toString();
  //console.log(this.selectedtimetotalexpense+"    "+this.selectedtimetotalbudget)
   this.totalChartData = [{data:totalChartDataE, label: 'expense'}]
   
 }

 ngOnInit(){

   this.categoryChartData =[[],[]]
   this.categoryLabelId= []
   
   this.totalChartData =[[]]

   /* Getting Response from Database, according to user email*/
   this.getJSON.getJSONS(this.loginUserService.getLoginUser()).subscribe(
     (res)=>
     {
       this.transactionDataJson = res[0].transaction;
       res[0].category.map((elementData) => {
         this.categoryLabelId.push({"categoryName":elementData.categoryName, "categoryId":elementData.categoryId})
         this.categoryChartLabels.push(elementData.categoryName)
         this.categoryChartDataB.push(elementData.budget)
         //this.categoryChartDataE.push(elementData.spending)

       }

       
       );
       //console.log(this.categoryLabelId)
       
       
       let add:number= this.flagM?-30:-7;
       this.generateChart  (moment().add(add,'days').format('YDD-MMM-YYYY'))
     });
    this.totalChartLabels = [1, 2, 3 ,4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
       this.totalChartLabelsWeek = [1,2,3,4,5,6,7];
   

 }
}