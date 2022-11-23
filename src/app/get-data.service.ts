import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GetDataService {

	constructor() { }


	// newUserId: any;
	// newUserType: any;
	// private isLoggedIn = false;


	// getLoginStatus(): boolean {
	// 	return this.isLoggedIn
	// }

	// resetLoginStatus(): void {
	// 	this.isLoggedIn = false
	// }

	// initializeApp(): void {
	// 	this.isLoggedIn = true
	// }

	// userObject: any = {
	// 	user_1: {
	// 		id: "user_1",
	// 		username: "surendra",
	// 		password: "suren_883@",
	// 		confirmPassword: "suren_883@",
	// 		role: "seller",
	// 		bookings: {
	// 			'19-11-2022': {
	// 				marketId: 1,
	// 				status: 'booked'
	// 			},
	// 			keys: ["19-11-2022"]
	// 		}
	// 	},
	// 	user_2: {
	// 		id: "user_2",
	// 		username: "ravi",
	// 		password: "ravi_983@",
	// 		confirmPassword: "ravi_983@",
	// 		role: "admin",
	// 	},
	// 	keys: ["user_1", "user_2"]

	// }


	// getBookingsObj() {
	// 	return this.userObject[this.newUserId]['bookings'];
	// }
	// getBookingKeysArray() {
	// 	return this.userObject[this.newUserId]['bookings']['keys'];
	// }


	// currentDate = new Date();
	// date = this.currentDate.getDate()
	// month = this.currentDate.getMonth() + 1;
	// year = this.currentDate.getFullYear();
	// today = `${this.date}-${this.month}-${this.year}`;
	// tomorrow = `${this.date + 1}-${this.month}-${this.year}`;
	// dayAftTmr = `${this.date + 2}-${this.month}-${this.year}`;
	// dayAftTmrNext = `${this.date + 3}-${this.month}-${this.year}`;

	// marketsObject: any = {
	// 	market_1: {
	// 		id: 'market_1',
	// 		marketName: "Davis Market",
	// 		marketNumber: "mb-12345@@IND",
	// 		location: "B-no:1-234\a,KSR",
	// 		contact: 9876543263,
	// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
	// 				Saepe inventore nam quos amet dolor, similique modi fugit?
	// 				Mollitia enim fugit, pariatur labore necessitatibus rerum 
	// 				nesciunt nisi, blanditiis, quod porro in.`,
	// 		slots: {
	// 			[this.today]: {
	// 				available: true,
	// 				seller: null
	// 			},
	// 			[this.tomorrow]: {
	// 				available: true,
	// 				seller: null,
	// 			},
	// 			[this.dayAftTmr]: {
	// 				available: false,
	// 				seller: "user_1"
	// 			},
	// 			[this.dayAftTmrNext]: {
	// 				available: true,
	// 				seller: null,
	// 			},
	// 			keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
	// 		}

	// 	},
	// 	market_2: {
	// 		id: 'market_2',
	// 		marketName: "Raj Market",
	// 		marketNumber: "mb-12345@@IND",
	// 		location: "B-no:1-234\a,KSR",
	// 		contact: 9876543264,
	// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
	// 					Saepe inventore nam quos amet dolor, similique modi fugit?
	// 					Mollitia enim fugit, pariatur labore necessitatibus rerum 
	// 					nesciunt nisi, blanditiis, quod porro in.`,
	// 		slots: {
	// 			[this.today]: {
	// 				available: false,
	// 				seller: "ravi"
	// 			},
	// 			[this.tomorrow]: {
	// 				available: true,
	// 				seller: null,
	// 			},
	// 			[this.dayAftTmr]: {
	// 				available: false,
	// 				seller: "ravi"
	// 			},
	// 			[this.dayAftTmrNext]: {
	// 				available: true,
	// 				seller: null,
	// 			},
	// 			keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
	// 		}

	// 	},
	// 	market_3: {
	// 		id: 'market_3',
	// 		marketName: "Tony Market",
	// 		marketNumber: "mb-12345@@IND",
	// 		location: "B-no:1-234\a,KSR",
	// 		contact: 9876543265,
	// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
	// 					Saepe inventore nam quos amet dolor, similique modi fugit?
	// 					Mollitia enim fugit, pariatur labore necessitatibus rerum 
	// 					nesciunt nisi, blanditiis, quod porro in.`,
	// 		slots: {
	// 			[this.today]: {
	// 				available: true,
	// 				seller: null
	// 			},
	// 			[this.tomorrow]: {
	// 				available: true,
	// 				seller: null,
	// 			},
	// 			[this.dayAftTmr]: {
	// 				available: true,
	// 				seller: null
	// 			},
	// 			[this.dayAftTmrNext]: {
	// 				available: false,
	// 				seller: "ravi",
	// 			},
	// 			keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
	// 		}

	// 	},
	// 	market_4: {
	// 		id: 'market_4',
	// 		marketName: "Jhoney Market",
	// 		marketNumber: "mb-12345@@IND",
	// 		location: "B-no:1-234\a,KSR",
	// 		contact: 9876543266,
	// 		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
	// 					Saepe inventore nam quos amet dolor, similique modi fugit?
	// 					Mollitia enim fugit, pariatur labore necessitatibus rerum 
	// 					nesciunt nisi, blanditiis, quod porro in.`,
	// 		slots: {
	// 			[this.today]: {
	// 				available: true,
	// 				seller: null
	// 			},
	// 			[this.tomorrow]: {
	// 				available: true,
	// 				seller: null,
	// 			},
	// 			[this.dayAftTmr]: {
	// 				available: false,
	// 				seller: "ravi"
	// 			},
	// 			[this.dayAftTmrNext]: {
	// 				available: false,
	// 				seller: "suresh",
	// 			},
	// 			keys: [this.today, this.tomorrow, this.dayAftTmr, this.dayAftTmrNext]
	// 		}

	// 	},
	// 	keys: ["market_1", "market_2", "market_3", "market_4"]
	// }
	// marketObject: any = {};
	// marketId: any;
	// actionType: any;
	// bookingMarket_Id: any;

	// getAllMarkets() {
	// 	return this.marketsObject
	// }

	// getMarketObj(marketId:any) {
	// 	return this.marketsObject[marketId]
	// }
}
