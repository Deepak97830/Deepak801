/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee => {
      if (employee.profession === "developer") {
          console.log(employee);
      }
  });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
      if (employee.profession === "developer") {
          console.log(employee);}
        });
        }
        
        function PrintDeveloperbyForEach() {
          //Write your code here , just console.log
          arr.forEach(employee => {
            if (employee.profession === "developer") {
                console.log(employee);
            }
        });
        }
        
        function addData() {
          //Write your code here, just console.log
          arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
          console.log(arr);
        }
        
        function removeAdmin() {
          //Write your code here, just console.log
          let filteredArr = arr.filter(employee => employee.profession !== "admin");
          console.log(filteredArr); }
  
          function concatenateArray() {
            //Write your code here, just console.log
            let newArr = [
              { id: 5, name: "alice", age: "22", profession: "designer" },
              { id: 6, name: "bob", age: "25", profession: "manager" },
              { id: 7, name: "charlie", age: "23", profession: "analyst" }
          ];
          let concatenatedArr = arr.concat(newArr);
          console.log(concatenatedArr);
          }
          PrintDeveloperbyMap() ;
          PrintDeveloperbyForEach();
          addData();
          removeAdmin();
          concatenateArray();
        