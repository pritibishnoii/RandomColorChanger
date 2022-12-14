let randomColors =['red','blue','green','yellow','coral','blueviolet','purple','teal','brown','orange','torquise','dodgerblue', 'gold', 'indigo', 'lime', 'maroon', 'navy', 'olive', 'pink', 'silver']

changeRandomColor = () =>{
    let totalRandomColors =randomColors.length;
    // console.log(totalRandomColors);
    let randomIndex =Math.floor(Math.random()*totalRandomColors);
    document.getElementById('title').style.color = randomColors[randomIndex];
    // console.log(res);
    console.log(randomColors[randomIndex])

}