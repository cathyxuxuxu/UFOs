// import the data form data.js
const tableData=data;
// References the HTML table using d3. t3.select to tell JS to look for <tbody> tags in the HTML
var tbody=d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    data.forEach((dataRow)=>{
        // Append a row to the table body
        let row=tbody.append("tr");

        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell=row.append("td");
            cell.text(val);
        });
    });
}