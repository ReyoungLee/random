const options = [
	'小碗菜',
	'瓦罐汤',
	'驴肉火烧',
	'山西刀削面',
	'黄焖鸡米饭',
	'霸蛮',
	'麻辣烫',
	'水煮肉片',
	'释面',
	'浇头面',
	'云南小锅米线',
	'和府小馆',
	'吉野家',
	'水饺',
	'越南河粉',
	'回家吃',
]
const result = document.querySelector('.result')
const { length } = options
let interval

function start() {
	clearInterval(interval)
	interval = setInterval(() => {
		const choosed = options[Math.floor(length * Math.random())]
		result.innerHTML = choosed
	}, 50)
}

function stop() {
	clearInterval(interval)
}