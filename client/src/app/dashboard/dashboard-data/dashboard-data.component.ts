import { Component, OnInit } from '@angular/core';
import { GetJSONService} from '../../shared/get-json.service';
import * as moment from 'moment';
import {LoginuserService} from './../../shared/loginuser.service';
 import * as config from '../../config/multi_en_config.json';
 import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.css'],
 providers:[GetJSONService]
})
export class DashboardDataComponent implements OnInit {


public word= (<any>config).charts;
 constructor(private getJSON: GetJSONService,private loginUserService:LoginuserService,private router:Router) { }

 public dateInput ;
 public now = moment().format('YYYY-MM-DD')
 public transactionDataJson:any = [[],[]];
 public totalChartData: Array<any>; 
 public totalChartDataE =[];
 public totalChartDataB =[];
 public ChartLabelsWeek:Array<any> ;
 public ChartOptions:any = {
   responsive: true
 };
 public categoryChartLabels:any = [] ;
 errorMsg:string;  
 public categoryChartDataE:any = [];
 public categoryChartDataB:any = [];
 public categoryBvEType:string = 'line';
 public categoryDoughnutType:string = 'doughnut';
 public categoryBvEData:Array<any>;
 public categoryDoughnutData:Array<any>;
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
public TotalChartType = 'bar'

  // Chart Events
 public chartClicked(e:any):void {
   console.log(e);
 }
 public chartHovered(e:any):void {
   console.log(e);
 }//

 public LineChartColors:Array<any> = [
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

  public DoughnutChartColors:Array<any> = [
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

//----------------------------------Function to calculate weekly total chart--------------------------------------------// 
 public weeklyTotalChart(start, time):void {
    
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
      

      
       totalChartDataE[monthIndex]+=element.expense;
       this.selectedtimetotalexpense+=element.expense;
     }
   });

    this.totalChartData = [{data:totalChartDataE, label: 'expense'}]
    //console.log(this.totalChartData)
 }

 //----------------------------------Function to calculate category Doughnut Chart--------------------------------------------// 
 public weekCategoryChart(start,time):void {
  
  this.categoryDoughnutData = []


 //Initializing variables for Calculation
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(time,'days').format('DD-MMM-YYYY');
  this.startDate ="Starting From  "+ moment(start).format('DD-MMM-YYYY')

   let transaction = this.transactionDataJson
   let category = this.categoryData

   this.categoryChartDataE=Array(this.categoryLabelId.length).fill(0);
 //Calculating category wise expenditure  
   transaction.map((element) => {

     element.date = moment(element.date).format('DD-MMM-YYYY');  

     if(moment(element.date).isAfter(moment(start).add(-1,'days')) && moment(element.date).isBefore(end))
     { 
     category.map((categoryElement,categoryIndex)=>{
        if(categoryElement.categoryId==element.categoryId) {
          this.categoryChartDataE[categoryIndex]+=element.expense
          
        }
      })  
   }
   });
     
   this.categoryDoughnutData = this.categoryChartDataE

   //let topCategory = this.categoryChartDataE

  this.topspentcategory = this.categoryChartLabels[this.categoryChartDataE.indexOf(Math.max.apply(null, this.categoryChartDataE))]
   
 }

 //----------------------------------Function to calculate recent transactions--------------------------------------------// 
 public recentTransactions(start, time):void {
  
  this.recentTransactionData = []

  //Setting Time Period for Calculation
  
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(time,'days').format('DD-MMM-YYYY');
  this.startDate ="Starting From  "+ moment(start).format('DD-MMM-YYYY')
  

   let transaction = this.transactionDataJson
   let category = this.categoryLabelId

 //Calculating category wise expenditure  
   transaction.map((element) => {

     element.date = moment(element.date).format('DD-MMM-YYYY');  

     if(moment(element.date).isAfter(moment(start).add(-1,'days')) && moment(element.date).isBefore(end))
     {
       category.map((categoryElement,categoryIndex)=>{
        if(categoryElement.categoryId==element.categoryId) {
          element.categoryName = categoryElement.categoryName
        }
      })
      this.recentTransactionData.push(element) 
     }
   }); 
   //console.log(this.recentTransactionData)
 }

 //----------------------------------Additional Data--------------------------------------------// 
 public additionalData(start, time):void {
  
  //Setting Time Period for Calculation
  
  start = moment(start).format('DD-MMM-YYYY')
  let end = moment(start).add(time,'days').format('DD-MMM-YYYY');
  this.startDate ="Starting From  "+ moment(start).format('DD-MMM-YYYY')
  

   let transaction = this.transactionDataJson
   let category = this.categoryData

   this.selectedtimetotalbudget = 0
   this.selectedtimetotalexpense = 0

 //Calculating category wise expenditure  
   transaction.map((element) => {

     element.date = moment(element.date).format('DD-MMM-YYYY');  

     if(moment(element.date).isAfter(moment(start).add(-1,'days')) && moment(element.date).isBefore(end))
     {

       this.selectedtimetotalexpense += element.expense
       console.log(element)
     }
   }); 

   category.map((categoryElement)=>{
       this.selectedtimetotalbudget+=categoryElement.budget
      })

 } 

  ngOnInit(){
   this.categoryLabelId= []
   this.categoryBvEData =[[],[]]
   this.categoryDoughnutData =[]
   this.categoryData=[]
   this.totalChartData=[]
   /* Getting Response from Database, according to user email*/
   this.getJSON.getJSONS("nishantjaiswal49@gmail.com"/*this.loginUserService.getLoginUser()*/).subscribe(
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
       this.weeklyTotalChart(moment().add(-7,'days').format('DD-MMM-YYYY'), 7)
       this.weekCategoryChart(moment().add(-7,'days').format('DD-MMM-YYYY'),7)
       this.recentTransactions(moment().add(-3,'days').format('DD-MMM-YYYY'), 3)
       this.additionalData(moment().add(-7,'days').format('DD-MMM-YYYY'), 7)
     },(dataError)=>{this.errorMsg=dataError;
        this.router.navigateByUrl('/error/'+this.errorMsg,{skipLocationChange: true});
        
      });
       this.ChartLabelsWeek = [1,2,3,4,5,6,7];
   

 }
}