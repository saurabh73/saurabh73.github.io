var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.invoice = {
        header: 'Shopping Store'
        , footer: 'Electronic City, Bangalore , 560100'
        , inv_date: new Date()
        , inv_num: Math.floor((Math.random() * 100) + 1)
        , items: []
        , itemTotal: 0.0
    };
    $scope.itemCounter = 0;
    $scope.getItemTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.invoice.items.length; i++) {
            var item = $scope.invoice.items[i];
            total += (item.itemPrice * item.itemQuantity);
        }
        $scope.invoice.itemTotal = total;
        return total;
    };
    $scope.getButtonText = function () {
        if ($scope.invoice.items.length == 0) {
            return "Add Item";
        }
        else {
            return "Add More Items";
        }
    };
    $scope.saveInvoice = function () {
        var reciept = angular.element(document.querySelector('#receiptWrapper'))
        html2canvas(reciept, {
            onrendered: function (canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);
                // Convert and download as image 
                
                var dataString = canvas.toDataURL("image/png");
                var link = document.createElement("a");
                link.download = 'invoice_' + $scope.invoice.inv_num + '_' + $scope.invoice.inv_date.getTime();
                link.href = dataString;
                link.click();
            }
        });
    }
});
app.directive('addItem', ['$compile', function ($compile) { // inject $compile service as dependency
    return {
        restrict: 'A'
        , link: function (scope, element, attrs) {
            // click on the button to add new input field
            element.find('button').bind('click', function () {
                // I'm using Angular syntax. Using jQuery will have the same effect
                // Create input element
                var htmlText = '<div class="well">' + '<div class="row" id="item-row">' + '<div class="col-md-12">' + '<div class="input-group">' + '<div class="input-group-addon"><span>Item Name</span></div>' + '<input type="text" class="form-control" ng-model="invoice.items[' + scope.itemCounter + '].itemName" /> </div>' + '</div>' + '</div>' + '<div class="row" id="detail-row">' + '<div class="col-md-6">' + '<div class="input-group">' + '<div class="input-group-addon"><span>&#8377;</span></div>' + '<input type="text" class="form-control" ng-model="invoice.items[' + scope.itemCounter + '].itemPrice"/> </div>' + '</div>' + '<div class="col-md-6">' + '<div class="input-group">' + '<div class="input-group-addon"><span>Quantity </span></div>' + '<input type="text" class="form-control"  ng-model="invoice.items[' + scope.itemCounter + '].itemQuantity"/> </div>' + '</div>' + '</div>' + '</div>';
                var input = angular.element(htmlText);
                // Compile the HTML and assign to scope
                var compile = $compile(input)(scope);
                // Append input to div
                element.append(input);
                // Increment the counter for the next input to be added
                scope.itemCounter++;
            });
        }
    }
}]);