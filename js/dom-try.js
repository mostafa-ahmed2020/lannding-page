      /** here add section dynmacily and add the Li in nav bar*/
let sec = document.querySelectorAll ('section');
const nav = document.querySelector("#navbar__list");
    for (var i =0 ; i <sec.length ;i++){
        let list = document.createElement("LI"); 
        list.textContent = sec[i].getAttribute("data-nav");
        nav.appendChild(list);
    }
        /**here button to scrol up at once */
    mybutton = document.querySelector(".btwn");
    function functionTop() {
      document.body.scrollTop=0;
    }
    mybutton.addEventListener("click",functionTop)
          /**here add attribute (onclick) for every lis in nav bar and 
           * add event onclick to scroll to his own section
           * and make the scroll smooth 
           */
    let listt = document.querySelectorAll('li');
    for (var i =0 ; i <listt.length ;i++){
    listt[i].setAttribute("onclick",`scrolll(${i})`);
    }    
    for (var i =0 ; i <listt.length ;i++){
     function scrolll(i){ 
      sec[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
     }
    }
        /* in this function we add the active section style for 
        the section onveiew
        and add heiglight on nav bar when u on the his section 
           */
    function scro()
    {
      var post=window.scrollY;
      sec.forEach((sec) =>{     /** this if condtion to check wherethe view so add 
                                          the style for section and nav */
        if (post>=(sec.offsetTop*.9) && post<sec.offsetHeight+(sec.offsetTop))
       
      {
         sec.classList.add("your-active-class");
        listt.forEach((listt) =>{
          if(listt.innerHTML==sec.getAttribute("data-nav")){
          listt.classList.add("shadow");
         }
          else 
          {
            listt.classList.remove("shadow");
          }
        });
      }
        else
        {
          sec.classList.remove("your-active-class");

        }
      });
    }
    document.addEventListener('scroll',scro);
       