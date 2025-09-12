const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};

let pointPen = "  /\\\n /__\\";
let pen = " ||||"
let  stageEraser = " |  |"
let endEraser = " |__|"

function drawMyPen(month){

    console.log(pointPen)

    let numberOfStage = calendrierDuCrayon[month]

    for (let i = 0; i < numberOfStage; i++){
        console.log(pen);
    }
    console.log(endEraser)

    if (numberOfStage > 4){
        console.log(stageEraser)
    }

    console.log(endEraser)

}
drawMyPen("decembre")

drawMyPen("septembre")

drawMyPen ("mars")

drawMyPen ("juin")