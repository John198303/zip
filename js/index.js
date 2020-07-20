function showSuggestion(suggestion) {
  console.log(suggestion);
  var data = suggestion.data;
  if (!data)
    return;
  $("#name_payment").val(data.name && data.name.payment || "");
  $("#name_full").val(data.name && data.name.full || "");
  $("#bic").val(data.bic);
  $("#swift").val(data.swift);
  $("#address").val(data.address.value);
}

$("#bank").suggestions({
  token: "1ff131279e88f20a7cda6d01fda5b736184ef986",
  type: "BANK",
  count: 5,
  onSelect: showSuggestion
});