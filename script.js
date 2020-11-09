const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle='pink'
ctx.fillRect(20, 20, 150, 100)

ctx.strokeStyle = 'orange'
ctx.lineWidth = 3
ctx.strokeRect(200, 20, 150, 100)

ctx.clearRect(30, 30, 30, 30)

ctx.fillStyle='grey'
ctx.font ='30px Arial'
ctx.fillText('howdy', 400, 50)

ctx.strokeStyle = 'red'
ctx.lineWidth = .5
ctx.strokeText('howdy', 400, 100)

ctx.beginPath()
ctx.strokeStyle = 'grey'
ctx.moveTo(170, 150)
ctx.lineTo(20, 150)
ctx.lineTo(95, 350)
ctx.lineTo(170, 150)
// ctx.closePath()
ctx.fillStyle = 'coral'
ctx.fill()


ctx.beginPath()
ctx.moveTo(200, 150)
ctx.lineTo(125, 350)
ctx.lineTo(275, 350)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.fillStyle = '#add8e6'
ctx.fillRect(270, 150, 150, 100)


ctx.beginPath()
ctx.arc(500, 200, 50, 0, Math.PI * 2)
ctx.stroke()


ctx.beginPath()

const centerX = canvas.width / 2
const centerY = canvas.height /2
ctx.arc(centerX, centerY, 300, 0, Math.PI * 2)

//move to mouth
ctx.moveTo(centerX + 100, centerY+ 100)
//draw mouth
ctx.arc(centerX, centerY + 100, 100, 0, Math.PI, false)
//move to left eye
// ctx.moveTo(centerX - 200, centerY - 100)
ctx.stroke()


// const leftEye =
// draw left eye
// ctx.fillStyle = 'black'
ctx.beginPath()
ctx.moveTo(centerX - 185, centerY - 100)
ctx.arc(centerX - 205, centerY - 100, 20, 0, Math.PI * 2)
ctx.fill()



ctx.lineWidth = 10

ctx.strokeStyle = 'orange'

ctx.stroke()


