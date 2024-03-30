let rows=3;
let cols=3;
let turns=0;
let curtile;
let othertile;

let imageorder=['4','2','8','5','1','6','7','9','3'];
function loadimage()
{
    for(let r=0;r<rows;r++)
    {
        for(let c=0;c<cols;c++)
        {
            let tile=document.createElement('img');
            tile.id=r.toString()+'-'+c.toString();
            tile.src=imageorder.shift()+'.jpg';
            tile.addEventListener('dragstart',dragStart);
            tile.addEventListener('dragover',dragOver);
            tile.addEventListener('dragenter',dragEnter);
            tile.addEventListener('dragleave',dragLeave);
            tile.addEventListener('drop',dragDrop);
            tile.addEventListener('dragend',dragEnd);
            document.getElementById('board').appendChild(tile);
        }
    }
}
loadimage();
function dragStart()
{
   curtile=this;
}
function dragOver(e)
{
    e.preventDefault();
}
function dragEnter(e)
{
    e.preventDefault();
}
function dragLeave()
{

}
function dragDrop()
{
    othertile=this;
}
function dragEnd()
{
    if(!othertile.src.includes('3.jpg'))
    {
        return
    }
 let curcoords = curtile.id.split('-');
 let r= parseInt(curcoords[0]);
 let c= parseInt(curcoords[1]);

 let othercoords = othertile.id.split('-');
 let r2= parseInt(othercoords[0]);
 let c2= parseInt(othercoords[1]);

 let moveleft= r==r2 && c2 == c-1;
 let moveright= r==r2 && c2 == c+1;
 let moveup= c==c2 && r2 == r-1;
 let movedown= c==c2 && r2 == r+1;
 let isAdjacent = moveleft || moveright || moveup || movedown;
 if(isAdjacent)
 {
   let curimg = curtile.src;
   let otherimg = othertile.src;
   curtile.src=otherimg;
   othertile.src=curimg;
   turns+=1;
   document.getElementById('turns').innerHTML=turns;
 }
}