gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
 
 
 let loader = document.querySelector("#loader")


let tl = gsap.timeline()
tl.from(".line h1,h2",{
    y:120,
    duration:1,
    stagger:0.3,
})
tl.to("#loader",{
   display:"none",
    delay:1.5
})

tl.from("#page1",{
    y:900,
    delay:.5
})
let grow = 0;
setInterval(()=>{
    if (grow <= 100) {
        document.querySelector(".line h3").textContent = grow++;
    }
    else{}
},30)
let value = 0;

tl.from(".page1-line h1",{
    y:120,
    duration:1,
    stagger:.2
})
tl.from(".page1-line h2",{
    y:-10,
    duration:1,
    stagger:.2
})

// document.addEventListener("mousemove",(dets)=>{
// gsap.to("#cursor",{
//     left:dets.x+50,
//   top:dets.y+20,
// })
// })
Shery.makeMagnet(".nav-2 h5", {
  
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.1,
  });

  
function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    // debug:true, 
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"999999999999999999","range":[-9999999,9999999]},"aspect":{"value":0.724163774061218},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}
sheryAnimation();

let video = document.querySelector(".vdo video")
let vdoContainer = document.querySelector(".vdo")
let palyPauseBtn = document.querySelector("#play-pause")
function vdocursor(){
vdoContainer.addEventListener("mousemove",(dets)=>{
gsap.to("#play-pause",{
top:dets.x - 240,
left:dets.y+100
})
})
}
vdocursor()


function vdoplay(){
  var flag = 0
palyPauseBtn.addEventListener("click", function () {
  if (flag == 0) {
   
    video.play()
    video.style.opacity = 1
    document.querySelector("#play-pause").innerHTML = `<i class="ri-pause-mini-fill"></i>`
    gsap.to("#play-pause", {
      scale: 0.5
    })
    flag = 1
  } else {
    video.pause()
    video.style.opacity = 0
    document.querySelector("#play-pause").innerHTML = `<i class="ri-play-mini-fill"></i>`
    gsap.to("#play-pause", {
      scale: 1
    })
    flag = 0
  }
})

}
vdoplay()