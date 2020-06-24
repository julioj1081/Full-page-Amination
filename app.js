new fullpage("#fullpage",{
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) =>{
    const secction = destination.item;
    const title = secction.querySelector('h1');
    const tl = new  TimelineMax({delay:0.5});
    tl.fromTo(title,0.5,{y:"50", opacity:0},{y:0, opacity:1})
    //console.log(destination.item);

    //animar el texto del parrafo
    if(destination.index === 1){
      const chairs = document.querySelectorAll('.chair');
      const description = document.querySelector('.description');
      tl.fromTo(chairs, 0.7,{x:'230%'}, {x:'30%'})
      .fromTo(description, 0.5, {y:"50", opacity:0}, {y:0, opacity:1})
      .fromTo(chairs[0], 1, {opacity:1}, {opacity:1})
      .fromTo(chairs[1], 1, {opacity:0}, {opacity:1})
      .fromTo(chairs[2], 1, {opacity:0}, {opacity:1})
      .fromTo(chairs[3], 1, {opacity:0}, {opacity:1})
    }
  }
});
