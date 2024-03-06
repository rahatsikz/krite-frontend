function myFunction() {
    const input = document.getElementById("myInput");
    const  filter = input.value.toUpperCase();
    const  table = document.getElementById("myTable");
    const  tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        const txtValue = td.textContent || td.innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
           tr[i].style.display = "";
         } else {
           tr[i].style.display = "none";
         }
       }       
     }
}