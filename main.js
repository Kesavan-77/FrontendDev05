function getvalue(){
  const now = new Date();
  let day = document.getElementById('day').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;
  let curr_year = now.getFullYear();
  let curr_month = now.getMonth() + 1;
  let curr_day = now.getDate();
  let value = true;

function checkError(){
      if(day > 31 || day < 1){
          document.getElementById('day-error').innerText = "Must be valid date";
          document.getElementById('day').classList.add("errorInput");
          document.getElementsByClassName('d')[0].classList.add("error");
          value = false;
      }else{
          document.getElementById('day-error').innerText = "";
          document.getElementById('day').classList.remove("errorInput");
          document.getElementsByClassName('d')[0].classList.remove("error");
          value = true;
      }
      if(month > 12 || month < 1){
          document.getElementById('month-error').innerText = "Must be valid month";
          document.getElementById('month').classList.add("errorInput");
          document.getElementsByClassName('d')[2].classList.add("error");
          value = false;
      }else{
          document.getElementById('month-error').innerText = "";
          document.getElementById('month').classList.remove("errorInput");
          document.getElementsByClassName('d')[2].classList.remove("error");
          value = true;
      }
      if((!year) || (year > curr_year) || (year == curr_year && month > curr_month)){
          document.getElementById('year-error').innerText = "Must be valid year";
          document.getElementById('year').classList.add("errorInput");
          document.getElementsByClassName('d')[4].classList.add("error");
          value = false;
      }else{
          document.getElementById('year-error').innerText = "";
          document.getElementById('year').classList.remove("errorInput");
          document.getElementsByClassName('d')[4].classList.remove("error");
          value = true;
      }
  }

  checkError();

  if(value){
      let res_year = curr_year - year;
      let res_month = curr_month - month;
      
      if(res_month < 0){
          res_month = 12 - Math.abs(res_month);
          res_year--;
      }
      
      let res_day = curr_day - day;
      
      if(res_day < 0){
          res_month--;
          var temp = new Date(curr_year, curr_month - 1, 0);
          res_day += temp.getDate();
      }

      document.getElementById('days').innerText = res_day;
      document.getElementById('months').innerText = res_month;
      document.getElementById('years').innerText = res_year;
  }
}
