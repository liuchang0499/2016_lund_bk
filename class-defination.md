product(
	ID: key,
	name: String,
	price: number,
	image:Types.CloudinaryImages,
	description: String,
	publishedDate: timestamp,
	comment: String
	)

article(
	ID: key,
	author: String,
	title: String,
	context: String
	publishedDate: timestamp,
	postion-prio: number)

user(
	ID: key,
	name: String,
	password: String,
	role: String Super Admin/ Admin
	e-mail: String,
	phone: String,
	department: String
	)

job(
	ID: key,
	title: String,
	requirement: String,
	duty: String,
	comment: String
	)

// 常見問題
solution(
	ID: key,
	question: String,
	answer: String
	)

//行業應用 - 設計集成
case(
	ID: key,
	category: number
	title: String,
	description: String
	)


