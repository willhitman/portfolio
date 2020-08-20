
// MIT License

// Copyright (c) 2020 GIFT RUWENDE

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.







const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toogle navigation


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

            //animate links
        navLinks.forEach((link,index)=>{
            if (link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.2}s`
            }
            console.log(index)
        });
        //burger animation
        burger.classList.toggle('toggle');

    });


}
navSlide(); 

function scrollAppear(){
    var section1 = document.querySelector('.section1');
    //getting distance where the text is relative to the top of the display.
    var position = section1.getBoundingClientRect().top;
     
    var screenPosition = window.innerHeight / 1.5;
    if(position<screenPosition){
        section1.classList.add('section-appear');
    } 
    var secondPosition = window.innerHeight / 2;
    if(position<secondPosition){
        typingtext();
    
    }
}

//add listener pal
window.addEventListener('scroll',scrollAppear);

// text typing magic effect js is soo cool
var i = 0, head;
head = " Projects ";
function typingtext(){
    if(i<head.length){
        document.querySelector('.heading').innerHTML += head.charAt(i);
        i ++;
        setTimeout(typingtext,200);
    }
}


//hovereffect
// (function(){
//  const link = document.querySelectorAll('section > .hover_effect');
//  const cursor = document.querySelector('.cursor');

//  //animate 
//  const animate = function (e){
//      const span = this.querySelector('span');
//      const {offsetX: x, offsetY: y} =e,
//      {
//          offsetWidth: width, offsetHeight: height} = this,
//          move = 25,
//          xMove = x/width * (move*2) - move,
//          yMove = y/height * (move *2 ) - move;

//          span.style.transform = `translate(${xMove}px, ${yMove}px)`;
//          if (e.type ==='mouseleave') span.style.transform = '';

//      };


//      const editCursor = e => {
//          const {clientX:x, clientY:y} = e;
//          cursor.style.left = x + 'px';
//          cursor.style.top = y + 'px';
//      };
//      link.forEach(b=> b.addEventListener('mousemove',animate))
//      link.forEach(b=> b.addEventListener('mouseleave',animate));
//      window.addEventListener('mousemove', editCursor);
// })(); 