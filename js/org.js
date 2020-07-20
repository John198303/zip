function join(arr /*, separator */) {
  var separator = arguments.length > 1 ? arguments[1] : ", ";
  return arr.filter(function(n){return n}).join(separator);
}

//function typeDescription(type) {
  //var TYPES = {
    //'INDIVIDUAL': 'Индивидуальный предприниматель',
    //'LEGAL': 'Юридическое лицо'
 // }
  //return TYPES[type];
  
//}

function typeDescription(type1) {
  var TYPES = {
    'ACTIVE': 'Действующая',
    'LIQUIDATING': 'Ликвидируется',
	'LIQUIDATED': 'Ликвидирована'
  }
  return TYPES[type1];
}

function showSuggestion(suggestion) {
  console.log(suggestion);
  var data = suggestion.data;
  if (!data)
    return;
  
  $("#type1").text(
    typeDescription(data.type) + " (" + data.type + ")"
  );
  $("#type2").text(
    typeDescription(data.state.status)
  );
   

  if (data.name)
    $("#name_short").val(join([data.opf && data.opf.short || "", data.name.short || data.name.full], " "));
  
  if (data.name && data.name.full)
    $("#name_full1").val(join([data.opf && data.opf.full || "", data.name.full], " "));
  
  $("#inn_kpp").val(join([data.inn, data.kpp], " / "));
  $("#dir").val(data.management.name);
  //$("#phone").val(data.phones);
  
  if (data.address)
    $("#address1").val(data.address.value);
}

$("#party").suggestions({
  token: "1ff131279e88f20a7cda6d01fda5b736184ef986",
  type: "PARTY",
  count: 5,  
  onSelect: showSuggestion
});