const addChild = () => {
    const nthEement = document.querySelectorAll(".inputForm").length + 1;
    const div = document.createElement("div");
    div.setAttribute("class","inputForm")

    const html = ` 
                       <label for="">Label</label>
                       <input type="text" id="label${nthEement}" required>
                       <label for="">Value</label>
                       <input type="number" name="input${nthEement}" id="input${nthEement}" required>
                       <input type="color" style="width: 50px;border: none;"/>
                       <a class="remove" onclick="remove(this)">X</a>
                     `
    div.innerHTML = html;
    document.querySelector('.dataInputs').appendChild(div)
}

const remove = element => {
    element.parentElement.remove();
}
