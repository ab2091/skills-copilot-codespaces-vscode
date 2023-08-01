function skillsMember() {
  var skills = document.getElementById('skills');
  var skillsMember = document.getElementById('skillsMember');
  var skillsMemberValue = skillsMember.value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberTextValue = skillsMemberText + ' - ' + skillsMemberValue;
  var skillsMemberTextValueLength = skillsMemberTextValue.length;
  var skillsMemberTextValueLengthMax = 50;
  var skillsMemberTextValueLengthMaxResult = skillsMemberTextValueLengthMax - skillsMemberTextValueLength;
  var skillsMemberTextValueLengthMaxResultText = 'Vous pouvez encore saisir ' + skillsMemberTextValueLengthMaxResult + ' caractères';
  var skillsMemberTextValueLengthMaxResultTextAlert = 'Vous avez atteint le nombre maximum de caractères autorisés';
  var skillsMemberTextValueLengthMaxResultTextAlertClass = 'text-danger';
  var skillsMemberTextValueLengthMaxResultTextClass = 'text-info';
  if (skillsMemberTextValueLength >= skillsMemberTextValueLengthMax) {
    skillsMemberTextValueLengthMaxResultText = skillsMemberTextValueLengthMaxResultTextAlert;
    skillsMemberTextValueLengthMaxResultTextClass = skillsMemberTextValueLengthMaxResultTextAlertClass;
  }
  skills.innerText = skillsMemberTextValue;
  if (skillsMemberTextValueLengthMaxResult < 0) {
    skills.innerText = '';
  }
  document.getElementById('skillsMemberTextValueLengthMaxResult').innerText = skillsMemberTextValueLengthMaxResultText;
  document.getElementById('skillsMemberTextValueLengthMaxResult').className = skillsMemberTextValueLengthMaxResultTextClass;
}