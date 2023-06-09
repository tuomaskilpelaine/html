
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains(`increase`)){
            count++;
        }
        else{
            count = 0;
            value.style.color = "yellow";
        }
        if(count > 0){
            value.style.color = "blue";
        }
        if (count === 0){
            value.style.color = "#122";
        }

        value.textContent = count;
     });
});
//ville niemenmaa

