const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".portfolio-card").forEach((card)=>{

    card.classList.add("hidden");
    observer.observe(card);

});

const circles = document.querySelectorAll(".circle-progress");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const circle = entry.target;
            const target = circle.dataset.progress;

            circle.style.setProperty(
                "--progress",
                target
            );

            skillObserver.unobserve(circle);
        }

    });

},{threshold:0.5});

circles.forEach((circle)=>{
    skillObserver.observe(circle);
});