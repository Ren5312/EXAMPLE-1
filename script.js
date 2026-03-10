function sortTable() {
    let table = document.getElementById("myTable");
    let field = document.getElementById("sortField").value;
    let order = document.getElementById("sortOrder").value;

    let rows = Array.from(table.rows).slice(1); // skip header

    rows.sort(function(a, b) {
        let A = a.cells[field].innerText;
        let B = b.cells[field].innerText;

        // If sorting Age (numeric)
        if (field == 3) {
            A = parseInt(A);
            B = parseInt(B);
            return order === "asc" ? A - B : B - A;
        }

        A = A.toLowerCase();
        B = B.toLowerCase();
        return order === "asc" ? A.localeCompare(B) : B.localeCompare(A);
    });

    rows.forEach(row => table.appendChild(row));
}
