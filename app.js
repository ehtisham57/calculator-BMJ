function btn(value) {
    var input = document.getElementById("inp")
    input.value += value


}

function results() {
    var input = document.getElementById("inp")
    var result = eval(input.value)
    console.log(result);
    input.value = result

}


function allClear() {
    var input = document.getElementById("inp")
    input.value = ""
}

function removeVal() {
    var input = document.getElementById("inp")


    input.value = input.value.slice(0, -1)

}