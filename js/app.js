
// ============switcher==============
{
    let switcher_Lis = document.querySelectorAll(".switcher li")

    let img_s = Array.from(document.querySelectorAll(".article__grid .article__item"))


    switcher_Lis.forEach(li_item => {
        li_item.addEventListener("click", remove_active)
        li_item.addEventListener("click", remove_all)
        li_item.addEventListener("click", manage_imgs)
    });

    // remove active class from all (Li) and add current
    function remove_active() {
        switcher_Lis.forEach(li_item => {
            li_item.classList.remove("active")
            this.classList.add("active")
        });
    }


    function remove_all() {
        img_s.forEach(li_item => {
            li_item.classList.remove("hide")
        });
    }


    // manage imgs
    function manage_imgs() {
        img_s.forEach(img_item => {
            img_item.style.display = "none"
        });
        document.querySelectorAll(this.dataset.cat).forEach(el => {
            el.style.display = "block"
        });
    }
}

// ============skills==============
{
    let our_skills = document.querySelector(".skills")
    console.log(our_skills)
    let span_s = document.querySelectorAll(".the_progress span")
    console.log(span_s)


    window.onscroll = function () {

        if (window.scrollY >= our_skills.offsetTop - 500) {
            console.log("rrrrrrrrrrrr");

            span_s.forEach(function (span) {
                span.style.width = span.dataset.width
            })
        }
    }
}