import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private dialogue:MatDialog,private router:Router, private snackbarService: SnackbarService) { }

    private newUserId: any='user_2'
	private newUserType:any='admin';
	private isLoggedIn = true;

	getLoginStatus(): boolean {
		return this.isLoggedIn

	}

	setNewUserId(UserId:any){
		 this.newUserId = UserId
	}

	setUserType(UserType:any){
		this.newUserType = UserType	
	}

	getNewUserId(){
		return this.newUserId
	}

	getNewUserType(){
		return this.newUserType
	}

	resetLoginStatus(){
		this.isLoggedIn = false
	}

	initializeApp(newUserId:any,newUserRole:any): void {
		this.isLoggedIn = true
		this.newUserId = newUserId
		this.newUserType = newUserRole
	}

	private userObject: any = {
		user_1: {
			id: "user_1",
			username: "surendra",
			password: "suren_883@",
			confirmPassword: "suren_883@",
			role: "seller",
			bookings: {
				'19-11-2022': {
					marketId: 1,
					status: 'booked',
					bookDate:'19-11-2022',
					marketName:'Davis Market'
				},
				keys: ["19-11-2022"]
			}
		},
		user_2: {
			id: "user_2",
			username: "ravi",
			password: "ravi_983@",
			confirmPassword: "ravi_983@",
			role: "admin",
		},
		keys: ["user_1", "user_2"]

	}

	currentDate = new Date();
	date = this.currentDate.getDate()
	month = this.currentDate.getMonth() + 1;
	year = this.currentDate.getFullYear();
	today = `${this.date}-${this.month}-${this.year}`;
	tomorrow = `${this.date + 1}-${this.month}-${this.year}`;
	dayAftTmr = `${this.date + 2}-${this.month}-${this.year}`;
	dayAftTmrNext = `${this.date + 3}-${this.month}-${this.year}`;

	private marketsObject: any = {
		market_1: {
			id: 1,
			marketName: "Davis Market",
			marketNumber: "mb-12345@@IND",
			location: "B-no:1-234\a,KSR",
			contact: 9876543263,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Saepe inventore nam quos amet dolor, similique modi fugit?
					Mollitia enim fugit, pariatur labore necessitatibus rerum 
					nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				[this.today]: {
					available: true,
					seller: null
				},
				[this.tomorrow]: {
					available: true,
					seller: null,
				},
				[this.dayAftTmr]: {
					available: false,
					seller: "user_1"
				},
				[this.dayAftTmrNext]: {
					available: true,
					seller: null,
				},
				keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
			}

		},
		market_2: {
			id: 2,
			marketName: "Raj Market",
			marketNumber: "mb-12345@@IND",
			location: "B-no:1-234\a,KSR",
			contact: 9876543264,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe inventore nam quos amet dolor, similique modi fugit?
						Mollitia enim fugit, pariatur labore necessitatibus rerum 
						nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				[this.today]: {
					available: false,
					seller: "ravi"
				},
				[this.tomorrow]: {
					available: true,
					seller: null,
				},
				[this.dayAftTmr]: {
					available: false,
					seller: "ravi"
				},
				[this.dayAftTmrNext]: {
					available: true,
					seller: null,
				},
				keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
			}

		},
		market_3: {
			id: 3,
			marketName: "Tony Market",
			marketNumber: "mb-12345@@IND",
			location: "B-no:1-234\a,KSR",
			contact: 9876543265,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe inventore nam quos amet dolor, similique modi fugit?
						Mollitia enim fugit, pariatur labore necessitatibus rerum 
						nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				[this.today]: {
					available: true,
					seller: null
				},
				[this.tomorrow]: {
					available: true,
					seller: null,
				},
				[this.dayAftTmr]: {
					available: true,
					seller: null
				},
				[this.dayAftTmrNext]: {
					available: false,
					seller: "ravi",
				},
				keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
			}

		},
		market_4: {
			id:4,
			marketName: "Jhoney Market",
			marketNumber: "mb-12345@@IND",
			location: "B-no:1-234\a,KSR",
			contact: 9876543266,
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Saepe inventore nam quos amet dolor, similique modi fugit?
						Mollitia enim fugit, pariatur labore necessitatibus rerum 
						nesciunt nisi, blanditiis, quod porro in.`,
			slots: {
				[this.today]: {
					available: true,
					seller: null
				},
				[this.tomorrow]: {
					available: true,
					seller: null,
				},
				[this.dayAftTmr]: {
					available: false,
					seller: "ravi"
				},
				[this.dayAftTmrNext]: {
					available: false,
					seller: "suresh",
				},
				keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
			}

		},
		keys: ["market_1", "market_2", "market_3", "market_4"]
	}
	marketObject: any = {};
	marketId: any;
	bookingMarket_Id: any;

	getMarketId(market_Id:any){
		return this.marketId = market_Id
	}

	setMarketId(){
		return this.marketId
	}

	getUserObj(){
		return this.userObject
	}

	getAllMarkets() {
		return {
			status:'success',
			message:"Market info getting successfully",
			data:this.marketsObject
		}
	}

	getMarketObj(market_Id:any) {
		return this.marketsObject[market_Id]
	}

	// deleteValue = false;
	
	addNewMarket(marketData:any):any{
		//  let keysInt:any;
		//  let newObjId:any;

		// if(this.deleteValue){
		// 	 keysInt = this.marketsObject['keys'].length + 2;
		// 	 newObjId = `market_${keysInt}`
		// }
		// else{
		//     keysInt = this.marketsObject['keys'].length + 1;
		// 	newObjId = `market_${keysInt}`
		// }
		let keysInt = this.marketsObject['keys'].length + 1;
		let	newObjId = `market_${keysInt}`

		// if(this.deleteValue){
		// 		let currentDate = new Date()
		// 		let date = currentDate.getDate()
		// 		let month = currentDate.getMonth()+1;
		// 		let year = currentDate.getFullYear();
		// 		let fullDate = `${date}-${month}-${year}`
		// 		let newObj = marketData;
		// 		let slots = {
		// 			[fullDate]:{
		// 			"available":true,
		// 			"seller":null
		// 			},
		// 			keys:[fullDate]
		// 		}

		// 		console.log("after deleting keysInt=========>",keysInt)
		// 		newObj.id = keysInt;
		// 		newObj.slots = slots
		// 		this.marketsObject[newObjId]= newObj;
		// 		this.marketsObject['keys'].push(newObjId) 
		// 		console.log("after adding new object==========>",newObj)
		// }
		// else{
			if(this.marketsObject[newObjId] === undefined){
				let currentDate = new Date()
				let date = currentDate.getDate()
				let month = currentDate.getMonth()+1;
				let year = currentDate.getFullYear();
				let fullDate = `${date}-${month}-${year}`
				let newObj = marketData;
				let slots = {
					[fullDate]:{
					"available":true,
					"seller":null
					},
					keys:[fullDate]
				}
				newObj.id = keysInt;
				newObj.slots = slots;
				this.marketsObject[newObjId]= newObj;
				this.marketsObject['keys'].push(newObjId)
			}
		// }
		
		return {
			'status': 'success',
			'message': 'Market added successfully'
		}
	
	}

	editMarket(market_id:any,marketData:any){
		console.log("edit market functionality===========>")
		let storeTheSlots = this.marketsObject[market_id]['slots']
		this.marketsObject[market_id] = marketData
		this.marketsObject[market_id]['slots'] = storeTheSlots
		return {
			'status': 'success',
			'message': 'Market edited successfully'
		}
	}

	deleteMarket(marketId:any):any{
		delete this.marketsObject[marketId]
		this.marketsObject.keys.splice(this.marketsObject['keys'].indexOf(marketId), 1)
		return ({
			'status': 'success',
			'message': 'Market deleted successfully'
			})
}

	BookSlot(rmarketId:any,slotDate:any):any{
		// const dialogRef = this.dialogue.open(BookingFormComponent)
		//  dialogRef.afterClosed().subscribe((confirm):any=>{
			// if(confirm){  
				let generateMarketId = `market_${rmarketId}`;
				this.marketsObject[generateMarketId]['slots'][slotDate]['available']=false;
				this.marketsObject[generateMarketId]['slots'][slotDate]['seller'] = this.newUserId
				let name = this.marketsObject[generateMarketId]['marketName']
				this.userObject[this.newUserId]['bookings'][slotDate] = {marketId:rmarketId,status:"booked",bookDate:slotDate,marketName:name}
				this.userObject[this.newUserId]['bookings']['keys'].push(slotDate)
				this.getAllBookings()
				return({
					'status': "success",
					'message': "Slot booked successfully"
				})
			// }
			
		  	// })
			
			
			
	}

	cancelSlot(rmarket_Id:any,slotDate:any):any{
		// const dialogRef = this.dialogue.open(ConfirmPopupComponent)
		//  dialogRef.afterClosed().subscribe((confirm):any=>{
		// 	if(confirm){
			  let genMarketId = `market_${rmarket_Id}`

			   this.marketsObject[genMarketId]['slots'][slotDate]['available'] = true;        
			   this.marketsObject[genMarketId]['slots'][slotDate]['seller'] = null;

			   this.userObject[this.newUserId]['bookings'][slotDate]['status'] = "cancelled"
			   this.getAllBookings()	
			   return {
				'status':'success',
				'message': 'Slot cancelled successfully'
				}
		// 	}
		//   })
		  
	}

	createSlot(marketId: any, newDate: any) {

		if(this.marketsObject[marketId]['slots']['keys'].includes(newDate)){
			return {
				'status': 'error',
				'message': 'Slot for the given date already exist. Please choose another date.'
			}
        }

		this.marketsObject[marketId]['slots'][newDate] = {
			"available": true,
			"seller": null
		}
		this.marketsObject[marketId]['slots']['keys'].push(newDate)

		return ({
			'status': 'success',
			'message':'Slot added successfully'
		})
	}

	deleteSlot(marketId:any,slotDate:any):any{
		// const dialogRef = this.dialogue.open(ConfirmPopupComponent);
    	// dialogRef.afterClosed().subscribe((confirm):any=>{
		// 	console.log(confirm)
		// 	if(confirm){  
		// 		let genMarketId = `market_${marketId.id}`
		// 		delete this.marketsObject[genMarketId]['slots'][slotDate]        
		// 		let index = this.marketsObject[genMarketId]['slots']['keys']
		// 		.indexOf(slotDate)
		// 		this.marketsObject[genMarketId]['slots']['keys'].splice(index,1)
		// 		this.snackbarService.successSnackbar("slot deleted successfully")
		// 		// return ({
		// 		// 	"status": 'success',
		// 		// 	"message": 'slot deleted successfully'
		// 		// })
		// 	}
		// 	// return ({
		// 	// 	"status": 'success',
		// 	// 	"message": 'slot deleted successfully'
		// 	// })
    	// })
		let genMarketId = `market_${marketId.id}`
		delete this.marketsObject[genMarketId]['slots'][slotDate]        
		let index = this.marketsObject[genMarketId]['slots']['keys']
		.indexOf(slotDate)
		this.marketsObject[genMarketId]['slots']['keys'].splice(index,1)
		return ({
					"status": 'success',
					"message": 'Slot deleted successfully'
				})
	}

	login(userObj:any):any{
		for(let eachUserObj of this.userObject.keys){
			if(this.userObject[eachUserObj]['username']===userObj['username']
				 && this.userObject[eachUserObj]['password']===userObj['password'])
			{
				this.initializeApp(eachUserObj,this.userObject[eachUserObj]['role']);
				this.router.navigate(['/'])
				return {
					'status':"success",
					'message':"Logged In successfully"
				}	
			}
		}
		return {
				'status':"error",
				'message':"Username, password didn't match."
			   }
	}

	signup(userObj:any):any{
		if(this.checkUser(userObj)){
			return{
				'status': 'error',
				'message': "Username is already exists"
			}
		}
		else{
			let addNum = this.userObject['keys'].length + 1;
			let newUserId = `user_${addNum}`
			if(this.userObject[newUserId] === undefined){
				userObj.id = newUserId;
				userObj.role = "seller";
				userObj.bookings = {keys:[]}
				this.userObject[newUserId]= userObj;
				this.userObject['keys'].push(newUserId)
				return{
					'status': 'success',
					'message': 'signup successfully done'
				}
			}
		  
		}
	}

	checkUser(userObj:any):any{
		for(let eachUser of this.userObject.keys){
			if(this.userObject[eachUser]['username'] === userObj['username']){
				return true
			}
		}
		return false
	}

	getAllBookings(){
		let bookedArray:any=[]
		// ---------------->admin condition is to avoid error message----------->
		if(this.newUserType != 'admin'){
			if(this.newUserId != undefined){
				for(let bookObj of this.userObject[this.newUserId]['bookings']['keys']) {
					bookedArray.push(this.userObject[this.newUserId]['bookings'][bookObj])
				}
				return {
					'status':"success",
					'message':"Bookings fetched successfully",
					"data": bookedArray
				}
			}
			else{
				return {
					'status':"error",
					'message':"Please login",
				}
			}
		}
		return{
			'status': "error",
			'message': "Bookings not access for admins"
		}
	}

	getTodayBookings(date:any):any{	
		for(let eachObj of this.getAllBookings().data){
			if(eachObj['bookDate'].includes(date)){
				this.userObject[this.newUserId]['bookings'][eachObj]
				this.userObject[this.newUserId]['bookings']['keys']=eachObj['bookDate']
				// console.log(eachObj['bookDate'].includes(date))
				// console.log(this.getAllBookings().data)
				
				this.getAllBookings()
				console.log(eachObj)
				console.log(this.userObject)
				return ({
					'status': 'success',
					'message': 'data filtered successfully',
					'data': eachObj
				})
			}
		}
		return{
			'status': 'error',
			'message': 'No slots are booked on this day',
		}
	}
 
}
