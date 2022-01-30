

const getLabels = () => {
    const inputFields = document.querySelectorAll('.inputForm');
    const arrayListOfLabels = [];
    for(let i =0; i < inputFields.length;i++)  {
        const value = inputFields[i].querySelector("input").value;

        arrayListOfLabels.push(value);
    }
    return arrayListOfLabels;
}

const getInputs = () => {
    const inputFields = document.querySelectorAll('.inputForm');
    const arrayListOfInputs = [];
    for(let i =0; i < inputFields.length;i++)  {
        const value = inputFields[i].querySelectorAll("input")[1].value;
        if(!parseInt(value)) {
            alert("Please only write numbers in value inputs")
            throw new Error("Letters included, where only numbers where expected")
        }
        arrayListOfInputs.push(value);
    }
    return arrayListOfInputs;
}
const getColors = () => {
    const inputFields = document.querySelectorAll('.inputForm');
    const arrayListOfColors = [];
    for(let i =0; i < inputFields.length;i++)  {
        const value = inputFields[i].querySelectorAll("input")[2].value;
        arrayListOfColors.push(value);
    }
    return arrayListOfColors;
}



    document.getElementById('generete').addEventListener("click",e => {
        let chartStatus = Chart.getChart("myChart")
        if(chartStatus) chartStatus.destroy()
          const data = {
            labels: getLabels(),
            datasets: [{
              label: document.getElementById("chartName").value,
              data: getInputs(),
              backgroundColor: getColors(),
              borderColor: "transparent"
            }]
          };
        
          const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
            }
          };
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    })