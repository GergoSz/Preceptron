function Perceptron(numberOfWeights, learnConst){
  this.weights = new Array(numberOfWeights);
  this.c = learnConst;

  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] = random(-1,1);
  }
}

Perceptron.prototype.trainPerceptron = function(inputs, goal) {

  var guess = this.guessAnswer(inputs);
  var error = goal - guess;

  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] += this.c * error * inputs[i];
  }
}

Perceptron.prototype.guessAnswer = function(inputs){

  var sum = 0;
  for (var i = 0; i < this.weights.length; i++) {
    sum += inputs[i] * this.weights[i];
  }
  return this.activate(sum);
}

Perceptron.prototype.activate = function (sum){

  if (sum > 0) {
    return 1;
  }else {
    return -1;
  }

}

Perceptron.prototype.getWeights = function(){
  return this.weights;
}
