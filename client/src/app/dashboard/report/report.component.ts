import { Component, OnInit } from '@angular/core';
import { GetJSONService} from '../../shared/get-json.service';
import * as moment from 'moment';
import { Router } from '@angular/router'
import {LoginuserService} from './../../shared/loginuser.service';
 import * as config from '../../config/multi_en_config.json';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {


public word= (<any>config).charts;
 constructor(private getJSON: GetJSONService,private loginUserService:LoginuserService, private router: Router) { }
 errorMsg: string;
 public dateInput ;
 public now = moment().format('YYYY-MM-DD')
 public transactionDataJson:any = [[],[]];
 public totalChartData: Array<any>; 
 public totalChartDataE =[];
 public totalChartDataB =[];
 public ChartLabelsWeek:Array<any> ;
 public ChartLabelsMonth:Array<any> ;
 public monthlyTotalChartType ="bar";
 public ChartOptions:any = {
   responsive: true
 };
 public categoryChartLabels:any = [] ;
   
 public categoryChartDataE:any = [];
 public categoryChartDataB:any = [];
 public categoryBvEType:string = 'line';
 public categoryBvEData:Array<any>;
 public recentTransactionData:Array<any>;

public totalspenttoday:number;
public totalbudgetyday:number;            //Create Function
public totalexpenseyday:number;            //Create Function
public topspentcategory:string;
public selectedtimetotalexpense;
public selectedtimetotalbudget;
public startDate:string;
public categoryLabelId:Array<any>;
public categoryData:any;
public duration:any;
public categoryDoughnutData:Array<any>;
public categoryDoughnutType:string = 'doughnut';
  // Chart Events
 public chartClicked(e:any):void {
   console.log(e);
 }
 public chartHovered(e:any):void {
   console.log(e);
 }//

 public ChartColors:Array<any> = [
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

//----------------------------------Function to calculate category - Budget vs Expense--------------------------------------------// 
 public categoryBvEChart(start, time):void {
  
  this.categoryBvEData = [[],[]]

  //Setting Time Period for Calculation
  
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(time,'days').format('DD-MMM-YYYY');
  this.startDate ="Starting From  "+ moment(start).format('DD-MMM-YYYY')
  

 //Initializing variables for Calculation
  
   this.categoryChartDataE=Array(time).fill(0);
   let transaction = this.transactionDataJson
   let category = this.categoryLabelId
 //Calculating category wise expenditure  
   transaction.map((element) => {

     element.date = moment(element.date).format('DD-MMM-YYYY');  

     if(moment(element.date).isAfter(start) && moment(element.date).isBefore(end))
     {
      category.map((categoryElement,categoryIndex)=>{
        if(categoryElement.categoryId==element.categoryId) {
          this.categoryChartDataE[categoryIndex]+=element.expense
        }
      })   
     }
   });
     
   this.categoryBvEData = [{data:this.categoryChartDataE, label: 'expense'}, {data:this.categoryChartDataB, label:'budget'}]
   /*console.log("categoryBvEData",this.categoryBvEData)
   console.log("categoryChartLabels",this.categoryChartLabels)
   console.log("categoryBvEType",this.categoryBvEType)*/
   
   
 }

 //----------------------------------Function to calculate monthly total Chart--------------------------------------------// 
 public monthlyTotalChart(start, time):void {
    
  let transactionData = this.transactionDataJson;
  //Setting Time Period for Calculation
  
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(time,'days').format('DD-MMM-YYYY');
  this.startDate ="Starting From  "+ moment(start).format('DD-MMM-YYYY')

  this.totalChartData = []
  this.selectedtimetotalexpense = 0;
  this.selectedtimetotalbudget = 0;
  let totalChartDataE=Array(time).fill(0);
   let totalChartDataB=Array(time).fill(0);

  transactionData.map((element) => {


     //console.log(moment(element.date).format('YYYY-MM-DD'))
     element.date = moment(element.date).format('DD-MMM-YYYY');

     
     
     if(moment(element.date).isAfter(start) && moment(element.date).isBefore(end))
     {
      let monthIndex = moment(element.date).diff(start,'days');
      console.log("insideeeee",element)

      
       totalChartDataE[monthIndex]+=element.expense;
       this.selectedtimetotalexpense+=element.expense;
     }
   });

  	this.totalChartData = [{data:totalChartDataE, label: 'expense'}]
  	//console.log(this.totalChartData)
 }



 //----------------------------------Additional Data--------------------------------------------// 
 public additionalData(start, time):void {
  
  //Setting Time Period for Calculation
  
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(time,'days').format('DD-MMM-YYYY');
  this.startDate ="Starting From  "+ moment(start).format('DD-MMM-YYYY')
  

   let transaction = this.transactionDataJson
   let category = this.categoryChartDataB

   this.selectedtimetotalbudget = 0
   this.selectedtimetotalexpense = 0

 //Calculating category wise expenditure  
   transaction.map((element) => {

     element.date = moment(element.date).format('DD-MMM-YYYY');  

     if(moment(element.date).isAfter(moment(start).add(-1,'days')) && moment(element.date).isBefore(end))
     {

       this.selectedtimetotalexpense += element.expense
       
     }
   }); 

   category.map((categoryElement)=>{
       //console.log(categoryElement)
       //this.selectedtimetotalbudget+=categoryElement
      })
   let categoryData = this.categoryData

   categoryData.map((categoryEle)=>{

   })


 } 
 //----------------------------------Function to calculate category Doughnut Chart--------------------------------------------// 
 public categoryChart():void {
  
  this.categoryDoughnutData = []



   let category = this.categoryData
   this.categoryChartDataE=Array(this.categoryLabelId.length).fill(0);
 //Calculating category wise expenditure  
   
   this.categoryDoughnutData = this.categoryChartDataB
   
 }
  ngOnInit(){
   this.categoryLabelId= []
   this.categoryBvEData =[[],[]]
   this.categoryData=[]
   this.totalChartData=[]
   this.categoryDoughnutData = []

   /* Getting Response from Database, according to user email*/
   this.getJSON.getJSONS(/*"nishantjaiswal49@gmail.com"*/this.loginUserService.getLoginUser()).subscribe(
     (res)=>
     { 
       this.transactionDataJson = res[0].transaction;
       res[0].category.map((elementData) => {
         this.categoryData.push(elementData)
         this.categoryLabelId.push({"categoryName":elementData.categoryName, "categoryId":elementData.categoryId})
         this.categoryChartLabels.push(elementData.categoryName)
         this.categoryChartDataB.push(elementData.budget)         
       }       
       );
       console.log(moment().format('DD-MMM-YYYY'))
       this.categoryBvEChart(moment().add(-30,'days').format('DD-MM-YYYY'), 30)
       this.categoryChart()
       this.monthlyTotalChart(moment().format('DD-MMM-YYYY'), 30)
     },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });
       this.ChartLabelsWeek = [1,2,3,4,5,6,7];
       this.ChartLabelsMonth = [1, 2, 3 ,4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
   

 }

}
