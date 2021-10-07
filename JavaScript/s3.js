
function solution(s) {
  var values = s.split('+');
  var containMinusStrArr = [];
  var remainStrArr = [];
  var minusValueArr = [];
  var minusValue = 0;
  var minanswerArr = [];
  var totalArr = [];
  var answer = 0;

  values.forEach(value => {
    if (!Number(value)) {
      containMinusStrArr.push(value);
    } else {
      remainStrArr.push(Number(value));
    }
  });

  containMinusStrArr.forEach(value => {
    value = value.split('-');

    minusValueArr.push(value);
  });

  minusValueArr.forEach((value, i) => {
    minusValue = Number(value[0]);
    for (var j = 1; j < value.length; j++) {
      minusValue -= Number(value[j]);
    } minanswerArr.push(minusValue);
  });

  totalArr = remainStrArr.concat(minanswerArr);

  totalArr.forEach(value => {
    answer += value;
  });

  return answer;

}

var s = '-3+26-7';
solution(s);