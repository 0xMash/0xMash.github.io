// Class that represents a quote
class Prices {

  // Constructor which is used to create a quote
  constructor() {
    this.invoices = Number(document.getElementById("InputInvoices").value);
    this.employees = Number(document.getElementById("InputEmployees").value);
    this.revenue = Number(document.getElementById("InputRevenue").value);
    this.banks = Number(document.getElementById("InputBanks").value);

    this.starter = 30;
    this.basic = 60;
    this.pro = 90;
    this.optionsValue = 0;

    // Calls functions to calculate and update the quote prices
    this.calculate()
    this.update()
  }

  // Function which updates the quote prices using the form values
  calculate() {
    // Formula used to calculate the quote prices
    this.optionsValue = Math.round(((this.invoices + this.employees + this.revenue + this.banks) / 4));
    this.starter *= this.optionsValue;
    this.basic *= this.optionsValue;
    this.pro *= this.optionsValue;
  }

  // Function which updates the quote prices on the page
  update() {
    document.getElementById("priceStarter").innerHTML = "Starter - £" + this.starter;
    document.getElementById("priceBasic").innerHTML = "Basic - £" + this.basic;
    document.getElementById("pricePro").innerHTML = "Pro - £" + this.pro;
  }
}
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();