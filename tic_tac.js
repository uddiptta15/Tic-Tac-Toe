let button = document.getElementsByTagName("button")
let x = document.getElementsByClassName("x")
let user = document.getElementById("user")
let result = document.getElementById("result")
let Arr = Array.from(button)
let container = document.getElementById("container")
let  image = document.getElementById("image")
let Arr2 = [[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]
Arr.forEach((element, k) => {
    element.onclick = function () {
        if (element.classList.contains("red") == false && element.classList.contains("yellow") == false)
            if (user.classList.contains("x")) {
                element.classList.add("red")
                user.classList.toggle("x")
                user.innerHTML = "<b>User-2</b>"
                Arr2[(k - k % 3) / 3][k % 3] = 1

            } else {
                element.classList.add("yellow")
                user.classList.toggle("x")
                user.innerHTML = "<b>User-1</b>"
                Arr2[(k - (k % 3)) / 3][k % 3] = 2
            }
        for (let i = 0; i < 3; i++) {
            if (Arr2[i][0] == Arr2[i][1] && Arr2[i][1] == Arr2[i][2]) {
                if (Arr2[i][0] == 1) {
                    result.innerHTML = "<h1>User-1 Is The WINNER</h1> "
                    container.style.display = "none"
                    image.style.display = "grid"


                } else {
                    result.innerHTML = "<h1>User-2 Is The WINNER</h1> "
                    image.style.display = "grid"
                    container.style.display = "none"


                }
            }
            else if (Arr2[0][i] == Arr2[1][i] && Arr2[1][i] == Arr2[2][i]) {
                if (Arr2[0][i] == 1) {
                    result.innerHTML = "<h1>User-1 Is The WINNER</h1>"
                    image.style.display = "grid"
                    container.style.display = "none"

                } else {
                    result.innerHTML = "<h1>User-2 Is The WINNER</h1>  "
                    image.style.display = "grid"
                    container.style.display = "none"

                }
            }
        }
        if (Arr2[1][1] == Arr2[2][2] && Arr2[2][2] == Arr2[0][0]) {
            if (Arr2[0][0] == 1) {
                result.innerHTML = "<h1>User-1 Is The WINNER</h1> "
                container.style.display = "none"
                image.style.display = "grid"

            } else {
                result.innerHTML = "<h1>User-2 Is The WINNER</h1> "
                image.style.display = "grid"
                container.style.display = "none"

            }
        }
        if (Arr2[1][1] == Arr2[2][0] && Arr2[2][0] == Arr2[0][2]) {
            if (Arr2[1][1] == 1) {
                result.innerHTML = "<h1>User-1 Is The WINNER</h1> "
                image.style.display = "grid"
                container.style.display = "none"

            } else {
                result.innerHTML = "<h1>User-2 Is The WINNER</h1> "
                image.style.display = "grid"
                container.style.display = "none"

            }
        }
    }
});









